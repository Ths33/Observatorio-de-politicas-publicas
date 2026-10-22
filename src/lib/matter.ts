import * as THREE from 'three';
export async function createMatter(canvas:HTMLCanvasElement){
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(40,innerWidth/innerHeight,.1,100);camera.position.z=8;
 const geometry=new THREE.IcosahedronGeometry(1.75,1);
 const material=new THREE.MeshPhysicalMaterial({color:0xb8ff65,metalness:.55,roughness:.28,wireframe:true,transparent:true,opacity:.42});
 const mesh=new THREE.Mesh(geometry,material);scene.add(mesh);mesh.position.x=innerWidth<700?0:2.4;
 const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(2,4,5);scene.add(light);
 let active=true,frame=0,sceneIndex=0;
 const {gsap}=await import('gsap');
 function render(){if(!active)return;mesh.rotation.y+=.0018;mesh.rotation.x+=.0006;renderer.render(scene,camera);frame=requestAnimationFrame(render)}
 render();
 function setScene(n:number){sceneIndex=n;gsap.to(mesh.rotation,{x:n*.7,y:n*1.6,duration:1.5,ease:'power3.inOut'});gsap.to(mesh.scale,{x:n===1?1.35:.85,y:n===2?1.4:1,z:n===1?1.35:.85,duration:1.5});gsap.to(mesh.position,{x:innerWidth<700?0:n===2?2.7:2.4,y:n===1?-.4:.4,duration:1.5});gsap.to(material,{opacity:n===2?.75:.42,duration:1.3})}
 function pulse(){gsap.fromTo(mesh.scale,{x:.5,y:.5,z:.5},{x:1.4,y:1.4,z:1.4,duration:.9,ease:'elastic.out(1,.3)'})}
 function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);mesh.position.x=innerWidth<700?0:sceneIndex===2?2.7:2.4}
 addEventListener('resize',resize);
 return {setScene,pulse,setVisible(v:boolean){if(active===v)return;active=v;if(v)render();else cancelAnimationFrame(frame)},dispose(){active=false;cancelAnimationFrame(frame);removeEventListener('resize',resize);geometry.dispose();material.dispose();renderer.dispose()}};
}