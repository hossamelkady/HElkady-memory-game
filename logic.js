(function(root){
const EMOJI=['🐶','🐱','🦁','🐼','🐸','🦊','🐵','🐯','🐰','🐨','🦄','🐙','🍎','🍌','🍇','🍉','⚽','🚗','🌙','⭐'];
const LEVELS={easy:{pairs:6,cols:3,name:'سهل'},medium:{pairs:8,cols:4,name:'متوسط'},hard:{pairs:12,cols:4,name:'صعب'}};
function shuffle(a,rng){rng=rng||Math.random;a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeDeck(pairs,rng){if(pairs>EMOJI.length)throw new Error('too many pairs');
 const picked=shuffle(EMOJI,rng).slice(0,pairs);
 return shuffle(picked.concat(picked).map((s,i)=>({id:i,symbol:s})),rng);}
function isMatch(a,b){return a.id!==b.id&&a.symbol===b.symbol;}
function isWon(matched,total){return matched===total;}
const api={EMOJI,LEVELS,shuffle,makeDeck,isMatch,isWon};
if(typeof module!=='undefined')module.exports=api;else root.MEM=api;
})(typeof window!=='undefined'?window:globalThis);
