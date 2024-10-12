import { Quaternion as Quaternion$1, Box, Vec3, Cylinder, Sphere, ConvexPolyhedron, Trimesh } from 'cannon-es';
import { Vector3, Line3, Plane, Triangle, Quaternion, BufferGeometry as BufferGeometry$1, BufferAttribute, MathUtils, Box3, Mesh } from 'three';

/**
 * Ported from: https://github.com/maurizzzio/quickhull3d/ by Mauricio Poppe (https://github.com/maurizzzio)
 */

var ConvexHull = function () {
  var Visible = 0;
  var Deleted = 1;
  var v1 = new Vector3();

  function ConvexHull() {
    this.tolerance = -1;
    this.faces = []; // the generated faces of the convex hull

    this.newFaces = []; // this array holds the faces that are generated within a single iteration
    // the vertex lists work as follows:
    //
    // let 'a' and 'b' be 'Face' instances
    // let 'v' be points wrapped as instance of 'Vertex'
    //
    //     [v, v, ..., v, v, v, ...]
    //      ^             ^
    //      |             |
    //  a.outside     b.outside
    //

    this.assigned = new VertexList();
    this.unassigned = new VertexList();
    this.vertices = []; // vertices of the hull (internal representation of given geometry data)
  }

  Object.assign(ConvexHull.prototype, {
    toJSON: function () {
      // Original ('src') indices do not include interior vertices,
      // but 'this.vertices' (the list they index) does. Output ('dst')
      // arrays have interior vertices omitted.
      const srcIndices = this.faces.map(f => f.toArray());
      const uniqueSrcIndices = Array.from(new Set(srcIndices.flat())).sort(); // Output vertex positions, omitting interior vertices.

      const dstPositions = [];

      for (let i = 0; i < uniqueSrcIndices.length; i++) {
        dstPositions.push(this.vertices[uniqueSrcIndices[i]].point.x, this.vertices[uniqueSrcIndices[i]].point.y, this.vertices[uniqueSrcIndices[i]].point.z);
      } // Mapping from 'src' (this.vertices) to 'dst' (dstPositions) indices.


      const srcToDstIndexMap = new Map();

      for (let i = 0; i < uniqueSrcIndices.length; i++) {
        srcToDstIndexMap.set(uniqueSrcIndices[i], i);
      } // Output triangles, as indices on dstPositions.


      const dstIndices = [];

      for (let i = 0; i < srcIndices.length; i++) {
        dstIndices.push([srcToDstIndexMap.get(srcIndices[i][0]), srcToDstIndexMap.get(srcIndices[i][1]), srcToDstIndexMap.get(srcIndices[i][2])]);
      }

      return [dstPositions, dstIndices];
    },
    setFromPoints: function (points) {
      if (Array.isArray(points) !== true) {
        console.error('THREE.ConvexHull: Points parameter is not an array.');
      }

      if (points.length < 4) {
        console.error('THREE.ConvexHull: The algorithm needs at least four points.');
      }

      this.makeEmpty();

      for (var i = 0, l = points.length; i < l; i++) {
        this.vertices.push(new VertexNode(points[i], i));
      }

      this.compute();
      return this;
    },
    setFromObject: function (object) {
      var points = [];
      object.updateMatrixWorld(true);
      object.traverse(function (node) {
        var i, l, point;
        var geometry = node.geometry;
        if (geometry === undefined) return;

        if (geometry.isGeometry) {
          geometry = geometry.toBufferGeometry ? geometry.toBufferGeometry() : new BufferGeometry().fromGeometry(geometry);
        }

        if (geometry.isBufferGeometry) {
          var attribute = geometry.attributes.position;

          if (attribute !== undefined) {
            for (i = 0, l = attribute.count; i < l; i++) {
              point = new Vector3();
              point.fromBufferAttribute(attribute, i).applyMatrix4(node.matrixWorld);
              points.push(point);
            }
          }
        }
      });
      return this.setFromPoints(points);
    },
    containsPoint: function (point) {
      var faces = this.faces;

      for (var i = 0, l = faces.length; i < l; i++) {
        var face = faces[i]; // compute signed distance and check on what half space the point lies

        if (face.distanceToPoint(point) > this.tolerance) return false;
      }

      return true;
    },
    intersectRay: function (ray, target) {
      // based on "Fast Ray-Convex Polyhedron Intersection"  by Eric Haines, GRAPHICS GEMS II
      var faces = this.faces;
      var tNear = -Infinity;
      var tFar = Infinity;

      for (var i = 0, l = faces.length; i < l; i++) {
        var face = faces[i]; // interpret faces as planes for the further computation

        var vN = face.distanceToPoint(ray.origin);
        var vD = face.normal.dot(ray.direction); // if the origin is on the positive side of a plane (so the plane can "see" the origin) and
        // the ray is turned away or parallel to the plane, there is no intersection

        if (vN > 0 && vD >= 0) return null; // compute the distance from the ray’s origin to the intersection with the plane

        var t = vD !== 0 ? -vN / vD : 0; // only proceed if the distance is positive. a negative distance means the intersection point
        // lies "behind" the origin

        if (t <= 0) continue; // now categorized plane as front-facing or back-facing

        if (vD > 0) {
          //  plane faces away from the ray, so this plane is a back-face
          tFar = Math.min(t, tFar);
        } else {
          // front-face
          tNear = Math.max(t, tNear);
        }

        if (tNear > tFar) {
          // if tNear ever is greater than tFar, the ray must miss the convex hull
          return null;
        }
      } // evaluate intersection point
      // always try tNear first since its the closer intersection point


      if (tNear !== -Infinity) {
        ray.at(tNear, target);
      } else {
        ray.at(tFar, target);
      }

      return target;
    },
    intersectsRay: function (ray) {
      return this.intersectRay(ray, v1) !== null;
    },
    makeEmpty: function () {
      this.faces = [];
      this.vertices = [];
      return this;
    },
    // Adds a vertex to the 'assigned' list of vertices and assigns it to the given face
    addVertexToFace: function (vertex, face) {
      vertex.face = face;

      if (face.outside === null) {
        this.assigned.append(vertex);
      } else {
        this.assigned.insertBefore(face.outside, vertex);
      }

      face.outside = vertex;
      return this;
    },
    // Removes a vertex from the 'assigned' list of vertices and from the given face
    removeVertexFromFace: function (vertex, face) {
      if (vertex === face.outside) {
        // fix face.outside link
        if (vertex.next !== null && vertex.next.face === face) {
          // face has at least 2 outside vertices, move the 'outside' reference
          face.outside = vertex.next;
        } else {
          // vertex was the only outside vertex that face had
          face.outside = null;
        }
      }

      this.assigned.remove(vertex);
      return this;
    },
    // Removes all the visible vertices that a given face is able to see which are stored in the 'assigned' vertext list
    removeAllVerticesFromFace: function (face) {
      if (face.outside !== null) {
        // reference to the first and last vertex of this face
        var start = face.outside;
        var end = face.outside;

        while (end.next !== null && end.next.face === face) {
          end = end.next;
        }

        this.assigned.removeSubList(start, end); // fix references

        start.prev = end.next = null;
        face.outside = null;
        return start;
      }
    },
    // Removes all the visible vertices that 'face' is able to see
    deleteFaceVertices: function (face, absorbingFace) {
      var faceVertices = this.removeAllVerticesFromFace(face);

      if (faceVertices !== undefined) {
        if (absorbingFace === undefined) {
          // mark the vertices to be reassigned to some other face
          this.unassigned.appendChain(faceVertices);
        } else {
          // if there's an absorbing face try to assign as many vertices as possible to it
          var vertex = faceVertices;

          do {
            // we need to buffer the subsequent vertex at this point because the 'vertex.next' reference
            // will be changed by upcoming method calls
            var nextVertex = vertex.next;
            var distance = absorbingFace.distanceToPoint(vertex.point); // check if 'vertex' is able to see 'absorbingFace'

            if (distance > this.tolerance) {
              this.addVertexToFace(vertex, absorbingFace);
            } else {
              this.unassigned.append(vertex);
            } // now assign next vertex


            vertex = nextVertex;
          } while (vertex !== null);
        }
      }

      return this;
    },
    // Reassigns as many vertices as possible from the unassigned list to the new faces
    resolveUnassignedPoints: function (newFaces) {
      if (this.unassigned.isEmpty() === false) {
        var vertex = this.unassigned.first();

        do {
          // buffer 'next' reference, see .deleteFaceVertices()
          var nextVertex = vertex.next;
          var maxDistance = this.tolerance;
          var maxFace = null;

          for (var i = 0; i < newFaces.length; i++) {
            var face = newFaces[i];

            if (face.mark === Visible) {
              var distance = face.distanceToPoint(vertex.point);

              if (distance > maxDistance) {
                maxDistance = distance;
                maxFace = face;
              }

              if (maxDistance > 1000 * this.tolerance) break;
            }
          } // 'maxFace' can be null e.g. if there are identical vertices


          if (maxFace !== null) {
            this.addVertexToFace(vertex, maxFace);
          }

          vertex = nextVertex;
        } while (vertex !== null);
      }

      return this;
    },
    // Computes the extremes of a simplex which will be the initial hull
    computeExtremes: function () {
      var min = new Vector3();
      var max = new Vector3();
      var minVertices = [];
      var maxVertices = [];
      var i, l, j; // initially assume that the first vertex is the min/max

      for (i = 0; i < 3; i++) {
        minVertices[i] = maxVertices[i] = this.vertices[0];
      }

      min.copy(this.vertices[0].point);
      max.copy(this.vertices[0].point); // compute the min/max vertex on all six directions

      for (i = 0, l = this.vertices.length; i < l; i++) {
        var vertex = this.vertices[i];
        var point = vertex.point; // update the min coordinates

        for (j = 0; j < 3; j++) {
          if (point.getComponent(j) < min.getComponent(j)) {
            min.setComponent(j, point.getComponent(j));
            minVertices[j] = vertex;
          }
        } // update the max coordinates


        for (j = 0; j < 3; j++) {
          if (point.getComponent(j) > max.getComponent(j)) {
            max.setComponent(j, point.getComponent(j));
            maxVertices[j] = vertex;
          }
        }
      } // use min/max vectors to compute an optimal epsilon


      this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(min.x), Math.abs(max.x)) + Math.max(Math.abs(min.y), Math.abs(max.y)) + Math.max(Math.abs(min.z), Math.abs(max.z)));
      return {
        min: minVertices,
        max: maxVertices
      };
    },
    // Computes the initial simplex assigning to its faces all the points
    // that are candidates to form part of the hull
    computeInitialHull: function () {
      var line3, plane, closestPoint;
      return function computeInitialHull() {
        if (line3 === undefined) {
          line3 = new Line3();
          plane = new Plane();
          closestPoint = new Vector3();
        }

        var vertex,
            vertices = this.vertices;
        var extremes = this.computeExtremes();
        var min = extremes.min;
        var max = extremes.max;
        var v0, v1, v2, v3;
        var i, l, j; // 1. Find the two vertices 'v0' and 'v1' with the greatest 1d separation
        // (max.x - min.x)
        // (max.y - min.y)
        // (max.z - min.z)

        var distance,
            maxDistance = 0;
        var index = 0;

        for (i = 0; i < 3; i++) {
          distance = max[i].point.getComponent(i) - min[i].point.getComponent(i);

          if (distance > maxDistance) {
            maxDistance = distance;
            index = i;
          }
        }

        v0 = min[index];
        v1 = max[index]; // 2. The next vertex 'v2' is the one farthest to the line formed by 'v0' and 'v1'

        maxDistance = 0;
        line3.set(v0.point, v1.point);

        for (i = 0, l = this.vertices.length; i < l; i++) {
          vertex = vertices[i];

          if (vertex !== v0 && vertex !== v1) {
            line3.closestPointToPoint(vertex.point, true, closestPoint);
            distance = closestPoint.distanceToSquared(vertex.point);

            if (distance > maxDistance) {
              maxDistance = distance;
              v2 = vertex;
            }
          }
        } // 3. The next vertex 'v3' is the one farthest to the plane 'v0', 'v1', 'v2'


        maxDistance = -1;
        plane.setFromCoplanarPoints(v0.point, v1.point, v2.point);

        for (i = 0, l = this.vertices.length; i < l; i++) {
          vertex = vertices[i];

          if (vertex !== v0 && vertex !== v1 && vertex !== v2) {
            distance = Math.abs(plane.distanceToPoint(vertex.point));

            if (distance > maxDistance) {
              maxDistance = distance;
              v3 = vertex;
            }
          }
        }

        var faces = [];

        if (plane.distanceToPoint(v3.point) < 0) {
          // the face is not able to see the point so 'plane.normal' is pointing outside the tetrahedron
          faces.push(Face.create(v0, v1, v2), Face.create(v3, v1, v0), Face.create(v3, v2, v1), Face.create(v3, v0, v2)); // set the twin edge

          for (i = 0; i < 3; i++) {
            j = (i + 1) % 3; // join face[ i ] i > 0, with the first face

            faces[i + 1].getEdge(2).setTwin(faces[0].getEdge(j)); // join face[ i ] with face[ i + 1 ], 1 <= i <= 3

            faces[i + 1].getEdge(1).setTwin(faces[j + 1].getEdge(0));
          }
        } else {
          // the face is able to see the point so 'plane.normal' is pointing inside the tetrahedron
          faces.push(Face.create(v0, v2, v1), Face.create(v3, v0, v1), Face.create(v3, v1, v2), Face.create(v3, v2, v0)); // set the twin edge

          for (i = 0; i < 3; i++) {
            j = (i + 1) % 3; // join face[ i ] i > 0, with the first face

            faces[i + 1].getEdge(2).setTwin(faces[0].getEdge((3 - i) % 3)); // join face[ i ] with face[ i + 1 ]

            faces[i + 1].getEdge(0).setTwin(faces[j + 1].getEdge(1));
          }
        } // the initial hull is the tetrahedron


        for (i = 0; i < 4; i++) {
          this.faces.push(faces[i]);
        } // initial assignment of vertices to the faces of the tetrahedron


        for (i = 0, l = vertices.length; i < l; i++) {
          vertex = vertices[i];

          if (vertex !== v0 && vertex !== v1 && vertex !== v2 && vertex !== v3) {
            maxDistance = this.tolerance;
            var maxFace = null;

            for (j = 0; j < 4; j++) {
              distance = this.faces[j].distanceToPoint(vertex.point);

              if (distance > maxDistance) {
                maxDistance = distance;
                maxFace = this.faces[j];
              }
            }

            if (maxFace !== null) {
              this.addVertexToFace(vertex, maxFace);
            }
          }
        }

        return this;
      };
    }(),
    // Removes inactive faces
    reindexFaces: function () {
      var activeFaces = [];

      for (var i = 0; i < this.faces.length; i++) {
        var face = this.faces[i];

        if (face.mark === Visible) {
          activeFaces.push(face);
        }
      }

      this.faces = activeFaces;
      return this;
    },
    // Finds the next vertex to create faces with the current hull
    nextVertexToAdd: function () {
      // if the 'assigned' list of vertices is empty, no vertices are left. return with 'undefined'
      if (this.assigned.isEmpty() === false) {
        var eyeVertex,
            maxDistance = 0; // grap the first available face and start with the first visible vertex of that face

        var eyeFace = this.assigned.first().face;
        var vertex = eyeFace.outside; // now calculate the farthest vertex that face can see

        do {
          var distance = eyeFace.distanceToPoint(vertex.point);

          if (distance > maxDistance) {
            maxDistance = distance;
            eyeVertex = vertex;
          }

          vertex = vertex.next;
        } while (vertex !== null && vertex.face === eyeFace);

        return eyeVertex;
      }
    },
    // Computes a chain of half edges in CCW order called the 'horizon'.
    // For an edge to be part of the horizon it must join a face that can see
    // 'eyePoint' and a face that cannot see 'eyePoint'.
    computeHorizon: function (eyePoint, crossEdge, face, horizon) {
      // moves face's vertices to the 'unassigned' vertex list
      this.deleteFaceVertices(face);
      face.mark = Deleted;
      var edge;

      if (crossEdge === null) {
        edge = crossEdge = face.getEdge(0);
      } else {
        // start from the next edge since 'crossEdge' was already analyzed
        // (actually 'crossEdge.twin' was the edge who called this method recursively)
        edge = crossEdge.next;
      }

      do {
        var twinEdge = edge.twin;
        var oppositeFace = twinEdge.face;

        if (oppositeFace.mark === Visible) {
          if (oppositeFace.distanceToPoint(eyePoint) > this.tolerance) {
            // the opposite face can see the vertex, so proceed with next edge
            this.computeHorizon(eyePoint, twinEdge, oppositeFace, horizon);
          } else {
            // the opposite face can't see the vertex, so this edge is part of the horizon
            horizon.push(edge);
          }
        }

        edge = edge.next;
      } while (edge !== crossEdge);

      return this;
    },
    // Creates a face with the vertices 'eyeVertex.point', 'horizonEdge.tail' and 'horizonEdge.head' in CCW order
    addAdjoiningFace: function (eyeVertex, horizonEdge) {
      // all the half edges are created in ccw order thus the face is always pointing outside the hull
      var face = Face.create(eyeVertex, horizonEdge.tail(), horizonEdge.head());
      this.faces.push(face); // join face.getEdge( - 1 ) with the horizon's opposite edge face.getEdge( - 1 ) = face.getEdge( 2 )

      face.getEdge(-1).setTwin(horizonEdge.twin);
      return face.getEdge(0); // the half edge whose vertex is the eyeVertex
    },
    //  Adds 'horizon.length' faces to the hull, each face will be linked with the
    //  horizon opposite face and the face on the left/right
    addNewFaces: function (eyeVertex, horizon) {
      this.newFaces = [];
      var firstSideEdge = null;
      var previousSideEdge = null;

      for (var i = 0; i < horizon.length; i++) {
        var horizonEdge = horizon[i]; // returns the right side edge

        var sideEdge = this.addAdjoiningFace(eyeVertex, horizonEdge);

        if (firstSideEdge === null) {
          firstSideEdge = sideEdge;
        } else {
          // joins face.getEdge( 1 ) with previousFace.getEdge( 0 )
          sideEdge.next.setTwin(previousSideEdge);
        }

        this.newFaces.push(sideEdge.face);
        previousSideEdge = sideEdge;
      } // perform final join of new faces


      firstSideEdge.next.setTwin(previousSideEdge);
      return this;
    },
    // Adds a vertex to the hull
    addVertexToHull: function (eyeVertex) {
      var horizon = [];
      this.unassigned.clear(); // remove 'eyeVertex' from 'eyeVertex.face' so that it can't be added to the 'unassigned' vertex list

      this.removeVertexFromFace(eyeVertex, eyeVertex.face);
      this.computeHorizon(eyeVertex.point, null, eyeVertex.face, horizon);
      this.addNewFaces(eyeVertex, horizon); // reassign 'unassigned' vertices to the new faces

      this.resolveUnassignedPoints(this.newFaces);
      return this;
    },
    cleanup: function () {
      this.assigned.clear();
      this.unassigned.clear();
      this.newFaces = [];
      return this;
    },
    compute: function () {
      var vertex;
      this.computeInitialHull(); // add all available vertices gradually to the hull

      while ((vertex = this.nextVertexToAdd()) !== undefined) {
        this.addVertexToHull(vertex);
      }

      this.reindexFaces();
      this.cleanup();
      return this;
    }
  }); //

  function Face() {
    this.normal = new Vector3();
    this.midpoint = new Vector3();
    this.area = 0;
    this.constant = 0; // signed distance from face to the origin

    this.outside = null; // reference to a vertex in a vertex list this face can see

    this.mark = Visible;
    this.edge = null;
  }

  Object.assign(Face, {
    create: function (a, b, c) {
      var face = new Face();
      var e0 = new HalfEdge(a, face);
      var e1 = new HalfEdge(b, face);
      var e2 = new HalfEdge(c, face); // join edges

      e0.next = e2.prev = e1;
      e1.next = e0.prev = e2;
      e2.next = e1.prev = e0; // main half edge reference

      face.edge = e0;
      return face.compute();
    }
  });
  Object.assign(Face.prototype, {
    toArray: function () {
      const indices = [];
      let edge = this.edge;

      do {
        indices.push(edge.head().index);
        edge = edge.next;
      } while (edge !== this.edge);

      return indices;
    },
    getEdge: function (i) {
      var edge = this.edge;

      while (i > 0) {
        edge = edge.next;
        i--;
      }

      while (i < 0) {
        edge = edge.prev;
        i++;
      }

      return edge;
    },
    compute: function () {
      var triangle;
      return function compute() {
        if (triangle === undefined) triangle = new Triangle();
        var a = this.edge.tail();
        var b = this.edge.head();
        var c = this.edge.next.head();
        triangle.set(a.point, b.point, c.point);
        triangle.getNormal(this.normal);
        triangle.getMidpoint(this.midpoint);
        this.area = triangle.getArea();
        this.constant = this.normal.dot(this.midpoint);
        return this;
      };
    }(),
    distanceToPoint: function (point) {
      return this.normal.dot(point) - this.constant;
    }
  }); // Entity for a Doubly-Connected Edge List (DCEL).

  function HalfEdge(vertex, face) {
    this.vertex = vertex;
    this.prev = null;
    this.next = null;
    this.twin = null;
    this.face = face;
  }

  Object.assign(HalfEdge.prototype, {
    head: function () {
      return this.vertex;
    },
    tail: function () {
      return this.prev ? this.prev.vertex : null;
    },
    length: function () {
      var head = this.head();
      var tail = this.tail();

      if (tail !== null) {
        return tail.point.distanceTo(head.point);
      }

      return -1;
    },
    lengthSquared: function () {
      var head = this.head();
      var tail = this.tail();

      if (tail !== null) {
        return tail.point.distanceToSquared(head.point);
      }

      return -1;
    },
    setTwin: function (edge) {
      this.twin = edge;
      edge.twin = this;
      return this;
    }
  }); // A vertex as a double linked list node.

  function VertexNode(point, index) {
    this.point = point; // index in the input array

    this.index = index;
    this.prev = null;
    this.next = null; // the face that is able to see this vertex

    this.face = null;
  } // A double linked list that contains vertex nodes.


  function VertexList() {
    this.head = null;
    this.tail = null;
  }

  Object.assign(VertexList.prototype, {
    first: function () {
      return this.head;
    },
    last: function () {
      return this.tail;
    },
    clear: function () {
      this.head = this.tail = null;
      return this;
    },
    // Inserts a vertex before the target vertex
    insertBefore: function (target, vertex) {
      vertex.prev = target.prev;
      vertex.next = target;

      if (vertex.prev === null) {
        this.head = vertex;
      } else {
        vertex.prev.next = vertex;
      }

      target.prev = vertex;
      return this;
    },
    // Inserts a vertex after the target vertex
    insertAfter: function (target, vertex) {
      vertex.prev = target;
      vertex.next = target.next;

      if (vertex.next === null) {
        this.tail = vertex;
      } else {
        vertex.next.prev = vertex;
      }

      target.next = vertex;
      return this;
    },
    // Appends a vertex to the end of the linked list
    append: function (vertex) {
      if (this.head === null) {
        this.head = vertex;
      } else {
        this.tail.next = vertex;
      }

      vertex.prev = this.tail;
      vertex.next = null; // the tail has no subsequent vertex

      this.tail = vertex;
      return this;
    },
    // Appends a chain of vertices where 'vertex' is the head.
    appendChain: function (vertex) {
      if (this.head === null) {
        this.head = vertex;
      } else {
        this.tail.next = vertex;
      }

      vertex.prev = this.tail; // ensure that the 'tail' reference points to the last vertex of the chain

      while (vertex.next !== null) {
        vertex = vertex.next;
      }

      this.tail = vertex;
      return this;
    },
    // Removes a vertex from the linked list
    remove: function (vertex) {
      if (vertex.prev === null) {
        this.head = vertex.next;
      } else {
        vertex.prev.next = vertex.next;
      }

      if (vertex.next === null) {
        this.tail = vertex.prev;
      } else {
        vertex.next.prev = vertex.prev;
      }

      return this;
    },
    // Removes a list of vertices whose 'head' is 'a' and whose 'tail' is b
    removeSubList: function (a, b) {
      if (a.prev === null) {
        this.head = b.next;
      } else {
        a.prev.next = b.next;
      }

      if (b.next === null) {
        this.tail = a.prev;
      } else {
        b.next.prev = a.prev;
      }

      return this;
    },
    isEmpty: function () {
      return this.head === null;
    }
  });
  return ConvexHull;
}();

const _v1 = new Vector3();

const _v2 = new Vector3();

const _q1 = new Quaternion();
/**
* Returns a single geometry for the given object. If the object is compound,
* its geometries are automatically merged. Bake world scale into each
* geometry, because we can't easily apply that to the cannonjs shapes later.
*/


function getGeometry(object) {
  const meshes = getMeshes(object);
  if (meshes.length === 0) return null; // Single mesh. Return, preserving original type.

  if (meshes.length === 1) {
    return normalizeGeometry(meshes[0]);
  } // Multiple meshes. Merge and return.


  let mesh;
  const geometries = [];

  while (mesh = meshes.pop()) {
    geometries.push(simplifyGeometry(normalizeGeometry(mesh)));
  }

  return mergeBufferGeometries(geometries);
}

function normalizeGeometry(mesh) {
  // Preserve original type, e.g. CylinderBufferGeometry.
  const geometry = mesh.geometry.clone();
  mesh.updateMatrixWorld();
  mesh.matrixWorld.decompose(_v1, _q1, _v2);
  geometry.scale(_v2.x, _v2.y, _v2.z);
  return geometry;
}
/**
 * Greatly simplified version of BufferGeometryUtils.mergeBufferGeometries.
 * Because we only care about the vertex positions, and not the indices or
 * other attributes, we throw everything else away.
 */


function mergeBufferGeometries(geometries) {
  let vertexCount = 0;

  for (let i = 0; i < geometries.length; i++) {
    const position = geometries[i].attributes.position;

    if (position && position.itemSize === 3) {
      vertexCount += position.count;
    }
  }

  const positionArray = new Float32Array(vertexCount * 3);
  let positionOffset = 0;

  for (let i = 0; i < geometries.length; i++) {
    const position = geometries[i].attributes.position;

    if (position && position.itemSize === 3) {
      for (let j = 0; j < position.count; j++) {
        positionArray[positionOffset++] = position.getX(j);
        positionArray[positionOffset++] = position.getY(j);
        positionArray[positionOffset++] = position.getZ(j);
      }
    }
  }

  return new BufferGeometry$1().setAttribute('position', new BufferAttribute(positionArray, 3));
}

function getVertices(geometry) {
  const position = geometry.attributes.position;
  const vertices = new Float32Array(position.count * 3);

  for (let i = 0; i < position.count; i++) {
    vertices[i * 3] = position.getX(i);
    vertices[i * 3 + 1] = position.getY(i);
    vertices[i * 3 + 2] = position.getZ(i);
  }

  return vertices;
}
/**
* Returns a flat array of THREE.Mesh instances from the given object. If
* nested transformations are found, they are applied to child meshes
* as mesh.userData.matrix, so that each mesh has its position/rotation/scale
* independently of all of its parents except the top-level object.
*/

function getMeshes(object) {
  const meshes = [];
  object.traverse(function (o) {
    if (o.isMesh) {
      meshes.push(o);
    }
  });
  return meshes;
}

function getComponent(v, component) {
  switch (component) {
    case 'x':
      return v.x;

    case 'y':
      return v.y;

    case 'z':
      return v.z;
  }

  throw new Error(`Unexpected component ${component}`);
}
/**
* Modified version of BufferGeometryUtils.mergeVertices, ignoring vertex
* attributes other than position.
*
* @param {THREE.BufferGeometry} geometry
* @param {number} tolerance
* @return {THREE.BufferGeometry>}
*/

function simplifyGeometry(geometry, tolerance = 1e-4) {
  tolerance = Math.max(tolerance, Number.EPSILON); // Generate an index buffer if the geometry doesn't have one, or optimize it
  // if it's already available.

  const hashToIndex = {};
  const indices = geometry.getIndex();
  const positions = geometry.getAttribute('position');
  const vertexCount = indices ? indices.count : positions.count; // Next value for triangle indices.

  let nextIndex = 0;
  const newIndices = [];
  const newPositions = []; // Convert the error tolerance to an amount of decimal places to truncate to.

  const decimalShift = Math.log10(1 / tolerance);
  const shiftMultiplier = Math.pow(10, decimalShift);

  for (let i = 0; i < vertexCount; i++) {
    const index = indices ? indices.getX(i) : i; // Generate a hash for the vertex attributes at the current index 'i'.

    let hash = ''; // Double tilde truncates the decimal value.

    hash += `${~~(positions.getX(index) * shiftMultiplier)},`;
    hash += `${~~(positions.getY(index) * shiftMultiplier)},`;
    hash += `${~~(positions.getZ(index) * shiftMultiplier)},`; // Add another reference to the vertex if it's already
    // used by another index.

    if (hash in hashToIndex) {
      newIndices.push(hashToIndex[hash]);
    } else {
      newPositions.push(positions.getX(index));
      newPositions.push(positions.getY(index));
      newPositions.push(positions.getZ(index));
      hashToIndex[hash] = nextIndex;
      newIndices.push(nextIndex);
      nextIndex++;
    }
  } // Construct merged BufferGeometry.


  const positionAttribute = new BufferAttribute(new Float32Array(newPositions), positions.itemSize, positions.normalized);
  const result = new BufferGeometry$1();
  result.setAttribute('position', positionAttribute);
  result.setIndex(newIndices);
  return result;
}

const PI_2 = Math.PI / 2;
var ShapeType;

(function (ShapeType) {
  ShapeType["BOX"] = "Box";
  ShapeType["CYLINDER"] = "Cylinder";
  ShapeType["SPHERE"] = "Sphere";
  ShapeType["HULL"] = "ConvexPolyhedron";
  ShapeType["MESH"] = "Trimesh";
})(ShapeType || (ShapeType = {}));
/**
 * Given a THREE.Object3D instance, creates parameters for a CANNON shape.
 */


const getShapeParameters = function getShapeParameters(object, options = {}) {
  let geometry;

  if (options.type === ShapeType.BOX) {
    return getBoundingBoxParameters(object);
  } else if (options.type === ShapeType.CYLINDER) {
    return getBoundingCylinderParameters(object, options);
  } else if (options.type === ShapeType.SPHERE) {
    return getBoundingSphereParameters(object, options);
  } else if (options.type === ShapeType.HULL) {
    return getConvexPolyhedronParameters(object);
  } else if (options.type === ShapeType.MESH) {
    geometry = getGeometry(object);
    return geometry ? getTrimeshParameters(geometry) : null;
  } else if (options.type) {
    throw new Error(`[CANNON.getShapeParameters] Invalid type "${options.type}".`);
  }

  geometry = getGeometry(object);
  if (!geometry) return null;

  switch (geometry.type) {
    case 'BoxGeometry':
    case 'BoxBufferGeometry':
      return getBoxParameters(geometry);

    case 'CylinderGeometry':
    case 'CylinderBufferGeometry':
      return getCylinderParameters(geometry);

    case 'PlaneGeometry':
    case 'PlaneBufferGeometry':
      return getPlaneParameters(geometry);

    case 'SphereGeometry':
    case 'SphereBufferGeometry':
      return getSphereParameters(geometry);

    case 'TubeGeometry':
    case 'BufferGeometry':
      return getBoundingBoxParameters(object);

    default:
      console.warn('Unrecognized geometry: "%s". Using bounding box as shape.', geometry.type);
      return getBoxParameters(geometry);
  }
};
/**
 * Given a THREE.Object3D instance, creates a corresponding CANNON shape.
 */

const threeToCannon = function threeToCannon(object, options = {}) {
  const shapeParameters = getShapeParameters(object, options);

  if (!shapeParameters) {
    return null;
  }

  const {
    type,
    params,
    offset,
    orientation
  } = shapeParameters;
  let shape;

  if (type === ShapeType.BOX) {
    shape = createBox(params);
  } else if (type === ShapeType.CYLINDER) {
    shape = createCylinder(params);
  } else if (type === ShapeType.SPHERE) {
    shape = createSphere(params);
  } else if (type === ShapeType.HULL) {
    shape = createConvexPolyhedron(params);
  } else {
    shape = createTrimesh(params);
  }

  return {
    shape,
    offset,
    orientation
  };
};
/******************************************************************************
 * Shape construction
 */

function createBox(params) {
  const {
    x,
    y,
    z
  } = params;
  const shape = new Box(new Vec3(x, y, z));
  return shape;
}

function createCylinder(params) {
  const {
    radiusTop,
    radiusBottom,
    height,
    segments
  } = params;
  const shape = new Cylinder(radiusTop, radiusBottom, height, segments); // Include metadata for serialization.
  // TODO(cleanup): Is this still necessary?

  shape.radiusTop = radiusBottom;
  shape.radiusBottom = radiusBottom;
  shape.height = height;
  shape.numSegments = segments;
  return shape;
}

function createSphere(params) {
  const shape = new Sphere(params.radius);
  return shape;
}

function createConvexPolyhedron(params) {
  const {
    faces,
    vertices: verticesArray
  } = params;
  const vertices = [];

  for (let i = 0; i < verticesArray.length; i += 3) {
    vertices.push(new Vec3(verticesArray[i], verticesArray[i + 1], verticesArray[i + 2]));
  }

  const shape = new ConvexPolyhedron({
    faces,
    vertices
  });
  return shape;
}

function createTrimesh(params) {
  const {
    vertices,
    indices
  } = params;
  const shape = new Trimesh(vertices, indices);
  return shape;
}
/******************************************************************************
 * Shape parameters
 */


function getBoxParameters(geometry) {
  const vertices = getVertices(geometry);
  if (!vertices.length) return null;
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  return {
    type: ShapeType.BOX,
    params: {
      x: (box.max.x - box.min.x) / 2,
      y: (box.max.y - box.min.y) / 2,
      z: (box.max.z - box.min.z) / 2
    }
  };
}
/** Bounding box needs to be computed with the entire subtree, not just geometry. */


function getBoundingBoxParameters(object) {
  const clone = object.clone();
  clone.quaternion.set(0, 0, 0, 1);
  clone.updateMatrixWorld();
  const box = new Box3().setFromObject(clone);
  if (!isFinite(box.min.lengthSq())) return null;
  const localPosition = box.translate(clone.position.negate()).getCenter(new Vector3());
  return {
    type: ShapeType.BOX,
    params: {
      x: (box.max.x - box.min.x) / 2,
      y: (box.max.y - box.min.y) / 2,
      z: (box.max.z - box.min.z) / 2
    },
    offset: localPosition.lengthSq() ? new Vec3(localPosition.x, localPosition.y, localPosition.z) : undefined
  };
}
/** Computes 3D convex hull as a CANNON.ConvexPolyhedron. */


function getConvexPolyhedronParameters(object) {
  const geometry = getGeometry(object);
  if (!geometry) return null; // Perturb.

  const eps = 1e-4;

  for (let i = 0; i < geometry.attributes.position.count; i++) {
    geometry.attributes.position.setXYZ(i, geometry.attributes.position.getX(i) + (Math.random() - 0.5) * eps, geometry.attributes.position.getY(i) + (Math.random() - 0.5) * eps, geometry.attributes.position.getZ(i) + (Math.random() - 0.5) * eps);
  } // Compute the 3D convex hull and collect convex hull vertices and faces.


  const [positions, indices] = new ConvexHull().setFromObject(new Mesh(geometry)).toJSON();
  return {
    type: ShapeType.HULL,
    params: {
      vertices: new Float32Array(positions),
      faces: indices
    }
  };
}

function getCylinderParameters(geometry) {
  const params = geometry.parameters;
  return {
    type: ShapeType.CYLINDER,
    params: {
      radiusTop: params.radiusTop,
      radiusBottom: params.radiusBottom,
      height: params.height,
      segments: params.radialSegments
    },
    orientation: new Quaternion$1().setFromEuler(MathUtils.degToRad(-90), 0, 0, 'XYZ').normalize()
  };
}

function getBoundingCylinderParameters(object, options) {
  const axes = ['x', 'y', 'z'];
  const majorAxis = options.cylinderAxis || 'y';
  const minorAxes = axes.splice(axes.indexOf(majorAxis), 1) && axes;
  const box = new Box3().setFromObject(object);
  if (!isFinite(box.min.lengthSq())) return null; // Compute cylinder dimensions.

  const height = box.max[majorAxis] - box.min[majorAxis];
  const radius = 0.5 * Math.max(getComponent(box.max, minorAxes[0]) - getComponent(box.min, minorAxes[0]), getComponent(box.max, minorAxes[1]) - getComponent(box.min, minorAxes[1]));
  const eulerX = majorAxis === 'y' ? PI_2 : 0;
  const eulerY = majorAxis === 'z' ? PI_2 : 0;
  return {
    type: ShapeType.CYLINDER,
    params: {
      radiusTop: radius,
      radiusBottom: radius,
      height,
      segments: 12
    },
    orientation: new Quaternion$1().setFromEuler(eulerX, eulerY, 0, 'XYZ').normalize()
  };
}

function getPlaneParameters(geometry) {
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  return {
    type: ShapeType.BOX,
    params: {
      x: (box.max.x - box.min.x) / 2 || 0.1,
      y: (box.max.y - box.min.y) / 2 || 0.1,
      z: (box.max.z - box.min.z) / 2 || 0.1
    }
  };
}

function getSphereParameters(geometry) {
  return {
    type: ShapeType.SPHERE,
    params: {
      radius: geometry.parameters.radius
    }
  };
}

function getBoundingSphereParameters(object, options) {
  if (options.sphereRadius) {
    return {
      type: ShapeType.SPHERE,
      params: {
        radius: options.sphereRadius
      }
    };
  }

  const geometry = getGeometry(object);
  if (!geometry) return null;
  geometry.computeBoundingSphere();
  return {
    type: ShapeType.SPHERE,
    params: {
      radius: geometry.boundingSphere.radius
    }
  };
}

function getTrimeshParameters(geometry) {
  const vertices = getVertices(geometry);
  if (!vertices.length) return null;
  const indices = new Uint32Array(vertices.length);

  for (let i = 0; i < vertices.length; i++) {
    indices[i] = i;
  }

  return {
    type: ShapeType.MESH,
    params: {
      vertices,
      indices
    }
  };
}

export { ShapeType, getShapeParameters, threeToCannon };
//# sourceMappingURL=three-to-cannon.modern.js.map
