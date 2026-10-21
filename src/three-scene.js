import {useEffect} from 'react';
import * as THREE from 'three';

/**
 * Decorative 3D scene. React owns the canvas; Three owns only WebGL resources.
 * No blocking assets, textures, network requests or external navigation.
 */
export function useThreeScene(canvasRef,active){
 useEffect(()=>{
  const canvas=canvasRef.current;
  if(!canvas||!active||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let renderer,frame=0,observer,raf=0,disposed=false;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  camera.position.set(0,0,8.5);
  try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{return}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
  renderer.setClearColor(0x000000,0);
  const root=new THREE.Group();scene.add(root);
  const globe=new THREE.Mesh(new THREE.IcosahedronGeometry(2.15,5),new THREE.MeshBasicMaterial({color:0x6fa87d,wireframe:true,transparent:true,opacity:.26,depthWrite:false}));
  root.add(globe);
  const shell=new THREE.Mesh(new THREE.IcosahedronGeometry(1.94,3),new THREE.MeshPhongMaterial({color:0x183a29,emissive:0x133a27,shininess:55,transparent:true,opacity:.78,flatShading:true}));
  root.add(shell);
  scene.add(new THREE.AmbientLight(0x9fd9ac,1.8));
  const light=new THREE.PointLight(0xd5ff7a,70,30);light.position.set(4,4,7);scene.add(light);
  const count=950,positions=new Float32Array(count*3);
  for(let i=0;i<count;i++){const a=i*2.39996323,y=1-2*(i+.5)/count,r=Math.sqrt(1-y*y),radius=2.3+((i*17)%13)/65;positions[i*3]=Math.cos(a)*r*radius;positions[i*3+1]=y*radius;positions[i*3+2]=Math.sin(a)*r*radius}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const points=new THREE.Points(geometry,new THREE.PointsMaterial({color:0xd5ff7a,size:.026,transparent:true,opacity:.72,sizeAttenuation:true,depthWrite:false}));
  root.add(points);
  const ringGeometry=new THREE.TorusGeometry(2.68,.012,8,160);
  const ringMaterial=new THREE.MeshBasicMaterial({color:0xd5ff7a,transparent:true,opacity:.48});
  const ring=new THREE.Mesh(ringGeometry,ringMaterial);ring.rotation.set(.7,.4,.2);root.add(ring);
  const resize=()=>{if(!renderer||disposed)return;const box=canvas.getBoundingClientRect();const w=Math.max(1,box.width),h=Math.max(1,box.height);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};
  resize();observer=new ResizeObserver(resize);observer.observe(canvas);
  const tick=()=>{if(disposed)return;frame++;root.rotation.y+=.0016;root.rotation.x=Math.sin(frame*.003)*.09;ring.rotation.z+=.001;renderer.render(scene,camera);raf=requestAnimationFrame(tick)};
  tick();
  const lost=e=>{e.preventDefault();cancelAnimationFrame(raf)};
  canvas.addEventListener('webglcontextlost',lost);
  return()=>{disposed=true;cancelAnimationFrame(raf);observer?.disconnect();canvas.removeEventListener('webglcontextlost',lost);geometry.dispose();globe.geometry.dispose();globe.material.dispose();shell.geometry.dispose();shell.material.dispose();ringGeometry.dispose();ringMaterial.dispose();renderer?.dispose()};
 },[canvasRef,active]);
}
