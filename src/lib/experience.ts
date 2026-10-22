import { gsap } from 'gsap';
export async function bootExperience(){
  const sections=[...document.querySelectorAll<HTMLElement>('.scene')];
  const nav=[...document.querySelectorAll<HTMLButtonElement>('[data-go]')];
  const canvas=document.querySelector<HTMLCanvasElement>('#matter');
  const stage=document.querySelector<HTMLElement>('#stage')!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=0, busy=false, touchY=0, lastWheel=0;
  let setShape:((n:number)=>void)|undefined;
  let pulseShape:(()=>void)|undefined;
  if(canvas&&!reduced){
    try{
      const {createMatter}=await import('./matter');
      const matter=await createMatter(canvas);
      setShape=matter.setScene;pulseShape=matter.pulse;
      document.addEventListener('visibilitychange',()=>matter.setVisible(!document.hidden));
    }catch(error){console.warn('WebGL unavailable; HTML experience remains functional',error);canvas.style.display='none'}
  }else if(canvas)canvas.style.display='none';
  function go(to:number){
    if(busy||to<0||to>=sections.length||to===current)return;
    busy=true;const from=sections[current],next=sections[to];const old=current;current=to;
    next.classList.add('is-active');next.removeAttribute('inert');
    nav.forEach((b,i)=>i===to?b.setAttribute('aria-current','step'):b.removeAttribute('aria-current'));
    document.querySelector('#counter')!.textContent=`0${to+1} / 03`;
    setShape?.(to);
    if(reduced){from.classList.remove('is-active');from.setAttribute('inert','');busy=false;return}
    gsap.set(next,{opacity:0,clipPath:to>old?'inset(100% 0 0 0)':'inset(0 0 100% 0)'});
    gsap.timeline({onComplete:()=>{from.classList.remove('is-active');from.setAttribute('inert','');gsap.set(next,{clearProps:'opacity,clipPath'});busy=false}})
      .to(from,{opacity:0,duration:.45,ease:'power2.inOut'},0)
      .to(next,{opacity:1,clipPath:'inset(0% 0 0% 0)',duration:1.1,ease:'power3.inOut'},.08);
  }
  nav.forEach((b,i)=>b.addEventListener('click',()=>go(i)));
  document.querySelector('#next')?.addEventListener('click',()=>go(current+1));
  document.querySelector('#prev')?.addEventListener('click',()=>go(current-1));
  document.querySelector('#pulse')?.addEventListener('click',()=>{pulseShape?.();const s=document.querySelector('#signal');if(s)s.textContent='SYSTEM / SIGNAL TRANSMITTED'});
  window.addEventListener('keydown',e=>{if(document.activeElement?.tagName==='BUTTON'||document.activeElement?.tagName==='A')return;if(['ArrowDown','PageDown','ArrowRight'].includes(e.key)){e.preventDefault();go(current+1)}if(['ArrowUp','PageUp','ArrowLeft'].includes(e.key)){e.preventDefault();go(current-1)}});
  stage.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)<12)return;e.preventDefault();const now=performance.now();if(now-lastWheel<1100)return;lastWheel=now;go(current+(e.deltaY>0?1:-1))},{passive:false});
  stage.addEventListener('touchstart',e=>{touchY=e.touches[0].clientY},{passive:true});
  stage.addEventListener('touchend',e=>{const delta=touchY-e.changedTouches[0].clientY;if(Math.abs(delta)>55)go(current+(delta>0?1:-1))},{passive:true});
}