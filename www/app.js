const $=id=>document.getElementById(id);
let deck,open_,matched,moves,sec,timer,lock,gen=0,flipBack=null;
const bestKey=l=>'mem-best-'+l;
function showBest(){const v=localStorage.getItem(bestKey($('level').value));$('best').textContent=v?v:'-';}
function start(){gen++;if(flipBack){clearTimeout(flipBack);flipBack=null;}const L=MEM.LEVELS[$('level').value];deck=MEM.makeDeck(L.pairs);open_=[];matched=0;moves=0;sec=0;lock=false;
 clearInterval(timer);timer=null;$('moves').textContent=0;$('time').textContent=0;$('msg').textContent='';showBest();
 const g=$('grid');g.style.gridTemplateColumns='repeat('+L.cols+',1fr)';g.innerHTML='';
 deck.forEach((c,i)=>{const el=document.createElement('div');el.className='c';el.textContent='?';el.onclick=()=>flip(i,el);c.el=el;g.appendChild(el);});}
function flip(i,el){if(lock||el.classList.contains('open')||el.classList.contains('done'))return;
 if(!timer){const g=gen;timer=setInterval(()=>{if(g!==gen){clearInterval(timer);return;}sec++;$('time').textContent=sec;},1000);}
 el.classList.add('open');el.textContent=deck[i].symbol;open_.push(i);
 if(open_.length===2){moves++;$('moves').textContent=moves;const [a,b]=open_.map(k=>deck[k]);
  if(MEM.isMatch(a,b)){a.el.className=b.el.className='c done';open_=[];matched+=2;
   if(MEM.isWon(matched,deck.length)){clearInterval(timer);$('msg').textContent='مبروك! خلصت في '+moves+' حركة 🎉';
    const k=bestKey($('level').value),old=+localStorage.getItem(k)||1e9;if(moves<old){localStorage.setItem(k,moves);showBest();}}}
  else{lock=true;const g=gen;flipBack=setTimeout(()=>{flipBack=null;if(g!==gen)return;[a,b].forEach(c=>{c.el.className='c';c.el.textContent='?';});open_=[];lock=false;},800);}}}
$('new').onclick=start;$('level').onchange=start;start();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
