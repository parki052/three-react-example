import * as Three from "three";
let scene, camera, renderer;
export const buildScene = (el) => {
    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(75, 1, 1, 1000);
    renderer = new Three.WebGLRenderer();

    el.appendChild(renderer.domElement);

    let floorGeometry = new Three.BoxGeometry(10, 1, 10);
    let floorMaterial = new Three.MeshStandardMaterial();
    let floor = new Three.Mesh(floorGeometry, floorMaterial);
    floor.name = "floor";

    let cubeGeometry = new Three.BoxGeometry(1, 1, 1);
    let cubeMaterial = new Three.MeshNormalMaterial();
    let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
    cube.name = 'cube';
    
    let light = new Three.AmbientLight("blue");

    cube.position.y += 2;
    scene.add(light);
    scene.add(floor);
    scene.add(cube);
    camera.position.z = 5;
    camera.position.y = 2;

    run();
}

const fitCanvasToDisplaySize = (force) => {
    if(!renderer) return;
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (force || canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }   
}

const animate = () => {
    if(!renderer) return;
    fitCanvasToDisplaySize(false);

    //animate stuff here--
    let cube = scene.getObjectByName( "cube" );
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    
    //--
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

const run = () => {
    animate();
    fitCanvasToDisplaySize(true);
    requestAnimationFrame(animate);
}

