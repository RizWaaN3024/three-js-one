import * as THREE from 'three';


// scene
const scene = new THREE.Scene();

// create our sphere

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
// mesh is a combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Add a camera
const camera = new THREE.PerspectiveCamera(45, 800, 600);
scene.add(camera);

// render the scene on the screen
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800, 600);

