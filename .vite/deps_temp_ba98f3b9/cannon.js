import {
  __commonJS,
  __require
} from "./chunk-VUNV25KB.js";

// Imported-Models-GLTF/node_modules/cannon/build/cannon.js
var require_cannon = __commonJS({
  "Imported-Models-GLTF/node_modules/cannon/build/cannon.js"(exports, module) {
    !function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && false) define([], e);
      else {
        var f;
        "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.CANNON = e();
      }
    }(function() {
      var define2, module2, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof __require == "function" && __require;
              if (!u && a) return a(o2, true);
              if (i) return i(o2, true);
              throw new Error("Cannot find module '" + o2 + "'");
            }
            var f = n[o2] = { exports: {} };
            t[o2][0].call(f.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, f, f.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof __require == "function" && __require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
      }({ 1: [function(_dereq_, module3, exports3) {
        module3.exports = {
          "name": "cannon",
          "version": "0.6.2",
          "description": "A lightweight 3D physics engine written in JavaScript.",
          "homepage": "https://github.com/schteppe/cannon.js",
          "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
          "keywords": [
            "cannon.js",
            "cannon",
            "physics",
            "engine",
            "3d"
          ],
          "main": "./build/cannon.js",
          "engines": {
            "node": "*"
          },
          "repository": {
            "type": "git",
            "url": "https://github.com/schteppe/cannon.js.git"
          },
          "bugs": {
            "url": "https://github.com/schteppe/cannon.js/issues"
          },
          "licenses": [
            {
              "type": "MIT"
            }
          ],
          "devDependencies": {
            "jshint": "latest",
            "uglify-js": "latest",
            "nodeunit": "^0.9.0",
            "grunt": "~0.4.0",
            "grunt-contrib-jshint": "~0.1.1",
            "grunt-contrib-nodeunit": "^0.4.1",
            "grunt-contrib-concat": "~0.1.3",
            "grunt-contrib-uglify": "^0.5.1",
            "grunt-browserify": "^2.1.4",
            "grunt-contrib-yuidoc": "^0.5.2",
            "browserify": "*"
          },
          "dependencies": {}
        };
      }, {}], 2: [function(_dereq_, module3, exports3) {
        module3.exports = {
          version: _dereq_("../package.json").version,
          AABB: _dereq_("./collision/AABB"),
          ArrayCollisionMatrix: _dereq_("./collision/ArrayCollisionMatrix"),
          Body: _dereq_("./objects/Body"),
          Box: _dereq_("./shapes/Box"),
          Broadphase: _dereq_("./collision/Broadphase"),
          Constraint: _dereq_("./constraints/Constraint"),
          ContactEquation: _dereq_("./equations/ContactEquation"),
          Narrowphase: _dereq_("./world/Narrowphase"),
          ConeTwistConstraint: _dereq_("./constraints/ConeTwistConstraint"),
          ContactMaterial: _dereq_("./material/ContactMaterial"),
          ConvexPolyhedron: _dereq_("./shapes/ConvexPolyhedron"),
          Cylinder: _dereq_("./shapes/Cylinder"),
          DistanceConstraint: _dereq_("./constraints/DistanceConstraint"),
          Equation: _dereq_("./equations/Equation"),
          EventTarget: _dereq_("./utils/EventTarget"),
          FrictionEquation: _dereq_("./equations/FrictionEquation"),
          GSSolver: _dereq_("./solver/GSSolver"),
          GridBroadphase: _dereq_("./collision/GridBroadphase"),
          Heightfield: _dereq_("./shapes/Heightfield"),
          HingeConstraint: _dereq_("./constraints/HingeConstraint"),
          LockConstraint: _dereq_("./constraints/LockConstraint"),
          Mat3: _dereq_("./math/Mat3"),
          Material: _dereq_("./material/Material"),
          NaiveBroadphase: _dereq_("./collision/NaiveBroadphase"),
          ObjectCollisionMatrix: _dereq_("./collision/ObjectCollisionMatrix"),
          Pool: _dereq_("./utils/Pool"),
          Particle: _dereq_("./shapes/Particle"),
          Plane: _dereq_("./shapes/Plane"),
          PointToPointConstraint: _dereq_("./constraints/PointToPointConstraint"),
          Quaternion: _dereq_("./math/Quaternion"),
          Ray: _dereq_("./collision/Ray"),
          RaycastVehicle: _dereq_("./objects/RaycastVehicle"),
          RaycastResult: _dereq_("./collision/RaycastResult"),
          RigidVehicle: _dereq_("./objects/RigidVehicle"),
          RotationalEquation: _dereq_("./equations/RotationalEquation"),
          RotationalMotorEquation: _dereq_("./equations/RotationalMotorEquation"),
          SAPBroadphase: _dereq_("./collision/SAPBroadphase"),
          SPHSystem: _dereq_("./objects/SPHSystem"),
          Shape: _dereq_("./shapes/Shape"),
          Solver: _dereq_("./solver/Solver"),
          Sphere: _dereq_("./shapes/Sphere"),
          SplitSolver: _dereq_("./solver/SplitSolver"),
          Spring: _dereq_("./objects/Spring"),
          Trimesh: _dereq_("./shapes/Trimesh"),
          Vec3: _dereq_("./math/Vec3"),
          Vec3Pool: _dereq_("./utils/Vec3Pool"),
          World: _dereq_("./world/World")
        };
      }, { "../package.json": 1, "./collision/AABB": 3, "./collision/ArrayCollisionMatrix": 4, "./collision/Broadphase": 5, "./collision/GridBroadphase": 6, "./collision/NaiveBroadphase": 7, "./collision/ObjectCollisionMatrix": 8, "./collision/Ray": 9, "./collision/RaycastResult": 10, "./collision/SAPBroadphase": 11, "./constraints/ConeTwistConstraint": 12, "./constraints/Constraint": 13, "./constraints/DistanceConstraint": 14, "./constraints/HingeConstraint": 15, "./constraints/LockConstraint": 16, "./constraints/PointToPointConstraint": 17, "./equations/ContactEquation": 19, "./equations/Equation": 20, "./equations/FrictionEquation": 21, "./equations/RotationalEquation": 22, "./equations/RotationalMotorEquation": 23, "./material/ContactMaterial": 24, "./material/Material": 25, "./math/Mat3": 27, "./math/Quaternion": 28, "./math/Vec3": 30, "./objects/Body": 31, "./objects/RaycastVehicle": 32, "./objects/RigidVehicle": 33, "./objects/SPHSystem": 34, "./objects/Spring": 35, "./shapes/Box": 37, "./shapes/ConvexPolyhedron": 38, "./shapes/Cylinder": 39, "./shapes/Heightfield": 40, "./shapes/Particle": 41, "./shapes/Plane": 42, "./shapes/Shape": 43, "./shapes/Sphere": 44, "./shapes/Trimesh": 45, "./solver/GSSolver": 46, "./solver/Solver": 47, "./solver/SplitSolver": 48, "./utils/EventTarget": 49, "./utils/Pool": 51, "./utils/Vec3Pool": 54, "./world/Narrowphase": 55, "./world/World": 56 }], 3: [function(_dereq_, module3, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        var Utils = _dereq_("../utils/Utils");
        module3.exports = AABB;
        function AABB(options) {
          options = options || {};
          this.lowerBound = new Vec3();
          if (options.lowerBound) {
            this.lowerBound.copy(options.lowerBound);
          }
          this.upperBound = new Vec3();
          if (options.upperBound) {
            this.upperBound.copy(options.upperBound);
          }
        }
        var tmp = new Vec3();
        AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize) {
          var l = this.lowerBound, u = this.upperBound, q = quaternion;
          l.copy(points[0]);
          if (q) {
            q.vmult(l, l);
          }
          u.copy(l);
          for (var i = 1; i < points.length; i++) {
            var p = points[i];
            if (q) {
              q.vmult(p, tmp);
              p = tmp;
            }
            if (p.x > u.x) {
              u.x = p.x;
            }
            if (p.x < l.x) {
              l.x = p.x;
            }
            if (p.y > u.y) {
              u.y = p.y;
            }
            if (p.y < l.y) {
              l.y = p.y;
            }
            if (p.z > u.z) {
              u.z = p.z;
            }
            if (p.z < l.z) {
              l.z = p.z;
            }
          }
          if (position) {
            position.vadd(l, l);
            position.vadd(u, u);
          }
          if (skinSize) {
            l.x -= skinSize;
            l.y -= skinSize;
            l.z -= skinSize;
            u.x += skinSize;
            u.y += skinSize;
            u.z += skinSize;
          }
          return this;
        };
        AABB.prototype.copy = function(aabb) {
          this.lowerBound.copy(aabb.lowerBound);
          this.upperBound.copy(aabb.upperBound);
          return this;
        };
        AABB.prototype.clone = function() {
          return new AABB().copy(this);
        };
        AABB.prototype.extend = function(aabb) {
          var l = aabb.lowerBound.x;
          if (this.lowerBound.x > l) {
            this.lowerBound.x = l;
          }
          var u = aabb.upperBound.x;
          if (this.upperBound.x < u) {
            this.upperBound.x = u;
          }
          var l = aabb.lowerBound.y;
          if (this.lowerBound.y > l) {
            this.lowerBound.y = l;
          }
          var u = aabb.upperBound.y;
          if (this.upperBound.y < u) {
            this.upperBound.y = u;
          }
          var l = aabb.lowerBound.z;
          if (this.lowerBound.z > l) {
            this.lowerBound.z = l;
          }
          var u = aabb.upperBound.z;
          if (this.upperBound.z < u) {
            this.upperBound.z = u;
          }
        };
        AABB.prototype.overlaps = function(aabb) {
          var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
          return (l2.x <= u1.x && u1.x <= u2.x || l1.x <= u2.x && u2.x <= u1.x) && (l2.y <= u1.y && u1.y <= u2.y || l1.y <= u2.y && u2.y <= u1.y) && (l2.z <= u1.z && u1.z <= u2.z || l1.z <= u2.z && u2.z <= u1.z);
        };
        AABB.prototype.contains = function(aabb) {
          var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
          return l1.x <= l2.x && u1.x >= u2.x && (l1.y <= l2.y && u1.y >= u2.y) && (l1.z <= l2.z && u1.z >= u2.z);
        };
        AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h) {
          var l = this.lowerBound, u = this.upperBound;
          a.copy(l);
          b.set(u.x, l.y, l.z);
          c.set(u.x, u.y, l.z);
          d.set(l.x, u.y, u.z);
          e.set(u.x, l.y, l.z);
          f.set(l.x, u.y, l.z);
          g.set(l.x, l.y, u.z);
          h.copy(u);
        };
        var transformIntoFrame_corners = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
        ];
        AABB.prototype.toLocalFrame = function(frame, target) {
          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];
          this.getCorners(a, b, c, d, e, f, g, h);
          for (var i = 0; i !== 8; i++) {
            var corner = corners[i];
            frame.pointToLocal(corner, corner);
          }
          return target.setFromPoints(corners);
        };
        AABB.prototype.toWorldFrame = function(frame, target) {
          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];
          this.getCorners(a, b, c, d, e, f, g, h);
          for (var i = 0; i !== 8; i++) {
            var corner = corners[i];
            frame.pointToWorld(corner, corner);
          }
          return target.setFromPoints(corners);
        };
      }, { "../math/Vec3": 30, "../utils/Utils": 53 }], 4: [function(_dereq_, module3, exports3) {
        module3.exports = ArrayCollisionMatrix;
        function ArrayCollisionMatrix() {
          this.matrix = [];
        }
        ArrayCollisionMatrix.prototype.get = function(i, j) {
          i = i.index;
          j = j.index;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          return this.matrix[(i * (i + 1) >> 1) + j - 1];
        };
        ArrayCollisionMatrix.prototype.set = function(i, j, value) {
          i = i.index;
          j = j.index;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
        };
        ArrayCollisionMatrix.prototype.reset = function() {
          for (var i = 0, l = this.matrix.length; i !== l; i++) {
            this.matrix[i] = 0;
          }
        };
        ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
          this.matrix.length = n * (n - 1) >> 1;
        };
      }, {}], 5: [function(_dereq_, module3, exports3) {
        var Body = _dereq_("../objects/Body");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Shape = _dereq_("../shapes/Shape");
        var Plane = _dereq_("../shapes/Plane");
        module3.exports = Broadphase;
        function Broadphase() {
          this.world = null;
          this.useBoundingBoxes = false;
          this.dirty = true;
        }
        Broadphase.prototype.collisionPairs = function(world, p1, p2) {
          throw new Error("collisionPairs not implemented for this BroadPhase class!");
        };
        var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
        Broadphase.prototype.needBroadphaseCollision = function(bodyA, bodyB) {
          if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
            return false;
          }
          if (((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyA.sleepState === Body.SLEEPING) && ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyB.sleepState === Body.SLEEPING)) {
            return false;
          }
          return true;
        };
        Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2) {
          if (this.useBoundingBoxes) {
            this.doBoundingBoxBroadphase(bodyA, bodyB, pairs1, pairs2);
          } else {
            this.doBoundingSphereBroadphase(bodyA, bodyB, pairs1, pairs2);
          }
        };
        var Broadphase_collisionPairs_r = new Vec3(), Broadphase_collisionPairs_normal = new Vec3(), Broadphase_collisionPairs_quat = new Quaternion(), Broadphase_collisionPairs_relpos = new Vec3();
        Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
          var r = Broadphase_collisionPairs_r;
          bodyB.position.vsub(bodyA.position, r);
          var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
          var norm2 = r.norm2();
          if (norm2 < boundingRadiusSum2) {
            pairs1.push(bodyA);
            pairs2.push(bodyB);
          }
        };
        Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
          if (bodyA.aabbNeedsUpdate) {
            bodyA.computeAABB();
          }
          if (bodyB.aabbNeedsUpdate) {
            bodyB.computeAABB();
          }
          if (bodyA.aabb.overlaps(bodyB.aabb)) {
            pairs1.push(bodyA);
            pairs2.push(bodyB);
          }
        };
        var Broadphase_makePairsUnique_temp = { keys: [] }, Broadphase_makePairsUnique_p1 = [], Broadphase_makePairsUnique_p2 = [];
        Broadphase.prototype.makePairsUnique = function(pairs1, pairs2) {
          var t = Broadphase_makePairsUnique_temp, p1 = Broadphase_makePairsUnique_p1, p2 = Broadphase_makePairsUnique_p2, N = pairs1.length;
          for (var i = 0; i !== N; i++) {
            p1[i] = pairs1[i];
            p2[i] = pairs2[i];
          }
          pairs1.length = 0;
          pairs2.length = 0;
          for (var i = 0; i !== N; i++) {
            var id1 = p1[i].id, id2 = p2[i].id;
            var key = id1 < id2 ? id1 + "," + id2 : id2 + "," + id1;
            t[key] = i;
            t.keys.push(key);
          }
          for (var i = 0; i !== t.keys.length; i++) {
            var key = t.keys.pop(), pairIndex = t[key];
            pairs1.push(p1[pairIndex]);
            pairs2.push(p2[pairIndex]);
            delete t[key];
          }
        };
        Broadphase.prototype.setWorld = function(world) {
        };
        var bsc_dist = new Vec3();
        Broadphase.boundingSphereCheck = function(bodyA, bodyB) {
          var dist = bsc_dist;
          bodyA.position.vsub(bodyB.position, dist);
          return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius, 2) > dist.norm2();
        };
        Broadphase.prototype.aabbQuery = function(world, aabb, result) {
          console.warn(".aabbQuery is not implemented in this Broadphase subclass.");
          return [];
        };
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Plane": 42, "../shapes/Shape": 43 }], 6: [function(_dereq_, module3, exports3) {
        module3.exports = GridBroadphase;
        var Broadphase = _dereq_("./Broadphase");
        var Vec3 = _dereq_("../math/Vec3");
        var Shape = _dereq_("../shapes/Shape");
        function GridBroadphase(aabbMin, aabbMax, nx, ny, nz) {
          Broadphase.apply(this);
          this.nx = nx || 10;
          this.ny = ny || 10;
          this.nz = nz || 10;
          this.aabbMin = aabbMin || new Vec3(100, 100, 100);
          this.aabbMax = aabbMax || new Vec3(-100, -100, -100);
          var nbins = this.nx * this.ny * this.nz;
          if (nbins <= 0) {
            throw "GridBroadphase: Each dimension's n must be >0";
          }
          this.bins = [];
          this.binLengths = [];
          this.bins.length = nbins;
          this.binLengths.length = nbins;
          for (var i = 0; i < nbins; i++) {
            this.bins[i] = [];
            this.binLengths[i] = 0;
          }
        }
        GridBroadphase.prototype = new Broadphase();
        GridBroadphase.prototype.constructor = GridBroadphase;
        var GridBroadphase_collisionPairs_d = new Vec3();
        var GridBroadphase_collisionPairs_binPos = new Vec3();
        GridBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
          var N = world.numObjects(), bodies = world.bodies;
          var max = this.aabbMax, min = this.aabbMin, nx = this.nx, ny = this.ny, nz = this.nz;
          var xstep = ny * nz;
          var ystep = nz;
          var zstep = 1;
          var xmax = max.x, ymax = max.y, zmax = max.z, xmin = min.x, ymin = min.y, zmin = min.z;
          var xmult = nx / (xmax - xmin), ymult = ny / (ymax - ymin), zmult = nz / (zmax - zmin);
          var binsizeX = (xmax - xmin) / nx, binsizeY = (ymax - ymin) / ny, binsizeZ = (zmax - zmin) / nz;
          var binRadius = Math.sqrt(binsizeX * binsizeX + binsizeY * binsizeY + binsizeZ * binsizeZ) * 0.5;
          var types = Shape.types;
          var SPHERE = types.SPHERE, PLANE = types.PLANE, BOX = types.BOX, COMPOUND = types.COMPOUND, CONVEXPOLYHEDRON = types.CONVEXPOLYHEDRON;
          var bins = this.bins, binLengths = this.binLengths, Nbins = this.bins.length;
          for (var i = 0; i !== Nbins; i++) {
            binLengths[i] = 0;
          }
          var ceil = Math.ceil;
          var min = Math.min;
          var max = Math.max;
          function addBoxToBins(x0, y0, z0, x1, y1, z1, bi2) {
            var xoff0 = (x0 - xmin) * xmult | 0, yoff0 = (y0 - ymin) * ymult | 0, zoff0 = (z0 - zmin) * zmult | 0, xoff1 = ceil((x1 - xmin) * xmult), yoff1 = ceil((y1 - ymin) * ymult), zoff1 = ceil((z1 - zmin) * zmult);
            if (xoff0 < 0) {
              xoff0 = 0;
            } else if (xoff0 >= nx) {
              xoff0 = nx - 1;
            }
            if (yoff0 < 0) {
              yoff0 = 0;
            } else if (yoff0 >= ny) {
              yoff0 = ny - 1;
            }
            if (zoff0 < 0) {
              zoff0 = 0;
            } else if (zoff0 >= nz) {
              zoff0 = nz - 1;
            }
            if (xoff1 < 0) {
              xoff1 = 0;
            } else if (xoff1 >= nx) {
              xoff1 = nx - 1;
            }
            if (yoff1 < 0) {
              yoff1 = 0;
            } else if (yoff1 >= ny) {
              yoff1 = ny - 1;
            }
            if (zoff1 < 0) {
              zoff1 = 0;
            } else if (zoff1 >= nz) {
              zoff1 = nz - 1;
            }
            xoff0 *= xstep;
            yoff0 *= ystep;
            zoff0 *= zstep;
            xoff1 *= xstep;
            yoff1 *= ystep;
            zoff1 *= zstep;
            for (var xoff2 = xoff0; xoff2 <= xoff1; xoff2 += xstep) {
              for (var yoff2 = yoff0; yoff2 <= yoff1; yoff2 += ystep) {
                for (var zoff2 = zoff0; zoff2 <= zoff1; zoff2 += zstep) {
                  var idx2 = xoff2 + yoff2 + zoff2;
                  bins[idx2][binLengths[idx2]++] = bi2;
                }
              }
            }
          }
          for (var i = 0; i !== N; i++) {
            var bi = bodies[i];
            var si = bi.shape;
            switch (si.type) {
              case SPHERE:
                var x = bi.position.x, y = bi.position.y, z = bi.position.z;
                var r = si.radius;
                addBoxToBins(x - r, y - r, z - r, x + r, y + r, z + r, bi);
                break;
              case PLANE:
                if (si.worldNormalNeedsUpdate) {
                  si.computeWorldNormal(bi.quaternion);
                }
                var planeNormal = si.worldNormal;
                var xreset = xmin + binsizeX * 0.5 - bi.position.x, yreset = ymin + binsizeY * 0.5 - bi.position.y, zreset = zmin + binsizeZ * 0.5 - bi.position.z;
                var d = GridBroadphase_collisionPairs_d;
                d.set(xreset, yreset, zreset);
                for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
                  for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
                    for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
                      if (d.dot(planeNormal) < binRadius) {
                        var idx = xoff + yoff + zoff;
                        bins[idx][binLengths[idx]++] = bi;
                      }
                    }
                  }
                }
                break;
              default:
                if (bi.aabbNeedsUpdate) {
                  bi.computeAABB();
                }
                addBoxToBins(
                  bi.aabb.lowerBound.x,
                  bi.aabb.lowerBound.y,
                  bi.aabb.lowerBound.z,
                  bi.aabb.upperBound.x,
                  bi.aabb.upperBound.y,
                  bi.aabb.upperBound.z,
                  bi
                );
                break;
            }
          }
          for (var i = 0; i !== Nbins; i++) {
            var binLength = binLengths[i];
            if (binLength > 1) {
              var bin = bins[i];
              for (var xi = 0; xi !== binLength; xi++) {
                var bi = bin[xi];
                for (var yi = 0; yi !== xi; yi++) {
                  var bj = bin[yi];
                  if (this.needBroadphaseCollision(bi, bj)) {
                    this.intersectionTest(bi, bj, pairs1, pairs2);
                  }
                }
              }
            }
          }
          this.makePairsUnique(pairs1, pairs2);
        };
      }, { "../math/Vec3": 30, "../shapes/Shape": 43, "./Broadphase": 5 }], 7: [function(_dereq_, module3, exports3) {
        module3.exports = NaiveBroadphase;
        var Broadphase = _dereq_("./Broadphase");
        var AABB = _dereq_("./AABB");
        function NaiveBroadphase() {
          Broadphase.apply(this);
        }
        NaiveBroadphase.prototype = new Broadphase();
        NaiveBroadphase.prototype.constructor = NaiveBroadphase;
        NaiveBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
          var bodies = world.bodies, n = bodies.length, i, j, bi, bj;
          for (i = 0; i !== n; i++) {
            for (j = 0; j !== i; j++) {
              bi = bodies[i];
              bj = bodies[j];
              if (!this.needBroadphaseCollision(bi, bj)) {
                continue;
              }
              this.intersectionTest(bi, bj, pairs1, pairs2);
            }
          }
        };
        var tmpAABB = new AABB();
        NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result) {
          result = result || [];
          for (var i = 0; i < world.bodies.length; i++) {
            var b = world.bodies[i];
            if (b.aabbNeedsUpdate) {
              b.computeAABB();
            }
            if (b.aabb.overlaps(aabb)) {
              result.push(b);
            }
          }
          return result;
        };
      }, { "./AABB": 3, "./Broadphase": 5 }], 8: [function(_dereq_, module3, exports3) {
        module3.exports = ObjectCollisionMatrix;
        function ObjectCollisionMatrix() {
          this.matrix = {};
        }
        ObjectCollisionMatrix.prototype.get = function(i, j) {
          i = i.id;
          j = j.id;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          return i + "-" + j in this.matrix;
        };
        ObjectCollisionMatrix.prototype.set = function(i, j, value) {
          i = i.id;
          j = j.id;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          if (value) {
            this.matrix[i + "-" + j] = true;
          } else {
            delete this.matrix[i + "-" + j];
          }
        };
        ObjectCollisionMatrix.prototype.reset = function() {
          this.matrix = {};
        };
        ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
        };
      }, {}], 9: [function(_dereq_, module3, exports3) {
        module3.exports = Ray;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
        var Box = _dereq_("../shapes/Box");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Shape = _dereq_("../shapes/Shape");
        var AABB = _dereq_("../collision/AABB");
        function Ray(from, to) {
          this.from = from ? from.clone() : new Vec3();
          this.to = to ? to.clone() : new Vec3();
          this._direction = new Vec3();
          this.precision = 1e-4;
          this.checkCollisionResponse = true;
          this.skipBackfaces = false;
          this.collisionFilterMask = -1;
          this.collisionFilterGroup = -1;
          this.mode = Ray.ANY;
          this.result = new RaycastResult();
          this.hasHit = false;
          this.callback = function(result) {
          };
        }
        Ray.prototype.constructor = Ray;
        Ray.CLOSEST = 1;
        Ray.ANY = 2;
        Ray.ALL = 4;
        var tmpAABB = new AABB();
        var tmpArray = [];
        Ray.prototype.intersectWorld = function(world, options) {
          this.mode = options.mode || Ray.ANY;
          this.result = options.result || new RaycastResult();
          this.skipBackfaces = !!options.skipBackfaces;
          this.collisionFilterMask = typeof options.collisionFilterMask !== "undefined" ? options.collisionFilterMask : -1;
          this.collisionFilterGroup = typeof options.collisionFilterGroup !== "undefined" ? options.collisionFilterGroup : -1;
          if (options.from) {
            this.from.copy(options.from);
          }
          if (options.to) {
            this.to.copy(options.to);
          }
          this.callback = options.callback || function() {
          };
          this.hasHit = false;
          this.result.reset();
          this._updateDirection();
          this.getAABB(tmpAABB);
          tmpArray.length = 0;
          world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
          this.intersectBodies(tmpArray);
          return this.hasHit;
        };
        var v1 = new Vec3(), v2 = new Vec3();
        Ray.pointInTriangle = pointInTriangle;
        function pointInTriangle(p, a2, b2, c2) {
          c2.vsub(a2, v0);
          b2.vsub(a2, v1);
          p.vsub(a2, v2);
          var dot00 = v0.dot(v0);
          var dot01 = v0.dot(v1);
          var dot02 = v0.dot(v2);
          var dot11 = v1.dot(v1);
          var dot12 = v1.dot(v2);
          var u, v;
          return (u = dot11 * dot02 - dot01 * dot12) >= 0 && (v = dot00 * dot12 - dot01 * dot02) >= 0 && u + v < dot00 * dot11 - dot01 * dot01;
        }
        var intersectBody_xi = new Vec3();
        var intersectBody_qi = new Quaternion();
        Ray.prototype.intersectBody = function(body, result) {
          if (result) {
            this.result = result;
            this._updateDirection();
          }
          var checkCollisionResponse = this.checkCollisionResponse;
          if (checkCollisionResponse && !body.collisionResponse) {
            return;
          }
          if ((this.collisionFilterGroup & body.collisionFilterMask) === 0 || (body.collisionFilterGroup & this.collisionFilterMask) === 0) {
            return;
          }
          var xi = intersectBody_xi;
          var qi = intersectBody_qi;
          for (var i = 0, N = body.shapes.length; i < N; i++) {
            var shape = body.shapes[i];
            if (checkCollisionResponse && !shape.collisionResponse) {
              continue;
            }
            body.quaternion.mult(body.shapeOrientations[i], qi);
            body.quaternion.vmult(body.shapeOffsets[i], xi);
            xi.vadd(body.position, xi);
            this.intersectShape(
              shape,
              qi,
              xi,
              body
            );
            if (this.result._shouldStop) {
              break;
            }
          }
        };
        Ray.prototype.intersectBodies = function(bodies, result) {
          if (result) {
            this.result = result;
            this._updateDirection();
          }
          for (var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i++) {
            this.intersectBody(bodies[i]);
          }
        };
        Ray.prototype._updateDirection = function() {
          this.to.vsub(this.from, this._direction);
          this._direction.normalize();
        };
        Ray.prototype.intersectShape = function(shape, quat, position, body) {
          var from = this.from;
          var distance = distanceFromIntersection(from, this._direction, position);
          if (distance > shape.boundingSphereRadius) {
            return;
          }
          var intersectMethod = this[shape.type];
          if (intersectMethod) {
            intersectMethod.call(this, shape, quat, position, body);
          }
        };
        var vector = new Vec3();
        var normal = new Vec3();
        var intersectPoint = new Vec3();
        var a = new Vec3();
        var b = new Vec3();
        var c = new Vec3();
        var d = new Vec3();
        var tmpRaycastResult = new RaycastResult();
        Ray.prototype.intersectBox = function(shape, quat, position, body) {
          return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body);
        };
        Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;
        Ray.prototype.intersectPlane = function(shape, quat, position, body) {
          var from = this.from;
          var to = this.to;
          var direction = this._direction;
          var worldNormal = new Vec3(0, 0, 1);
          quat.vmult(worldNormal, worldNormal);
          var len = new Vec3();
          from.vsub(position, len);
          var planeToFrom = len.dot(worldNormal);
          to.vsub(position, len);
          var planeToTo = len.dot(worldNormal);
          if (planeToFrom * planeToTo > 0) {
            return;
          }
          if (from.distanceTo(to) < planeToFrom) {
            return;
          }
          var n_dot_dir = worldNormal.dot(direction);
          if (Math.abs(n_dot_dir) < this.precision) {
            return;
          }
          var planePointToFrom = new Vec3();
          var dir_scaled_with_t = new Vec3();
          var hitPointWorld = new Vec3();
          from.vsub(position, planePointToFrom);
          var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
          direction.scale(t, dir_scaled_with_t);
          from.vadd(dir_scaled_with_t, hitPointWorld);
          this.reportIntersection(worldNormal, hitPointWorld, shape, body, -1);
        };
        Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;
        Ray.prototype.getAABB = function(result) {
          var to = this.to;
          var from = this.from;
          result.lowerBound.x = Math.min(to.x, from.x);
          result.lowerBound.y = Math.min(to.y, from.y);
          result.lowerBound.z = Math.min(to.z, from.z);
          result.upperBound.x = Math.max(to.x, from.x);
          result.upperBound.y = Math.max(to.y, from.y);
          result.upperBound.z = Math.max(to.z, from.z);
        };
        var intersectConvexOptions = {
          faceList: [0]
        };
        Ray.prototype.intersectHeightfield = function(shape, quat, position, body) {
          var data = shape.data, w = shape.elementSize, worldPillarOffset = new Vec3();
          var localRay = new Ray(this.from, this.to);
          Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
          Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
          var index = [];
          var iMinX = null;
          var iMinY = null;
          var iMaxX = null;
          var iMaxY = null;
          var inside = shape.getIndexOfPosition(localRay.from.x, localRay.from.y, index, false);
          if (inside) {
            iMinX = index[0];
            iMinY = index[1];
            iMaxX = index[0];
            iMaxY = index[1];
          }
          inside = shape.getIndexOfPosition(localRay.to.x, localRay.to.y, index, false);
          if (inside) {
            if (iMinX === null || index[0] < iMinX) {
              iMinX = index[0];
            }
            if (iMaxX === null || index[0] > iMaxX) {
              iMaxX = index[0];
            }
            if (iMinY === null || index[1] < iMinY) {
              iMinY = index[1];
            }
            if (iMaxY === null || index[1] > iMaxY) {
              iMaxY = index[1];
            }
          }
          if (iMinX === null) {
            return;
          }
          var minMax = [];
          shape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          for (var i = iMinX; i <= iMaxX; i++) {
            for (var j = iMinY; j <= iMaxY; j++) {
              if (this.result._shouldStop) {
                return;
              }
              shape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
              this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
              if (this.result._shouldStop) {
                return;
              }
              shape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
              this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
            }
          }
        };
        Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
        var Ray_intersectSphere_intersectionPoint = new Vec3();
        var Ray_intersectSphere_normal = new Vec3();
        Ray.prototype.intersectSphere = function(shape, quat, position, body) {
          var from = this.from, to = this.to, r = shape.radius;
          var a2 = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
          var b2 = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
          var c2 = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);
          var delta = Math.pow(b2, 2) - 4 * a2 * c2;
          var intersectionPoint = Ray_intersectSphere_intersectionPoint;
          var normal2 = Ray_intersectSphere_normal;
          if (delta < 0) {
            return;
          } else if (delta === 0) {
            from.lerp(to, delta, intersectionPoint);
            intersectionPoint.vsub(position, normal2);
            normal2.normalize();
            this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
          } else {
            var d1 = (-b2 - Math.sqrt(delta)) / (2 * a2);
            var d2 = (-b2 + Math.sqrt(delta)) / (2 * a2);
            if (d1 >= 0 && d1 <= 1) {
              from.lerp(to, d1, intersectionPoint);
              intersectionPoint.vsub(position, normal2);
              normal2.normalize();
              this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
            }
            if (this.result._shouldStop) {
              return;
            }
            if (d2 >= 0 && d2 <= 1) {
              from.lerp(to, d2, intersectionPoint);
              intersectionPoint.vsub(position, normal2);
              normal2.normalize();
              this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
            }
          }
        };
        Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;
        var intersectConvex_normal = new Vec3();
        var intersectConvex_minDistNormal = new Vec3();
        var intersectConvex_minDistIntersect = new Vec3();
        var intersectConvex_vector = new Vec3();
        Ray.prototype.intersectConvex = function intersectConvex(shape, quat, position, body, options) {
          var minDistNormal = intersectConvex_minDistNormal;
          var normal2 = intersectConvex_normal;
          var vector2 = intersectConvex_vector;
          var minDistIntersect = intersectConvex_minDistIntersect;
          var faceList = options && options.faceList || null;
          var faces = shape.faces, vertices = shape.vertices, normals = shape.faceNormals;
          var direction = this._direction;
          var from = this.from;
          var to = this.to;
          var fromToDistance = from.distanceTo(to);
          var minDist = -1;
          var Nfaces = faceList ? faceList.length : faces.length;
          var result = this.result;
          for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
            var fi = faceList ? faceList[j] : j;
            var face = faces[fi];
            var faceNormal = normals[fi];
            var q = quat;
            var x = position;
            vector2.copy(vertices[face[0]]);
            q.vmult(vector2, vector2);
            vector2.vadd(x, vector2);
            vector2.vsub(from, vector2);
            q.vmult(faceNormal, normal2);
            var dot = direction.dot(normal2);
            if (Math.abs(dot) < this.precision) {
              continue;
            }
            var scalar = normal2.dot(vector2) / dot;
            if (scalar < 0) {
              continue;
            }
            direction.mult(scalar, intersectPoint);
            intersectPoint.vadd(from, intersectPoint);
            a.copy(vertices[face[0]]);
            q.vmult(a, a);
            x.vadd(a, a);
            for (var i = 1; !result._shouldStop && i < face.length - 1; i++) {
              b.copy(vertices[face[i]]);
              c.copy(vertices[face[i + 1]]);
              q.vmult(b, b);
              q.vmult(c, c);
              x.vadd(b, b);
              x.vadd(c, c);
              var distance = intersectPoint.distanceTo(from);
              if (!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance) {
                continue;
              }
              this.reportIntersection(normal2, intersectPoint, shape, body, fi);
            }
          }
        };
        Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
        var intersectTrimesh_normal = new Vec3();
        var intersectTrimesh_localDirection = new Vec3();
        var intersectTrimesh_localFrom = new Vec3();
        var intersectTrimesh_localTo = new Vec3();
        var intersectTrimesh_worldNormal = new Vec3();
        var intersectTrimesh_worldIntersectPoint = new Vec3();
        var intersectTrimesh_localAABB = new AABB();
        var intersectTrimesh_triangles = [];
        var intersectTrimesh_treeTransform = new Transform();
        Ray.prototype.intersectTrimesh = function intersectTrimesh(mesh, quat, position, body, options) {
          var normal2 = intersectTrimesh_normal;
          var triangles = intersectTrimesh_triangles;
          var treeTransform = intersectTrimesh_treeTransform;
          var minDistNormal = intersectConvex_minDistNormal;
          var vector2 = intersectConvex_vector;
          var minDistIntersect = intersectConvex_minDistIntersect;
          var localAABB = intersectTrimesh_localAABB;
          var localDirection = intersectTrimesh_localDirection;
          var localFrom = intersectTrimesh_localFrom;
          var localTo = intersectTrimesh_localTo;
          var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
          var worldNormal = intersectTrimesh_worldNormal;
          var faceList = options && options.faceList || null;
          var indices = mesh.indices, vertices = mesh.vertices, normals = mesh.faceNormals;
          var from = this.from;
          var to = this.to;
          var direction = this._direction;
          var minDist = -1;
          treeTransform.position.copy(position);
          treeTransform.quaternion.copy(quat);
          Transform.vectorToLocalFrame(position, quat, direction, localDirection);
          Transform.pointToLocalFrame(position, quat, from, localFrom);
          Transform.pointToLocalFrame(position, quat, to, localTo);
          var fromToDistanceSquared = localFrom.distanceSquared(localTo);
          mesh.tree.rayQuery(this, treeTransform, triangles);
          for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
            var trianglesIndex = triangles[i];
            mesh.getNormal(trianglesIndex, normal2);
            mesh.getVertex(indices[trianglesIndex * 3], a);
            a.vsub(localFrom, vector2);
            var dot = localDirection.dot(normal2);
            var scalar = normal2.dot(vector2) / dot;
            if (scalar < 0) {
              continue;
            }
            localDirection.scale(scalar, intersectPoint);
            intersectPoint.vadd(localFrom, intersectPoint);
            mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
            mesh.getVertex(indices[trianglesIndex * 3 + 2], c);
            var squaredDistance = intersectPoint.distanceSquared(localFrom);
            if (!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared) {
              continue;
            }
            Transform.vectorToWorldFrame(quat, normal2, worldNormal);
            Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
            this.reportIntersection(worldNormal, worldIntersectPoint, mesh, body, trianglesIndex);
          }
          triangles.length = 0;
        };
        Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;
        Ray.prototype.reportIntersection = function(normal2, hitPointWorld, shape, body, hitFaceIndex) {
          var from = this.from;
          var to = this.to;
          var distance = from.distanceTo(hitPointWorld);
          var result = this.result;
          if (this.skipBackfaces && normal2.dot(this._direction) > 0) {
            return;
          }
          result.hitFaceIndex = typeof hitFaceIndex !== "undefined" ? hitFaceIndex : -1;
          switch (this.mode) {
            case Ray.ALL:
              this.hasHit = true;
              result.set(
                from,
                to,
                normal2,
                hitPointWorld,
                shape,
                body,
                distance
              );
              result.hasHit = true;
              this.callback(result);
              break;
            case Ray.CLOSEST:
              if (distance < result.distance || !result.hasHit) {
                this.hasHit = true;
                result.hasHit = true;
                result.set(
                  from,
                  to,
                  normal2,
                  hitPointWorld,
                  shape,
                  body,
                  distance
                );
              }
              break;
            case Ray.ANY:
              this.hasHit = true;
              result.hasHit = true;
              result.set(
                from,
                to,
                normal2,
                hitPointWorld,
                shape,
                body,
                distance
              );
              result._shouldStop = true;
              break;
          }
        };
        var v0 = new Vec3(), intersect = new Vec3();
        function distanceFromIntersection(from, direction, position) {
          position.vsub(from, v0);
          var dot = v0.dot(direction);
          direction.mult(dot, intersect);
          intersect.vadd(from, intersect);
          var distance = position.distanceTo(intersect);
          return distance;
        }
      }, { "../collision/AABB": 3, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43 }], 10: [function(_dereq_, module3, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        module3.exports = RaycastResult;
        function RaycastResult() {
          this.rayFromWorld = new Vec3();
          this.rayToWorld = new Vec3();
          this.hitNormalWorld = new Vec3();
          this.hitPointWorld = new Vec3();
          this.hasHit = false;
          this.shape = null;
          this.body = null;
          this.hitFaceIndex = -1;
          this.distance = -1;
          this._shouldStop = false;
        }
        RaycastResult.prototype.reset = function() {
          this.rayFromWorld.setZero();
          this.rayToWorld.setZero();
          this.hitNormalWorld.setZero();
          this.hitPointWorld.setZero();
          this.hasHit = false;
          this.shape = null;
          this.body = null;
          this.hitFaceIndex = -1;
          this.distance = -1;
          this._shouldStop = false;
        };
        RaycastResult.prototype.abort = function() {
          this._shouldStop = true;
        };
        RaycastResult.prototype.set = function(rayFromWorld, rayToWorld, hitNormalWorld, hitPointWorld, shape, body, distance) {
          this.rayFromWorld.copy(rayFromWorld);
          this.rayToWorld.copy(rayToWorld);
          this.hitNormalWorld.copy(hitNormalWorld);
          this.hitPointWorld.copy(hitPointWorld);
          this.shape = shape;
          this.body = body;
          this.distance = distance;
        };
      }, { "../math/Vec3": 30 }], 11: [function(_dereq_, module3, exports3) {
        var Shape = _dereq_("../shapes/Shape");
        var Broadphase = _dereq_("../collision/Broadphase");
        module3.exports = SAPBroadphase;
        function SAPBroadphase(world) {
          Broadphase.apply(this);
          this.axisList = [];
          this.world = null;
          this.axisIndex = 0;
          var axisList = this.axisList;
          this._addBodyHandler = function(e) {
            axisList.push(e.body);
          };
          this._removeBodyHandler = function(e) {
            var idx = axisList.indexOf(e.body);
            if (idx !== -1) {
              axisList.splice(idx, 1);
            }
          };
          if (world) {
            this.setWorld(world);
          }
        }
        SAPBroadphase.prototype = new Broadphase();
        SAPBroadphase.prototype.setWorld = function(world) {
          this.axisList.length = 0;
          for (var i = 0; i < world.bodies.length; i++) {
            this.axisList.push(world.bodies[i]);
          }
          world.removeEventListener("addBody", this._addBodyHandler);
          world.removeEventListener("removeBody", this._removeBodyHandler);
          world.addEventListener("addBody", this._addBodyHandler);
          world.addEventListener("removeBody", this._removeBodyHandler);
          this.world = world;
          this.dirty = true;
        };
        SAPBroadphase.insertionSortX = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.insertionSortY = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.insertionSortZ = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.prototype.collisionPairs = function(world, p1, p2) {
          var bodies = this.axisList, N = bodies.length, axisIndex = this.axisIndex, i, j;
          if (this.dirty) {
            this.sortList();
            this.dirty = false;
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            for (j = i + 1; j < N; j++) {
              var bj = bodies[j];
              if (!this.needBroadphaseCollision(bi, bj)) {
                continue;
              }
              if (!SAPBroadphase.checkBounds(bi, bj, axisIndex)) {
                break;
              }
              this.intersectionTest(bi, bj, p1, p2);
            }
          }
        };
        SAPBroadphase.prototype.sortList = function() {
          var axisList = this.axisList;
          var axisIndex = this.axisIndex;
          var N = axisList.length;
          for (var i = 0; i !== N; i++) {
            var bi = axisList[i];
            if (bi.aabbNeedsUpdate) {
              bi.computeAABB();
            }
          }
          if (axisIndex === 0) {
            SAPBroadphase.insertionSortX(axisList);
          } else if (axisIndex === 1) {
            SAPBroadphase.insertionSortY(axisList);
          } else if (axisIndex === 2) {
            SAPBroadphase.insertionSortZ(axisList);
          }
        };
        SAPBroadphase.checkBounds = function(bi, bj, axisIndex) {
          var biPos;
          var bjPos;
          if (axisIndex === 0) {
            biPos = bi.position.x;
            bjPos = bj.position.x;
          } else if (axisIndex === 1) {
            biPos = bi.position.y;
            bjPos = bj.position.y;
          } else if (axisIndex === 2) {
            biPos = bi.position.z;
            bjPos = bj.position.z;
          }
          var ri = bi.boundingRadius, rj = bj.boundingRadius, boundA1 = biPos - ri, boundA2 = biPos + ri, boundB1 = bjPos - rj, boundB2 = bjPos + rj;
          return boundB1 < boundA2;
        };
        SAPBroadphase.prototype.autoDetectAxis = function() {
          var sumX = 0, sumX2 = 0, sumY = 0, sumY2 = 0, sumZ = 0, sumZ2 = 0, bodies = this.axisList, N = bodies.length, invN = 1 / N;
          for (var i = 0; i !== N; i++) {
            var b = bodies[i];
            var centerX = b.position.x;
            sumX += centerX;
            sumX2 += centerX * centerX;
            var centerY = b.position.y;
            sumY += centerY;
            sumY2 += centerY * centerY;
            var centerZ = b.position.z;
            sumZ += centerZ;
            sumZ2 += centerZ * centerZ;
          }
          var varianceX = sumX2 - sumX * sumX * invN, varianceY = sumY2 - sumY * sumY * invN, varianceZ = sumZ2 - sumZ * sumZ * invN;
          if (varianceX > varianceY) {
            if (varianceX > varianceZ) {
              this.axisIndex = 0;
            } else {
              this.axisIndex = 2;
            }
          } else if (varianceY > varianceZ) {
            this.axisIndex = 1;
          } else {
            this.axisIndex = 2;
          }
        };
        SAPBroadphase.prototype.aabbQuery = function(world, aabb, result) {
          result = result || [];
          if (this.dirty) {
            this.sortList();
            this.dirty = false;
          }
          var axisIndex = this.axisIndex, axis = "x";
          if (axisIndex === 1) {
            axis = "y";
          }
          if (axisIndex === 2) {
            axis = "z";
          }
          var axisList = this.axisList;
          var lower = aabb.lowerBound[axis];
          var upper = aabb.upperBound[axis];
          for (var i = 0; i < axisList.length; i++) {
            var b = axisList[i];
            if (b.aabbNeedsUpdate) {
              b.computeAABB();
            }
            if (b.aabb.overlaps(aabb)) {
              result.push(b);
            }
          }
          return result;
        };
      }, { "../collision/Broadphase": 5, "../shapes/Shape": 43 }], 12: [function(_dereq_, module3, exports3) {
        module3.exports = ConeTwistConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var ConeEquation = _dereq_("../equations/ConeEquation");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function ConeTwistConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3();
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          this.collideConnected = !!options.collideConnected;
          this.angle = typeof options.angle !== "undefined" ? options.angle : 0;
          var c = this.coneEquation = new ConeEquation(bodyA, bodyB, options);
          var t = this.twistEquation = new RotationalEquation(bodyA, bodyB, options);
          this.twistAngle = typeof options.twistAngle !== "undefined" ? options.twistAngle : 0;
          c.maxForce = 0;
          c.minForce = -maxForce;
          t.maxForce = 0;
          t.minForce = -maxForce;
          this.equations.push(c, t);
        }
        ConeTwistConstraint.prototype = new PointToPointConstraint();
        ConeTwistConstraint.constructor = ConeTwistConstraint;
        var ConeTwistConstraint_update_tmpVec1 = new Vec3();
        var ConeTwistConstraint_update_tmpVec2 = new Vec3();
        ConeTwistConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, cone = this.coneEquation, twist = this.twistEquation;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
          bodyB.vectorToWorldFrame(this.axisB, cone.axisB);
          this.axisA.tangents(twist.axisA, twist.axisA);
          bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);
          this.axisB.tangents(twist.axisB, twist.axisB);
          bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);
          cone.angle = this.angle;
          twist.maxAngle = this.twistAngle;
        };
      }, { "../equations/ConeEquation": 18, "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 13: [function(_dereq_, module3, exports3) {
        module3.exports = Constraint;
        var Utils = _dereq_("../utils/Utils");
        function Constraint(bodyA, bodyB, options) {
          options = Utils.defaults(options, {
            collideConnected: true,
            wakeUpBodies: true
          });
          this.equations = [];
          this.bodyA = bodyA;
          this.bodyB = bodyB;
          this.id = Constraint.idCounter++;
          this.collideConnected = options.collideConnected;
          if (options.wakeUpBodies) {
            if (bodyA) {
              bodyA.wakeUp();
            }
            if (bodyB) {
              bodyB.wakeUp();
            }
          }
        }
        Constraint.prototype.update = function() {
          throw new Error("method update() not implmemented in this Constraint subclass!");
        };
        Constraint.prototype.enable = function() {
          var eqs = this.equations;
          for (var i = 0; i < eqs.length; i++) {
            eqs[i].enabled = true;
          }
        };
        Constraint.prototype.disable = function() {
          var eqs = this.equations;
          for (var i = 0; i < eqs.length; i++) {
            eqs[i].enabled = false;
          }
        };
        Constraint.idCounter = 0;
      }, { "../utils/Utils": 53 }], 14: [function(_dereq_, module3, exports3) {
        module3.exports = DistanceConstraint;
        var Constraint = _dereq_("./Constraint");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        function DistanceConstraint(bodyA, bodyB, distance, maxForce) {
          Constraint.call(this, bodyA, bodyB);
          if (typeof distance === "undefined") {
            distance = bodyA.position.distanceTo(bodyB.position);
          }
          if (typeof maxForce === "undefined") {
            maxForce = 1e6;
          }
          this.distance = distance;
          var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
          this.equations.push(eq);
          eq.minForce = -maxForce;
          eq.maxForce = maxForce;
        }
        DistanceConstraint.prototype = new Constraint();
        DistanceConstraint.prototype.update = function() {
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var eq = this.distanceEquation;
          var halfDist = this.distance * 0.5;
          var normal = eq.ni;
          bodyB.position.vsub(bodyA.position, normal);
          normal.normalize();
          normal.mult(halfDist, eq.ri);
          normal.mult(-halfDist, eq.rj);
        };
      }, { "../equations/ContactEquation": 19, "./Constraint": 13 }], 15: [function(_dereq_, module3, exports3) {
        module3.exports = HingeConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function HingeConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          axisA.normalize();
          var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1, 0, 0);
          axisB.normalize();
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
          var motor = this.motorEquation = new RotationalMotorEquation(bodyA, bodyB, maxForce);
          motor.enabled = false;
          this.equations.push(
            r1,
            // rotational1
            r2,
            // rotational2
            motor
          );
        }
        HingeConstraint.prototype = new PointToPointConstraint();
        HingeConstraint.constructor = HingeConstraint;
        HingeConstraint.prototype.enableMotor = function() {
          this.motorEquation.enabled = true;
        };
        HingeConstraint.prototype.disableMotor = function() {
          this.motorEquation.enabled = false;
        };
        HingeConstraint.prototype.setMotorSpeed = function(speed) {
          this.motorEquation.targetVelocity = speed;
        };
        HingeConstraint.prototype.setMotorMaxForce = function(maxForce) {
          this.motorEquation.maxForce = maxForce;
          this.motorEquation.minForce = -maxForce;
        };
        var HingeConstraint_update_tmpVec1 = new Vec3();
        var HingeConstraint_update_tmpVec2 = new Vec3();
        HingeConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, worldAxisA = HingeConstraint_update_tmpVec1, worldAxisB = HingeConstraint_update_tmpVec2;
          var axisA = this.axisA;
          var axisB = this.axisB;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.quaternion.vmult(axisA, worldAxisA);
          bodyB.quaternion.vmult(axisB, worldAxisB);
          worldAxisA.tangents(r1.axisA, r2.axisA);
          r1.axisB.copy(worldAxisB);
          r2.axisB.copy(worldAxisB);
          if (this.motorEquation.enabled) {
            bodyA.quaternion.vmult(this.axisA, motor.axisA);
            bodyB.quaternion.vmult(this.axisB, motor.axisB);
          }
        };
      }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 16: [function(_dereq_, module3, exports3) {
        module3.exports = LockConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function LockConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = new Vec3();
          var pivotB = new Vec3();
          var halfWay = new Vec3();
          bodyA.position.vadd(bodyB.position, halfWay);
          halfWay.scale(0.5, halfWay);
          bodyB.pointToLocalFrame(halfWay, pivotB);
          bodyA.pointToLocalFrame(halfWay, pivotA);
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
          var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA, bodyB, options);
          this.equations.push(r1, r2, r3);
        }
        LockConstraint.prototype = new PointToPointConstraint();
        LockConstraint.constructor = LockConstraint;
        var LockConstraint_update_tmpVec1 = new Vec3();
        var LockConstraint_update_tmpVec2 = new Vec3();
        LockConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, r3 = this.rotationalEquation3, worldAxisA = LockConstraint_update_tmpVec1, worldAxisB = LockConstraint_update_tmpVec2;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.vectorToWorldFrame(Vec3.UNIT_X, r1.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_Y, r1.axisB);
          bodyA.vectorToWorldFrame(Vec3.UNIT_Y, r2.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_Z, r2.axisB);
          bodyA.vectorToWorldFrame(Vec3.UNIT_Z, r3.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_X, r3.axisB);
        };
      }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 17: [function(_dereq_, module3, exports3) {
        module3.exports = PointToPointConstraint;
        var Constraint = _dereq_("./Constraint");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function PointToPointConstraint(bodyA, pivotA, bodyB, pivotB, maxForce) {
          Constraint.call(this, bodyA, bodyB);
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          this.pivotA = pivotA ? pivotA.clone() : new Vec3();
          this.pivotB = pivotB ? pivotB.clone() : new Vec3();
          var x = this.equationX = new ContactEquation(bodyA, bodyB);
          var y = this.equationY = new ContactEquation(bodyA, bodyB);
          var z = this.equationZ = new ContactEquation(bodyA, bodyB);
          this.equations.push(x, y, z);
          x.minForce = y.minForce = z.minForce = -maxForce;
          x.maxForce = y.maxForce = z.maxForce = maxForce;
          x.ni.set(1, 0, 0);
          y.ni.set(0, 1, 0);
          z.ni.set(0, 0, 1);
        }
        PointToPointConstraint.prototype = new Constraint();
        PointToPointConstraint.prototype.update = function() {
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var x = this.equationX;
          var y = this.equationY;
          var z = this.equationZ;
          bodyA.quaternion.vmult(this.pivotA, x.ri);
          bodyB.quaternion.vmult(this.pivotB, x.rj);
          y.ri.copy(x.ri);
          y.rj.copy(x.rj);
          z.ri.copy(x.ri);
          z.rj.copy(x.rj);
        };
      }, { "../equations/ContactEquation": 19, "../math/Vec3": 30, "./Constraint": 13 }], 18: [function(_dereq_, module3, exports3) {
        module3.exports = ConeEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function ConeEquation(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
          this.angle = typeof options.angle !== "undefined" ? options.angle : 0;
        }
        ConeEquation.prototype = new Equation();
        ConeEquation.prototype.constructor = ConeEquation;
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        ConeEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);
          var g = Math.cos(this.angle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 19: [function(_dereq_, module3, exports3) {
        module3.exports = ContactEquation;
        var Equation = _dereq_("./Equation");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        function ContactEquation(bodyA, bodyB, maxForce) {
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, 0, maxForce);
          this.restitution = 0;
          this.ri = new Vec3();
          this.rj = new Vec3();
          this.ni = new Vec3();
        }
        ContactEquation.prototype = new Equation();
        ContactEquation.prototype.constructor = ContactEquation;
        var ContactEquation_computeB_temp1 = new Vec3();
        var ContactEquation_computeB_temp2 = new Vec3();
        var ContactEquation_computeB_temp3 = new Vec3();
        ContactEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixn = ContactEquation_computeB_temp1, rjxn = ContactEquation_computeB_temp2, vi = bi.velocity, wi = bi.angularVelocity, fi = bi.force, taui = bi.torque, vj = bj.velocity, wj = bj.angularVelocity, fj = bj.force, tauj = bj.torque, penetrationVec = ContactEquation_computeB_temp3, GA = this.jacobianElementA, GB = this.jacobianElementB, n = this.ni;
          ri.cross(n, rixn);
          rj.cross(n, rjxn);
          n.negate(GA.spatial);
          rixn.negate(GA.rotational);
          GB.spatial.copy(n);
          GB.rotational.copy(rjxn);
          penetrationVec.copy(bj.position);
          penetrationVec.vadd(rj, penetrationVec);
          penetrationVec.vsub(bi.position, penetrationVec);
          penetrationVec.vsub(ri, penetrationVec);
          var g = n.dot(penetrationVec);
          var ePlusOne = this.restitution + 1;
          var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
          var GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
        var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();
        ContactEquation.prototype.getImpactVelocityAlongNormal = function() {
          var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
          var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
          var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
          var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
          var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;
          this.bi.position.vadd(this.ri, xi);
          this.bj.position.vadd(this.rj, xj);
          this.bi.getVelocityAtWorldPoint(xi, vi);
          this.bj.getVelocityAtWorldPoint(xj, vj);
          vi.vsub(vj, relVel);
          return this.ni.dot(relVel);
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 20: [function(_dereq_, module3, exports3) {
        module3.exports = Equation;
        var JacobianElement = _dereq_("../math/JacobianElement"), Vec3 = _dereq_("../math/Vec3");
        function Equation(bi, bj, minForce, maxForce) {
          this.id = Equation.id++;
          this.minForce = typeof minForce === "undefined" ? -1e6 : minForce;
          this.maxForce = typeof maxForce === "undefined" ? 1e6 : maxForce;
          this.bi = bi;
          this.bj = bj;
          this.a = 0;
          this.b = 0;
          this.eps = 0;
          this.jacobianElementA = new JacobianElement();
          this.jacobianElementB = new JacobianElement();
          this.enabled = true;
          this.setSpookParams(1e7, 4, 1 / 60);
        }
        Equation.prototype.constructor = Equation;
        Equation.id = 0;
        Equation.prototype.setSpookParams = function(stiffness, relaxation, timeStep) {
          var d = relaxation, k = stiffness, h = timeStep;
          this.a = 4 / (h * (1 + 4 * d));
          this.b = 4 * d / (1 + 4 * d);
          this.eps = 4 / (h * h * k * (1 + 4 * d));
        };
        Equation.prototype.computeB = function(a, b, h) {
          var GW = this.computeGW(), Gq = this.computeGq(), GiMf = this.computeGiMf();
          return -Gq * a - GW * b - GiMf * h;
        };
        Equation.prototype.computeGq = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, xi = bi.position, xj = bj.position;
          return GA.spatial.dot(xi) + GB.spatial.dot(xj);
        };
        var zero = new Vec3();
        Equation.prototype.computeGW = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.velocity, vj = bj.velocity, wi = bi.angularVelocity || zero, wj = bj.angularVelocity || zero;
          return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
        };
        Equation.prototype.computeGWlambda = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.vlambda, vj = bj.vlambda, wi = bi.wlambda || zero, wj = bj.wlambda || zero;
          return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
        };
        var iMfi = new Vec3(), iMfj = new Vec3(), invIi_vmult_taui = new Vec3(), invIj_vmult_tauj = new Vec3();
        Equation.prototype.computeGiMf = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, fi = bi.force, ti = bi.torque, fj = bj.force, tj = bj.torque, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve;
          if (bi.invInertiaWorldSolve) {
            bi.invInertiaWorldSolve.vmult(ti, invIi_vmult_taui);
          } else {
            invIi_vmult_taui.set(0, 0, 0);
          }
          if (bj.invInertiaWorldSolve) {
            bj.invInertiaWorldSolve.vmult(tj, invIj_vmult_tauj);
          } else {
            invIj_vmult_tauj.set(0, 0, 0);
          }
          fi.mult(invMassi, iMfi);
          fj.mult(invMassj, iMfj);
          return GA.multiplyVectors(iMfi, invIi_vmult_taui) + GB.multiplyVectors(iMfj, invIj_vmult_tauj);
        };
        var tmp = new Vec3();
        Equation.prototype.computeGiMGt = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaWorldSolve, invIj = bj.invInertiaWorldSolve, result = invMassi + invMassj;
          if (invIi) {
            invIi.vmult(GA.rotational, tmp);
            result += tmp.dot(GA.rotational);
          }
          if (invIj) {
            invIj.vmult(GB.rotational, tmp);
            result += tmp.dot(GB.rotational);
          }
          return result;
        };
        var addToWlambda_temp = new Vec3(), addToWlambda_Gi = new Vec3(), addToWlambda_Gj = new Vec3(), addToWlambda_ri = new Vec3(), addToWlambda_rj = new Vec3(), addToWlambda_Mdiag = new Vec3();
        Equation.prototype.addToWlambda = function(deltalambda) {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, temp = addToWlambda_temp;
          GA.spatial.mult(bi.invMassSolve * deltalambda, temp);
          bi.vlambda.vadd(temp, bi.vlambda);
          GB.spatial.mult(bj.invMassSolve * deltalambda, temp);
          bj.vlambda.vadd(temp, bj.vlambda);
          if (bi.invInertiaWorldSolve) {
            bi.invInertiaWorldSolve.vmult(GA.rotational, temp);
            temp.mult(deltalambda, temp);
            bi.wlambda.vadd(temp, bi.wlambda);
          }
          if (bj.invInertiaWorldSolve) {
            bj.invInertiaWorldSolve.vmult(GB.rotational, temp);
            temp.mult(deltalambda, temp);
            bj.wlambda.vadd(temp, bj.wlambda);
          }
        };
        Equation.prototype.computeC = function() {
          return this.computeGiMGt() + this.eps;
        };
      }, { "../math/JacobianElement": 26, "../math/Vec3": 30 }], 21: [function(_dereq_, module3, exports3) {
        module3.exports = FrictionEquation;
        var Equation = _dereq_("./Equation");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        function FrictionEquation(bodyA, bodyB, slipForce) {
          Equation.call(this, bodyA, bodyB, -slipForce, slipForce);
          this.ri = new Vec3();
          this.rj = new Vec3();
          this.t = new Vec3();
        }
        FrictionEquation.prototype = new Equation();
        FrictionEquation.prototype.constructor = FrictionEquation;
        var FrictionEquation_computeB_temp1 = new Vec3();
        var FrictionEquation_computeB_temp2 = new Vec3();
        FrictionEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixt = FrictionEquation_computeB_temp1, rjxt = FrictionEquation_computeB_temp2, t = this.t;
          ri.cross(t, rixt);
          rj.cross(t, rjxt);
          var GA = this.jacobianElementA, GB = this.jacobianElementB;
          t.negate(GA.spatial);
          rixt.negate(GA.rotational);
          GB.spatial.copy(t);
          GB.rotational.copy(rjxt);
          var GW = this.computeGW();
          var GiMf = this.computeGiMf();
          var B = -GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 22: [function(_dereq_, module3, exports3) {
        module3.exports = RotationalEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function RotationalEquation(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
          this.maxAngle = Math.PI / 2;
        }
        RotationalEquation.prototype = new Equation();
        RotationalEquation.prototype.constructor = RotationalEquation;
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        RotationalEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);
          var g = Math.cos(this.maxAngle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 23: [function(_dereq_, module3, exports3) {
        module3.exports = RotationalMotorEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function RotationalMotorEquation(bodyA, bodyB, maxForce) {
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = new Vec3();
          this.axisB = new Vec3();
          this.targetVelocity = 0;
        }
        RotationalMotorEquation.prototype = new Equation();
        RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;
        RotationalMotorEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, axisA = this.axisA, axisB = this.axisB, GA = this.jacobianElementA, GB = this.jacobianElementB;
          GA.rotational.copy(axisA);
          axisB.negate(GB.rotational);
          var GW = this.computeGW() - this.targetVelocity, GiMf = this.computeGiMf();
          var B = -GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 24: [function(_dereq_, module3, exports3) {
        var Utils = _dereq_("../utils/Utils");
        module3.exports = ContactMaterial;
        function ContactMaterial(m1, m2, options) {
          options = Utils.defaults(options, {
            friction: 0.3,
            restitution: 0.3,
            contactEquationStiffness: 1e7,
            contactEquationRelaxation: 3,
            frictionEquationStiffness: 1e7,
            frictionEquationRelaxation: 3
          });
          this.id = ContactMaterial.idCounter++;
          this.materials = [m1, m2];
          this.friction = options.friction;
          this.restitution = options.restitution;
          this.contactEquationStiffness = options.contactEquationStiffness;
          this.contactEquationRelaxation = options.contactEquationRelaxation;
          this.frictionEquationStiffness = options.frictionEquationStiffness;
          this.frictionEquationRelaxation = options.frictionEquationRelaxation;
        }
        ContactMaterial.idCounter = 0;
      }, { "../utils/Utils": 53 }], 25: [function(_dereq_, module3, exports3) {
        module3.exports = Material;
        function Material(options) {
          var name = "";
          options = options || {};
          if (typeof options === "string") {
            name = options;
            options = {};
          } else if (typeof options === "object") {
            name = "";
          }
          this.name = name;
          this.id = Material.idCounter++;
          this.friction = typeof options.friction !== "undefined" ? options.friction : -1;
          this.restitution = typeof options.restitution !== "undefined" ? options.restitution : -1;
        }
        Material.idCounter = 0;
      }, {}], 26: [function(_dereq_, module3, exports3) {
        module3.exports = JacobianElement;
        var Vec3 = _dereq_("./Vec3");
        function JacobianElement() {
          this.spatial = new Vec3();
          this.rotational = new Vec3();
        }
        JacobianElement.prototype.multiplyElement = function(element) {
          return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
        };
        JacobianElement.prototype.multiplyVectors = function(spatial, rotational) {
          return spatial.dot(this.spatial) + rotational.dot(this.rotational);
        };
      }, { "./Vec3": 30 }], 27: [function(_dereq_, module3, exports3) {
        module3.exports = Mat3;
        var Vec3 = _dereq_("./Vec3");
        function Mat3(elements) {
          if (elements) {
            this.elements = elements;
          } else {
            this.elements = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
        }
        Mat3.prototype.identity = function() {
          var e = this.elements;
          e[0] = 1;
          e[1] = 0;
          e[2] = 0;
          e[3] = 0;
          e[4] = 1;
          e[5] = 0;
          e[6] = 0;
          e[7] = 0;
          e[8] = 1;
        };
        Mat3.prototype.setZero = function() {
          var e = this.elements;
          e[0] = 0;
          e[1] = 0;
          e[2] = 0;
          e[3] = 0;
          e[4] = 0;
          e[5] = 0;
          e[6] = 0;
          e[7] = 0;
          e[8] = 0;
        };
        Mat3.prototype.setTrace = function(vec3) {
          var e = this.elements;
          e[0] = vec3.x;
          e[4] = vec3.y;
          e[8] = vec3.z;
        };
        Mat3.prototype.getTrace = function(target) {
          var target = target || new Vec3();
          var e = this.elements;
          target.x = e[0];
          target.y = e[4];
          target.z = e[8];
        };
        Mat3.prototype.vmult = function(v, target) {
          target = target || new Vec3();
          var e = this.elements, x = v.x, y = v.y, z = v.z;
          target.x = e[0] * x + e[1] * y + e[2] * z;
          target.y = e[3] * x + e[4] * y + e[5] * z;
          target.z = e[6] * x + e[7] * y + e[8] * z;
          return target;
        };
        Mat3.prototype.smult = function(s) {
          for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] *= s;
          }
        };
        Mat3.prototype.mmult = function(m, target) {
          var r = target || new Mat3();
          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              var sum = 0;
              for (var k = 0; k < 3; k++) {
                sum += m.elements[i + k * 3] * this.elements[k + j * 3];
              }
              r.elements[i + j * 3] = sum;
            }
          }
          return r;
        };
        Mat3.prototype.scale = function(v, target) {
          target = target || new Mat3();
          var e = this.elements, t = target.elements;
          for (var i = 0; i !== 3; i++) {
            t[3 * i + 0] = v.x * e[3 * i + 0];
            t[3 * i + 1] = v.y * e[3 * i + 1];
            t[3 * i + 2] = v.z * e[3 * i + 2];
          }
          return target;
        };
        Mat3.prototype.solve = function(b, target) {
          target = target || new Vec3();
          var nr = 3;
          var nc = 4;
          var eqns = [];
          for (var i = 0; i < nr * nc; i++) {
            eqns.push(0);
          }
          var i, j;
          for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
              eqns[i + nc * j] = this.elements[i + 3 * j];
            }
          }
          eqns[3 + 4 * 0] = b.x;
          eqns[3 + 4 * 1] = b.y;
          eqns[3 + 4 * 2] = b.z;
          var n = 3, k = n, np;
          var kp = 4;
          var p, els;
          do {
            i = k - n;
            if (eqns[i + nc * i] === 0) {
              for (j = i + 1; j < k; j++) {
                if (eqns[i + nc * j] !== 0) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
              }
            }
            if (eqns[i + nc * i] !== 0) {
              for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                } while (--np);
              }
            }
          } while (--n);
          target.z = eqns[2 * nc + 3] / eqns[2 * nc + 2];
          target.y = (eqns[1 * nc + 3] - eqns[1 * nc + 2] * target.z) / eqns[1 * nc + 1];
          target.x = (eqns[0 * nc + 3] - eqns[0 * nc + 2] * target.z - eqns[0 * nc + 1] * target.y) / eqns[0 * nc + 0];
          if (isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x === Infinity || target.y === Infinity || target.z === Infinity) {
            throw "Could not solve equation! Got x=[" + target.toString() + "], b=[" + b.toString() + "], A=[" + this.toString() + "]";
          }
          return target;
        };
        Mat3.prototype.e = function(row, column, value) {
          if (value === void 0) {
            return this.elements[column + 3 * row];
          } else {
            this.elements[column + 3 * row] = value;
          }
        };
        Mat3.prototype.copy = function(source) {
          for (var i = 0; i < source.elements.length; i++) {
            this.elements[i] = source.elements[i];
          }
          return this;
        };
        Mat3.prototype.toString = function() {
          var r = "";
          var sep = ",";
          for (var i = 0; i < 9; i++) {
            r += this.elements[i] + sep;
          }
          return r;
        };
        Mat3.prototype.reverse = function(target) {
          target = target || new Mat3();
          var nr = 3;
          var nc = 6;
          var eqns = [];
          for (var i = 0; i < nr * nc; i++) {
            eqns.push(0);
          }
          var i, j;
          for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
              eqns[i + nc * j] = this.elements[i + 3 * j];
            }
          }
          eqns[3 + 6 * 0] = 1;
          eqns[3 + 6 * 1] = 0;
          eqns[3 + 6 * 2] = 0;
          eqns[4 + 6 * 0] = 0;
          eqns[4 + 6 * 1] = 1;
          eqns[4 + 6 * 2] = 0;
          eqns[5 + 6 * 0] = 0;
          eqns[5 + 6 * 1] = 0;
          eqns[5 + 6 * 2] = 1;
          var n = 3, k = n, np;
          var kp = nc;
          var p;
          do {
            i = k - n;
            if (eqns[i + nc * i] === 0) {
              for (j = i + 1; j < k; j++) {
                if (eqns[i + nc * j] !== 0) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
              }
            }
            if (eqns[i + nc * i] !== 0) {
              for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                } while (--np);
              }
            }
          } while (--n);
          i = 2;
          do {
            j = i - 1;
            do {
              var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
              np = nc;
              do {
                p = nc - np;
                eqns[p + nc * j] = eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
              } while (--np);
            } while (j--);
          } while (--i);
          i = 2;
          do {
            var multiplier = 1 / eqns[i + nc * i];
            np = nc;
            do {
              p = nc - np;
              eqns[p + nc * i] = eqns[p + nc * i] * multiplier;
            } while (--np);
          } while (i--);
          i = 2;
          do {
            j = 2;
            do {
              p = eqns[nr + j + nc * i];
              if (isNaN(p) || p === Infinity) {
                throw "Could not reverse! A=[" + this.toString() + "]";
              }
              target.e(i, j, p);
            } while (j--);
          } while (i--);
          return target;
        };
        Mat3.prototype.setRotationFromQuaternion = function(q) {
          var x = q.x, y = q.y, z = q.z, w = q.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2, e = this.elements;
          e[3 * 0 + 0] = 1 - (yy + zz);
          e[3 * 0 + 1] = xy - wz;
          e[3 * 0 + 2] = xz + wy;
          e[3 * 1 + 0] = xy + wz;
          e[3 * 1 + 1] = 1 - (xx + zz);
          e[3 * 1 + 2] = yz - wx;
          e[3 * 2 + 0] = xz - wy;
          e[3 * 2 + 1] = yz + wx;
          e[3 * 2 + 2] = 1 - (xx + yy);
          return this;
        };
        Mat3.prototype.transpose = function(target) {
          target = target || new Mat3();
          var Mt = target.elements, M = this.elements;
          for (var i = 0; i !== 3; i++) {
            for (var j = 0; j !== 3; j++) {
              Mt[3 * i + j] = M[3 * j + i];
            }
          }
          return target;
        };
      }, { "./Vec3": 30 }], 28: [function(_dereq_, module3, exports3) {
        module3.exports = Quaternion;
        var Vec3 = _dereq_("./Vec3");
        function Quaternion(x, y, z, w) {
          this.x = x !== void 0 ? x : 0;
          this.y = y !== void 0 ? y : 0;
          this.z = z !== void 0 ? z : 0;
          this.w = w !== void 0 ? w : 1;
        }
        Quaternion.prototype.set = function(x, y, z, w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        };
        Quaternion.prototype.toString = function() {
          return this.x + "," + this.y + "," + this.z + "," + this.w;
        };
        Quaternion.prototype.toArray = function() {
          return [this.x, this.y, this.z, this.w];
        };
        Quaternion.prototype.setFromAxisAngle = function(axis, angle) {
          var s = Math.sin(angle * 0.5);
          this.x = axis.x * s;
          this.y = axis.y * s;
          this.z = axis.z * s;
          this.w = Math.cos(angle * 0.5);
        };
        Quaternion.prototype.toAxisAngle = function(targetAxis) {
          targetAxis = targetAxis || new Vec3();
          this.normalize();
          var angle = 2 * Math.acos(this.w);
          var s = Math.sqrt(1 - this.w * this.w);
          if (s < 1e-3) {
            targetAxis.x = this.x;
            targetAxis.y = this.y;
            targetAxis.z = this.z;
          } else {
            targetAxis.x = this.x / s;
            targetAxis.y = this.y / s;
            targetAxis.z = this.z / s;
          }
          return [targetAxis, angle];
        };
        var sfv_t1 = new Vec3(), sfv_t2 = new Vec3();
        Quaternion.prototype.setFromVectors = function(u, v) {
          if (u.isAntiparallelTo(v)) {
            var t1 = sfv_t1;
            var t2 = sfv_t2;
            u.tangents(t1, t2);
            this.setFromAxisAngle(t1, Math.PI);
          } else {
            var a = u.cross(v);
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = Math.sqrt(Math.pow(u.norm(), 2) * Math.pow(v.norm(), 2)) + u.dot(v);
            this.normalize();
          }
        };
        var Quaternion_mult_va = new Vec3();
        var Quaternion_mult_vb = new Vec3();
        var Quaternion_mult_vaxvb = new Vec3();
        Quaternion.prototype.mult = function(q, target) {
          target = target || new Quaternion();
          var w = this.w, va = Quaternion_mult_va, vb = Quaternion_mult_vb, vaxvb = Quaternion_mult_vaxvb;
          va.set(this.x, this.y, this.z);
          vb.set(q.x, q.y, q.z);
          target.w = w * q.w - va.dot(vb);
          va.cross(vb, vaxvb);
          target.x = w * vb.x + q.w * va.x + vaxvb.x;
          target.y = w * vb.y + q.w * va.y + vaxvb.y;
          target.z = w * vb.z + q.w * va.z + vaxvb.z;
          return target;
        };
        Quaternion.prototype.inverse = function(target) {
          var x = this.x, y = this.y, z = this.z, w = this.w;
          target = target || new Quaternion();
          this.conjugate(target);
          var inorm2 = 1 / (x * x + y * y + z * z + w * w);
          target.x *= inorm2;
          target.y *= inorm2;
          target.z *= inorm2;
          target.w *= inorm2;
          return target;
        };
        Quaternion.prototype.conjugate = function(target) {
          target = target || new Quaternion();
          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          target.w = this.w;
          return target;
        };
        Quaternion.prototype.normalize = function() {
          var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
          if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
          } else {
            l = 1 / l;
            this.x *= l;
            this.y *= l;
            this.z *= l;
            this.w *= l;
          }
        };
        Quaternion.prototype.normalizeFast = function() {
          var f = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
          if (f === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
          } else {
            this.x *= f;
            this.y *= f;
            this.z *= f;
            this.w *= f;
          }
        };
        Quaternion.prototype.vmult = function(v, target) {
          target = target || new Vec3();
          var x = v.x, y = v.y, z = v.z;
          var qx = this.x, qy = this.y, qz = this.z, qw = this.w;
          var ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
          target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
          return target;
        };
        Quaternion.prototype.copy = function(source) {
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          this.w = source.w;
          return this;
        };
        Quaternion.prototype.toEuler = function(target, order) {
          order = order || "YZX";
          var heading, attitude, bank;
          var x = this.x, y = this.y, z = this.z, w = this.w;
          switch (order) {
            case "YZX":
              var test = x * y + z * w;
              if (test > 0.499) {
                heading = 2 * Math.atan2(x, w);
                attitude = Math.PI / 2;
                bank = 0;
              }
              if (test < -0.499) {
                heading = -2 * Math.atan2(x, w);
                attitude = -Math.PI / 2;
                bank = 0;
              }
              if (isNaN(heading)) {
                var sqx = x * x;
                var sqy = y * y;
                var sqz = z * z;
                heading = Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
                attitude = Math.asin(2 * test);
                bank = Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);
              }
              break;
            default:
              throw new Error("Euler order " + order + " not supported yet.");
          }
          target.y = heading;
          target.z = attitude;
          target.x = bank;
        };
        Quaternion.prototype.setFromEuler = function(x, y, z, order) {
          order = order || "XYZ";
          var c1 = Math.cos(x / 2);
          var c2 = Math.cos(y / 2);
          var c3 = Math.cos(z / 2);
          var s1 = Math.sin(x / 2);
          var s2 = Math.sin(y / 2);
          var s3 = Math.sin(z / 2);
          if (order === "XYZ") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "YXZ") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === "ZXY") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "ZYX") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === "YZX") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "XZY") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          }
          return this;
        };
        Quaternion.prototype.clone = function() {
          return new Quaternion(this.x, this.y, this.z, this.w);
        };
      }, { "./Vec3": 30 }], 29: [function(_dereq_, module3, exports3) {
        var Vec3 = _dereq_("./Vec3");
        var Quaternion = _dereq_("./Quaternion");
        module3.exports = Transform;
        function Transform(options) {
          options = options || {};
          this.position = new Vec3();
          if (options.position) {
            this.position.copy(options.position);
          }
          this.quaternion = new Quaternion();
          if (options.quaternion) {
            this.quaternion.copy(options.quaternion);
          }
        }
        var tmpQuat = new Quaternion();
        Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result) {
          var result = result || new Vec3();
          worldPoint.vsub(position, result);
          quaternion.conjugate(tmpQuat);
          tmpQuat.vmult(result, result);
          return result;
        };
        Transform.prototype.pointToLocal = function(worldPoint, result) {
          return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
        };
        Transform.pointToWorldFrame = function(position, quaternion, localPoint, result) {
          var result = result || new Vec3();
          quaternion.vmult(localPoint, result);
          result.vadd(position, result);
          return result;
        };
        Transform.prototype.pointToWorld = function(localPoint, result) {
          return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
        };
        Transform.prototype.vectorToWorldFrame = function(localVector, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
        };
        Transform.vectorToWorldFrame = function(quaternion, localVector, result) {
          quaternion.vmult(localVector, result);
          return result;
        };
        Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result) {
          var result = result || new Vec3();
          quaternion.w *= -1;
          quaternion.vmult(worldVector, result);
          quaternion.w *= -1;
          return result;
        };
      }, { "./Quaternion": 28, "./Vec3": 30 }], 30: [function(_dereq_, module3, exports3) {
        module3.exports = Vec3;
        var Mat3 = _dereq_("./Mat3");
        function Vec3(x, y, z) {
          this.x = x || 0;
          this.y = y || 0;
          this.z = z || 0;
        }
        Vec3.ZERO = new Vec3(0, 0, 0);
        Vec3.UNIT_X = new Vec3(1, 0, 0);
        Vec3.UNIT_Y = new Vec3(0, 1, 0);
        Vec3.UNIT_Z = new Vec3(0, 0, 1);
        Vec3.prototype.cross = function(v, target) {
          var vx = v.x, vy = v.y, vz = v.z, x = this.x, y = this.y, z = this.z;
          target = target || new Vec3();
          target.x = y * vz - z * vy;
          target.y = z * vx - x * vz;
          target.z = x * vy - y * vx;
          return target;
        };
        Vec3.prototype.set = function(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
        };
        Vec3.prototype.setZero = function() {
          this.x = this.y = this.z = 0;
        };
        Vec3.prototype.vadd = function(v, target) {
          if (target) {
            target.x = v.x + this.x;
            target.y = v.y + this.y;
            target.z = v.z + this.z;
          } else {
            return new Vec3(
              this.x + v.x,
              this.y + v.y,
              this.z + v.z
            );
          }
        };
        Vec3.prototype.vsub = function(v, target) {
          if (target) {
            target.x = this.x - v.x;
            target.y = this.y - v.y;
            target.z = this.z - v.z;
          } else {
            return new Vec3(
              this.x - v.x,
              this.y - v.y,
              this.z - v.z
            );
          }
        };
        Vec3.prototype.crossmat = function() {
          return new Mat3([
            0,
            -this.z,
            this.y,
            this.z,
            0,
            -this.x,
            -this.y,
            this.x,
            0
          ]);
        };
        Vec3.prototype.normalize = function() {
          var x = this.x, y = this.y, z = this.z;
          var n = Math.sqrt(x * x + y * y + z * z);
          if (n > 0) {
            var invN = 1 / n;
            this.x *= invN;
            this.y *= invN;
            this.z *= invN;
          } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
          }
          return n;
        };
        Vec3.prototype.unit = function(target) {
          target = target || new Vec3();
          var x = this.x, y = this.y, z = this.z;
          var ninv = Math.sqrt(x * x + y * y + z * z);
          if (ninv > 0) {
            ninv = 1 / ninv;
            target.x = x * ninv;
            target.y = y * ninv;
            target.z = z * ninv;
          } else {
            target.x = 1;
            target.y = 0;
            target.z = 0;
          }
          return target;
        };
        Vec3.prototype.norm = function() {
          var x = this.x, y = this.y, z = this.z;
          return Math.sqrt(x * x + y * y + z * z);
        };
        Vec3.prototype.length = Vec3.prototype.norm;
        Vec3.prototype.norm2 = function() {
          return this.dot(this);
        };
        Vec3.prototype.lengthSquared = Vec3.prototype.norm2;
        Vec3.prototype.distanceTo = function(p) {
          var x = this.x, y = this.y, z = this.z;
          var px = p.x, py = p.y, pz = p.z;
          return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
        };
        Vec3.prototype.distanceSquared = function(p) {
          var x = this.x, y = this.y, z = this.z;
          var px = p.x, py = p.y, pz = p.z;
          return (px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z);
        };
        Vec3.prototype.mult = function(scalar, target) {
          target = target || new Vec3();
          var x = this.x, y = this.y, z = this.z;
          target.x = scalar * x;
          target.y = scalar * y;
          target.z = scalar * z;
          return target;
        };
        Vec3.prototype.scale = Vec3.prototype.mult;
        Vec3.prototype.dot = function(v) {
          return this.x * v.x + this.y * v.y + this.z * v.z;
        };
        Vec3.prototype.isZero = function() {
          return this.x === 0 && this.y === 0 && this.z === 0;
        };
        Vec3.prototype.negate = function(target) {
          target = target || new Vec3();
          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          return target;
        };
        var Vec3_tangents_n = new Vec3();
        var Vec3_tangents_randVec = new Vec3();
        Vec3.prototype.tangents = function(t1, t2) {
          var norm = this.norm();
          if (norm > 0) {
            var n = Vec3_tangents_n;
            var inorm = 1 / norm;
            n.set(this.x * inorm, this.y * inorm, this.z * inorm);
            var randVec = Vec3_tangents_randVec;
            if (Math.abs(n.x) < 0.9) {
              randVec.set(1, 0, 0);
              n.cross(randVec, t1);
            } else {
              randVec.set(0, 1, 0);
              n.cross(randVec, t1);
            }
            n.cross(t1, t2);
          } else {
            t1.set(1, 0, 0);
            t2.set(0, 1, 0);
          }
        };
        Vec3.prototype.toString = function() {
          return this.x + "," + this.y + "," + this.z;
        };
        Vec3.prototype.toArray = function() {
          return [this.x, this.y, this.z];
        };
        Vec3.prototype.copy = function(source) {
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          return this;
        };
        Vec3.prototype.lerp = function(v, t, target) {
          var x = this.x, y = this.y, z = this.z;
          target.x = x + (v.x - x) * t;
          target.y = y + (v.y - y) * t;
          target.z = z + (v.z - z) * t;
        };
        Vec3.prototype.almostEquals = function(v, precision) {
          if (precision === void 0) {
            precision = 1e-6;
          }
          if (Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) {
            return false;
          }
          return true;
        };
        Vec3.prototype.almostZero = function(precision) {
          if (precision === void 0) {
            precision = 1e-6;
          }
          if (Math.abs(this.x) > precision || Math.abs(this.y) > precision || Math.abs(this.z) > precision) {
            return false;
          }
          return true;
        };
        var antip_neg = new Vec3();
        Vec3.prototype.isAntiparallelTo = function(v, precision) {
          this.negate(antip_neg);
          return antip_neg.almostEquals(v, precision);
        };
        Vec3.prototype.clone = function() {
          return new Vec3(this.x, this.y, this.z);
        };
      }, { "./Mat3": 27 }], 31: [function(_dereq_, module3, exports3) {
        module3.exports = Body;
        var EventTarget = _dereq_("../utils/EventTarget");
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Material = _dereq_("../material/Material");
        var AABB = _dereq_("../collision/AABB");
        var Box = _dereq_("../shapes/Box");
        function Body(options) {
          options = options || {};
          EventTarget.apply(this);
          this.id = Body.idCounter++;
          this.world = null;
          this.preStep = null;
          this.postStep = null;
          this.vlambda = new Vec3();
          this.collisionFilterGroup = typeof options.collisionFilterGroup === "number" ? options.collisionFilterGroup : 1;
          this.collisionFilterMask = typeof options.collisionFilterMask === "number" ? options.collisionFilterMask : 1;
          this.collisionResponse = true;
          this.position = new Vec3();
          if (options.position) {
            this.position.copy(options.position);
          }
          this.previousPosition = new Vec3();
          this.initPosition = new Vec3();
          this.velocity = new Vec3();
          if (options.velocity) {
            this.velocity.copy(options.velocity);
          }
          this.initVelocity = new Vec3();
          this.force = new Vec3();
          var mass = typeof options.mass === "number" ? options.mass : 0;
          this.mass = mass;
          this.invMass = mass > 0 ? 1 / mass : 0;
          this.material = options.material || null;
          this.linearDamping = typeof options.linearDamping === "number" ? options.linearDamping : 0.01;
          this.type = mass <= 0 ? Body.STATIC : Body.DYNAMIC;
          if (typeof options.type === typeof Body.STATIC) {
            this.type = options.type;
          }
          this.allowSleep = typeof options.allowSleep !== "undefined" ? options.allowSleep : true;
          this.sleepState = 0;
          this.sleepSpeedLimit = typeof options.sleepSpeedLimit !== "undefined" ? options.sleepSpeedLimit : 0.1;
          this.sleepTimeLimit = typeof options.sleepTimeLimit !== "undefined" ? options.sleepTimeLimit : 1;
          this.timeLastSleepy = 0;
          this._wakeUpAfterNarrowphase = false;
          this.torque = new Vec3();
          this.quaternion = new Quaternion();
          if (options.quaternion) {
            this.quaternion.copy(options.quaternion);
          }
          this.initQuaternion = new Quaternion();
          this.angularVelocity = new Vec3();
          if (options.angularVelocity) {
            this.angularVelocity.copy(options.angularVelocity);
          }
          this.initAngularVelocity = new Vec3();
          this.interpolatedPosition = new Vec3();
          this.interpolatedQuaternion = new Quaternion();
          this.shapes = [];
          this.shapeOffsets = [];
          this.shapeOrientations = [];
          this.inertia = new Vec3();
          this.invInertia = new Vec3();
          this.invInertiaWorld = new Mat3();
          this.invMassSolve = 0;
          this.invInertiaSolve = new Vec3();
          this.invInertiaWorldSolve = new Mat3();
          this.fixedRotation = typeof options.fixedRotation !== "undefined" ? options.fixedRotation : false;
          this.angularDamping = typeof options.angularDamping !== "undefined" ? options.angularDamping : 0.01;
          this.aabb = new AABB();
          this.aabbNeedsUpdate = true;
          this.wlambda = new Vec3();
          if (options.shape) {
            this.addShape(options.shape);
          }
          this.updateMassProperties();
        }
        Body.prototype = new EventTarget();
        Body.prototype.constructor = Body;
        Body.DYNAMIC = 1;
        Body.STATIC = 2;
        Body.KINEMATIC = 4;
        Body.AWAKE = 0;
        Body.SLEEPY = 1;
        Body.SLEEPING = 2;
        Body.idCounter = 0;
        Body.prototype.wakeUp = function() {
          var s = this.sleepState;
          this.sleepState = 0;
          if (s === Body.SLEEPING) {
            this.dispatchEvent({ type: "wakeup" });
          }
        };
        Body.prototype.sleep = function() {
          this.sleepState = Body.SLEEPING;
          this.velocity.set(0, 0, 0);
          this.angularVelocity.set(0, 0, 0);
        };
        Body.sleepyEvent = {
          type: "sleepy"
        };
        Body.sleepEvent = {
          type: "sleep"
        };
        Body.prototype.sleepTick = function(time) {
          if (this.allowSleep) {
            var sleepState = this.sleepState;
            var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
            var speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);
            if (sleepState === Body.AWAKE && speedSquared < speedLimitSquared) {
              this.sleepState = Body.SLEEPY;
              this.timeLastSleepy = time;
              this.dispatchEvent(Body.sleepyEvent);
            } else if (sleepState === Body.SLEEPY && speedSquared > speedLimitSquared) {
              this.wakeUp();
            } else if (sleepState === Body.SLEEPY && time - this.timeLastSleepy > this.sleepTimeLimit) {
              this.sleep();
              this.dispatchEvent(Body.sleepEvent);
            }
          }
        };
        Body.prototype.updateSolveMassProperties = function() {
          if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
            this.invMassSolve = 0;
            this.invInertiaSolve.setZero();
            this.invInertiaWorldSolve.setZero();
          } else {
            this.invMassSolve = this.invMass;
            this.invInertiaSolve.copy(this.invInertia);
            this.invInertiaWorldSolve.copy(this.invInertiaWorld);
          }
        };
        Body.prototype.pointToLocalFrame = function(worldPoint, result) {
          var result = result || new Vec3();
          worldPoint.vsub(this.position, result);
          this.quaternion.conjugate().vmult(result, result);
          return result;
        };
        Body.prototype.vectorToLocalFrame = function(worldVector, result) {
          var result = result || new Vec3();
          this.quaternion.conjugate().vmult(worldVector, result);
          return result;
        };
        Body.prototype.pointToWorldFrame = function(localPoint, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localPoint, result);
          result.vadd(this.position, result);
          return result;
        };
        Body.prototype.vectorToWorldFrame = function(localVector, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
        };
        var tmpVec = new Vec3();
        var tmpQuat = new Quaternion();
        Body.prototype.addShape = function(shape, _offset, _orientation) {
          var offset = new Vec3();
          var orientation = new Quaternion();
          if (_offset) {
            offset.copy(_offset);
          }
          if (_orientation) {
            orientation.copy(_orientation);
          }
          this.shapes.push(shape);
          this.shapeOffsets.push(offset);
          this.shapeOrientations.push(orientation);
          this.updateMassProperties();
          this.updateBoundingRadius();
          this.aabbNeedsUpdate = true;
          return this;
        };
        Body.prototype.updateBoundingRadius = function() {
          var shapes = this.shapes, shapeOffsets = this.shapeOffsets, N = shapes.length, radius = 0;
          for (var i = 0; i !== N; i++) {
            var shape = shapes[i];
            shape.updateBoundingSphereRadius();
            var offset = shapeOffsets[i].norm(), r = shape.boundingSphereRadius;
            if (offset + r > radius) {
              radius = offset + r;
            }
          }
          this.boundingRadius = radius;
        };
        var computeAABB_shapeAABB = new AABB();
        Body.prototype.computeAABB = function() {
          var shapes = this.shapes, shapeOffsets = this.shapeOffsets, shapeOrientations = this.shapeOrientations, N = shapes.length, offset = tmpVec, orientation = tmpQuat, bodyQuat = this.quaternion, aabb = this.aabb, shapeAABB = computeAABB_shapeAABB;
          for (var i = 0; i !== N; i++) {
            var shape = shapes[i];
            shapeOrientations[i].mult(bodyQuat, orientation);
            orientation.vmult(shapeOffsets[i], offset);
            offset.vadd(this.position, offset);
            shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);
            if (i === 0) {
              aabb.copy(shapeAABB);
            } else {
              aabb.extend(shapeAABB);
            }
          }
          this.aabbNeedsUpdate = false;
        };
        var uiw_m1 = new Mat3(), uiw_m2 = new Mat3(), uiw_m3 = new Mat3();
        Body.prototype.updateInertiaWorld = function(force) {
          var I = this.invInertia;
          if (I.x === I.y && I.y === I.z && !force) {
          } else {
            var m1 = uiw_m1, m2 = uiw_m2, m3 = uiw_m3;
            m1.setRotationFromQuaternion(this.quaternion);
            m1.transpose(m2);
            m1.scale(I, m1);
            m1.mmult(m2, this.invInertiaWorld);
          }
        };
        var Body_applyForce_r = new Vec3();
        var Body_applyForce_rotForce = new Vec3();
        Body.prototype.applyForce = function(force, worldPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var r = Body_applyForce_r;
          worldPoint.vsub(this.position, r);
          var rotForce = Body_applyForce_rotForce;
          r.cross(force, rotForce);
          this.force.vadd(force, this.force);
          this.torque.vadd(rotForce, this.torque);
        };
        var Body_applyLocalForce_worldForce = new Vec3();
        var Body_applyLocalForce_worldPoint = new Vec3();
        Body.prototype.applyLocalForce = function(localForce, localPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var worldForce = Body_applyLocalForce_worldForce;
          var worldPoint = Body_applyLocalForce_worldPoint;
          this.vectorToWorldFrame(localForce, worldForce);
          this.pointToWorldFrame(localPoint, worldPoint);
          this.applyForce(worldForce, worldPoint);
        };
        var Body_applyImpulse_r = new Vec3();
        var Body_applyImpulse_velo = new Vec3();
        var Body_applyImpulse_rotVelo = new Vec3();
        Body.prototype.applyImpulse = function(impulse, worldPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var r = Body_applyImpulse_r;
          worldPoint.vsub(this.position, r);
          var velo = Body_applyImpulse_velo;
          velo.copy(impulse);
          velo.mult(this.invMass, velo);
          this.velocity.vadd(velo, this.velocity);
          var rotVelo = Body_applyImpulse_rotVelo;
          r.cross(impulse, rotVelo);
          this.invInertiaWorld.vmult(rotVelo, rotVelo);
          this.angularVelocity.vadd(rotVelo, this.angularVelocity);
        };
        var Body_applyLocalImpulse_worldImpulse = new Vec3();
        var Body_applyLocalImpulse_worldPoint = new Vec3();
        Body.prototype.applyLocalImpulse = function(localImpulse, localPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var worldImpulse = Body_applyLocalImpulse_worldImpulse;
          var worldPoint = Body_applyLocalImpulse_worldPoint;
          this.vectorToWorldFrame(localImpulse, worldImpulse);
          this.pointToWorldFrame(localPoint, worldPoint);
          this.applyImpulse(worldImpulse, worldPoint);
        };
        var Body_updateMassProperties_halfExtents = new Vec3();
        Body.prototype.updateMassProperties = function() {
          var halfExtents = Body_updateMassProperties_halfExtents;
          this.invMass = this.mass > 0 ? 1 / this.mass : 0;
          var I = this.inertia;
          var fixed = this.fixedRotation;
          this.computeAABB();
          halfExtents.set(
            (this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2,
            (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2,
            (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2
          );
          Box.calculateInertia(halfExtents, this.mass, I);
          this.invInertia.set(
            I.x > 0 && !fixed ? 1 / I.x : 0,
            I.y > 0 && !fixed ? 1 / I.y : 0,
            I.z > 0 && !fixed ? 1 / I.z : 0
          );
          this.updateInertiaWorld(true);
        };
        Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result) {
          var r = new Vec3();
          worldPoint.vsub(this.position, r);
          this.angularVelocity.cross(r, result);
          this.velocity.vadd(result, result);
          return result;
        };
      }, { "../collision/AABB": 3, "../material/Material": 25, "../math/Mat3": 27, "../math/Quaternion": 28, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Shape": 43, "../utils/EventTarget": 49 }], 32: [function(_dereq_, module3, exports3) {
        var Body = _dereq_("./Body");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Ray = _dereq_("../collision/Ray");
        var WheelInfo = _dereq_("../objects/WheelInfo");
        module3.exports = RaycastVehicle;
        function RaycastVehicle(options) {
          this.chassisBody = options.chassisBody;
          this.wheelInfos = [];
          this.sliding = false;
          this.world = null;
          this.indexRightAxis = typeof options.indexRightAxis !== "undefined" ? options.indexRightAxis : 1;
          this.indexForwardAxis = typeof options.indexForwardAxis !== "undefined" ? options.indexForwardAxis : 0;
          this.indexUpAxis = typeof options.indexUpAxis !== "undefined" ? options.indexUpAxis : 2;
        }
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        var tmpVec3 = new Vec3();
        var tmpVec4 = new Vec3();
        var tmpVec5 = new Vec3();
        var tmpVec6 = new Vec3();
        var tmpRay = new Ray();
        RaycastVehicle.prototype.addWheel = function(options) {
          options = options || {};
          var info = new WheelInfo(options);
          var index = this.wheelInfos.length;
          this.wheelInfos.push(info);
          return index;
        };
        RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
          var wheel = this.wheelInfos[wheelIndex];
          wheel.steering = value;
        };
        var torque = new Vec3();
        RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex) {
          this.wheelInfos[wheelIndex].engineForce = value;
        };
        RaycastVehicle.prototype.setBrake = function(brake, wheelIndex) {
          this.wheelInfos[wheelIndex].brake = brake;
        };
        RaycastVehicle.prototype.addToWorld = function(world) {
          var constraints = this.constraints;
          world.add(this.chassisBody);
          var that = this;
          this.preStepCallback = function() {
            that.updateVehicle(world.dt);
          };
          world.addEventListener("preStep", this.preStepCallback);
          this.world = world;
        };
        RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result) {
          result.set(
            axisIndex === 0 ? 1 : 0,
            axisIndex === 1 ? 1 : 0,
            axisIndex === 2 ? 1 : 0
          );
          this.chassisBody.vectorToWorldFrame(result, result);
        };
        RaycastVehicle.prototype.updateVehicle = function(timeStep) {
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;
          for (var i = 0; i < numWheels; i++) {
            this.updateWheelTransform(i);
          }
          this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();
          var forwardWorld = new Vec3();
          this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);
          if (forwardWorld.dot(chassisBody.velocity) < 0) {
            this.currentVehicleSpeedKmHour *= -1;
          }
          for (var i = 0; i < numWheels; i++) {
            this.castRay(wheelInfos[i]);
          }
          this.updateSuspension(timeStep);
          var impulse = new Vec3();
          var relpos = new Vec3();
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var suspensionForce = wheel.suspensionForce;
            if (suspensionForce > wheel.maxSuspensionForce) {
              suspensionForce = wheel.maxSuspensionForce;
            }
            wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);
            wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
            chassisBody.applyImpulse(
              impulse,
              wheel.raycastResult.hitPointWorld
              /*relpos*/
            );
          }
          this.updateFriction(timeStep);
          var hitNormalWorldScaledWithProj = new Vec3();
          var fwd = new Vec3();
          var vel = new Vec3();
          for (i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);
            var m = 1;
            switch (this.indexUpAxis) {
              case 1:
                m = -1;
                break;
            }
            if (wheel.isInContact) {
              this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
              var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
              wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);
              fwd.vsub(hitNormalWorldScaledWithProj, fwd);
              var proj2 = fwd.dot(vel);
              wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
            }
            if ((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed) {
              wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
            }
            if (Math.abs(wheel.brake) > Math.abs(wheel.engineForce)) {
              wheel.deltaRotation = 0;
            }
            wheel.rotation += wheel.deltaRotation;
            wheel.deltaRotation *= 0.99;
          }
        };
        RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
          var chassisBody = this.chassisBody;
          var chassisMass = chassisBody.mass;
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          for (var w_it = 0; w_it < numWheels; w_it++) {
            var wheel = wheelInfos[w_it];
            if (wheel.isInContact) {
              var force;
              var susp_length = wheel.suspensionRestLength;
              var current_length = wheel.suspensionLength;
              var length_diff = susp_length - current_length;
              force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;
              var projected_rel_vel = wheel.suspensionRelativeVelocity;
              var susp_damping;
              if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
              } else {
                susp_damping = wheel.dampingRelaxation;
              }
              force -= susp_damping * projected_rel_vel;
              wheel.suspensionForce = force * chassisMass;
              if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
              }
            } else {
              wheel.suspensionForce = 0;
            }
          }
        };
        RaycastVehicle.prototype.removeFromWorld = function(world) {
          var constraints = this.constraints;
          world.remove(this.chassisBody);
          world.removeEventListener("preStep", this.preStepCallback);
          this.world = null;
        };
        var castRay_rayvector = new Vec3();
        var castRay_target = new Vec3();
        RaycastVehicle.prototype.castRay = function(wheel) {
          var rayvector = castRay_rayvector;
          var target = castRay_target;
          this.updateWheelTransformWorld(wheel);
          var chassisBody = this.chassisBody;
          var depth = -1;
          var raylen = wheel.suspensionRestLength + wheel.radius;
          wheel.directionWorld.scale(raylen, rayvector);
          var source = wheel.chassisConnectionPointWorld;
          source.vadd(rayvector, target);
          var raycastResult = wheel.raycastResult;
          var param = 0;
          raycastResult.reset();
          var oldState = chassisBody.collisionResponse;
          chassisBody.collisionResponse = false;
          this.world.rayTest(source, target, raycastResult);
          chassisBody.collisionResponse = oldState;
          var object = raycastResult.body;
          wheel.raycastResult.groundObject = 0;
          if (object) {
            depth = raycastResult.distance;
            wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld;
            wheel.isInContact = true;
            var hitDistance = raycastResult.distance;
            wheel.suspensionLength = hitDistance - wheel.radius;
            var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
            var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
            if (wheel.suspensionLength < minSuspensionLength) {
              wheel.suspensionLength = minSuspensionLength;
            }
            if (wheel.suspensionLength > maxSuspensionLength) {
              wheel.suspensionLength = maxSuspensionLength;
              wheel.raycastResult.reset();
            }
            var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);
            var chassis_velocity_at_contactPoint = new Vec3();
            chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);
            var projVel = wheel.raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
            if (denominator >= -0.1) {
              wheel.suspensionRelativeVelocity = 0;
              wheel.clippedInvContactDotSuspension = 1 / 0.1;
            } else {
              var inv = -1 / denominator;
              wheel.suspensionRelativeVelocity = projVel * inv;
              wheel.clippedInvContactDotSuspension = inv;
            }
          } else {
            wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
            wheel.suspensionRelativeVelocity = 0;
            wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
            wheel.clippedInvContactDotSuspension = 1;
          }
          return depth;
        };
        RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel) {
          wheel.isInContact = false;
          var chassisBody = this.chassisBody;
          chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
          chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
          chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
        };
        RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex) {
          var up = tmpVec4;
          var right = tmpVec5;
          var fwd = tmpVec6;
          var wheel = this.wheelInfos[wheelIndex];
          this.updateWheelTransformWorld(wheel);
          wheel.directionLocal.scale(-1, up);
          right.copy(wheel.axleLocal);
          up.cross(right, fwd);
          fwd.normalize();
          right.normalize();
          var steering = wheel.steering;
          var steeringOrn = new Quaternion();
          steeringOrn.setFromAxisAngle(up, steering);
          var rotatingOrn = new Quaternion();
          rotatingOrn.setFromAxisAngle(right, wheel.rotation);
          var q = wheel.worldTransform.quaternion;
          this.chassisBody.quaternion.mult(steeringOrn, q);
          q.mult(rotatingOrn, q);
          q.normalize();
          var p = wheel.worldTransform.position;
          p.copy(wheel.directionWorld);
          p.scale(wheel.suspensionLength, p);
          p.vadd(wheel.chassisConnectionPointWorld, p);
        };
        var directions = [
          new Vec3(1, 0, 0),
          new Vec3(0, 1, 0),
          new Vec3(0, 0, 1)
        ];
        RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
          return this.wheelInfos[wheelIndex].worldTransform;
        };
        var updateFriction_surfNormalWS_scaled_proj = new Vec3();
        var updateFriction_axle = [];
        var updateFriction_forwardWS = [];
        var sideFrictionStiffness2 = 1;
        RaycastVehicle.prototype.updateFriction = function(timeStep) {
          var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;
          var forwardWS = updateFriction_forwardWS;
          var axle = updateFriction_axle;
          var numWheelsOnGround = 0;
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            if (groundObject) {
              numWheelsOnGround++;
            }
            wheel.sideImpulse = 0;
            wheel.forwardImpulse = 0;
            if (!forwardWS[i]) {
              forwardWS[i] = new Vec3();
            }
            if (!axle[i]) {
              axle[i] = new Vec3();
            }
          }
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            if (groundObject) {
              var axlei = axle[i];
              var wheelTrans = this.getWheelTransformWorld(i);
              wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);
              var surfNormalWS = wheel.raycastResult.hitNormalWorld;
              var proj = axlei.dot(surfNormalWS);
              surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
              axlei.vsub(surfNormalWS_scaled_proj, axlei);
              axlei.normalize();
              surfNormalWS.cross(axlei, forwardWS[i]);
              forwardWS[i].normalize();
              wheel.sideImpulse = resolveSingleBilateral(
                chassisBody,
                wheel.raycastResult.hitPointWorld,
                groundObject,
                wheel.raycastResult.hitPointWorld,
                axlei
              );
              wheel.sideImpulse *= sideFrictionStiffness2;
            }
          }
          var sideFactor = 1;
          var fwdFactor = 0.5;
          this.sliding = false;
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            var rollingFriction = 0;
            wheel.slipInfo = 1;
            if (groundObject) {
              var defaultRollingFrictionImpulse = 0;
              var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;
              rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);
              rollingFriction += wheel.engineForce * timeStep;
              var factor = maxImpulse / rollingFriction;
              wheel.slipInfo *= factor;
            }
            wheel.forwardImpulse = 0;
            wheel.skidInfo = 1;
            if (groundObject) {
              wheel.skidInfo = 1;
              var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
              var maximpSide = maximp;
              var maximpSquared = maximp * maximpSide;
              wheel.forwardImpulse = rollingFriction;
              var x = wheel.forwardImpulse * fwdFactor;
              var y = wheel.sideImpulse * sideFactor;
              var impulseSquared = x * x + y * y;
              wheel.sliding = false;
              if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;
                var factor = maximp / Math.sqrt(impulseSquared);
                wheel.skidInfo *= factor;
              }
            }
          }
          if (this.sliding) {
            for (var i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];
              if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1) {
                  wheel.forwardImpulse *= wheel.skidInfo;
                  wheel.sideImpulse *= wheel.skidInfo;
                }
              }
            }
          }
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var rel_pos = new Vec3();
            rel_pos.copy(wheel.raycastResult.hitPointWorld);
            if (wheel.forwardImpulse !== 0) {
              var impulse = new Vec3();
              forwardWS[i].scale(wheel.forwardImpulse, impulse);
              chassisBody.applyImpulse(impulse, rel_pos);
            }
            if (wheel.sideImpulse !== 0) {
              var groundObject = wheel.raycastResult.body;
              var rel_pos2 = new Vec3();
              rel_pos2.copy(wheel.raycastResult.hitPointWorld);
              var sideImp = new Vec3();
              axle[i].scale(wheel.sideImpulse, sideImp);
              chassisBody.pointToLocalFrame(rel_pos, rel_pos);
              rel_pos["xyz"[this.indexUpAxis]] *= wheel.rollInfluence;
              chassisBody.pointToWorldFrame(rel_pos, rel_pos);
              chassisBody.applyImpulse(sideImp, rel_pos);
              sideImp.scale(-1, sideImp);
              groundObject.applyImpulse(sideImp, rel_pos2);
            }
          }
        };
        var calcRollingFriction_vel1 = new Vec3();
        var calcRollingFriction_vel2 = new Vec3();
        var calcRollingFriction_vel = new Vec3();
        function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
          var j1 = 0;
          var contactPosWorld = frictionPosWorld;
          var vel1 = calcRollingFriction_vel1;
          var vel2 = calcRollingFriction_vel2;
          var vel = calcRollingFriction_vel;
          body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
          body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
          vel1.vsub(vel2, vel);
          var vrel = frictionDirectionWorld.dot(vel);
          var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
          var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
          var relaxation = 1;
          var jacDiagABInv = relaxation / (denom0 + denom1);
          j1 = -vrel * jacDiagABInv;
          if (maxImpulse < j1) {
            j1 = maxImpulse;
          }
          if (j1 < -maxImpulse) {
            j1 = -maxImpulse;
          }
          return j1;
        }
        var computeImpulseDenominator_r0 = new Vec3();
        var computeImpulseDenominator_c0 = new Vec3();
        var computeImpulseDenominator_vec = new Vec3();
        var computeImpulseDenominator_m = new Vec3();
        function computeImpulseDenominator(body, pos, normal) {
          var r0 = computeImpulseDenominator_r0;
          var c0 = computeImpulseDenominator_c0;
          var vec = computeImpulseDenominator_vec;
          var m = computeImpulseDenominator_m;
          pos.vsub(body.position, r0);
          r0.cross(normal, c0);
          body.invInertiaWorld.vmult(c0, m);
          m.cross(r0, vec);
          return body.invMass + normal.dot(vec);
        }
        var resolveSingleBilateral_vel1 = new Vec3();
        var resolveSingleBilateral_vel2 = new Vec3();
        var resolveSingleBilateral_vel = new Vec3();
        function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse) {
          var normalLenSqr = normal.norm2();
          if (normalLenSqr > 1.1) {
            return 0;
          }
          var vel1 = resolveSingleBilateral_vel1;
          var vel2 = resolveSingleBilateral_vel2;
          var vel = resolveSingleBilateral_vel;
          body1.getVelocityAtWorldPoint(pos1, vel1);
          body2.getVelocityAtWorldPoint(pos2, vel2);
          vel1.vsub(vel2, vel);
          var rel_vel = normal.dot(vel);
          var contactDamping = 0.2;
          var massTerm = 1 / (body1.invMass + body2.invMass);
          var impulse = -contactDamping * rel_vel * massTerm;
          return impulse;
        }
      }, { "../collision/Ray": 9, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/WheelInfo": 36, "./Body": 31 }], 33: [function(_dereq_, module3, exports3) {
        var Body = _dereq_("./Body");
        var Sphere = _dereq_("../shapes/Sphere");
        var Box = _dereq_("../shapes/Box");
        var Vec3 = _dereq_("../math/Vec3");
        var HingeConstraint = _dereq_("../constraints/HingeConstraint");
        module3.exports = RigidVehicle;
        function RigidVehicle(options) {
          this.wheelBodies = [];
          this.coordinateSystem = typeof options.coordinateSystem === "undefined" ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();
          this.chassisBody = options.chassisBody;
          if (!this.chassisBody) {
            var chassisShape = new Box(new Vec3(5, 2, 0.5));
            this.chassisBody = new Body(1, chassisShape);
          }
          this.constraints = [];
          this.wheelAxes = [];
          this.wheelForces = [];
        }
        RigidVehicle.prototype.addWheel = function(options) {
          options = options || {};
          var wheelBody = options.body;
          if (!wheelBody) {
            wheelBody = new Body(1, new Sphere(1.2));
          }
          this.wheelBodies.push(wheelBody);
          this.wheelForces.push(0);
          var zero = new Vec3();
          var position = typeof options.position !== "undefined" ? options.position.clone() : new Vec3();
          var worldPosition = new Vec3();
          this.chassisBody.pointToWorldFrame(position, worldPosition);
          wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
          var axis = typeof options.axis !== "undefined" ? options.axis.clone() : new Vec3(0, 1, 0);
          this.wheelAxes.push(axis);
          var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
            pivotA: position,
            axisA: axis,
            pivotB: Vec3.ZERO,
            axisB: axis,
            collideConnected: false
          });
          this.constraints.push(hingeConstraint);
          return this.wheelBodies.length - 1;
        };
        RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var c = Math.cos(value), s = Math.sin(value), x = axis.x, y = axis.y;
          this.constraints[wheelIndex].axisA.set(
            c * x - s * y,
            s * x + c * y,
            0
          );
        };
        RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex) {
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.enableMotor();
          hingeConstraint.motorTargetVelocity = value;
        };
        RigidVehicle.prototype.disableMotor = function(wheelIndex) {
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.disableMotor();
        };
        var torque = new Vec3();
        RigidVehicle.prototype.setWheelForce = function(value, wheelIndex) {
          this.wheelForces[wheelIndex] = value;
        };
        RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var bodyTorque = wheelBody.torque;
          axis.scale(value, torque);
          wheelBody.vectorToWorldFrame(torque, torque);
          bodyTorque.vadd(torque, bodyTorque);
        };
        RigidVehicle.prototype.addToWorld = function(world) {
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);
          for (var i = 0; i < bodies.length; i++) {
            world.add(bodies[i]);
          }
          for (var i = 0; i < constraints.length; i++) {
            world.addConstraint(constraints[i]);
          }
          world.addEventListener("preStep", this._update.bind(this));
        };
        RigidVehicle.prototype._update = function() {
          var wheelForces = this.wheelForces;
          for (var i = 0; i < wheelForces.length; i++) {
            this.applyWheelForce(wheelForces[i], i);
          }
        };
        RigidVehicle.prototype.removeFromWorld = function(world) {
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);
          for (var i = 0; i < bodies.length; i++) {
            world.remove(bodies[i]);
          }
          for (var i = 0; i < constraints.length; i++) {
            world.removeConstraint(constraints[i]);
          }
        };
        var worldAxis = new Vec3();
        RigidVehicle.prototype.getWheelSpeed = function(wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var w = wheelBody.angularVelocity;
          this.chassisBody.vectorToWorldFrame(axis, worldAxis);
          return w.dot(worldAxis);
        };
      }, { "../constraints/HingeConstraint": 15, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Sphere": 44, "./Body": 31 }], 34: [function(_dereq_, module3, exports3) {
        module3.exports = SPHSystem;
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Particle = _dereq_("../shapes/Particle");
        var Body = _dereq_("../objects/Body");
        var Material = _dereq_("../material/Material");
        function SPHSystem() {
          this.particles = [];
          this.density = 1;
          this.smoothingRadius = 1;
          this.speedOfSound = 1;
          this.viscosity = 0.01;
          this.eps = 1e-6;
          this.pressures = [];
          this.densities = [];
          this.neighbors = [];
        }
        SPHSystem.prototype.add = function(particle) {
          this.particles.push(particle);
          if (this.neighbors.length < this.particles.length) {
            this.neighbors.push([]);
          }
        };
        SPHSystem.prototype.remove = function(particle) {
          var idx = this.particles.indexOf(particle);
          if (idx !== -1) {
            this.particles.splice(idx, 1);
            if (this.neighbors.length > this.particles.length) {
              this.neighbors.pop();
            }
          }
        };
        var SPHSystem_getNeighbors_dist = new Vec3();
        SPHSystem.prototype.getNeighbors = function(particle, neighbors) {
          var N = this.particles.length, id = particle.id, R2 = this.smoothingRadius * this.smoothingRadius, dist = SPHSystem_getNeighbors_dist;
          for (var i = 0; i !== N; i++) {
            var p = this.particles[i];
            p.position.vsub(particle.position, dist);
            if (id !== p.id && dist.norm2() < R2) {
              neighbors.push(p);
            }
          }
        };
        var SPHSystem_update_dist = new Vec3(), SPHSystem_update_a_pressure = new Vec3(), SPHSystem_update_a_visc = new Vec3(), SPHSystem_update_gradW = new Vec3(), SPHSystem_update_r_vec = new Vec3(), SPHSystem_update_u = new Vec3();
        SPHSystem.prototype.update = function() {
          var N = this.particles.length, dist = SPHSystem_update_dist, cs = this.speedOfSound, eps = this.eps;
          for (var i = 0; i !== N; i++) {
            var p = this.particles[i];
            var neighbors = this.neighbors[i];
            neighbors.length = 0;
            this.getNeighbors(p, neighbors);
            neighbors.push(this.particles[i]);
            var numNeighbors = neighbors.length;
            var sum = 0;
            for (var j = 0; j !== numNeighbors; j++) {
              p.position.vsub(neighbors[j].position, dist);
              var len = dist.norm();
              var weight = this.w(len);
              sum += neighbors[j].mass * weight;
            }
            this.densities[i] = sum;
            this.pressures[i] = cs * cs * (this.densities[i] - this.density);
          }
          var a_pressure = SPHSystem_update_a_pressure;
          var a_visc = SPHSystem_update_a_visc;
          var gradW = SPHSystem_update_gradW;
          var r_vec = SPHSystem_update_r_vec;
          var u = SPHSystem_update_u;
          for (var i = 0; i !== N; i++) {
            var particle = this.particles[i];
            a_pressure.set(0, 0, 0);
            a_visc.set(0, 0, 0);
            var Pij;
            var nabla;
            var Vij;
            var neighbors = this.neighbors[i];
            var numNeighbors = neighbors.length;
            for (var j = 0; j !== numNeighbors; j++) {
              var neighbor = neighbors[j];
              particle.position.vsub(neighbor.position, r_vec);
              var r = r_vec.norm();
              Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i] * this.densities[i] + eps) + this.pressures[j] / (this.densities[j] * this.densities[j] + eps));
              this.gradw(r_vec, gradW);
              gradW.mult(Pij, gradW);
              a_pressure.vadd(gradW, a_pressure);
              neighbor.velocity.vsub(particle.velocity, u);
              u.mult(1 / (1e-4 + this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass, u);
              nabla = this.nablaw(r);
              u.mult(nabla, u);
              a_visc.vadd(u, a_visc);
            }
            a_visc.mult(particle.mass, a_visc);
            a_pressure.mult(particle.mass, a_pressure);
            particle.force.vadd(a_visc, particle.force);
            particle.force.vadd(a_pressure, particle.force);
          }
        };
        SPHSystem.prototype.w = function(r) {
          var h = this.smoothingRadius;
          return 315 / (64 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 3);
        };
        SPHSystem.prototype.gradw = function(rVec, resultVec) {
          var r = rVec.norm(), h = this.smoothingRadius;
          rVec.mult(945 / (32 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 2), resultVec);
        };
        SPHSystem.prototype.nablaw = function(r) {
          var h = this.smoothingRadius;
          var nabla = 945 / (32 * Math.PI * Math.pow(h, 9)) * (h * h - r * r) * (7 * r * r - 3 * h * h);
          return nabla;
        };
      }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Particle": 41, "../shapes/Shape": 43 }], 35: [function(_dereq_, module3, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        module3.exports = Spring;
        function Spring(bodyA, bodyB, options) {
          options = options || {};
          this.restLength = typeof options.restLength === "number" ? options.restLength : 1;
          this.stiffness = options.stiffness || 100;
          this.damping = options.damping || 1;
          this.bodyA = bodyA;
          this.bodyB = bodyB;
          this.localAnchorA = new Vec3();
          this.localAnchorB = new Vec3();
          if (options.localAnchorA) {
            this.localAnchorA.copy(options.localAnchorA);
          }
          if (options.localAnchorB) {
            this.localAnchorB.copy(options.localAnchorB);
          }
          if (options.worldAnchorA) {
            this.setWorldAnchorA(options.worldAnchorA);
          }
          if (options.worldAnchorB) {
            this.setWorldAnchorB(options.worldAnchorB);
          }
        }
        Spring.prototype.setWorldAnchorA = function(worldAnchorA) {
          this.bodyA.pointToLocalFrame(worldAnchorA, this.localAnchorA);
        };
        Spring.prototype.setWorldAnchorB = function(worldAnchorB) {
          this.bodyB.pointToLocalFrame(worldAnchorB, this.localAnchorB);
        };
        Spring.prototype.getWorldAnchorA = function(result) {
          this.bodyA.pointToWorldFrame(this.localAnchorA, result);
        };
        Spring.prototype.getWorldAnchorB = function(result) {
          this.bodyB.pointToWorldFrame(this.localAnchorB, result);
        };
        var applyForce_r = new Vec3(), applyForce_r_unit = new Vec3(), applyForce_u = new Vec3(), applyForce_f = new Vec3(), applyForce_worldAnchorA = new Vec3(), applyForce_worldAnchorB = new Vec3(), applyForce_ri = new Vec3(), applyForce_rj = new Vec3(), applyForce_ri_x_f = new Vec3(), applyForce_rj_x_f = new Vec3(), applyForce_tmp = new Vec3();
        Spring.prototype.applyForce = function() {
          var k = this.stiffness, d = this.damping, l = this.restLength, bodyA = this.bodyA, bodyB = this.bodyB, r = applyForce_r, r_unit = applyForce_r_unit, u = applyForce_u, f = applyForce_f, tmp = applyForce_tmp;
          var worldAnchorA = applyForce_worldAnchorA, worldAnchorB = applyForce_worldAnchorB, ri = applyForce_ri, rj = applyForce_rj, ri_x_f = applyForce_ri_x_f, rj_x_f = applyForce_rj_x_f;
          this.getWorldAnchorA(worldAnchorA);
          this.getWorldAnchorB(worldAnchorB);
          worldAnchorA.vsub(bodyA.position, ri);
          worldAnchorB.vsub(bodyB.position, rj);
          worldAnchorB.vsub(worldAnchorA, r);
          var rlen = r.norm();
          r_unit.copy(r);
          r_unit.normalize();
          bodyB.velocity.vsub(bodyA.velocity, u);
          bodyB.angularVelocity.cross(rj, tmp);
          u.vadd(tmp, u);
          bodyA.angularVelocity.cross(ri, tmp);
          u.vsub(tmp, u);
          r_unit.mult(-k * (rlen - l) - d * u.dot(r_unit), f);
          bodyA.force.vsub(f, bodyA.force);
          bodyB.force.vadd(f, bodyB.force);
          ri.cross(f, ri_x_f);
          rj.cross(f, rj_x_f);
          bodyA.torque.vsub(ri_x_f, bodyA.torque);
          bodyB.torque.vadd(rj_x_f, bodyB.torque);
        };
      }, { "../math/Vec3": 30 }], 36: [function(_dereq_, module3, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        var Transform = _dereq_("../math/Transform");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Utils = _dereq_("../utils/Utils");
        module3.exports = WheelInfo;
        function WheelInfo(options) {
          options = Utils.defaults(options, {
            chassisConnectionPointLocal: new Vec3(),
            chassisConnectionPointWorld: new Vec3(),
            directionLocal: new Vec3(),
            directionWorld: new Vec3(),
            axleLocal: new Vec3(),
            axleWorld: new Vec3(),
            suspensionRestLength: 1,
            suspensionMaxLength: 2,
            radius: 1,
            suspensionStiffness: 100,
            dampingCompression: 10,
            dampingRelaxation: 10,
            frictionSlip: 1e4,
            steering: 0,
            rotation: 0,
            deltaRotation: 0,
            rollInfluence: 0.01,
            maxSuspensionForce: Number.MAX_VALUE,
            isFrontWheel: true,
            clippedInvContactDotSuspension: 1,
            suspensionRelativeVelocity: 0,
            suspensionForce: 0,
            skidInfo: 0,
            suspensionLength: 0,
            maxSuspensionTravel: 1,
            useCustomSlidingRotationalSpeed: false,
            customSlidingRotationalSpeed: -0.1
          });
          this.maxSuspensionTravel = options.maxSuspensionTravel;
          this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;
          this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;
          this.sliding = false;
          this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();
          this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();
          this.directionLocal = options.directionLocal.clone();
          this.directionWorld = options.directionWorld.clone();
          this.axleLocal = options.axleLocal.clone();
          this.axleWorld = options.axleWorld.clone();
          this.suspensionRestLength = options.suspensionRestLength;
          this.suspensionMaxLength = options.suspensionMaxLength;
          this.radius = options.radius;
          this.suspensionStiffness = options.suspensionStiffness;
          this.dampingCompression = options.dampingCompression;
          this.dampingRelaxation = options.dampingRelaxation;
          this.frictionSlip = options.frictionSlip;
          this.steering = 0;
          this.rotation = 0;
          this.deltaRotation = 0;
          this.rollInfluence = options.rollInfluence;
          this.maxSuspensionForce = options.maxSuspensionForce;
          this.engineForce = 0;
          this.brake = 0;
          this.isFrontWheel = options.isFrontWheel;
          this.clippedInvContactDotSuspension = 1;
          this.suspensionRelativeVelocity = 0;
          this.suspensionForce = 0;
          this.skidInfo = 0;
          this.suspensionLength = 0;
          this.sideImpulse = 0;
          this.forwardImpulse = 0;
          this.raycastResult = new RaycastResult();
          this.worldTransform = new Transform();
          this.isInContact = false;
        }
        var chassis_velocity_at_contactPoint = new Vec3();
        var relpos = new Vec3();
        var chassis_velocity_at_contactPoint = new Vec3();
        WheelInfo.prototype.updateWheel = function(chassis) {
          var raycastResult = this.raycastResult;
          if (this.isInContact) {
            var project = raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
            raycastResult.hitPointWorld.vsub(chassis.position, relpos);
            chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
            var projVel = raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
            if (project >= -0.1) {
              this.suspensionRelativeVelocity = 0;
              this.clippedInvContactDotSuspension = 1 / 0.1;
            } else {
              var inv = -1 / project;
              this.suspensionRelativeVelocity = projVel * inv;
              this.clippedInvContactDotSuspension = inv;
            }
          } else {
            raycastResult.suspensionLength = this.suspensionRestLength;
            this.suspensionRelativeVelocity = 0;
            raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
            this.clippedInvContactDotSuspension = 1;
          }
        };
      }, { "../collision/RaycastResult": 10, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Utils": 53 }], 37: [function(_dereq_, module3, exports3) {
        module3.exports = Box;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        function Box(halfExtents) {
          Shape.call(this);
          this.type = Shape.types.BOX;
          this.halfExtents = halfExtents;
          this.convexPolyhedronRepresentation = null;
          this.updateConvexPolyhedronRepresentation();
          this.updateBoundingSphereRadius();
        }
        Box.prototype = new Shape();
        Box.prototype.constructor = Box;
        Box.prototype.updateConvexPolyhedronRepresentation = function() {
          var sx = this.halfExtents.x;
          var sy = this.halfExtents.y;
          var sz = this.halfExtents.z;
          var V = Vec3;
          var vertices = [
            new V(-sx, -sy, -sz),
            new V(sx, -sy, -sz),
            new V(sx, sy, -sz),
            new V(-sx, sy, -sz),
            new V(-sx, -sy, sz),
            new V(sx, -sy, sz),
            new V(sx, sy, sz),
            new V(-sx, sy, sz)
          ];
          var indices = [
            [3, 2, 1, 0],
            // -z
            [4, 5, 6, 7],
            // +z
            [5, 4, 0, 1],
            // -y
            [2, 3, 7, 6],
            // +y
            [0, 4, 7, 3],
            // -x
            [1, 2, 6, 5]
            // +x
          ];
          var axes = [
            new V(0, 0, 1),
            new V(0, 1, 0),
            new V(1, 0, 0)
          ];
          var h = new ConvexPolyhedron(vertices, indices);
          this.convexPolyhedronRepresentation = h;
          h.material = this.material;
        };
        Box.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          Box.calculateInertia(this.halfExtents, mass, target);
          return target;
        };
        Box.calculateInertia = function(halfExtents, mass, target) {
          var e = halfExtents;
          target.x = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.z * 2 * e.z);
          target.y = 1 / 12 * mass * (2 * e.x * 2 * e.x + 2 * e.z * 2 * e.z);
          target.z = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.x * 2 * e.x);
        };
        Box.prototype.getSideNormals = function(sixTargetVectors, quat) {
          var sides = sixTargetVectors;
          var ex = this.halfExtents;
          sides[0].set(ex.x, 0, 0);
          sides[1].set(0, ex.y, 0);
          sides[2].set(0, 0, ex.z);
          sides[3].set(-ex.x, 0, 0);
          sides[4].set(0, -ex.y, 0);
          sides[5].set(0, 0, -ex.z);
          if (quat !== void 0) {
            for (var i = 0; i !== sides.length; i++) {
              quat.vmult(sides[i], sides[i]);
            }
          }
          return sides;
        };
        Box.prototype.volume = function() {
          return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
        };
        Box.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = this.halfExtents.norm();
        };
        var worldCornerTempPos = new Vec3();
        var worldCornerTempNeg = new Vec3();
        Box.prototype.forEachWorldCorner = function(pos, quat, callback) {
          var e = this.halfExtents;
          var corners = [
            [e.x, e.y, e.z],
            [-e.x, e.y, e.z],
            [-e.x, -e.y, e.z],
            [-e.x, -e.y, -e.z],
            [e.x, -e.y, -e.z],
            [e.x, e.y, -e.z],
            [-e.x, e.y, -e.z],
            [e.x, -e.y, e.z]
          ];
          for (var i = 0; i < corners.length; i++) {
            worldCornerTempPos.set(corners[i][0], corners[i][1], corners[i][2]);
            quat.vmult(worldCornerTempPos, worldCornerTempPos);
            pos.vadd(worldCornerTempPos, worldCornerTempPos);
            callback(
              worldCornerTempPos.x,
              worldCornerTempPos.y,
              worldCornerTempPos.z
            );
          }
        };
        var worldCornersTemp = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
        ];
        Box.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var e = this.halfExtents;
          worldCornersTemp[0].set(e.x, e.y, e.z);
          worldCornersTemp[1].set(-e.x, e.y, e.z);
          worldCornersTemp[2].set(-e.x, -e.y, e.z);
          worldCornersTemp[3].set(-e.x, -e.y, -e.z);
          worldCornersTemp[4].set(e.x, -e.y, -e.z);
          worldCornersTemp[5].set(e.x, e.y, -e.z);
          worldCornersTemp[6].set(-e.x, e.y, -e.z);
          worldCornersTemp[7].set(e.x, -e.y, e.z);
          var wc = worldCornersTemp[0];
          quat.vmult(wc, wc);
          pos.vadd(wc, wc);
          max.copy(wc);
          min.copy(wc);
          for (var i = 1; i < 8; i++) {
            var wc = worldCornersTemp[i];
            quat.vmult(wc, wc);
            pos.vadd(wc, wc);
            var x = wc.x;
            var y = wc.y;
            var z = wc.z;
            if (x > max.x) {
              max.x = x;
            }
            if (y > max.y) {
              max.y = y;
            }
            if (z > max.z) {
              max.z = z;
            }
            if (x < min.x) {
              min.x = x;
            }
            if (y < min.y) {
              min.y = y;
            }
            if (z < min.z) {
              min.z = z;
            }
          }
        };
      }, { "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 38: [function(_dereq_, module3, exports3) {
        module3.exports = ConvexPolyhedron;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        function ConvexPolyhedron(points, faces, uniqueAxes) {
          var that = this;
          Shape.call(this);
          this.type = Shape.types.CONVEXPOLYHEDRON;
          this.vertices = points || [];
          this.worldVertices = [];
          this.worldVerticesNeedsUpdate = true;
          this.faces = faces || [];
          this.faceNormals = [];
          this.computeNormals();
          this.worldFaceNormalsNeedsUpdate = true;
          this.worldFaceNormals = [];
          this.uniqueEdges = [];
          this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;
          this.computeEdges();
          this.updateBoundingSphereRadius();
        }
        ConvexPolyhedron.prototype = new Shape();
        ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
        var computeEdges_tmpEdge = new Vec3();
        ConvexPolyhedron.prototype.computeEdges = function() {
          var faces = this.faces;
          var vertices = this.vertices;
          var nv = vertices.length;
          var edges = this.uniqueEdges;
          edges.length = 0;
          var edge = computeEdges_tmpEdge;
          for (var i = 0; i !== faces.length; i++) {
            var face = faces[i];
            var numVertices = face.length;
            for (var j = 0; j !== numVertices; j++) {
              var k = (j + 1) % numVertices;
              vertices[face[j]].vsub(vertices[face[k]], edge);
              edge.normalize();
              var found = false;
              for (var p = 0; p !== edges.length; p++) {
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                edges.push(edge.clone());
              }
            }
          }
        };
        ConvexPolyhedron.prototype.computeNormals = function() {
          this.faceNormals.length = this.faces.length;
          for (var i = 0; i < this.faces.length; i++) {
            for (var j = 0; j < this.faces[i].length; j++) {
              if (!this.vertices[this.faces[i][j]]) {
                throw new Error("Vertex " + this.faces[i][j] + " not found!");
              }
            }
            var n = this.faceNormals[i] || new Vec3();
            this.getFaceNormal(i, n);
            n.negate(n);
            this.faceNormals[i] = n;
            var vertex = this.vertices[this.faces[i][0]];
            if (n.dot(vertex) < 0) {
              console.error(".faceNormals[" + i + "] = Vec3(" + n.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
              for (var j = 0; j < this.faces[i].length; j++) {
                console.warn(".vertices[" + this.faces[i][j] + "] = Vec3(" + this.vertices[this.faces[i][j]].toString() + ")");
              }
            }
          }
        };
        var cb = new Vec3();
        var ab = new Vec3();
        ConvexPolyhedron.computeNormal = function(va, vb, vc, target) {
          vb.vsub(va, ab);
          vc.vsub(vb, cb);
          cb.cross(ab, target);
          if (!target.isZero()) {
            target.normalize();
          }
        };
        ConvexPolyhedron.prototype.getFaceNormal = function(i, target) {
          var f = this.faces[i];
          var va = this.vertices[f[0]];
          var vb = this.vertices[f[1]];
          var vc = this.vertices[f[2]];
          return ConvexPolyhedron.computeNormal(va, vb, vc, target);
        };
        var cah_WorldNormal = new Vec3();
        ConvexPolyhedron.prototype.clipAgainstHull = function(posA, quatA, hullB, posB, quatB, separatingNormal, minDist, maxDist, result) {
          var WorldNormal = cah_WorldNormal;
          var hullA = this;
          var curMaxDist = maxDist;
          var closestFaceB = -1;
          var dmax = -Number.MAX_VALUE;
          for (var face = 0; face < hullB.faces.length; face++) {
            WorldNormal.copy(hullB.faceNormals[face]);
            quatB.vmult(WorldNormal, WorldNormal);
            var d = WorldNormal.dot(separatingNormal);
            if (d > dmax) {
              dmax = d;
              closestFaceB = face;
            }
          }
          var worldVertsB1 = [];
          var polyB = hullB.faces[closestFaceB];
          var numVertices = polyB.length;
          for (var e0 = 0; e0 < numVertices; e0++) {
            var b = hullB.vertices[polyB[e0]];
            var worldb = new Vec3();
            worldb.copy(b);
            quatB.vmult(worldb, worldb);
            posB.vadd(worldb, worldb);
            worldVertsB1.push(worldb);
          }
          if (closestFaceB >= 0) {
            this.clipFaceAgainstHull(
              separatingNormal,
              posA,
              quatA,
              worldVertsB1,
              minDist,
              maxDist,
              result
            );
          }
        };
        var fsa_faceANormalWS3 = new Vec3(), fsa_Worldnormal1 = new Vec3(), fsa_deltaC = new Vec3(), fsa_worldEdge0 = new Vec3(), fsa_worldEdge1 = new Vec3(), fsa_Cross = new Vec3();
        ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB, posA, quatA, posB, quatB, target, faceListA, faceListB) {
          var faceANormalWS3 = fsa_faceANormalWS3, Worldnormal1 = fsa_Worldnormal1, deltaC = fsa_deltaC, worldEdge0 = fsa_worldEdge0, worldEdge1 = fsa_worldEdge1, Cross = fsa_Cross;
          var dmin = Number.MAX_VALUE;
          var hullA = this;
          var curPlaneTests = 0;
          if (!hullA.uniqueAxes) {
            var numFacesA = faceListA ? faceListA.length : hullA.faces.length;
            for (var i = 0; i < numFacesA; i++) {
              var fi = faceListA ? faceListA[i] : i;
              faceANormalWS3.copy(hullA.faceNormals[fi]);
              quatA.vmult(faceANormalWS3, faceANormalWS3);
              var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(faceANormalWS3);
              }
            }
          } else {
            for (var i = 0; i !== hullA.uniqueAxes.length; i++) {
              quatA.vmult(hullA.uniqueAxes[i], faceANormalWS3);
              var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(faceANormalWS3);
              }
            }
          }
          if (!hullB.uniqueAxes) {
            var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
            for (var i = 0; i < numFacesB; i++) {
              var fi = faceListB ? faceListB[i] : i;
              Worldnormal1.copy(hullB.faceNormals[fi]);
              quatB.vmult(Worldnormal1, Worldnormal1);
              curPlaneTests++;
              var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(Worldnormal1);
              }
            }
          } else {
            for (var i = 0; i !== hullB.uniqueAxes.length; i++) {
              quatB.vmult(hullB.uniqueAxes[i], Worldnormal1);
              curPlaneTests++;
              var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(Worldnormal1);
              }
            }
          }
          for (var e0 = 0; e0 !== hullA.uniqueEdges.length; e0++) {
            quatA.vmult(hullA.uniqueEdges[e0], worldEdge0);
            for (var e1 = 0; e1 !== hullB.uniqueEdges.length; e1++) {
              quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
              worldEdge0.cross(worldEdge1, Cross);
              if (!Cross.almostZero()) {
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if (dist === false) {
                  return false;
                }
                if (dist < dmin) {
                  dmin = dist;
                  target.copy(Cross);
                }
              }
            }
          }
          posB.vsub(posA, deltaC);
          if (deltaC.dot(target) > 0) {
            target.negate(target);
          }
          return true;
        };
        var maxminA = [], maxminB = [];
        ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB) {
          var hullA = this;
          ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
          ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
          var maxA = maxminA[0];
          var minA = maxminA[1];
          var maxB = maxminB[0];
          var minB = maxminB[1];
          if (maxA < minB || maxB < minA) {
            return false;
          }
          var d0 = maxA - minB;
          var d1 = maxB - minA;
          var depth = d0 < d1 ? d0 : d1;
          return depth;
        };
        var cli_aabbmin = new Vec3(), cli_aabbmax = new Vec3();
        ConvexPolyhedron.prototype.calculateLocalInertia = function(mass, target) {
          this.computeLocalAABB(cli_aabbmin, cli_aabbmax);
          var x = cli_aabbmax.x - cli_aabbmin.x, y = cli_aabbmax.y - cli_aabbmin.y, z = cli_aabbmax.z - cli_aabbmin.z;
          target.x = 1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z);
          target.y = 1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z);
          target.z = 1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x);
        };
        ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i) {
          var f = this.faces[face_i];
          var n = this.faceNormals[face_i];
          var v = this.vertices[f[0]];
          var c = -n.dot(v);
          return c;
        };
        var cfah_faceANormalWS = new Vec3(), cfah_edge0 = new Vec3(), cfah_WorldEdge0 = new Vec3(), cfah_worldPlaneAnormal1 = new Vec3(), cfah_planeNormalWS1 = new Vec3(), cfah_worldA1 = new Vec3(), cfah_localPlaneNormal = new Vec3(), cfah_planeNormalWS = new Vec3();
        ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result) {
          var faceANormalWS = cfah_faceANormalWS, edge0 = cfah_edge0, WorldEdge0 = cfah_WorldEdge0, worldPlaneAnormal1 = cfah_worldPlaneAnormal1, planeNormalWS1 = cfah_planeNormalWS1, worldA1 = cfah_worldA1, localPlaneNormal = cfah_localPlaneNormal, planeNormalWS = cfah_planeNormalWS;
          var hullA = this;
          var worldVertsB2 = [];
          var pVtxIn = worldVertsB1;
          var pVtxOut = worldVertsB2;
          var closestFaceA = -1;
          var dmin = Number.MAX_VALUE;
          for (var face = 0; face < hullA.faces.length; face++) {
            faceANormalWS.copy(hullA.faceNormals[face]);
            quatA.vmult(faceANormalWS, faceANormalWS);
            var d = faceANormalWS.dot(separatingNormal);
            if (d < dmin) {
              dmin = d;
              closestFaceA = face;
            }
          }
          if (closestFaceA < 0) {
            return;
          }
          var polyA = hullA.faces[closestFaceA];
          polyA.connectedFaces = [];
          for (var i = 0; i < hullA.faces.length; i++) {
            for (var j = 0; j < hullA.faces[i].length; j++) {
              if (polyA.indexOf(hullA.faces[i][j]) !== -1 && i !== closestFaceA && polyA.connectedFaces.indexOf(i) === -1) {
                polyA.connectedFaces.push(i);
              }
            }
          }
          var numContacts = pVtxIn.length;
          var numVerticesA = polyA.length;
          var res = [];
          for (var e0 = 0; e0 < numVerticesA; e0++) {
            var a = hullA.vertices[polyA[e0]];
            var b = hullA.vertices[polyA[(e0 + 1) % numVerticesA]];
            a.vsub(b, edge0);
            WorldEdge0.copy(edge0);
            quatA.vmult(WorldEdge0, WorldEdge0);
            posA.vadd(WorldEdge0, WorldEdge0);
            worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);
            quatA.vmult(worldPlaneAnormal1, worldPlaneAnormal1);
            posA.vadd(worldPlaneAnormal1, worldPlaneAnormal1);
            WorldEdge0.cross(worldPlaneAnormal1, planeNormalWS1);
            planeNormalWS1.negate(planeNormalWS1);
            worldA1.copy(a);
            quatA.vmult(worldA1, worldA1);
            posA.vadd(worldA1, worldA1);
            var planeEqWS1 = -worldA1.dot(planeNormalWS1);
            var planeEqWS;
            if (true) {
              var otherFace = polyA.connectedFaces[e0];
              localPlaneNormal.copy(this.faceNormals[otherFace]);
              var localPlaneEq = this.getPlaneConstantOfFace(otherFace);
              planeNormalWS.copy(localPlaneNormal);
              quatA.vmult(planeNormalWS, planeNormalWS);
              var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
            } else {
              planeNormalWS.copy(planeNormalWS1);
              planeEqWS = planeEqWS1;
            }
            this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);
            while (pVtxIn.length) {
              pVtxIn.shift();
            }
            while (pVtxOut.length) {
              pVtxIn.push(pVtxOut.shift());
            }
          }
          localPlaneNormal.copy(this.faceNormals[closestFaceA]);
          var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
          planeNormalWS.copy(localPlaneNormal);
          quatA.vmult(planeNormalWS, planeNormalWS);
          var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
          for (var i = 0; i < pVtxIn.length; i++) {
            var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS;
            if (depth <= minDist) {
              console.log("clamped: depth=" + depth + " to minDist=" + (minDist + ""));
              depth = minDist;
            }
            if (depth <= maxDist) {
              var point = pVtxIn[i];
              if (depth <= 0) {
                var p = {
                  point,
                  normal: planeNormalWS,
                  depth
                };
                result.push(p);
              }
            }
          }
        };
        ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices, outVertices, planeNormal, planeConstant) {
          var n_dot_first, n_dot_last;
          var numVerts = inVertices.length;
          if (numVerts < 2) {
            return outVertices;
          }
          var firstVertex = inVertices[inVertices.length - 1], lastVertex = inVertices[0];
          n_dot_first = planeNormal.dot(firstVertex) + planeConstant;
          for (var vi = 0; vi < numVerts; vi++) {
            lastVertex = inVertices[vi];
            n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
            if (n_dot_first < 0) {
              if (n_dot_last < 0) {
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
              } else {
                var newv = new Vec3();
                firstVertex.lerp(
                  lastVertex,
                  n_dot_first / (n_dot_first - n_dot_last),
                  newv
                );
                outVertices.push(newv);
              }
            } else {
              if (n_dot_last < 0) {
                var newv = new Vec3();
                firstVertex.lerp(
                  lastVertex,
                  n_dot_first / (n_dot_first - n_dot_last),
                  newv
                );
                outVertices.push(newv);
                outVertices.push(lastVertex);
              }
            }
            firstVertex = lastVertex;
            n_dot_first = n_dot_last;
          }
          return outVertices;
        };
        ConvexPolyhedron.prototype.computeWorldVertices = function(position, quat) {
          var N = this.vertices.length;
          while (this.worldVertices.length < N) {
            this.worldVertices.push(new Vec3());
          }
          var verts = this.vertices, worldVerts = this.worldVertices;
          for (var i = 0; i !== N; i++) {
            quat.vmult(verts[i], worldVerts[i]);
            position.vadd(worldVerts[i], worldVerts[i]);
          }
          this.worldVerticesNeedsUpdate = false;
        };
        var computeLocalAABB_worldVert = new Vec3();
        ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin, aabbmax) {
          var n = this.vertices.length, vertices = this.vertices, worldVert = computeLocalAABB_worldVert;
          aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          for (var i = 0; i < n; i++) {
            var v = vertices[i];
            if (v.x < aabbmin.x) {
              aabbmin.x = v.x;
            } else if (v.x > aabbmax.x) {
              aabbmax.x = v.x;
            }
            if (v.y < aabbmin.y) {
              aabbmin.y = v.y;
            } else if (v.y > aabbmax.y) {
              aabbmax.y = v.y;
            }
            if (v.z < aabbmin.z) {
              aabbmin.z = v.z;
            } else if (v.z > aabbmax.z) {
              aabbmax.z = v.z;
            }
          }
        };
        ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat) {
          var N = this.faceNormals.length;
          while (this.worldFaceNormals.length < N) {
            this.worldFaceNormals.push(new Vec3());
          }
          var normals = this.faceNormals, worldNormals = this.worldFaceNormals;
          for (var i = 0; i !== N; i++) {
            quat.vmult(normals[i], worldNormals[i]);
          }
          this.worldFaceNormalsNeedsUpdate = false;
        };
        ConvexPolyhedron.prototype.updateBoundingSphereRadius = function() {
          var max2 = 0;
          var verts = this.vertices;
          for (var i = 0, N = verts.length; i !== N; i++) {
            var norm2 = verts[i].norm2();
            if (norm2 > max2) {
              max2 = norm2;
            }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
        };
        var tempWorldVertex = new Vec3();
        ConvexPolyhedron.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var n = this.vertices.length, verts = this.vertices;
          var minx, miny, minz, maxx, maxy, maxz;
          for (var i = 0; i < n; i++) {
            tempWorldVertex.copy(verts[i]);
            quat.vmult(tempWorldVertex, tempWorldVertex);
            pos.vadd(tempWorldVertex, tempWorldVertex);
            var v = tempWorldVertex;
            if (v.x < minx || minx === void 0) {
              minx = v.x;
            } else if (v.x > maxx || maxx === void 0) {
              maxx = v.x;
            }
            if (v.y < miny || miny === void 0) {
              miny = v.y;
            } else if (v.y > maxy || maxy === void 0) {
              maxy = v.y;
            }
            if (v.z < minz || minz === void 0) {
              minz = v.z;
            } else if (v.z > maxz || maxz === void 0) {
              maxz = v.z;
            }
          }
          min.set(minx, miny, minz);
          max.set(maxx, maxy, maxz);
        };
        ConvexPolyhedron.prototype.volume = function() {
          return 4 * Math.PI * this.boundingSphereRadius / 3;
        };
        ConvexPolyhedron.prototype.getAveragePointLocal = function(target) {
          target = target || new Vec3();
          var n = this.vertices.length, verts = this.vertices;
          for (var i = 0; i < n; i++) {
            target.vadd(verts[i], target);
          }
          target.mult(1 / n, target);
          return target;
        };
        ConvexPolyhedron.prototype.transformAllPoints = function(offset, quat) {
          var n = this.vertices.length, verts = this.vertices;
          if (quat) {
            for (var i = 0; i < n; i++) {
              var v = verts[i];
              quat.vmult(v, v);
            }
            for (var i = 0; i < this.faceNormals.length; i++) {
              var v = this.faceNormals[i];
              quat.vmult(v, v);
            }
          }
          if (offset) {
            for (var i = 0; i < n; i++) {
              var v = verts[i];
              v.vadd(offset, v);
            }
          }
        };
        var ConvexPolyhedron_pointIsInside = new Vec3();
        var ConvexPolyhedron_vToP = new Vec3();
        var ConvexPolyhedron_vToPointInside = new Vec3();
        ConvexPolyhedron.prototype.pointIsInside = function(p) {
          var n = this.vertices.length, verts = this.vertices, faces = this.faces, normals = this.faceNormals;
          var positiveResult = null;
          var N = this.faces.length;
          var pointInside = ConvexPolyhedron_pointIsInside;
          this.getAveragePointLocal(pointInside);
          for (var i = 0; i < N; i++) {
            var numVertices = this.faces[i].length;
            var n = normals[i];
            var v = verts[faces[i][0]];
            var vToP = ConvexPolyhedron_vToP;
            p.vsub(v, vToP);
            var r1 = n.dot(vToP);
            var vToPointInside = ConvexPolyhedron_vToPointInside;
            pointInside.vsub(v, vToPointInside);
            var r2 = n.dot(vToPointInside);
            if (r1 < 0 && r2 > 0 || r1 > 0 && r2 < 0) {
              return false;
            } else {
            }
          }
          return positiveResult ? 1 : -1;
        };
        var project_worldVertex = new Vec3();
        var project_localAxis = new Vec3();
        var project_localOrigin = new Vec3();
        ConvexPolyhedron.project = function(hull, axis, pos, quat, result) {
          var n = hull.vertices.length, worldVertex = project_worldVertex, localAxis = project_localAxis, max = 0, min = 0, localOrigin = project_localOrigin, vs = hull.vertices;
          localOrigin.setZero();
          Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
          Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
          var add = localOrigin.dot(localAxis);
          min = max = vs[0].dot(localAxis);
          for (var i = 1; i < n; i++) {
            var val = vs[i].dot(localAxis);
            if (val > max) {
              max = val;
            }
            if (val < min) {
              min = val;
            }
          }
          min -= add;
          max -= add;
          if (min > max) {
            var temp = min;
            min = max;
            max = temp;
          }
          result[0] = max;
          result[1] = min;
        };
      }, { "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "./Shape": 43 }], 39: [function(_dereq_, module3, exports3) {
        module3.exports = Cylinder;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        function Cylinder(radiusTop, radiusBottom, height, numSegments) {
          var N = numSegments, verts = [], axes = [], faces = [], bottomface = [], topface = [], cos = Math.cos, sin = Math.sin;
          verts.push(new Vec3(
            radiusBottom * cos(0),
            radiusBottom * sin(0),
            -height * 0.5
          ));
          bottomface.push(0);
          verts.push(new Vec3(
            radiusTop * cos(0),
            radiusTop * sin(0),
            height * 0.5
          ));
          topface.push(1);
          for (var i = 0; i < N; i++) {
            var theta = 2 * Math.PI / N * (i + 1);
            var thetaN = 2 * Math.PI / N * (i + 0.5);
            if (i < N - 1) {
              verts.push(new Vec3(
                radiusBottom * cos(theta),
                radiusBottom * sin(theta),
                -height * 0.5
              ));
              bottomface.push(2 * i + 2);
              verts.push(new Vec3(
                radiusTop * cos(theta),
                radiusTop * sin(theta),
                height * 0.5
              ));
              topface.push(2 * i + 3);
              faces.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
            } else {
              faces.push([0, 1, 2 * i + 1, 2 * i]);
            }
            if (N % 2 === 1 || i < N / 2) {
              axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
            }
          }
          faces.push(topface);
          axes.push(new Vec3(0, 0, 1));
          var temp = [];
          for (var i = 0; i < bottomface.length; i++) {
            temp.push(bottomface[bottomface.length - i - 1]);
          }
          faces.push(temp);
          this.type = Shape.types.CONVEXPOLYHEDRON;
          ConvexPolyhedron.call(this, verts, faces, axes);
        }
        Cylinder.prototype = new ConvexPolyhedron();
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 40: [function(_dereq_, module3, exports3) {
        var Shape = _dereq_("./Shape");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        var Vec3 = _dereq_("../math/Vec3");
        var Utils = _dereq_("../utils/Utils");
        module3.exports = Heightfield;
        function Heightfield(data, options) {
          options = Utils.defaults(options, {
            maxValue: null,
            minValue: null,
            elementSize: 1
          });
          this.data = data;
          this.maxValue = options.maxValue;
          this.minValue = options.minValue;
          this.elementSize = options.elementSize;
          if (options.minValue === null) {
            this.updateMinValue();
          }
          if (options.maxValue === null) {
            this.updateMaxValue();
          }
          this.cacheEnabled = true;
          Shape.call(this);
          this.pillarConvex = new ConvexPolyhedron();
          this.pillarOffset = new Vec3();
          this.type = Shape.types.HEIGHTFIELD;
          this.updateBoundingSphereRadius();
          this._cachedPillars = {};
        }
        Heightfield.prototype = new Shape();
        Heightfield.prototype.update = function() {
          this._cachedPillars = {};
        };
        Heightfield.prototype.updateMinValue = function() {
          var data = this.data;
          var minValue = data[0][0];
          for (var i = 0; i !== data.length; i++) {
            for (var j = 0; j !== data[i].length; j++) {
              var v = data[i][j];
              if (v < minValue) {
                minValue = v;
              }
            }
          }
          this.minValue = minValue;
        };
        Heightfield.prototype.updateMaxValue = function() {
          var data = this.data;
          var maxValue = data[0][0];
          for (var i = 0; i !== data.length; i++) {
            for (var j = 0; j !== data[i].length; j++) {
              var v = data[i][j];
              if (v > maxValue) {
                maxValue = v;
              }
            }
          }
          this.maxValue = maxValue;
        };
        Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value) {
          var data = this.data;
          data[xi][yi] = value;
          this.clearCachedConvexTrianglePillar(xi, yi, false);
          if (xi > 0) {
            this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
            this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
          }
          if (yi > 0) {
            this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
            this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
          }
          if (yi > 0 && xi > 0) {
            this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
          }
        };
        Heightfield.prototype.getRectMinMax = function(iMinX, iMinY, iMaxX, iMaxY, result) {
          result = result || [];
          var data = this.data, max = this.minValue;
          for (var i = iMinX; i <= iMaxX; i++) {
            for (var j = iMinY; j <= iMaxY; j++) {
              var height = data[i][j];
              if (height > max) {
                max = height;
              }
            }
          }
          result[0] = this.minValue;
          result[1] = max;
        };
        Heightfield.prototype.getIndexOfPosition = function(x, y, result, clamp) {
          var w = this.elementSize;
          var data = this.data;
          var xi = Math.floor(x / w);
          var yi = Math.floor(y / w);
          result[0] = xi;
          result[1] = yi;
          if (clamp) {
            if (xi < 0) {
              xi = 0;
            }
            if (yi < 0) {
              yi = 0;
            }
            if (xi >= data.length - 1) {
              xi = data.length - 1;
            }
            if (yi >= data[0].length - 1) {
              yi = data[0].length - 1;
            }
          }
          if (xi < 0 || yi < 0 || xi >= data.length - 1 || yi >= data[0].length - 1) {
            return false;
          }
          return true;
        };
        Heightfield.prototype.getHeightAt = function(x, y, edgeClamp) {
          var idx = [];
          this.getIndexOfPosition(x, y, idx, edgeClamp);
          var minmax = [];
          this.getRectMinMax(idx[0], idx[1] + 1, idx[0], idx[1] + 1, minmax);
          return (minmax[0] + minmax[1]) / 2;
        };
        Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle) {
          return xi + "_" + yi + "_" + (getUpperTriangle ? 1 : 0);
        };
        Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
        };
        Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset) {
          this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
            convex,
            offset
          };
        };
        Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
        };
        Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          var result = this.pillarConvex;
          var offsetResult = this.pillarOffset;
          if (this.cacheEnabled) {
            var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
            if (data) {
              this.pillarConvex = data.convex;
              this.pillarOffset = data.offset;
              return;
            }
            result = new ConvexPolyhedron();
            offsetResult = new Vec3();
            this.pillarConvex = result;
            this.pillarOffset = offsetResult;
          }
          var data = this.data;
          var elementSize = this.elementSize;
          var faces = result.faces;
          result.vertices.length = 6;
          for (var i = 0; i < 6; i++) {
            if (!result.vertices[i]) {
              result.vertices[i] = new Vec3();
            }
          }
          faces.length = 5;
          for (var i = 0; i < 5; i++) {
            if (!faces[i]) {
              faces[i] = [];
            }
          }
          var verts = result.vertices;
          var h = (Math.min(
            data[xi][yi],
            data[xi + 1][yi],
            data[xi][yi + 1],
            data[xi + 1][yi + 1]
          ) - this.minValue) / 2 + this.minValue;
          if (!getUpperTriangle) {
            offsetResult.set(
              (xi + 0.25) * elementSize,
              // sort of center of a triangle
              (yi + 0.25) * elementSize,
              h
              // vertical center
            );
            verts[0].set(
              -0.25 * elementSize,
              -0.25 * elementSize,
              data[xi][yi] - h
            );
            verts[1].set(
              0.75 * elementSize,
              -0.25 * elementSize,
              data[xi + 1][yi] - h
            );
            verts[2].set(
              -0.25 * elementSize,
              0.75 * elementSize,
              data[xi][yi + 1] - h
            );
            verts[3].set(
              -0.25 * elementSize,
              -0.25 * elementSize,
              -h - 1
            );
            verts[4].set(
              0.75 * elementSize,
              -0.25 * elementSize,
              -h - 1
            );
            verts[5].set(
              -0.25 * elementSize,
              0.75 * elementSize,
              -h - 1
            );
            faces[0][0] = 0;
            faces[0][1] = 1;
            faces[0][2] = 2;
            faces[1][0] = 5;
            faces[1][1] = 4;
            faces[1][2] = 3;
            faces[2][0] = 0;
            faces[2][1] = 2;
            faces[2][2] = 5;
            faces[2][3] = 3;
            faces[3][0] = 1;
            faces[3][1] = 0;
            faces[3][2] = 3;
            faces[3][3] = 4;
            faces[4][0] = 4;
            faces[4][1] = 5;
            faces[4][2] = 2;
            faces[4][3] = 1;
          } else {
            offsetResult.set(
              (xi + 0.75) * elementSize,
              // sort of center of a triangle
              (yi + 0.75) * elementSize,
              h
              // vertical center
            );
            verts[0].set(
              0.25 * elementSize,
              0.25 * elementSize,
              data[xi + 1][yi + 1] - h
            );
            verts[1].set(
              -0.75 * elementSize,
              0.25 * elementSize,
              data[xi][yi + 1] - h
            );
            verts[2].set(
              0.25 * elementSize,
              -0.75 * elementSize,
              data[xi + 1][yi] - h
            );
            verts[3].set(
              0.25 * elementSize,
              0.25 * elementSize,
              -h - 1
            );
            verts[4].set(
              -0.75 * elementSize,
              0.25 * elementSize,
              -h - 1
            );
            verts[5].set(
              0.25 * elementSize,
              -0.75 * elementSize,
              -h - 1
            );
            faces[0][0] = 0;
            faces[0][1] = 1;
            faces[0][2] = 2;
            faces[1][0] = 5;
            faces[1][1] = 4;
            faces[1][2] = 3;
            faces[2][0] = 2;
            faces[2][1] = 5;
            faces[2][2] = 3;
            faces[2][3] = 0;
            faces[3][0] = 3;
            faces[3][1] = 4;
            faces[3][2] = 1;
            faces[3][3] = 0;
            faces[4][0] = 1;
            faces[4][1] = 4;
            faces[4][2] = 5;
            faces[4][3] = 2;
          }
          result.computeNormals();
          result.computeEdges();
          result.updateBoundingSphereRadius();
          this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
        };
        Heightfield.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
        };
        Heightfield.prototype.volume = function() {
          return Number.MAX_VALUE;
        };
        Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        };
        Heightfield.prototype.updateBoundingSphereRadius = function() {
          var data = this.data, s = this.elementSize;
          this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
        };
      }, { "../math/Vec3": 30, "../utils/Utils": 53, "./ConvexPolyhedron": 38, "./Shape": 43 }], 41: [function(_dereq_, module3, exports3) {
        module3.exports = Particle;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Particle() {
          Shape.call(this);
          this.type = Shape.types.PARTICLE;
        }
        Particle.prototype = new Shape();
        Particle.prototype.constructor = Particle;
        Particle.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
        };
        Particle.prototype.volume = function() {
          return 0;
        };
        Particle.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = 0;
        };
        Particle.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          min.copy(pos);
          max.copy(pos);
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 42: [function(_dereq_, module3, exports3) {
        module3.exports = Plane;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Plane() {
          Shape.call(this);
          this.type = Shape.types.PLANE;
          this.worldNormal = new Vec3();
          this.worldNormalNeedsUpdate = true;
          this.boundingSphereRadius = Number.MAX_VALUE;
        }
        Plane.prototype = new Shape();
        Plane.prototype.constructor = Plane;
        Plane.prototype.computeWorldNormal = function(quat) {
          var n = this.worldNormal;
          n.set(0, 0, 1);
          quat.vmult(n, n);
          this.worldNormalNeedsUpdate = false;
        };
        Plane.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          return target;
        };
        Plane.prototype.volume = function() {
          return Number.MAX_VALUE;
        };
        var tempNormal = new Vec3();
        Plane.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          tempNormal.set(0, 0, 1);
          quat.vmult(tempNormal, tempNormal);
          var maxVal = Number.MAX_VALUE;
          min.set(-maxVal, -maxVal, -maxVal);
          max.set(maxVal, maxVal, maxVal);
          if (tempNormal.x === 1) {
            max.x = pos.x;
          }
          if (tempNormal.y === 1) {
            max.y = pos.y;
          }
          if (tempNormal.z === 1) {
            max.z = pos.z;
          }
          if (tempNormal.x === -1) {
            min.x = pos.x;
          }
          if (tempNormal.y === -1) {
            min.y = pos.y;
          }
          if (tempNormal.z === -1) {
            min.z = pos.z;
          }
        };
        Plane.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = Number.MAX_VALUE;
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 43: [function(_dereq_, module3, exports3) {
        module3.exports = Shape;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Material = _dereq_("../material/Material");
        function Shape() {
          this.id = Shape.idCounter++;
          this.type = 0;
          this.boundingSphereRadius = 0;
          this.collisionResponse = true;
          this.material = null;
        }
        Shape.prototype.constructor = Shape;
        Shape.prototype.updateBoundingSphereRadius = function() {
          throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
        };
        Shape.prototype.volume = function() {
          throw "volume() not implemented for shape type " + this.type;
        };
        Shape.prototype.calculateLocalInertia = function(mass, target) {
          throw "calculateLocalInertia() not implemented for shape type " + this.type;
        };
        Shape.idCounter = 0;
        Shape.types = {
          SPHERE: 1,
          PLANE: 2,
          BOX: 4,
          COMPOUND: 8,
          CONVEXPOLYHEDRON: 16,
          HEIGHTFIELD: 32,
          PARTICLE: 64,
          CYLINDER: 128,
          TRIMESH: 256
        };
      }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "./Shape": 43 }], 44: [function(_dereq_, module3, exports3) {
        module3.exports = Sphere;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Sphere(radius) {
          Shape.call(this);
          this.radius = radius !== void 0 ? Number(radius) : 1;
          this.type = Shape.types.SPHERE;
          if (this.radius < 0) {
            throw new Error("The sphere radius cannot be negative.");
          }
          this.updateBoundingSphereRadius();
        }
        Sphere.prototype = new Shape();
        Sphere.prototype.constructor = Sphere;
        Sphere.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          var I = 2 * mass * this.radius * this.radius / 5;
          target.x = I;
          target.y = I;
          target.z = I;
          return target;
        };
        Sphere.prototype.volume = function() {
          return 4 * Math.PI * this.radius / 3;
        };
        Sphere.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = this.radius;
        };
        Sphere.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var r = this.radius;
          var axes = ["x", "y", "z"];
          for (var i = 0; i < axes.length; i++) {
            var ax = axes[i];
            min[ax] = pos[ax] - r;
            max[ax] = pos[ax] + r;
          }
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 45: [function(_dereq_, module3, exports3) {
        module3.exports = Trimesh;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        var AABB = _dereq_("../collision/AABB");
        var Octree = _dereq_("../utils/Octree");
        function Trimesh(vertices, indices) {
          Shape.call(this);
          this.type = Shape.types.TRIMESH;
          this.vertices = new Float32Array(vertices);
          this.indices = new Int16Array(indices);
          this.normals = new Float32Array(indices.length);
          this.aabb = new AABB();
          this.edges = null;
          this.scale = new Vec3(1, 1, 1);
          this.tree = new Octree();
          this.updateEdges();
          this.updateNormals();
          this.updateAABB();
          this.updateBoundingSphereRadius();
          this.updateTree();
        }
        Trimesh.prototype = new Shape();
        Trimesh.prototype.constructor = Trimesh;
        var computeNormals_n = new Vec3();
        Trimesh.prototype.updateTree = function() {
          var tree = this.tree;
          tree.reset();
          tree.aabb.copy(this.aabb);
          var scale = this.scale;
          tree.aabb.lowerBound.x *= 1 / scale.x;
          tree.aabb.lowerBound.y *= 1 / scale.y;
          tree.aabb.lowerBound.z *= 1 / scale.z;
          tree.aabb.upperBound.x *= 1 / scale.x;
          tree.aabb.upperBound.y *= 1 / scale.y;
          tree.aabb.upperBound.z *= 1 / scale.z;
          var triangleAABB = new AABB();
          var a = new Vec3();
          var b = new Vec3();
          var c = new Vec3();
          var points = [a, b, c];
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            this._getUnscaledVertex(this.indices[i3], a);
            this._getUnscaledVertex(this.indices[i3 + 1], b);
            this._getUnscaledVertex(this.indices[i3 + 2], c);
            triangleAABB.setFromPoints(points);
            tree.insert(triangleAABB, i);
          }
          tree.removeEmptyNodes();
        };
        var unscaledAABB = new AABB();
        Trimesh.prototype.getTrianglesInAABB = function(aabb, result) {
          unscaledAABB.copy(aabb);
          var scale = this.scale;
          var isx = scale.x;
          var isy = scale.y;
          var isz = scale.z;
          var l = unscaledAABB.lowerBound;
          var u = unscaledAABB.upperBound;
          l.x /= isx;
          l.y /= isy;
          l.z /= isz;
          u.x /= isx;
          u.y /= isy;
          u.z /= isz;
          return this.tree.aabbQuery(unscaledAABB, result);
        };
        Trimesh.prototype.setScale = function(scale) {
          var wasUniform = this.scale.x === this.scale.y === this.scale.z;
          var isUniform = scale.x === scale.y === scale.z;
          if (!(wasUniform && isUniform)) {
            this.updateNormals();
          }
          this.scale.copy(scale);
          this.updateAABB();
          this.updateBoundingSphereRadius();
        };
        Trimesh.prototype.updateNormals = function() {
          var n = computeNormals_n;
          var normals = this.normals;
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
            this.getVertex(a, va);
            this.getVertex(b, vb);
            this.getVertex(c, vc);
            Trimesh.computeNormal(vb, va, vc, n);
            normals[i3] = n.x;
            normals[i3 + 1] = n.y;
            normals[i3 + 2] = n.z;
          }
        };
        Trimesh.prototype.updateEdges = function() {
          var edges = {};
          var add = function(indexA, indexB) {
            var key = a < b ? a + "_" + b : b + "_" + a;
            edges[key] = true;
          };
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
            add(a, b);
            add(b, c);
            add(c, a);
          }
          var keys = Object.keys(edges);
          this.edges = new Int16Array(keys.length * 2);
          for (var i = 0; i < keys.length; i++) {
            var indices = keys[i].split("_");
            this.edges[2 * i] = parseInt(indices[0], 10);
            this.edges[2 * i + 1] = parseInt(indices[1], 10);
          }
        };
        Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore) {
          var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
          this.getVertex(vertexIndex, vertexStore);
        };
        var getEdgeVector_va = new Vec3();
        var getEdgeVector_vb = new Vec3();
        Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore) {
          var va2 = getEdgeVector_va;
          var vb2 = getEdgeVector_vb;
          this.getEdgeVertex(edgeIndex, 0, va2);
          this.getEdgeVertex(edgeIndex, 1, vb2);
          vb2.vsub(va2, vectorStore);
        };
        var cb = new Vec3();
        var ab = new Vec3();
        Trimesh.computeNormal = function(va2, vb2, vc2, target) {
          vb2.vsub(va2, ab);
          vc2.vsub(vb2, cb);
          cb.cross(ab, target);
          if (!target.isZero()) {
            target.normalize();
          }
        };
        var va = new Vec3();
        var vb = new Vec3();
        var vc = new Vec3();
        Trimesh.prototype.getVertex = function(i, out) {
          var scale = this.scale;
          this._getUnscaledVertex(i, out);
          out.x *= scale.x;
          out.y *= scale.y;
          out.z *= scale.z;
          return out;
        };
        Trimesh.prototype._getUnscaledVertex = function(i, out) {
          var i3 = i * 3;
          var vertices = this.vertices;
          return out.set(
            vertices[i3],
            vertices[i3 + 1],
            vertices[i3 + 2]
          );
        };
        Trimesh.prototype.getWorldVertex = function(i, pos, quat, out) {
          this.getVertex(i, out);
          Transform.pointToWorldFrame(pos, quat, out, out);
          return out;
        };
        Trimesh.prototype.getTriangleVertices = function(i, a, b, c) {
          var i3 = i * 3;
          this.getVertex(this.indices[i3], a);
          this.getVertex(this.indices[i3 + 1], b);
          this.getVertex(this.indices[i3 + 2], c);
        };
        Trimesh.prototype.getNormal = function(i, target) {
          var i3 = i * 3;
          return target.set(
            this.normals[i3],
            this.normals[i3 + 1],
            this.normals[i3 + 2]
          );
        };
        var cli_aabb = new AABB();
        Trimesh.prototype.calculateLocalInertia = function(mass, target) {
          this.computeLocalAABB(cli_aabb);
          var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x, y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y, z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
          return target.set(
            1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z),
            1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z),
            1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x)
          );
        };
        var computeLocalAABB_worldVert = new Vec3();
        Trimesh.prototype.computeLocalAABB = function(aabb) {
          var l = aabb.lowerBound, u = aabb.upperBound, n = this.vertices.length, vertices = this.vertices, v = computeLocalAABB_worldVert;
          this.getVertex(0, v);
          l.copy(v);
          u.copy(v);
          for (var i = 0; i !== n; i++) {
            this.getVertex(i, v);
            if (v.x < l.x) {
              l.x = v.x;
            } else if (v.x > u.x) {
              u.x = v.x;
            }
            if (v.y < l.y) {
              l.y = v.y;
            } else if (v.y > u.y) {
              u.y = v.y;
            }
            if (v.z < l.z) {
              l.z = v.z;
            } else if (v.z > u.z) {
              u.z = v.z;
            }
          }
        };
        Trimesh.prototype.updateAABB = function() {
          this.computeLocalAABB(this.aabb);
        };
        Trimesh.prototype.updateBoundingSphereRadius = function() {
          var max2 = 0;
          var vertices = this.vertices;
          var v = new Vec3();
          for (var i = 0, N = vertices.length / 3; i !== N; i++) {
            this.getVertex(i, v);
            var norm2 = v.norm2();
            if (norm2 > max2) {
              max2 = norm2;
            }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
        };
        var tempWorldVertex = new Vec3();
        var calculateWorldAABB_frame = new Transform();
        var calculateWorldAABB_aabb = new AABB();
        Trimesh.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var frame = calculateWorldAABB_frame;
          var result = calculateWorldAABB_aabb;
          frame.position = pos;
          frame.quaternion = quat;
          this.aabb.toWorldFrame(frame, result);
          min.copy(result.lowerBound);
          max.copy(result.upperBound);
        };
        Trimesh.prototype.volume = function() {
          return 4 * Math.PI * this.boundingSphereRadius / 3;
        };
        Trimesh.createTorus = function(radius, tube, radialSegments, tubularSegments, arc) {
          radius = radius || 1;
          tube = tube || 0.5;
          radialSegments = radialSegments || 8;
          tubularSegments = tubularSegments || 6;
          arc = arc || Math.PI * 2;
          var vertices = [];
          var indices = [];
          for (var j = 0; j <= radialSegments; j++) {
            for (var i = 0; i <= tubularSegments; i++) {
              var u = i / tubularSegments * arc;
              var v = j / radialSegments * Math.PI * 2;
              var x = (radius + tube * Math.cos(v)) * Math.cos(u);
              var y = (radius + tube * Math.cos(v)) * Math.sin(u);
              var z = tube * Math.sin(v);
              vertices.push(x, y, z);
            }
          }
          for (var j = 1; j <= radialSegments; j++) {
            for (var i = 1; i <= tubularSegments; i++) {
              var a = (tubularSegments + 1) * j + i - 1;
              var b = (tubularSegments + 1) * (j - 1) + i - 1;
              var c = (tubularSegments + 1) * (j - 1) + i;
              var d = (tubularSegments + 1) * j + i;
              indices.push(a, b, d);
              indices.push(b, c, d);
            }
          }
          return new Trimesh(vertices, indices);
        };
      }, { "../collision/AABB": 3, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Octree": 50, "./Shape": 43 }], 46: [function(_dereq_, module3, exports3) {
        module3.exports = GSSolver;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Solver = _dereq_("./Solver");
        function GSSolver() {
          Solver.call(this);
          this.iterations = 10;
          this.tolerance = 1e-7;
        }
        GSSolver.prototype = new Solver();
        var GSSolver_solve_lambda = [];
        var GSSolver_solve_invCs = [];
        var GSSolver_solve_Bs = [];
        GSSolver.prototype.solve = function(dt, world) {
          var iter = 0, maxIter = this.iterations, tolSquared = this.tolerance * this.tolerance, equations = this.equations, Neq = equations.length, bodies = world.bodies, Nbodies = bodies.length, h = dt, q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;
          if (Neq !== 0) {
            for (var i = 0; i !== Nbodies; i++) {
              bodies[i].updateSolveMassProperties();
            }
          }
          var invCs = GSSolver_solve_invCs, Bs = GSSolver_solve_Bs, lambda = GSSolver_solve_lambda;
          invCs.length = Neq;
          Bs.length = Neq;
          lambda.length = Neq;
          for (var i = 0; i !== Neq; i++) {
            var c = equations[i];
            lambda[i] = 0;
            Bs[i] = c.computeB(h);
            invCs[i] = 1 / c.computeC();
          }
          if (Neq !== 0) {
            for (var i = 0; i !== Nbodies; i++) {
              var b = bodies[i], vlambda = b.vlambda, wlambda = b.wlambda;
              vlambda.set(0, 0, 0);
              if (wlambda) {
                wlambda.set(0, 0, 0);
              }
            }
            for (iter = 0; iter !== maxIter; iter++) {
              deltalambdaTot = 0;
              for (var j = 0; j !== Neq; j++) {
                var c = equations[j];
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * (B - GWlambda - c.eps * lambdaj);
                if (lambdaj + deltalambda < c.minForce) {
                  deltalambda = c.minForce - lambdaj;
                } else if (lambdaj + deltalambda > c.maxForce) {
                  deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;
                deltalambdaTot += deltalambda > 0 ? deltalambda : -deltalambda;
                c.addToWlambda(deltalambda);
              }
              if (deltalambdaTot * deltalambdaTot < tolSquared) {
                break;
              }
            }
            for (var i = 0; i !== Nbodies; i++) {
              var b = bodies[i], v = b.velocity, w = b.angularVelocity;
              v.vadd(b.vlambda, v);
              if (w) {
                w.vadd(b.wlambda, w);
              }
            }
          }
          return iter;
        };
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./Solver": 47 }], 47: [function(_dereq_, module3, exports3) {
        module3.exports = Solver;
        function Solver() {
          this.equations = [];
        }
        Solver.prototype.solve = function(dt, world) {
          return 0;
        };
        Solver.prototype.addEquation = function(eq) {
          if (eq.enabled) {
            this.equations.push(eq);
          }
        };
        Solver.prototype.removeEquation = function(eq) {
          var eqs = this.equations;
          var i = eqs.indexOf(eq);
          if (i !== -1) {
            eqs.splice(i, 1);
          }
        };
        Solver.prototype.removeAllEquations = function() {
          this.equations.length = 0;
        };
      }, {}], 48: [function(_dereq_, module3, exports3) {
        module3.exports = SplitSolver;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var Solver = _dereq_("./Solver");
        var Body = _dereq_("../objects/Body");
        function SplitSolver(subsolver) {
          Solver.call(this);
          this.iterations = 10;
          this.tolerance = 1e-7;
          this.subsolver = subsolver;
          this.nodes = [];
          this.nodePool = [];
          while (this.nodePool.length < 128) {
            this.nodePool.push(this.createNode());
          }
        }
        SplitSolver.prototype = new Solver();
        var SplitSolver_solve_nodes = [];
        var SplitSolver_solve_nodePool = [];
        var SplitSolver_solve_eqs = [];
        var SplitSolver_solve_bds = [];
        var SplitSolver_solve_dummyWorld = { bodies: [] };
        var STATIC = Body.STATIC;
        function getUnvisitedNode(nodes) {
          var Nnodes = nodes.length;
          for (var i = 0; i !== Nnodes; i++) {
            var node = nodes[i];
            if (!node.visited && !(node.body.type & STATIC)) {
              return node;
            }
          }
          return false;
        }
        var queue = [];
        function bfs(root, visitFunc2, bds, eqs) {
          queue.push(root);
          root.visited = true;
          visitFunc2(root, bds, eqs);
          while (queue.length) {
            var node = queue.pop();
            var child;
            while (child = getUnvisitedNode(node.children)) {
              child.visited = true;
              visitFunc2(child, bds, eqs);
              queue.push(child);
            }
          }
        }
        function visitFunc(node, bds, eqs) {
          bds.push(node.body);
          var Neqs = node.eqs.length;
          for (var i = 0; i !== Neqs; i++) {
            var eq = node.eqs[i];
            if (eqs.indexOf(eq) === -1) {
              eqs.push(eq);
            }
          }
        }
        SplitSolver.prototype.createNode = function() {
          return { body: null, children: [], eqs: [], visited: false };
        };
        SplitSolver.prototype.solve = function(dt, world) {
          var nodes = SplitSolver_solve_nodes, nodePool = this.nodePool, bodies = world.bodies, equations = this.equations, Neq = equations.length, Nbodies = bodies.length, subsolver = this.subsolver;
          while (nodePool.length < Nbodies) {
            nodePool.push(this.createNode());
          }
          nodes.length = Nbodies;
          for (var i = 0; i < Nbodies; i++) {
            nodes[i] = nodePool[i];
          }
          for (var i = 0; i !== Nbodies; i++) {
            var node = nodes[i];
            node.body = bodies[i];
            node.children.length = 0;
            node.eqs.length = 0;
            node.visited = false;
          }
          for (var k = 0; k !== Neq; k++) {
            var eq = equations[k], i = bodies.indexOf(eq.bi), j = bodies.indexOf(eq.bj), ni = nodes[i], nj = nodes[j];
            ni.children.push(nj);
            ni.eqs.push(eq);
            nj.children.push(ni);
            nj.eqs.push(eq);
          }
          var child, n = 0, eqs = SplitSolver_solve_eqs;
          subsolver.tolerance = this.tolerance;
          subsolver.iterations = this.iterations;
          var dummyWorld = SplitSolver_solve_dummyWorld;
          while (child = getUnvisitedNode(nodes)) {
            eqs.length = 0;
            dummyWorld.bodies.length = 0;
            bfs(child, visitFunc, dummyWorld.bodies, eqs);
            var Neqs = eqs.length;
            eqs = eqs.sort(sortById);
            for (var i = 0; i !== Neqs; i++) {
              subsolver.addEquation(eqs[i]);
            }
            var iter = subsolver.solve(dt, dummyWorld);
            subsolver.removeAllEquations();
            n++;
          }
          return n;
        };
        function sortById(a, b) {
          return b.id - a.id;
        }
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "./Solver": 47 }], 49: [function(_dereq_, module3, exports3) {
        var EventTarget = function() {
        };
        module3.exports = EventTarget;
        EventTarget.prototype = {
          constructor: EventTarget,
          /**
           * Add an event listener
           * @method addEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {EventTarget} The self object, for chainability.
           */
          addEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              this._listeners = {};
            }
            var listeners = this._listeners;
            if (listeners[type] === void 0) {
              listeners[type] = [];
            }
            if (listeners[type].indexOf(listener) === -1) {
              listeners[type].push(listener);
            }
            return this;
          },
          /**
           * Check if an event listener is added
           * @method hasEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {Boolean}
           */
          hasEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              return false;
            }
            var listeners = this._listeners;
            if (listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1) {
              return true;
            }
            return false;
          },
          /**
           * Remove an event listener
           * @method removeEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {EventTarget} The self object, for chainability.
           */
          removeEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              return this;
            }
            var listeners = this._listeners;
            if (listeners[type] === void 0) {
              return this;
            }
            var index = listeners[type].indexOf(listener);
            if (index !== -1) {
              listeners[type].splice(index, 1);
            }
            return this;
          },
          /**
           * Emit an event.
           * @method dispatchEvent
           * @param  {Object} event
           * @param  {String} event.type
           * @return {EventTarget} The self object, for chainability.
           */
          dispatchEvent: function(event) {
            if (this._listeners === void 0) {
              return this;
            }
            var listeners = this._listeners;
            var listenerArray = listeners[event.type];
            if (listenerArray !== void 0) {
              event.target = this;
              for (var i = 0, l = listenerArray.length; i < l; i++) {
                listenerArray[i].call(this, event);
              }
            }
            return this;
          }
        };
      }, {}], 50: [function(_dereq_, module3, exports3) {
        var AABB = _dereq_("../collision/AABB");
        var Vec3 = _dereq_("../math/Vec3");
        module3.exports = Octree;
        function OctreeNode(options) {
          options = options || {};
          this.root = options.root || null;
          this.aabb = options.aabb ? options.aabb.clone() : new AABB();
          this.data = [];
          this.children = [];
        }
        function Octree(aabb, options) {
          options = options || {};
          options.root = null;
          options.aabb = aabb;
          OctreeNode.call(this, options);
          this.maxDepth = typeof options.maxDepth !== "undefined" ? options.maxDepth : 8;
        }
        Octree.prototype = new OctreeNode();
        OctreeNode.prototype.reset = function(aabb, options) {
          this.children.length = this.data.length = 0;
        };
        OctreeNode.prototype.insert = function(aabb, elementData, level) {
          var nodeData = this.data;
          level = level || 0;
          if (!this.aabb.contains(aabb)) {
            return false;
          }
          var children = this.children;
          if (level < (this.maxDepth || this.root.maxDepth)) {
            var subdivided = false;
            if (!children.length) {
              this.subdivide();
              subdivided = true;
            }
            for (var i = 0; i !== 8; i++) {
              if (children[i].insert(aabb, elementData, level + 1)) {
                return true;
              }
            }
            if (subdivided) {
              children.length = 0;
            }
          }
          nodeData.push(elementData);
          return true;
        };
        var halfDiagonal = new Vec3();
        OctreeNode.prototype.subdivide = function() {
          var aabb = this.aabb;
          var l = aabb.lowerBound;
          var u = aabb.upperBound;
          var children = this.children;
          children.push(
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 0, 0) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 0, 0) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 1, 0) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 1, 1) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 1, 1) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 0, 1) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 0, 1) }) }),
            new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 1, 0) }) })
          );
          u.vsub(l, halfDiagonal);
          halfDiagonal.scale(0.5, halfDiagonal);
          var root = this.root || this;
          for (var i = 0; i !== 8; i++) {
            var child = children[i];
            child.root = root;
            var lowerBound = child.aabb.lowerBound;
            lowerBound.x *= halfDiagonal.x;
            lowerBound.y *= halfDiagonal.y;
            lowerBound.z *= halfDiagonal.z;
            lowerBound.vadd(l, lowerBound);
            lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
          }
        };
        OctreeNode.prototype.aabbQuery = function(aabb, result) {
          var nodeData = this.data;
          var children = this.children;
          var queue = [this];
          while (queue.length) {
            var node = queue.pop();
            if (node.aabb.overlaps(aabb)) {
              Array.prototype.push.apply(result, node.data);
            }
            Array.prototype.push.apply(queue, node.children);
          }
          return result;
        };
        var tmpAABB = new AABB();
        OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {
          ray.getAABB(tmpAABB);
          tmpAABB.toLocalFrame(treeTransform, tmpAABB);
          this.aabbQuery(tmpAABB, result);
          return result;
        };
        OctreeNode.prototype.removeEmptyNodes = function() {
          var queue = [this];
          while (queue.length) {
            var node = queue.pop();
            for (var i = node.children.length - 1; i >= 0; i--) {
              if (!node.children[i].data.length) {
                node.children.splice(i, 1);
              }
            }
            Array.prototype.push.apply(queue, node.children);
          }
        };
      }, { "../collision/AABB": 3, "../math/Vec3": 30 }], 51: [function(_dereq_, module3, exports3) {
        module3.exports = Pool;
        function Pool() {
          this.objects = [];
          this.type = Object;
        }
        Pool.prototype.release = function() {
          var Nargs = arguments.length;
          for (var i = 0; i !== Nargs; i++) {
            this.objects.push(arguments[i]);
          }
        };
        Pool.prototype.get = function() {
          if (this.objects.length === 0) {
            return this.constructObject();
          } else {
            return this.objects.pop();
          }
        };
        Pool.prototype.constructObject = function() {
          throw new Error("constructObject() not implemented in this Pool subclass yet!");
        };
      }, {}], 52: [function(_dereq_, module3, exports3) {
        module3.exports = TupleDictionary;
        function TupleDictionary() {
          this.data = { keys: [] };
        }
        TupleDictionary.prototype.get = function(i, j) {
          if (i > j) {
            var temp = j;
            j = i;
            i = temp;
          }
          return this.data[i + "-" + j];
        };
        TupleDictionary.prototype.set = function(i, j, value) {
          if (i > j) {
            var temp = j;
            j = i;
            i = temp;
          }
          var key = i + "-" + j;
          if (!this.get(i, j)) {
            this.data.keys.push(key);
          }
          this.data[key] = value;
        };
        TupleDictionary.prototype.reset = function() {
          var data = this.data, keys = data.keys;
          while (keys.length > 0) {
            var key = keys.pop();
            delete data[key];
          }
        };
      }, {}], 53: [function(_dereq_, module3, exports3) {
        function Utils() {
        }
        module3.exports = Utils;
        Utils.defaults = function(options, defaults) {
          options = options || {};
          for (var key in defaults) {
            if (!(key in options)) {
              options[key] = defaults[key];
            }
          }
          return options;
        };
      }, {}], 54: [function(_dereq_, module3, exports3) {
        module3.exports = Vec3Pool;
        var Vec3 = _dereq_("../math/Vec3");
        var Pool = _dereq_("./Pool");
        function Vec3Pool() {
          Pool.call(this);
          this.type = Vec3;
        }
        Vec3Pool.prototype = new Pool();
        Vec3Pool.prototype.constructObject = function() {
          return new Vec3();
        };
      }, { "../math/Vec3": 30, "./Pool": 51 }], 55: [function(_dereq_, module3, exports3) {
        module3.exports = Narrowphase;
        var AABB = _dereq_("../collision/AABB");
        var Shape = _dereq_("../shapes/Shape");
        var Ray = _dereq_("../collision/Ray");
        var Vec3 = _dereq_("../math/Vec3");
        var Transform = _dereq_("../math/Transform");
        var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
        var Quaternion = _dereq_("../math/Quaternion");
        var Solver = _dereq_("../solver/Solver");
        var Vec3Pool = _dereq_("../utils/Vec3Pool");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var FrictionEquation = _dereq_("../equations/FrictionEquation");
        function Narrowphase(world) {
          this.contactPointPool = [];
          this.frictionEquationPool = [];
          this.result = [];
          this.frictionResult = [];
          this.v3pool = new Vec3Pool();
          this.world = world;
          this.currentContactMaterial = null;
          this.enableFrictionReduction = false;
        }
        Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, rsi, rsj) {
          var c;
          if (this.contactPointPool.length) {
            c = this.contactPointPool.pop();
            c.bi = bi;
            c.bj = bj;
          } else {
            c = new ContactEquation(bi, bj);
          }
          c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;
          var cm = this.currentContactMaterial;
          c.restitution = cm.restitution;
          c.setSpookParams(
            cm.contactEquationStiffness,
            cm.contactEquationRelaxation,
            this.world.dt
          );
          var matA = si.material || bi.material;
          var matB = sj.material || bj.material;
          if (matA && matB && matA.restitution >= 0 && matB.restitution >= 0) {
            c.restitution = matA.restitution * matB.restitution;
          }
          c.si = rsi || si;
          c.sj = rsj || sj;
          return c;
        };
        Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray) {
          var bodyA = contactEquation.bi;
          var bodyB = contactEquation.bj;
          var shapeA = contactEquation.si;
          var shapeB = contactEquation.sj;
          var world = this.world;
          var cm = this.currentContactMaterial;
          var friction = cm.friction;
          var matA = shapeA.material || bodyA.material;
          var matB = shapeB.material || bodyB.material;
          if (matA && matB && matA.friction >= 0 && matB.friction >= 0) {
            friction = matA.friction * matB.friction;
          }
          if (friction > 0) {
            var mug = friction * world.gravity.length();
            var reducedMass = bodyA.invMass + bodyB.invMass;
            if (reducedMass > 0) {
              reducedMass = 1 / reducedMass;
            }
            var pool = this.frictionEquationPool;
            var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
            var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
            c1.bi = c2.bi = bodyA;
            c1.bj = c2.bj = bodyB;
            c1.minForce = c2.minForce = -mug * reducedMass;
            c1.maxForce = c2.maxForce = mug * reducedMass;
            c1.ri.copy(contactEquation.ri);
            c1.rj.copy(contactEquation.rj);
            c2.ri.copy(contactEquation.ri);
            c2.rj.copy(contactEquation.rj);
            contactEquation.ni.tangents(c1.t, c2.t);
            c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
            c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
            c1.enabled = c2.enabled = contactEquation.enabled;
            outArray.push(c1, c2);
            return true;
          }
          return false;
        };
        var averageNormal = new Vec3();
        var averageContactPointA = new Vec3();
        var averageContactPointB = new Vec3();
        Narrowphase.prototype.createFrictionFromAverage = function(numContacts) {
          var c = this.result[this.result.length - 1];
          if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
            return;
          }
          var f1 = this.frictionResult[this.frictionResult.length - 2];
          var f2 = this.frictionResult[this.frictionResult.length - 1];
          averageNormal.setZero();
          averageContactPointA.setZero();
          averageContactPointB.setZero();
          var bodyA = c.bi;
          var bodyB = c.bj;
          for (var i = 0; i !== numContacts; i++) {
            c = this.result[this.result.length - 1 - i];
            if (c.bodyA !== bodyA) {
              averageNormal.vadd(c.ni, averageNormal);
              averageContactPointA.vadd(c.ri, averageContactPointA);
              averageContactPointB.vadd(c.rj, averageContactPointB);
            } else {
              averageNormal.vsub(c.ni, averageNormal);
              averageContactPointA.vadd(c.rj, averageContactPointA);
              averageContactPointB.vadd(c.ri, averageContactPointB);
            }
          }
          var invNumContacts = 1 / numContacts;
          averageContactPointA.scale(invNumContacts, f1.ri);
          averageContactPointB.scale(invNumContacts, f1.rj);
          f2.ri.copy(f1.ri);
          f2.rj.copy(f1.rj);
          averageNormal.normalize();
          averageNormal.tangents(f1.t, f2.t);
        };
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        var tmpQuat1 = new Quaternion();
        var tmpQuat2 = new Quaternion();
        Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool) {
          this.contactPointPool = oldcontacts;
          this.frictionEquationPool = frictionPool;
          this.result = result;
          this.frictionResult = frictionResult;
          var qi = tmpQuat1;
          var qj = tmpQuat2;
          var xi = tmpVec1;
          var xj = tmpVec2;
          for (var k = 0, N = p1.length; k !== N; k++) {
            var bi = p1[k], bj = p2[k];
            var bodyContactMaterial = null;
            if (bi.material && bj.material) {
              bodyContactMaterial = world.getContactMaterial(bi.material, bj.material) || null;
            }
            for (var i = 0; i < bi.shapes.length; i++) {
              bi.quaternion.mult(bi.shapeOrientations[i], qi);
              bi.quaternion.vmult(bi.shapeOffsets[i], xi);
              xi.vadd(bi.position, xi);
              var si = bi.shapes[i];
              for (var j = 0; j < bj.shapes.length; j++) {
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];
                if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
                  continue;
                }
                var shapeContactMaterial = null;
                if (si.material && sj.material) {
                  shapeContactMaterial = world.getContactMaterial(si.material, sj.material) || null;
                }
                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;
                var resolver = this[si.type | sj.type];
                if (resolver) {
                  if (si.type < sj.type) {
                    resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj);
                  } else {
                    resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj);
                  }
                }
              }
            }
          }
        };
        var numWarnings = 0;
        var maxWarnings = 10;
        function warn(msg) {
          if (numWarnings > maxWarnings) {
            return;
          }
          numWarnings++;
          console.warn(msg);
        }
        Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] = Narrowphase.prototype.boxBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          sj.convexPolyhedronRepresentation.material = sj.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          this.convexConvex(si.convexPolyhedronRepresentation, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexConvex(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] = Narrowphase.prototype.boxParticle = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexParticle(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.SPHERE] = Narrowphase.prototype.sphereSphere = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var r = this.createContactEquation(bi, bj, si, sj);
          xj.vsub(xi, r.ni);
          r.ni.normalize();
          r.ri.copy(r.ni);
          r.rj.copy(r.ni);
          r.ri.mult(si.radius, r.ri);
          r.rj.mult(-sj.radius, r.rj);
          r.ri.vadd(xi, r.ri);
          r.ri.vsub(bi.position, r.ri);
          r.rj.vadd(xj, r.rj);
          r.rj.vsub(bj.position, r.rj);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        };
        var planeTrimesh_normal = new Vec3();
        var planeTrimesh_relpos = new Vec3();
        var planeTrimesh_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function(planeShape, trimeshShape, planePos, trimeshPos, planeQuat, trimeshQuat, planeBody, trimeshBody) {
          var v = new Vec3();
          var normal = planeTrimesh_normal;
          normal.set(0, 0, 1);
          planeQuat.vmult(normal, normal);
          for (var i = 0; i < trimeshShape.vertices.length / 3; i++) {
            trimeshShape.getVertex(i, v);
            var v2 = new Vec3();
            v2.copy(v);
            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
            var relpos = planeTrimesh_relpos;
            v.vsub(planePos, relpos);
            var dot = normal.dot(relpos);
            if (dot <= 0) {
              var r = this.createContactEquation(planeBody, trimeshBody, planeShape, trimeshShape);
              r.ni.copy(normal);
              var projected = planeTrimesh_projected;
              normal.scale(relpos.dot(normal), projected);
              v.vsub(projected, projected);
              r.ri.copy(projected);
              r.ri.vsub(planeBody.position, r.ri);
              r.rj.copy(v);
              r.rj.vsub(trimeshBody.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
        };
        var sphereTrimesh_normal = new Vec3();
        var sphereTrimesh_relpos = new Vec3();
        var sphereTrimesh_projected = new Vec3();
        var sphereTrimesh_v = new Vec3();
        var sphereTrimesh_v2 = new Vec3();
        var sphereTrimesh_edgeVertexA = new Vec3();
        var sphereTrimesh_edgeVertexB = new Vec3();
        var sphereTrimesh_edgeVector = new Vec3();
        var sphereTrimesh_edgeVectorUnit = new Vec3();
        var sphereTrimesh_localSpherePos = new Vec3();
        var sphereTrimesh_tmp = new Vec3();
        var sphereTrimesh_va = new Vec3();
        var sphereTrimesh_vb = new Vec3();
        var sphereTrimesh_vc = new Vec3();
        var sphereTrimesh_localSphereAABB = new AABB();
        var sphereTrimesh_triangles = [];
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function(sphereShape, trimeshShape, spherePos, trimeshPos, sphereQuat, trimeshQuat, sphereBody, trimeshBody) {
          var edgeVertexA = sphereTrimesh_edgeVertexA;
          var edgeVertexB = sphereTrimesh_edgeVertexB;
          var edgeVector = sphereTrimesh_edgeVector;
          var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
          var localSpherePos = sphereTrimesh_localSpherePos;
          var tmp = sphereTrimesh_tmp;
          var localSphereAABB = sphereTrimesh_localSphereAABB;
          var v2 = sphereTrimesh_v2;
          var relpos = sphereTrimesh_relpos;
          var triangles = sphereTrimesh_triangles;
          Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);
          var sphereRadius = sphereShape.radius;
          localSphereAABB.lowerBound.set(
            localSpherePos.x - sphereRadius,
            localSpherePos.y - sphereRadius,
            localSpherePos.z - sphereRadius
          );
          localSphereAABB.upperBound.set(
            localSpherePos.x + sphereRadius,
            localSpherePos.y + sphereRadius,
            localSpherePos.z + sphereRadius
          );
          trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
          var v = sphereTrimesh_v;
          var radiusSquared = sphereShape.radius * sphereShape.radius;
          for (var i = 0; i < triangles.length; i++) {
            for (var j = 0; j < 3; j++) {
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);
              v.vsub(localSpherePos, relpos);
              if (relpos.norm2() <= radiusSquared) {
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
                v.vsub(spherePos, relpos);
                var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
                r.ni.copy(relpos);
                r.ni.normalize();
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);
                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
          for (var i = 0; i < triangles.length; i++) {
            for (var j = 0; j < 3; j++) {
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + (j + 1) % 3], edgeVertexB);
              edgeVertexB.vsub(edgeVertexA, edgeVector);
              localSpherePos.vsub(edgeVertexB, tmp);
              var positionAlongEdgeB = tmp.dot(edgeVector);
              localSpherePos.vsub(edgeVertexA, tmp);
              var positionAlongEdgeA = tmp.dot(edgeVector);
              if (positionAlongEdgeA > 0 && positionAlongEdgeB < 0) {
                localSpherePos.vsub(edgeVertexA, tmp);
                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);
                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);
                var dist = tmp.distanceTo(localSpherePos);
                if (dist < sphereShape.radius) {
                  var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
                  tmp.vsub(localSpherePos, r.ni);
                  r.ni.normalize();
                  r.ni.scale(sphereShape.radius, r.ri);
                  Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                  tmp.vsub(trimeshBody.position, r.rj);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
            }
          }
          var va = sphereTrimesh_va;
          var vb = sphereTrimesh_vb;
          var vc = sphereTrimesh_vc;
          var normal = sphereTrimesh_normal;
          for (var i = 0, N = triangles.length; i !== N; i++) {
            trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
            trimeshShape.getNormal(triangles[i], normal);
            localSpherePos.vsub(va, tmp);
            var dist = tmp.dot(normal);
            normal.scale(dist, tmp);
            localSpherePos.vsub(tmp, tmp);
            dist = tmp.distanceTo(localSpherePos);
            if (Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius) {
              var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
              tmp.vsub(localSpherePos, r.ni);
              r.ni.normalize();
              r.ni.scale(sphereShape.radius, r.ri);
              Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
              tmp.vsub(trimeshBody.position, r.rj);
              Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
              Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
          triangles.length = 0;
        };
        var point_on_plane_to_sphere = new Vec3();
        var plane_to_sphere_ortho = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] = Narrowphase.prototype.spherePlane = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var r = this.createContactEquation(bi, bj, si, sj);
          r.ni.set(0, 0, 1);
          qj.vmult(r.ni, r.ni);
          r.ni.negate(r.ni);
          r.ni.normalize();
          r.ni.mult(si.radius, r.ri);
          xi.vsub(xj, point_on_plane_to_sphere);
          r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
          point_on_plane_to_sphere.vsub(plane_to_sphere_ortho, r.rj);
          if (-point_on_plane_to_sphere.dot(r.ni) <= si.radius) {
            var ri = r.ri;
            var rj = r.rj;
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var pointInPolygon_edge = new Vec3();
        var pointInPolygon_edge_x_normal = new Vec3();
        var pointInPolygon_vtp = new Vec3();
        function pointInPolygon(verts, normal, p) {
          var positiveResult = null;
          var N = verts.length;
          for (var i = 0; i !== N; i++) {
            var v = verts[i];
            var edge = pointInPolygon_edge;
            verts[(i + 1) % N].vsub(v, edge);
            var edge_x_normal = pointInPolygon_edge_x_normal;
            edge.cross(normal, edge_x_normal);
            var vertex_to_p = pointInPolygon_vtp;
            p.vsub(v, vertex_to_p);
            var r = edge_x_normal.dot(vertex_to_p);
            if (positiveResult === null || r > 0 && positiveResult === true || r <= 0 && positiveResult === false) {
              if (positiveResult === null) {
                positiveResult = r > 0;
              }
              continue;
            } else {
              return false;
            }
          }
          return true;
        }
        var box_to_sphere = new Vec3();
        var sphereBox_ns = new Vec3();
        var sphereBox_ns1 = new Vec3();
        var sphereBox_ns2 = new Vec3();
        var sphereBox_sides = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
        var sphereBox_sphere_to_corner = new Vec3();
        var sphereBox_side_ns = new Vec3();
        var sphereBox_side_ns1 = new Vec3();
        var sphereBox_side_ns2 = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] = Narrowphase.prototype.sphereBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var v3pool = this.v3pool;
          var sides = sphereBox_sides;
          xi.vsub(xj, box_to_sphere);
          sj.getSideNormals(sides, qj);
          var R = si.radius;
          var penetrating_sides = [];
          var found = false;
          var side_ns = sphereBox_side_ns;
          var side_ns1 = sphereBox_side_ns1;
          var side_ns2 = sphereBox_side_ns2;
          var side_h = null;
          var side_penetrations = 0;
          var side_dot1 = 0;
          var side_dot2 = 0;
          var side_distance = null;
          for (var idx = 0, nsides = sides.length; idx !== nsides && found === false; idx++) {
            var ns = sphereBox_ns;
            ns.copy(sides[idx]);
            var h = ns.norm();
            ns.normalize();
            var dot = box_to_sphere.dot(ns);
            if (dot < h + R && dot > 0) {
              var ns1 = sphereBox_ns1;
              var ns2 = sphereBox_ns2;
              ns1.copy(sides[(idx + 1) % 3]);
              ns2.copy(sides[(idx + 2) % 3]);
              var h1 = ns1.norm();
              var h2 = ns2.norm();
              ns1.normalize();
              ns2.normalize();
              var dot1 = box_to_sphere.dot(ns1);
              var dot2 = box_to_sphere.dot(ns2);
              if (dot1 < h1 && dot1 > -h1 && dot2 < h2 && dot2 > -h2) {
                var dist = Math.abs(dot - h - R);
                if (side_distance === null || dist < side_distance) {
                  side_distance = dist;
                  side_dot1 = dot1;
                  side_dot2 = dot2;
                  side_h = h;
                  side_ns.copy(ns);
                  side_ns1.copy(ns1);
                  side_ns2.copy(ns2);
                  side_penetrations++;
                }
              }
            }
          }
          if (side_penetrations) {
            found = true;
            var r = this.createContactEquation(bi, bj, si, sj);
            side_ns.mult(-R, r.ri);
            r.ni.copy(side_ns);
            r.ni.negate(r.ni);
            side_ns.mult(side_h, side_ns);
            side_ns1.mult(side_dot1, side_ns1);
            side_ns.vadd(side_ns1, side_ns);
            side_ns2.mult(side_dot2, side_ns2);
            side_ns.vadd(side_ns2, r.rj);
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
          var rj = v3pool.get();
          var sphere_to_corner = sphereBox_sphere_to_corner;
          for (var j = 0; j !== 2 && !found; j++) {
            for (var k = 0; k !== 2 && !found; k++) {
              for (var l = 0; l !== 2 && !found; l++) {
                rj.set(0, 0, 0);
                if (j) {
                  rj.vadd(sides[0], rj);
                } else {
                  rj.vsub(sides[0], rj);
                }
                if (k) {
                  rj.vadd(sides[1], rj);
                } else {
                  rj.vsub(sides[1], rj);
                }
                if (l) {
                  rj.vadd(sides[2], rj);
                } else {
                  rj.vsub(sides[2], rj);
                }
                xj.vadd(rj, sphere_to_corner);
                sphere_to_corner.vsub(xi, sphere_to_corner);
                if (sphere_to_corner.norm2() < R * R) {
                  found = true;
                  var r = this.createContactEquation(bi, bj, si, sj);
                  r.ri.copy(sphere_to_corner);
                  r.ri.normalize();
                  r.ni.copy(r.ri);
                  r.ri.mult(R, r.ri);
                  r.rj.copy(rj);
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
            }
          }
          v3pool.release(rj);
          rj = null;
          var edgeTangent = v3pool.get();
          var edgeCenter = v3pool.get();
          var r = v3pool.get();
          var orthogonal = v3pool.get();
          var dist = v3pool.get();
          var Nsides = sides.length;
          for (var j = 0; j !== Nsides && !found; j++) {
            for (var k = 0; k !== Nsides && !found; k++) {
              if (j % 3 !== k % 3) {
                sides[k].cross(sides[j], edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter, r);
                r.vsub(xj, r);
                var orthonorm = r.dot(edgeTangent);
                edgeTangent.mult(orthonorm, orthogonal);
                var l = 0;
                while (l === j % 3 || l === k % 3) {
                  l++;
                }
                dist.copy(xi);
                dist.vsub(orthogonal, dist);
                dist.vsub(edgeCenter, dist);
                dist.vsub(xj, dist);
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();
                if (tdist < sides[l].norm() && ndist < R) {
                  found = true;
                  var res = this.createContactEquation(bi, bj, si, sj);
                  edgeCenter.vadd(orthogonal, res.rj);
                  res.rj.copy(res.rj);
                  dist.negate(res.ni);
                  res.ni.normalize();
                  res.ri.copy(res.rj);
                  res.ri.vadd(xj, res.ri);
                  res.ri.vsub(xi, res.ri);
                  res.ri.normalize();
                  res.ri.mult(R, res.ri);
                  res.ri.vadd(xi, res.ri);
                  res.ri.vsub(bi.position, res.ri);
                  res.rj.vadd(xj, res.rj);
                  res.rj.vsub(bj.position, res.rj);
                  this.result.push(res);
                  this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
              }
            }
          }
          v3pool.release(edgeTangent, edgeCenter, r, orthogonal, dist);
        };
        var convex_to_sphere = new Vec3();
        var sphereConvex_edge = new Vec3();
        var sphereConvex_edgeUnit = new Vec3();
        var sphereConvex_sphereToCorner = new Vec3();
        var sphereConvex_worldCorner = new Vec3();
        var sphereConvex_worldNormal = new Vec3();
        var sphereConvex_worldPoint = new Vec3();
        var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
        var sphereConvex_penetrationVec = new Vec3();
        var sphereConvex_sphereToWorldPoint = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var v3pool = this.v3pool;
          xi.vsub(xj, convex_to_sphere);
          var normals = sj.faceNormals;
          var faces = sj.faces;
          var verts = sj.vertices;
          var R = si.radius;
          var penetrating_sides = [];
          for (var i = 0; i !== verts.length; i++) {
            var v = verts[i];
            var worldCorner = sphereConvex_worldCorner;
            qj.vmult(v, worldCorner);
            xj.vadd(worldCorner, worldCorner);
            var sphere_to_corner = sphereConvex_sphereToCorner;
            worldCorner.vsub(xi, sphere_to_corner);
            if (sphere_to_corner.norm2() < R * R) {
              found = true;
              var r = this.createContactEquation(bi, bj, si, sj);
              r.ri.copy(sphere_to_corner);
              r.ri.normalize();
              r.ni.copy(r.ri);
              r.ri.mult(R, r.ri);
              worldCorner.vsub(xj, r.rj);
              r.ri.vadd(xi, r.ri);
              r.ri.vsub(bi.position, r.ri);
              r.rj.vadd(xj, r.rj);
              r.rj.vsub(bj.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
              return;
            }
          }
          var found = false;
          for (var i = 0, nfaces = faces.length; i !== nfaces && found === false; i++) {
            var normal = normals[i];
            var face = faces[i];
            var worldNormal = sphereConvex_worldNormal;
            qj.vmult(normal, worldNormal);
            var worldPoint = sphereConvex_worldPoint;
            qj.vmult(verts[face[0]], worldPoint);
            worldPoint.vadd(xj, worldPoint);
            var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
            worldNormal.mult(-R, worldSpherePointClosestToPlane);
            xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);
            var penetrationVec = sphereConvex_penetrationVec;
            worldSpherePointClosestToPlane.vsub(worldPoint, penetrationVec);
            var penetration = penetrationVec.dot(worldNormal);
            var worldPointToSphere = sphereConvex_sphereToWorldPoint;
            xi.vsub(worldPoint, worldPointToSphere);
            if (penetration < 0 && worldPointToSphere.dot(worldNormal) > 0) {
              var faceVerts = [];
              for (var j = 0, Nverts = face.length; j !== Nverts; j++) {
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex, worldVertex);
                faceVerts.push(worldVertex);
              }
              if (pointInPolygon(faceVerts, worldNormal, xi)) {
                found = true;
                var r = this.createContactEquation(bi, bj, si, sj);
                worldNormal.mult(-R, r.ri);
                worldNormal.negate(r.ni);
                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);
                xi.vsub(xj, r.rj);
                r.rj.vadd(penetrationSpherePoint, r.rj);
                r.rj.vadd(penetrationVec2, r.rj);
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);
                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
                for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                  v3pool.release(faceVerts[j]);
                }
                return;
              } else {
                for (var j = 0; j !== face.length; j++) {
                  var v1 = v3pool.get();
                  var v2 = v3pool.get();
                  qj.vmult(verts[face[(j + 1) % face.length]], v1);
                  qj.vmult(verts[face[(j + 2) % face.length]], v2);
                  xj.vadd(v1, v1);
                  xj.vadd(v2, v2);
                  var edge = sphereConvex_edge;
                  v2.vsub(v1, edge);
                  var edgeUnit = sphereConvex_edgeUnit;
                  edge.unit(edgeUnit);
                  var p = v3pool.get();
                  var v1_to_xi = v3pool.get();
                  xi.vsub(v1, v1_to_xi);
                  var dot = v1_to_xi.dot(edgeUnit);
                  edgeUnit.mult(dot, p);
                  p.vadd(v1, p);
                  var xi_to_p = v3pool.get();
                  p.vsub(xi, xi_to_p);
                  if (dot > 0 && dot * dot < edge.norm2() && xi_to_p.norm2() < R * R) {
                    var r = this.createContactEquation(bi, bj, si, sj);
                    p.vsub(xj, r.rj);
                    p.vsub(xi, r.ni);
                    r.ni.normalize();
                    r.ni.mult(R, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                    for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                      v3pool.release(faceVerts[j]);
                    }
                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                    return;
                  }
                  v3pool.release(v1);
                  v3pool.release(v2);
                  v3pool.release(p);
                  v3pool.release(xi_to_p);
                  v3pool.release(v1_to_xi);
                }
              }
              for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                v3pool.release(faceVerts[j]);
              }
            }
          }
        };
        var planeBox_normal = new Vec3();
        var plane_to_corner = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] = Narrowphase.prototype.planeBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          sj.convexPolyhedronRepresentation.material = sj.material;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          this.planeConvex(si, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj);
        };
        var planeConvex_v = new Vec3();
        var planeConvex_normal = new Vec3();
        var planeConvex_relpos = new Vec3();
        var planeConvex_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function(planeShape, convexShape, planePosition, convexPosition, planeQuat, convexQuat, planeBody, convexBody) {
          var worldVertex = planeConvex_v, worldNormal = planeConvex_normal;
          worldNormal.set(0, 0, 1);
          planeQuat.vmult(worldNormal, worldNormal);
          var numContacts = 0;
          var relpos = planeConvex_relpos;
          for (var i = 0; i !== convexShape.vertices.length; i++) {
            worldVertex.copy(convexShape.vertices[i]);
            convexQuat.vmult(worldVertex, worldVertex);
            convexPosition.vadd(worldVertex, worldVertex);
            worldVertex.vsub(planePosition, relpos);
            var dot = worldNormal.dot(relpos);
            if (dot <= 0) {
              var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);
              var projected = planeConvex_projected;
              worldNormal.mult(worldNormal.dot(relpos), projected);
              worldVertex.vsub(projected, projected);
              projected.vsub(planePosition, r.ri);
              r.ni.copy(worldNormal);
              worldVertex.vsub(convexPosition, r.rj);
              r.ri.vadd(planePosition, r.ri);
              r.ri.vsub(planeBody.position, r.ri);
              r.rj.vadd(convexPosition, r.rj);
              r.rj.vsub(convexBody.position, r.rj);
              this.result.push(r);
              numContacts++;
              if (!this.enableFrictionReduction) {
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
          if (this.enableFrictionReduction && numContacts) {
            this.createFrictionFromAverage(numContacts);
          }
        };
        var convexConvex_sepAxis = new Vec3();
        var convexConvex_q = new Vec3();
        Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, faceListA, faceListB) {
          var sepAxis = convexConvex_sepAxis;
          if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
            return;
          }
          if (si.findSeparatingAxis(sj, xi, qi, xj, qj, sepAxis, faceListA, faceListB)) {
            var res = [];
            var q = convexConvex_q;
            si.clipAgainstHull(xi, qi, sj, xj, qj, sepAxis, -100, 100, res);
            var numContacts = 0;
            for (var j = 0; j !== res.length; j++) {
              var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj), ri = r.ri, rj = r.rj;
              sepAxis.negate(r.ni);
              res[j].normal.negate(q);
              q.mult(res[j].depth, q);
              res[j].point.vadd(q, ri);
              rj.copy(res[j].point);
              ri.vsub(xi, ri);
              rj.vsub(xj, rj);
              ri.vadd(xi, ri);
              ri.vsub(bi.position, ri);
              rj.vadd(xj, rj);
              rj.vsub(bj.position, rj);
              this.result.push(r);
              numContacts++;
              if (!this.enableFrictionReduction) {
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
            if (this.enableFrictionReduction && numContacts) {
              this.createFrictionFromAverage(numContacts);
            }
          }
        };
        var particlePlane_normal = new Vec3();
        var particlePlane_relpos = new Vec3();
        var particlePlane_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] = Narrowphase.prototype.planeParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var normal = particlePlane_normal;
          normal.set(0, 0, 1);
          bj.quaternion.vmult(normal, normal);
          var relpos = particlePlane_relpos;
          xi.vsub(bj.position, relpos);
          var dot = normal.dot(relpos);
          if (dot <= 0) {
            var r = this.createContactEquation(bi, bj, si, sj);
            r.ni.copy(normal);
            r.ni.negate(r.ni);
            r.ri.set(0, 0, 0);
            var projected = particlePlane_projected;
            normal.mult(normal.dot(xi), projected);
            xi.vsub(projected, projected);
            r.rj.copy(projected);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var particleSphere_normal = new Vec3();
        Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] = Narrowphase.prototype.sphereParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var normal = particleSphere_normal;
          normal.set(0, 0, 1);
          xi.vsub(xj, normal);
          var lengthSquared = normal.norm2();
          if (lengthSquared <= sj.radius * sj.radius) {
            var r = this.createContactEquation(bi, bj, si, sj);
            normal.normalize();
            r.rj.copy(normal);
            r.rj.mult(sj.radius, r.rj);
            r.ni.copy(normal);
            r.ni.negate(r.ni);
            r.ri.set(0, 0, 0);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var cqj = new Quaternion();
        var convexParticle_local = new Vec3();
        var convexParticle_normal = new Vec3();
        var convexParticle_penetratedFaceNormal = new Vec3();
        var convexParticle_vertexToParticle = new Vec3();
        var convexParticle_worldPenetrationVec = new Vec3();
        Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var penetratedFaceIndex = -1;
          var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
          var worldPenetrationVec = convexParticle_worldPenetrationVec;
          var minPenetration = null;
          var numDetectedFaces = 0;
          var local = convexParticle_local;
          local.copy(xi);
          local.vsub(xj, local);
          qj.conjugate(cqj);
          cqj.vmult(local, local);
          if (sj.pointIsInside(local)) {
            if (sj.worldVerticesNeedsUpdate) {
              sj.computeWorldVertices(xj, qj);
            }
            if (sj.worldFaceNormalsNeedsUpdate) {
              sj.computeWorldFaceNormals(qj);
            }
            for (var i = 0, nfaces = sj.faces.length; i !== nfaces; i++) {
              var verts = [sj.worldVertices[sj.faces[i][0]]];
              var normal = sj.worldFaceNormals[i];
              xi.vsub(verts[0], convexParticle_vertexToParticle);
              var penetration = -normal.dot(convexParticle_vertexToParticle);
              if (minPenetration === null || Math.abs(penetration) < Math.abs(minPenetration)) {
                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
              }
            }
            if (penetratedFaceIndex !== -1) {
              var r = this.createContactEquation(bi, bj, si, sj);
              penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);
              worldPenetrationVec.vadd(xi, worldPenetrationVec);
              worldPenetrationVec.vsub(xj, worldPenetrationVec);
              r.rj.copy(worldPenetrationVec);
              penetratedFaceNormal.negate(r.ni);
              r.ri.set(0, 0, 0);
              var ri = r.ri, rj = r.rj;
              ri.vadd(xi, ri);
              ri.vsub(bi.position, ri);
              rj.vadd(xj, rj);
              rj.vsub(bj.position, rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            } else {
              console.warn("Point found inside convex, but did not find penetrating face!");
            }
          }
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexHeightfield(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj);
        };
        var convexHeightfield_tmp1 = new Vec3();
        var convexHeightfield_tmp2 = new Vec3();
        var convexHeightfield_faceList = [0];
        Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function(convexShape, hfShape, convexPos, hfPos, convexQuat, hfQuat, convexBody, hfBody) {
          var data = hfShape.data, w = hfShape.elementSize, radius = convexShape.boundingSphereRadius, worldPillarOffset = convexHeightfield_tmp2, faceList = convexHeightfield_faceList;
          var localConvexPos = convexHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);
          var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1, iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1, iMinY = Math.floor((localConvexPos.y - radius) / w) - 1, iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;
          if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length) {
            return;
          }
          if (iMinX < 0) {
            iMinX = 0;
          }
          if (iMaxX < 0) {
            iMaxX = 0;
          }
          if (iMinY < 0) {
            iMinY = 0;
          }
          if (iMaxY < 0) {
            iMaxY = 0;
          }
          if (iMinX >= data.length) {
            iMinX = data.length - 1;
          }
          if (iMaxX >= data.length) {
            iMaxX = data.length - 1;
          }
          if (iMaxY >= data[0].length) {
            iMaxY = data[0].length - 1;
          }
          if (iMinY >= data[0].length) {
            iMinY = data[0].length - 1;
          }
          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          if (localConvexPos.z - radius > max || localConvexPos.z + radius < min) {
            return;
          }
          for (var i = iMinX; i < iMaxX; i++) {
            for (var j = iMinY; j < iMaxY; j++) {
              hfShape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
              }
              hfShape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
              }
            }
          }
        };
        var sphereHeightfield_tmp1 = new Vec3();
        var sphereHeightfield_tmp2 = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function(sphereShape, hfShape, spherePos, hfPos, sphereQuat, hfQuat, sphereBody, hfBody) {
          var data = hfShape.data, radius = sphereShape.radius, w = hfShape.elementSize, worldPillarOffset = sphereHeightfield_tmp2;
          var localSpherePos = sphereHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);
          var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1, iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1, iMinY = Math.floor((localSpherePos.y - radius) / w) - 1, iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;
          if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length) {
            return;
          }
          if (iMinX < 0) {
            iMinX = 0;
          }
          if (iMaxX < 0) {
            iMaxX = 0;
          }
          if (iMinY < 0) {
            iMinY = 0;
          }
          if (iMaxY < 0) {
            iMaxY = 0;
          }
          if (iMinX >= data.length) {
            iMinX = data.length - 1;
          }
          if (iMaxX >= data.length) {
            iMaxX = data.length - 1;
          }
          if (iMaxY >= data[0].length) {
            iMaxY = data[0].length - 1;
          }
          if (iMinY >= data[0].length) {
            iMinY = data[0].length - 1;
          }
          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          if (localSpherePos.z - radius > max || localSpherePos.z + radius < min) {
            return;
          }
          var result = this.result;
          for (var i = iMinX; i < iMaxX; i++) {
            for (var j = iMinY; j < iMaxY; j++) {
              var numContactsBefore = result.length;
              hfShape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
              }
              hfShape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
              }
              var numContacts = result.length - numContactsBefore;
              if (numContacts > 2) {
                return;
              }
            }
          }
        };
      }, { "../collision/AABB": 3, "../collision/Ray": 9, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43, "../solver/Solver": 47, "../utils/Vec3Pool": 54 }], 56: [function(_dereq_, module3, exports3) {
        module3.exports = World;
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion = _dereq_("../math/Quaternion");
        var GSSolver = _dereq_("../solver/GSSolver");
        var Vec3Pool = _dereq_("../utils/Vec3Pool");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var FrictionEquation = _dereq_("../equations/FrictionEquation");
        var Narrowphase = _dereq_("./Narrowphase");
        var EventTarget = _dereq_("../utils/EventTarget");
        var ArrayCollisionMatrix = _dereq_("../collision/ArrayCollisionMatrix");
        var Material = _dereq_("../material/Material");
        var ContactMaterial = _dereq_("../material/ContactMaterial");
        var Body = _dereq_("../objects/Body");
        var TupleDictionary = _dereq_("../utils/TupleDictionary");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var AABB = _dereq_("../collision/AABB");
        var Ray = _dereq_("../collision/Ray");
        var NaiveBroadphase = _dereq_("../collision/NaiveBroadphase");
        function World() {
          EventTarget.apply(this);
          this.dt = -1;
          this.allowSleep = false;
          this.contacts = [];
          this.frictionEquations = [];
          this.quatNormalizeSkip = 0;
          this.quatNormalizeFast = false;
          this.time = 0;
          this.stepnumber = 0;
          this.default_dt = 1 / 60;
          this.nextId = 0;
          this.gravity = new Vec3();
          this.broadphase = new NaiveBroadphase();
          this.bodies = [];
          this.solver = new GSSolver();
          this.constraints = [];
          this.narrowphase = new Narrowphase(this);
          this.collisionMatrix = new ArrayCollisionMatrix();
          this.collisionMatrixPrevious = new ArrayCollisionMatrix();
          this.materials = [];
          this.contactmaterials = [];
          this.contactMaterialTable = new TupleDictionary();
          this.defaultMaterial = new Material("default");
          this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0 });
          this.doProfiling = false;
          this.profile = {
            solve: 0,
            makeContactConstraints: 0,
            broadphase: 0,
            integrate: 0,
            narrowphase: 0
          };
          this.subsystems = [];
          this.addBodyEvent = {
            type: "addBody",
            body: null
          };
          this.removeBodyEvent = {
            type: "removeBody",
            body: null
          };
        }
        World.prototype = new EventTarget();
        var tmpAABB1 = new AABB();
        var tmpArray1 = [];
        var tmpRay = new Ray();
        World.prototype.getContactMaterial = function(m1, m2) {
          return this.contactMaterialTable.get(m1.id, m2.id);
        };
        World.prototype.numObjects = function() {
          return this.bodies.length;
        };
        World.prototype.collisionMatrixTick = function() {
          var temp = this.collisionMatrixPrevious;
          this.collisionMatrixPrevious = this.collisionMatrix;
          this.collisionMatrix = temp;
          this.collisionMatrix.reset();
        };
        World.prototype.add = World.prototype.addBody = function(body) {
          if (this.bodies.indexOf(body) !== -1) {
            return;
          }
          body.index = this.bodies.length;
          this.bodies.push(body);
          body.world = this;
          body.initPosition.copy(body.position);
          body.initVelocity.copy(body.velocity);
          body.timeLastSleepy = this.time;
          if (body instanceof Body) {
            body.initAngularVelocity.copy(body.angularVelocity);
            body.initQuaternion.copy(body.quaternion);
          }
          this.collisionMatrix.setNumObjects(this.bodies.length);
          this.addBodyEvent.body = body;
          this.dispatchEvent(this.addBodyEvent);
        };
        World.prototype.addConstraint = function(c) {
          this.constraints.push(c);
        };
        World.prototype.removeConstraint = function(c) {
          var idx = this.constraints.indexOf(c);
          if (idx !== -1) {
            this.constraints.splice(idx, 1);
          }
        };
        World.prototype.rayTest = function(from, to, result) {
          if (result instanceof RaycastResult) {
            this.raycastClosest(from, to, {
              skipBackfaces: true
            }, result);
          } else {
            this.raycastAll(from, to, {
              skipBackfaces: true
            }, result);
          }
        };
        World.prototype.raycastAll = function(from, to, options, callback) {
          options.mode = Ray.ALL;
          options.from = from;
          options.to = to;
          options.callback = callback;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.raycastAny = function(from, to, options, result) {
          options.mode = Ray.ANY;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.raycastClosest = function(from, to, options, result) {
          options.mode = Ray.CLOSEST;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.remove = function(body) {
          body.world = null;
          var n = this.bodies.length - 1, bodies = this.bodies, idx = bodies.indexOf(body);
          if (idx !== -1) {
            bodies.splice(idx, 1);
            for (var i = 0; i !== bodies.length; i++) {
              bodies[i].index = i;
            }
            this.collisionMatrix.setNumObjects(n);
            this.removeBodyEvent.body = body;
            this.dispatchEvent(this.removeBodyEvent);
          }
        };
        World.prototype.removeBody = World.prototype.remove;
        World.prototype.addMaterial = function(m) {
          this.materials.push(m);
        };
        World.prototype.addContactMaterial = function(cmat) {
          this.contactmaterials.push(cmat);
          this.contactMaterialTable.set(cmat.materials[0].id, cmat.materials[1].id, cmat);
        };
        if (typeof performance === "undefined") {
          performance = {};
        }
        if (!performance.now) {
          var nowOffset = Date.now();
          if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart;
          }
          performance.now = function() {
            return Date.now() - nowOffset;
          };
        }
        var step_tmp1 = new Vec3();
        World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps) {
          maxSubSteps = maxSubSteps || 10;
          timeSinceLastCalled = timeSinceLastCalled || 0;
          if (timeSinceLastCalled === 0) {
            this.internalStep(dt);
            this.time += dt;
          } else {
            var internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
            internalSteps = Math.min(internalSteps, maxSubSteps);
            var t0 = performance.now();
            for (var i = 0; i !== internalSteps; i++) {
              this.internalStep(dt);
              if (performance.now() - t0 > dt * 1e3) {
                break;
              }
            }
            this.time += timeSinceLastCalled;
            var h = this.time % dt;
            var h_div_dt = h / dt;
            var interpvelo = step_tmp1;
            var bodies = this.bodies;
            for (var j = 0; j !== bodies.length; j++) {
              var b = bodies[j];
              if (b.type !== Body.STATIC && b.sleepState !== Body.SLEEPING) {
                b.position.vsub(b.previousPosition, interpvelo);
                interpvelo.scale(h_div_dt, interpvelo);
                b.position.vadd(interpvelo, b.interpolatedPosition);
              } else {
                b.interpolatedPosition.copy(b.position);
                b.interpolatedQuaternion.copy(b.quaternion);
              }
            }
          }
        };
        var World_step_postStepEvent = { type: "postStep" }, World_step_preStepEvent = { type: "preStep" }, World_step_collideEvent = { type: "collide", body: null, contact: null }, World_step_oldContacts = [], World_step_frictionEquationPool = [], World_step_p1 = [], World_step_p2 = [], World_step_gvec = new Vec3(), World_step_vi = new Vec3(), World_step_vj = new Vec3(), World_step_wi = new Vec3(), World_step_wj = new Vec3(), World_step_t1 = new Vec3(), World_step_t2 = new Vec3(), World_step_rixn = new Vec3(), World_step_rjxn = new Vec3(), World_step_step_q = new Quaternion(), World_step_step_w = new Quaternion(), World_step_step_wq = new Quaternion(), invI_tau_dt = new Vec3();
        World.prototype.internalStep = function(dt) {
          this.dt = dt;
          var world = this, that = this, contacts = this.contacts, p1 = World_step_p1, p2 = World_step_p2, N = this.numObjects(), bodies = this.bodies, solver = this.solver, gravity = this.gravity, doProfiling = this.doProfiling, profile = this.profile, DYNAMIC = Body.DYNAMIC, profilingStart, constraints = this.constraints, frictionEquationPool = World_step_frictionEquationPool, gnorm = gravity.norm(), gx = gravity.x, gy = gravity.y, gz = gravity.z, i = 0;
          if (doProfiling) {
            profilingStart = performance.now();
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.type & DYNAMIC) {
              var f = bi.force, m = bi.mass;
              f.x += m * gx;
              f.y += m * gy;
              f.z += m * gz;
            }
          }
          for (var i = 0, Nsubsystems = this.subsystems.length; i !== Nsubsystems; i++) {
            this.subsystems[i].update();
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          p1.length = 0;
          p2.length = 0;
          this.broadphase.collisionPairs(this, p1, p2);
          if (doProfiling) {
            profile.broadphase = performance.now() - profilingStart;
          }
          var Nconstraints = constraints.length;
          for (i = 0; i !== Nconstraints; i++) {
            var c = constraints[i];
            if (!c.collideConnected) {
              for (var j = p1.length - 1; j >= 0; j -= 1) {
                if (c.bodyA === p1[j] && c.bodyB === p2[j] || c.bodyB === p1[j] && c.bodyA === p2[j]) {
                  p1.splice(j, 1);
                  p2.splice(j, 1);
                }
              }
            }
          }
          this.collisionMatrixTick();
          if (doProfiling) {
            profilingStart = performance.now();
          }
          var oldcontacts = World_step_oldContacts;
          var NoldContacts = contacts.length;
          for (i = 0; i !== NoldContacts; i++) {
            oldcontacts.push(contacts[i]);
          }
          contacts.length = 0;
          var NoldFrictionEquations = this.frictionEquations.length;
          for (i = 0; i !== NoldFrictionEquations; i++) {
            frictionEquationPool.push(this.frictionEquations[i]);
          }
          this.frictionEquations.length = 0;
          this.narrowphase.getContacts(
            p1,
            p2,
            this,
            contacts,
            oldcontacts,
            // To be reused
            this.frictionEquations,
            frictionEquationPool
          );
          if (doProfiling) {
            profile.narrowphase = performance.now() - profilingStart;
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          for (var i = 0; i < this.frictionEquations.length; i++) {
            solver.addEquation(this.frictionEquations[i]);
          }
          var ncontacts = contacts.length;
          for (var k = 0; k !== ncontacts; k++) {
            var c = contacts[k];
            var bi = c.bi, bj = c.bj, si = c.si, sj = c.sj;
            var cm;
            if (bi.material && bj.material) {
              cm = this.getContactMaterial(bi.material, bj.material) || this.defaultContactMaterial;
            } else {
              cm = this.defaultContactMaterial;
            }
            var mu = cm.friction;
            if (bi.material && bj.material) {
              if (bi.material.friction >= 0 && bj.material.friction >= 0) {
                mu = bi.material.friction * bj.material.friction;
              }
              if (bi.material.restitution >= 0 && bj.material.restitution >= 0) {
                c.restitution = bi.material.restitution * bj.material.restitution;
              }
            }
            solver.addEquation(c);
            if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
              var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
              var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
              if (speedSquaredB >= speedLimitSquaredB * 2) {
                bi._wakeUpAfterNarrowphase = true;
              }
            }
            if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
              var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
              var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
              if (speedSquaredA >= speedLimitSquaredA * 2) {
                bj._wakeUpAfterNarrowphase = true;
              }
            }
            this.collisionMatrix.set(bi, bj, true);
            if (!this.collisionMatrixPrevious.get(bi, bj)) {
              World_step_collideEvent.body = bj;
              World_step_collideEvent.contact = c;
              bi.dispatchEvent(World_step_collideEvent);
              World_step_collideEvent.body = bi;
              bj.dispatchEvent(World_step_collideEvent);
            }
          }
          if (doProfiling) {
            profile.makeContactConstraints = performance.now() - profilingStart;
            profilingStart = performance.now();
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi._wakeUpAfterNarrowphase) {
              bi.wakeUp();
              bi._wakeUpAfterNarrowphase = false;
            }
          }
          var Nconstraints = constraints.length;
          for (i = 0; i !== Nconstraints; i++) {
            var c = constraints[i];
            c.update();
            for (var j = 0, Neq = c.equations.length; j !== Neq; j++) {
              var eq = c.equations[j];
              solver.addEquation(eq);
            }
          }
          solver.solve(dt, this);
          if (doProfiling) {
            profile.solve = performance.now() - profilingStart;
          }
          solver.removeAllEquations();
          var pow = Math.pow;
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.type & DYNAMIC) {
              var ld = pow(1 - bi.linearDamping, dt);
              var v = bi.velocity;
              v.mult(ld, v);
              var av = bi.angularVelocity;
              if (av) {
                var ad = pow(1 - bi.angularDamping, dt);
                av.mult(ad, av);
              }
            }
          }
          this.dispatchEvent(World_step_preStepEvent);
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.preStep) {
              bi.preStep.call(bi);
            }
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          var q = World_step_step_q;
          var w = World_step_step_w;
          var wq = World_step_step_wq;
          var stepnumber = this.stepnumber;
          var DYNAMIC_OR_KINEMATIC = Body.DYNAMIC | Body.KINEMATIC;
          var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
          var quatNormalizeFast = this.quatNormalizeFast;
          var half_dt = dt * 0.5;
          var PLANE = Shape.types.PLANE, CONVEX = Shape.types.CONVEXPOLYHEDRON;
          for (i = 0; i !== N; i++) {
            var b = bodies[i], force = b.force, tau = b.torque;
            if (b.type & DYNAMIC_OR_KINEMATIC && b.sleepState !== Body.SLEEPING) {
              var velo = b.velocity, angularVelo = b.angularVelocity, pos = b.position, quat = b.quaternion, invMass = b.invMass, invInertia = b.invInertiaWorld;
              velo.x += force.x * invMass * dt;
              velo.y += force.y * invMass * dt;
              velo.z += force.z * invMass * dt;
              if (b.angularVelocity) {
                invInertia.vmult(tau, invI_tau_dt);
                invI_tau_dt.mult(dt, invI_tau_dt);
                invI_tau_dt.vadd(angularVelo, angularVelo);
              }
              pos.x += velo.x * dt;
              pos.y += velo.y * dt;
              pos.z += velo.z * dt;
              if (b.angularVelocity) {
                w.set(angularVelo.x, angularVelo.y, angularVelo.z, 0);
                w.mult(quat, wq);
                quat.x += half_dt * wq.x;
                quat.y += half_dt * wq.y;
                quat.z += half_dt * wq.z;
                quat.w += half_dt * wq.w;
                if (quatNormalize) {
                  if (quatNormalizeFast) {
                    quat.normalizeFast();
                  } else {
                    quat.normalize();
                  }
                }
              }
              if (b.aabb) {
                b.aabbNeedsUpdate = true;
              }
              if (b.updateInertiaWorld) {
                b.updateInertiaWorld();
              }
            }
          }
          this.clearForces();
          this.broadphase.dirty = true;
          if (doProfiling) {
            profile.integrate = performance.now() - profilingStart;
          }
          this.time += dt;
          this.stepnumber += 1;
          this.dispatchEvent(World_step_postStepEvent);
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            var postStep = bi.postStep;
            if (postStep) {
              postStep.call(bi);
            }
          }
          if (this.allowSleep) {
            for (i = 0; i !== N; i++) {
              bodies[i].sleepTick(this.time);
            }
          }
        };
        World.prototype.clearForces = function() {
          var bodies = this.bodies;
          var N = bodies.length;
          for (var i = 0; i !== N; i++) {
            var b = bodies[i], force = b.force, tau = b.torque;
            b.force.set(0, 0, 0);
            b.torque.set(0, 0, 0);
          }
        };
      }, { "../collision/AABB": 3, "../collision/ArrayCollisionMatrix": 4, "../collision/NaiveBroadphase": 7, "../collision/Ray": 9, "../collision/RaycastResult": 10, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../material/ContactMaterial": 24, "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Shape": 43, "../solver/GSSolver": 46, "../utils/EventTarget": 49, "../utils/TupleDictionary": 52, "../utils/Vec3Pool": 54, "./Narrowphase": 55 }] }, {}, [2])(2);
    });
  }
});
export default require_cannon();
//# sourceMappingURL=cannon.js.map
