import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader}  from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui'

/**
 * Base
*/
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
*/
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = - 2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object3.position.x = 2

scene.add(object1, object2, object3)

/**
 * Sizes
*/
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    
    /**
     * Camera
    */
   // Base camera
   const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
   camera.position.z = 3
   scene.add(camera)
   
   // Controls
   const controls = new OrbitControls(camera, canvas)
   controls.enableDamping = true
   
   /**
    * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    //mouse event listener
    const mouse = new THREE.Vector2();
    
    window.addEventListener('mousemove', function (info) {
        // console.log('Mouse Moved: x:', ((info.clientX/window.innerWidth)*2)-1 ,' y:', -((info.clientY/window.innerHeight)*2 -1 ));
        mouse.x = ((info.clientX/window.innerWidth)*2)-1;
        mouse.y = -((info.clientY/window.innerHeight)*2 - 1);
    })
    
    //Raycaster
    const Raycaster = new THREE.Raycaster();
    const ObjectsToTest = [object1, object2, object3];
    let   Intersects   =  Raycaster.intersectObjects(ObjectsToTest);
    let   CurrentIntersect = null;
    
    window.addEventListener('click', function() {
        if (CurrentIntersect){
            CurrentIntersect.object.scale.set(2,2,2);
        }
    })
  
    
//GLTF

const light = new THREE.AmbientLight('', 4);
scene.add(light);


let model = null;

const loaderr = new GLTFLoader();
loaderr.load(
	// resource URL
	'/models/Duck/glTF-Embedded/Duck.gltf',
	// called when the resource is loaded
	function ( gltf ) {
        model = gltf.scene;
		scene.add( gltf.scene );
    });
//

    /**
     * Animate
    
    */
   const clock = new THREE.Clock()
   
let inter_with_model = 0;
const tick = () =>
        {
            
            Raycaster.setFromCamera(mouse, camera);
            Intersects   =  Raycaster.intersectObjects(ObjectsToTest);
            if (model){
                inter_with_model = Raycaster.intersectObject(model).length;
                if (inter_with_model){
                    model.scale.set(2, 2, 2);
                    model.position.x += 1;
                }
                else{
                    model.scale.set(1, 1, 1);
                }
            }

            const elapsedTime = clock.getElapsedTime()
            
            object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
            object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
            object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5;
            
            if (Intersects.length){
                CurrentIntersect = Intersects[0];
            }
            else{
                for (const object of ObjectsToTest){
                object.scale.set(1, 1, 1);
            }
        }
        
        for (const intersect of ObjectsToTest){
            intersect.material.color.set('#ff0000')
        }
        for (const intersect of Intersects){
            intersect.object.material.color.set('#00ffff')
        }


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()