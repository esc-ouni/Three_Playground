import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5,
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
floor.material.side = THREE.DoubleSide;
scene.add(floor)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 2.4)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

//  Sizes
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

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-0.71, 1.41, 0.78)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



//GLTF Loading
const GLTFLoaderr = new GLTFLoader();

GLTFLoaderr.load(
    '/models/round_wooden_table_01_4k.gltf/round_wooden_table_01_4k.gltf',
    function ( gltf ) {
        scene.add( gltf.scene.children[0] );

        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Group
        // gltf.scenes; // Array<THREE.Group>
        // gltf.cameras; // Array<THREE.Camera>
        // gltf.asset; // Object
        
    }
);

const group = new THREE.Group();


GLTFLoaderr.load(
    '/models/chess_set_4k.gltf/chess_set_4k.gltf',
	function ( gltf ) {
        let x = 0;
        let itemD;
        const z = gltf.scene.children[0].position.z;
        
        // gui.add(gltf.scene.position, 'y', 0, 10).step(1)
		for (const item of gltf.scene.children){
            if (x === 0.3){
                itemD = item;
            }
            // gltf.scene.children[22].position.y = 1;
            // scene.add( gltf.scene.children[22] );
            item.position.y = 1;
            item.position.x = x;
            item.position.z = z;
            scene.add(item)
            console.log(item);
            x += 0.1;
        }
        // itemD.clear()
        console.log('Item Selected: ', itemD);
        
        // scene.remove(itemD)
		// gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		// gltf.scenes; // Array<THREE.Group>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object

    }
);


//



//  Animate
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
    controls.update()

    // console.log(camera.position);

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()