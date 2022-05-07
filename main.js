import './style.css'
import * as Three from 'three';

const canvas = document.querySelector('#bg');

const slider= document.getElementById('#slider');

const meshArray=[];

const button = document.querySelector("#btn");

const TR_A = document.querySelector("#TorusRadius");
const TR_B = document.querySelector("#TorusTube");
const TR_C = document.querySelector("#TorusSegments");
const TR_D = document.querySelector("#TubeSegments");


const TR_A_text = document.querySelector("#TorusRadiusText");
const TR_B_text = document.querySelector("#TorusTubeText");
const TR_C_text = document.querySelector("#TorusSegmentsText");
const TR_D_text = document.querySelector("#TubeSegmentsText");


TR_A.addEventListener("change", change_a);
TR_B.addEventListener("change", change_b);
TR_C.addEventListener("change", change_c);
TR_D.addEventListener("change", change_d);
function change_a(){
  TR_A_text.innerText=TR_A.value;
}
function change_b(){
  TR_B_text.innerText=TR_B.value;
}
function change_c(){
  TR_C_text.innerText=TR_C.value;
}
function change_d(){
  TR_D_text.innerText=TR_D.value;
}
button.addEventListener("click", increase_rangs);
const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75, 500/ 500,0.1,1000);
const renderer = new Three.WebGLRenderer({canvas: canvas});

renderer.setPixelRatio(canvas.devicePixelRatio);
renderer.setSize(500, 500);
camera.position.setZ(30);


  
const geometry = new Three.TorusGeometry( 20, 3, 16, 10 );
const material = new Three.MeshBasicMaterial( {color: 0x0000ff, wireframe:true} );
const anothergeometry = new Three.TorusGeometry( 10, 3, 16, 100 );

let cube = new Three.Mesh( geometry, material );
meshArray.push(cube);
var previus_ring_size=10;
scene.add( cube );
var ring_size = 11;
function increase_rangs(){
  console.log("presssed");
 
  TR_B_text.innerText=TR_B.value;
  TR_C_text.innerText=TR_C.value;
  TR_D_text.innerText=TR_D.value;
  animate();
}


let stop = false;
function animate(){
    console.log(ring_size);
    let num_a = parseInt(TR_A.value);
    let num_b = parseInt(TR_B.value);
    let num_c = parseInt(TR_C.value);
    let num_d = parseInt(TR_D.value);

    let geomertry2 = new Three.TorusGeometry(num_a, num_b, num_c, num_d );
    meshArray[0].geometry = geomertry2;
   // console.log(meshArray[0].geometry);
    ring_size = previus_ring_size;
  
  renderer.render(scene, camera);
}
  requestAnimationFrame( animate );
animate();
