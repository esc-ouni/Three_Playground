import * as THREE from 'three'
import GUI from 'lil-gui'
import gsap from 'gsap'

// S2 ADD STatndard Light/ Metalness


/**
 * Debug
 */
const gui = new GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui
    .addColor(parameters, 'materialColor')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Test cube
 */

const Material = new THREE.MeshNormalMaterial();

const obj1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 0), Material);
const obj2 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.4, 0.15, 136, 19, 2, 5), Material);
const obj3 = new THREE.Mesh(new THREE.OctahedronGeometry(0.6, 0), Material);

scene.add(obj1, obj2, obj3)

obj1.position.x += 1.3;
obj2.position.x -= 1.3;
obj3.position.x += 1.3;

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
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const sectionMeshes = [obj1, obj2, obj3];

const cursor = {};
cursor.x = 0;
cursor.y = 0;

window.addEventListener('mousemove', (event) => {
    cursor.x = (event.clientX / sizes.width) - 0.5;
    cursor.y = (event.clientY / sizes.height) - 0.5;
})

const Distance = 5;

obj2.position.y = - Distance; 
obj3.position.y = - (Distance * 2); 


//add Particles

const count = 7000; 

const positions = new Float32Array(count * 3);
const colors    = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++){
    positions[i] = (Math.random() - 0.5) * 10;
}

const Geo = new THREE.BufferGeometry();
Geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
Geo.scale(2, 3, 2)

const Mat = new THREE.PointsMaterial({color:'white'});
Mat.size            = 0.007;
Mat.sizeAttenuation = true;

const Points = new THREE.Points(Geo, Mat)

scene.add(Points);

//add Particles

let S, CurrentSection, Y = 0;
let oSec = 0.001;


document.addEventListener('scroll', (event) => {
    S = window.scrollY / sizes.height;

    if (S < (0.33*2)){
        CurrentSection = 0;
    }
    else if (S >= (0.33*2) && S <= (0.66*2)){
        CurrentSection = 1;
    }
    else if (S > (0.66*2)){
        CurrentSection = 2;
    }

    if (CurrentSection !== oSec){
        console.log(CurrentSection);
        oSec = CurrentSection;
        gsap.to(sectionMeshes[CurrentSection].rotation, {
            duration: 2.5,
            ease: 'power3.out',
            x: '-=6',
            y: '+=8.5'
        })
    }

})


const tick = () =>
{
    Y = window.scrollY

    let offset= - ((Y/2658) * 10);

    camera.position.x += (cursor.x - camera.position.x) * 0.02;
    camera.position.y += ( offset + cursor.y - camera.position.y) * 0.02;
    // camera.position.y = offset;

    const elapsedTime = clock.getDelta()

    // Animating
    for (const mesh of sectionMeshes){
        mesh.rotation.x += - elapsedTime * 0.12;
        mesh.rotation.y += (0.17 * elapsedTime);

        mesh.position.y += (Math.sin(clock.elapsedTime) / 200);
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()