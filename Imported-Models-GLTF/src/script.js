import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js'

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
// scene.add(floor)

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
        gui.add(gltf.scene.children[0].position, 'y', -50, 1).step(1);
        scene.add( gltf.scene.children[0] );
    }
);

const group = new THREE.Group();


GLTFLoaderr.load(
    '/models/chess_set_4k.gltf/chess_set_4k.gltf',
	function ( gltf ) {
        let x = 0;
        let Board;
        let z = -0.2;

        // Testing right apraoch
        let item;
        let posx = -0.36;
		while (gltf.scene.children.length){
            item = gltf.scene.children[0];
            if (x >= 16){
                z = -0.25;
                posx = -1.15;
            }
            if (item.name === "board"){
                Board = item;
                item.position.y = 1.004;
                item.position.x = 0;
                item.position.z = 0.179;
                x -= 1;                    
            }
            else{
                item.position.y = 1.004;
                item.position.x = posx + (0.05 * x);
                item.position.z = z;
            }
            scene.add(item)
            x += 1;
        }
        
        // gltf.scene.position.y = 1.004;
        // gui.add(gltf.scene.position, 'y', -50, 1).step(1);
        // scene.add(gltf.scene)
    }
);
//

//Enviroment Map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('/models/envmap/photo_studio_loft_hall_8k.pic', (enviroment_map) => {
//     enviroment_map.mapping = THREE.EquirectangularReflectionMapping
//     scene.background  = enviroment_map;
//     scene.environment = enviroment_map;
// })

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