const assert=require('assert');const M=require('./logic.js');
for(const k of Object.keys(M.LEVELS)){const L=M.LEVELS[k];const deck=M.makeDeck(L.pairs);
 assert.strictEqual(deck.length,L.pairs*2);assert.strictEqual((L.pairs*2)%L.cols,0);
 const counts={};deck.forEach(c=>counts[c.symbol]=(counts[c.symbol]||0)+1);
 assert.ok(Object.values(counts).every(v=>v===2));
 assert.strictEqual(new Set(deck.map(c=>c.id)).size,deck.length);}
const d=M.makeDeck(2);const x=d.find(c=>true);const y=d.find(c=>c.symbol===x.symbol&&c.id!==x.id);
assert.ok(M.isMatch(x,y));assert.ok(!M.isMatch(x,x));
assert.ok(M.EMOJI.length>=12&&new Set(M.EMOJI).size===M.EMOJI.length);
let seed=1;const r=()=>(seed=(seed*16807)%2147483647)/2147483647;
assert.deepStrictEqual(M.shuffle([1,2,3,4,5],r).sort(),[1,2,3,4,5]);
console.log('memory tests passed');
