import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import cannon, { World } from 'cannon'

/**
 * Debug
 */
const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
])

/**
 * Test sphere
 */
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
sphere.castShadow = true
sphere.position.y = 10
scene.add(sphere)

gui.add(sphere.material, 'metalness', 0, 1);
gui.add(sphere.material, 'roughness', 0, 1);
gui.add(sphere.position, 'y', 0, 5000);

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

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
camera.position.set(- 30, 30, 30)
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
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



//Cannon.js

//Materials
// console.log(cannon);
const PhysicWorld = new cannon.World();

PhysicWorld.gravity.set(0, - 8.92, 0);

const concreteMaterial = new cannon.Material('concrete');
const plasticMaterial  = new cannon.Material('plastic');

const ContactMaterial  = new cannon.ContactMaterial(
    concreteMaterial,
    plasticMaterial,
    {
        friction:0.2,
        restitution:0.85,
    }
);
PhysicWorld.addContactMaterial(ContactMaterial)


const sphereShape = new cannon.Sphere(0.5);
const sphereBody  = new cannon.Body({
    mass: 1,
    position: new cannon.Vec3().copy(sphere.position),
    shape: sphereShape,
    material: plasticMaterial
});

PhysicWorld.addBody(sphereBody);

//plane
const planeShape = new cannon.Plane();
const planeBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(floor.position),
    shape: planeShape,
    material:concreteMaterial
})
planeBody.quaternion.setFromAxisAngle(
    new cannon.Vec3(-1, 0, 0),
    Math.PI * 0.5
)
PhysicWorld.addBody(planeBody);


//



/**
 * Animate
 */
const clock = new THREE.Clock()

let Dx, oelapsedTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    Dx = elapsedTime - oelapsedTime
    oelapsedTime = elapsedTime

    // update physic world
    PhysicWorld.step(1/60, Dx, 3)

    // console.log(sphereBody.position);
    sphere.position.copy(sphereBody.position);
    floor.position.copy(planeBody.position);

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()