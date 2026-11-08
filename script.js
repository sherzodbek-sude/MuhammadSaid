const grid=document.getElementById('galleryGrid');
const count=26;
let active=0;
// O'z rasmlaringizni images/rasm-01.jpg ... rasm-26.jpg nomida joylang.
// Quyidagi .svg kengaytmasini .jpg ga almashtiring.
const photos=Array.from({length:count},(_,i)=>{const n=String(i+1).padStart(2,'0');return{src:`images/rasm-${n}.svg`,title:`SURAT ${n}`}});
photos.forEach((p,i)=>{const b=document.createElement('button');b.className='photo-card';b.type='button';b.setAttribute('aria-label',`${p.title} ni kattalashtirish`);b.innerHTML=`<img src="${p.src}" alt="${p.title}" loading="lazy"><span class="photo-number">${p.title}</span><span class="photo-arrow">↗</span>`;b.addEventListener('click',()=>open(i));grid.appendChild(b)});
const box=document.getElementById('lightbox'),img=document.getElementById('lightboxImg'),caption=document.getElementById('caption');
function open(i){active=i;render();box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function render(){img.src=photos[active].src;caption.textContent=`${photos[active].title} · ${active+1} / ${count}`}
function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function move(d){active=(active+d+count)%count;render()}
document.getElementById('close').addEventListener('click',close);document.getElementById('prev').addEventListener('click',()=>move(-1));document.getElementById('next').addEventListener('click',()=>move(1));
box.addEventListener('click',e=>{if(e.target===box)close()});document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)});
const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
