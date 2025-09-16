// In wwwroot/js/scene.js
import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

let camera, scene, renderer, mesh;

export async function init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container for three.js not found");
        return;
    }

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Object
    const geometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff7d00, // --accent-1 from the new palette
        wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Start animation
    animate();
}

function onWindowResize() {
    if (!renderer || !camera) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (mesh) {
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.002;
    }
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}
