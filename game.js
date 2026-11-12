const $=s=>document.querySelector(s),pick=a=>a[Math.floor(Math.random()*a.length)];
const KC={rice:175,corn:90,ubi:120,bread:80,potato:110,tempeh:150,fish:160,egg:75,chicken:190,milk:120,urap:90,broccoli:35,carrot:40,tomato:20,papaya:60,banana:105,orange:60,melon:45,apple:80,cracker:60,fritter:180,tea:150,noodle:380,donut:250,candy:100,fries:310,soda:140};
const F=`rice|🍚|Nasi merah|carbs|12|9|Nasi merah kaya serat dan memberi energi tahan lama.
corn|🌽|Jagung rebus|carbs|10|9|Jagung rebus memberi energi dan serat.
ubi|🍠|Ubi rebus|carbs|11|10|Ubi kaya serat dan vitamin A.
bread|🍞|Roti gandum|carbs|9|7|Roti gandum utuh lebih berserat.
potato|🥔|Kentang rebus|carbs|10|8|Kentang rebus mengenyangkan tanpa banyak minyak.
tempeh|🫘|Tempe|protein|11|11|Tempe adalah protein nabati yang baik untuk otot.
fish|🐟|Ikan bakar|protein|12|12|Ikan bakar kaya protein dan omega-3.
egg|🥚|Telur rebus|protein|11|10|Telur rebus murah, kaya protein dan vitamin.
chicken|🍗|Ayam panggang|protein|11|9|Ayam panggang lebih ringan daripada digoreng.
milk|🥛|Susu|protein|8|9|Susu kaya kalsium untuk tulang dan gigi.
urap|🥬|Urap sayur|veg|8|12|Urap sayur kaya serat dan vitamin.
broccoli|🥦|Brokoli kukus|veg|7|12|Brokoli kukus penuh vitamin C dan serat.
carrot|🥕|Wortel rebus|veg|7|11|Wortel baik untuk mata.
tomato|🍅|Tomat segar|veg|6|10|Tomat segar menyegarkan dan kaya vitamin.
papaya|🍈|Pepaya|fruit|8|11|Pepaya melancarkan pencernaan.
banana|🍌|Pisang|fruit|10|9|Pisang memberi energi cepat dan kalium.
orange|🍊|Jeruk|fruit|8|11|Jeruk kaya vitamin C untuk daya tahan tubuh.
melon|🍉|Semangka|fruit|7|9|Semangka banyak air, pas untuk cuaca panas.
apple|🍎|Apel|fruit|8|10|Apel kaya serat dan membuat kenyang.
cracker|🍘|Kerupuk|junk|-6|-8|Kerupuk asin dan berminyak, cukup sesekali saja.
fritter|🥟|Gorengan|junk|-8|-14|Gorengan tinggi minyak, bikin perut begah.
tea|🧋|Es teh manis|junk|-5|-12|Minuman manis tinggi gula, lebih baik air putih.
noodle|🍜|Mi instan|junk|-6|-13|Mi instan tinggi garam dan minyak.
donut|🍩|Donat|junk|-7|-12|Donat tinggi gula dan lemak.
candy|🍬|Permen|junk|-5|-10|Permen bikin gigi berlubang kalau terlalu sering.
fries|🍟|Kentang goreng|junk|-8|-13|Kentang goreng tinggi minyak dan garam.
soda|🥤|Soda|junk|-6|-14|Soda penuh gula, tidak baik buat badan.
white|🍚|Nasi putih|carbs|10|5|Nasi putih memberi energi, padukan dengan sayur.|200
lontong|🍙|Lontong|carbs|9|6|Lontong enak dimakan bersama sayur dan lauk.|150
oat|🥣|Oatmeal|carbs|10|10|Oatmeal tinggi serat, bikin kenyang lama.|150
pasta|🍝|Spageti gandum|carbs|9|6|Pasta gandum lebih berserat.|220
chapati|🫓|Roti pipih|carbs|9|6|Roti pipih sumber karbohidrat yang ringan.|120
shrimp|🦐|Udang rebus|protein|10|10|Udang rebus rendah lemak dan tinggi protein.|100
beef|🥩|Daging sapi panggang|protein|11|8|Daging sapi kaya zat besi, pilih yang tanpa lemak.|250
kembung|🐠|Ikan kembung|protein|11|11|Ikan kembung murah dan kaya omega-3.|160
peanut|🥜|Kacang tanah|protein|9|8|Kacang tanah kaya protein dan lemak baik.|160
yogurt|🍶|Yoghurt|protein|8|10|Yoghurt baik untuk pencernaan.|100
rendang|🍖|Rendang|protein|10|3|Rendang enak tapi berlemak, makan secukupnya.|280
sate|🍢|Sate ayam|protein|11|6|Sate ayam bergizi, kurangi bumbu kacang manis.|220
spinach|🌿|Sayur bayam|veg|7|12|Bayam kaya zat besi dan vitamin.|40
salad|🥗|Salad sayur|veg|6|12|Salad sayur segar penuh serat.|60
cucumber|🥒|Timun|veg|5|9|Timun segar dan banyak air.|15
eggplant|🍆|Terong kukus|veg|6|10|Terong kukus rendah kalori.|35
mushroom|🍄|Jamur tumis|veg|6|10|Jamur tumis kaya protein nabati.|40
pepper|🫑|Paprika|veg|6|11|Paprika kaya vitamin C.|30
sop|🍲|Sop sayur|veg|7|11|Sop sayur hangat dan menyehatkan.|70
pumpkin|🎃|Labu kukus|veg|7|10|Labu kaya vitamin A.|45
buncis|🫛|Buncis rebus|veg|6|11|Buncis kaya serat dan vitamin.|35
mango|🥭|Mangga|fruit|8|9|Mangga manis, kaya vitamin A dan C.|100
grapes|🍇|Anggur|fruit|7|9|Anggur manis alami penuh antioksidan.|70
pineapple|🍍|Nanas|fruit|7|9|Nanas segar membantu pencernaan.|80
strawberry|🍓|Stroberi|fruit|6|10|Stroberi rendah kalori dan kaya vitamin C.|45
kiwi|🥝|Kiwi|fruit|7|11|Kiwi sangat kaya vitamin C.|60
pear|🍐|Pir|fruit|7|10|Pir kaya serat.|85
peach|🍑|Persik|fruit|7|9|Persik segar dan manis alami.|60
coconut|🥥|Kelapa muda|fruit|6|8|Air kelapa muda menyegarkan.|45
avocado|🥑|Alpukat|fruit|10|10|Alpukat kaya lemak baik.|160
pizza|🍕|Pizza|junk|-7|-11|Pizza tinggi lemak dan garam.|285
hotdog|🌭|Hot dog|junk|-7|-12|Sosis olahan tinggi garam dan lemak.|290
burger|🍔|Burger|junk|-7|-13|Burger cepat saji tinggi lemak.|350
icecream|🍦|Es krim|junk|-5|-10|Es krim tinggi gula dan lemak.|210
cake|🍰|Kue tart|junk|-6|-11|Kue tart tinggi gula dan mentega.|300
choco|🍫|Cokelat batang|junk|-5|-9|Cokelat manis, cukup sepotong kecil.|230
cookie|🍪|Biskuit manis|junk|-5|-9|Biskuit manis tinggi gula.|140
fchicken|🍗|Ayam goreng tepung|junk|-8|-12|Ayam goreng tepung tinggi minyak.|320
popcorn|🍿|Popcorn karamel|junk|-4|-8|Popcorn karamel penuh gula.|200
croissant|🥐|Croissant|junk|-5|-8|Croissant tinggi mentega.|230
martabak|🥞|Martabak manis|junk|-7|-12|Martabak manis tinggi gula dan lemak.|400
corndog|🥨|Keripik pretzel|junk|-5|-9|Camilan asin tinggi garam.|150`.trim().split('\n').map(l=>{const a=l.trim().split('|');return{id:a[0],em:a[1],n:a[2],g:a[3],en:+a[4],hp:+a[5],note:a[6],kcal:+a[7]||KC[a[0]]||100}});
const FM=Object.fromEntries(F.map(f=>[f.id,f]));
const GL={carbs:'Karbohidrat',protein:'Protein',veg:'Sayur',fruit:'Buah',junk:'Batasi ⚠️'};
const TABS=[['all','Semua'],['carbs','Karbo'],['protein','Protein'],['veg','Sayur'],['fruit','Buah'],['junk','Jajanan']];
const SL=[[50,20],[75,32],[80,58],[66,80],[38,82],[21,64],[24,36],[50,50]];
const NAME={boy:'Melvin',girl:'Meli'};
const PR={boy:{age:11,kg:36,cm:145,need:2000},girl:{age:11,kg:38,cm:147,need:1900}};
const SES=[{n:'Sarapan',e:'🌅',f:.25,max:8,req:['carbs','protein','fruit']},{n:'Makan siang',e:'☀️',f:.35,max:8,req:['carbs','protein','veg','fruit']},{n:'Camilan',e:'🌤️',f:.1,max:3,req:['fruit']},{n:'Makan malam',e:'🌙',f:.3,max:8,req:['carbs','protein','veg','fruit']}];
const SI=['Selamat pagi! Waktunya sarapan: karbo, protein, dan buah ya. 🌅','Siang! Perutku keroncongan. Isi piring lengkap dengan sayur! ☀️','Camilan sore! Pilih yang ringan, buah juga enak. 🌤️','Malam! Makan malam seimbang, tapi jangan berlebihan ya. 🌙'];
const TG=()=>Math.round(PR[ch].need*SES[ses].f);
const TC={carbs:'#f7d68a',protein:'#f4a8a0',veg:'#a9dc9a',fruit:'#fbb97a',junk:'#d9c3a8'};
const WL={boy:['Gluk gluk... segar! 💧','Air putih bikin badan fit!'],girl:['Segar banget! 💧','Minum air putih itu penting, lho!']};
let q='',water=0,idle=0,ses=0,day=[],sound=true,locked=false,wt=0,wh=[];
const V={
boy:{welcome:'Hai, aku Melvin! Ayo isi piringku dengan makanan bergizi. Ketuk aku kalau mau ngobrol!',
good:['Mantap!','Wih, pilihan jagoan!','Nah, ini baru enak dan sehat!'],
bad:['Hmm, ini sebaiknya jarang-jarang ya.','Waduh, perutku mulai nggak enak.','Aduh, badanku jadi lemas...'],
remove:['Oke, kuganti ya!','Siap, ditukar!'],full:'Piringnya sudah penuh! Ketuk satu makanan untuk menghapusnya.',
strong:'Wow, badanku terasa kuat dan bertenaga! 💪',sick:'Aduh, perutku sakit! Tolong ganti dengan makanan sehat...',tired:'Aku mulai lemas... butuh makanan bergizi.',
clear:'Piring sudah kosong. Yuk, pilih lagi!',empty:'Piringnya masih kosong. Mau makan apa nih?',eat:'Nyam nyam nyam... 😋',
win:'Hebat! Piring seimbang kita siap, aku kuat dan bertenaga! 💪',junk:n=>'Hampir! Tapi '+n+' bikin perutku nggak enak. Ganti, yuk!',miss:n=>'Belum lengkap nih. Masih kurang: '+n+'.',
poke:{empty:['Perutku keroncongan... ayo isi piringnya!'],strong:['Aku kuat banget sekarang! 💪','Rasanya siap lari keliling lapangan!'],ok:['Lumayan! Tinggal lengkapi kelompok makanannya.','Aku masih butuh beberapa makanan lagi.'],tired:['Hoaam, aku lemas. Butuh makanan bergizi.'],sick:['Aduh, aku nggak enak badan. Kurangi jajanannya ya.'],bloat:['Perutku begah... kebanyakan yang manis dan berminyak.','Ganti dengan sayur dan buah, yuk.']}},
girl:{welcome:'Hai, aku Meli! Kita pilih makanan bergizi bersama, yuk! Ketuk aku kalau mau ngobrol!',
good:['Yey, pilihan bergizi!','Hore, piringku makin berwarna!','Wah, aku suka yang ini!'],
bad:['Ups, ini kurang baik buat badanku.','Aduh, perutku jadi kembung...','Hmm, ini bikin aku lemas.'],
remove:['Tidak apa-apa, ganti aja!','Oke, kita cari yang lain!'],full:'Wah, piringnya penuh. Ketuk makanan untuk menghapusnya, ya.',
strong:'Yey, badanku terasa segar dan kuat! 💪',sick:'Hiks, perutku sakit... ganti yang sehat ya!',tired:'Aku mulai ngantuk dan lemas... butuh makanan bergizi.',
clear:'Piring bersih! Yuk, mulai lagi.',empty:'Piringku masih kosong, lho. Isi dulu, yuk!',eat:'Ummm, nyam nyam... 😋',
win:'Hore! Piringnya seimbang, aku sehat dan semangat! 🌟',junk:n=>'Hampir! Tapi '+n+' kurang baik buat tubuhku. Bisa diganti, kok!',miss:n=>'Hampir lengkap! Tambahkan '+n+' ya.',
poke:{empty:['Aku lapar... ayo pilih makanan!'],strong:['Aku segar dan penuh energi! ✨','Yuk main, aku bertenaga banget!'],ok:['Lumayan! Yuk lengkapi piringnya.','Masih ada kelompok makanan yang kosong, lho.'],tired:['Aku ngantuk dan lemas... kurang gizi nih.'],sick:['Hiks, perutku sakit. Ganti makanannya ya.'],bloat:['Perutku begah... mungkin kebanyakan jajanan.','Aku butuh sayur dan buah, deh.']}}};
const S='stroke="#243a2e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"';
const BS='stroke="#243a2e" stroke-width="3.5" stroke-linecap="round" fill="none"';
const EY=x=>`<ellipse cx="${x}" cy="108" rx="11" ry="13" fill="#fff" stroke="#243a2e" stroke-width="2.5"/><circle cx="${x+2}" cy="110" r="7.5" fill="#243a2e"/><circle cx="${x+5}" cy="106" r="3" fill="#fff"/><circle cx="${x-2}" cy="113" r="1.5" fill="#fff"/>`;
const E={n:EY(78)+EY(122)+`<path ${BS} d="M66 90q10-6 22-1M112 89q12-5 22 1"/>`,
h:`<path ${S} d="M67 112Q78 94 89 112M111 112Q122 94 133 112"/><path ${BS} d="M68 88q10-7 20-2M112 86q10-5 20 2"/>`,
t:`<path ${S} d="M67 108q11 10 22 0M111 108q11 10 22 0"/><path ${BS} d="M66 96l22 3M134 96l-22 3"/>`,
x:`<path ${S} d="M70 100l16 16m0-16l-16 16M114 100l16 16m0-16l-16 16"/><path ${BS} d="M66 90l22-7M134 90l-22-7"/>`,
y:`<path ${S} d="M70 100l16 8-16 8M130 100l-16 8 16 8"/>`,
s:'<path d="M60 98h34q0 20-17 20t-17-20zM106 98h34q0 20-17 20t-17-20z" fill="#1d2b2a"/><path d="M94 102h12" stroke="#1d2b2a" stroke-width="4"/><path d="M67 104h10" stroke="#fff" stroke-width="3" opacity=".5" stroke-linecap="round"/>',
l:'<path d="M78 117C65 107 65 96 72 96C75 96 78 98 78 101C78 98 81 96 84 96C91 96 91 107 78 117Z" fill="#e8506a"/><path d="M122 117C109 107 109 96 116 96C119 96 122 98 122 101C122 98 125 96 128 96C135 96 135 107 122 117Z" fill="#e8506a"/>'};
const M={smile:`<path ${S} d="M84 128Q100 146 116 128"/>`,
grin:'<path d="M80 126Q100 160 120 126Z" fill="#7a2e3a" stroke="#243a2e" stroke-width="3" stroke-linejoin="round"/><ellipse cx="100" cy="145" rx="9" ry="5" fill="#e9808a"/>',
flat:`<path ${S} d="M90 137h20"/>`,wavy:`<path ${S} d="M82 138q9-9 18 0t18 0"/>`,sad:`<path ${S} d="M85 142Q100 126 115 142"/>`,
open:'<ellipse cx="100" cy="136" rx="8" ry="10" fill="#7a2e3a"/>',chomp:'<ellipse class="chomp" cx="100" cy="136" rx="12" ry="9" fill="#7a2e3a"/>',
yuck:`<path ${S} d="M82 132q9-8 18 0t18 0"/><ellipse cx="110" cy="144" rx="6" ry="9" fill="#e9808a" stroke="#243a2e" stroke-width="2.5"/>`};
const MOOD={empty:['n','open','🍴',0],ok:['n','smile','',0],joy:['h','grin','✨✨',0],strong:['h','grin','✨✨',1],tired:['t','sad','💤',0],sick:['x','wavy','🤢💧',0],bloat:['n','wavy','💧',0],yuck:['y','yuck','💧',0],eat:['h','chomp','',0],win:['h','grin','✨✨⭐',1]};
const P=[[150,54],[14,70],[158,104]];
const MIT='fill="#fff" stroke="#78ad52" stroke-width="3"';
const AD='<path d="M34 128Q14 146 24 168M166 128Q186 146 176 168" stroke="#78ad52" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="24" cy="170" r="9" '+MIT+'/><circle cx="176" cy="170" r="9" '+MIT+'/>';
const AU='<path d="M34 120Q10 112 18 90M166 120Q190 112 182 90" stroke="#78ad52" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="18" cy="84" r="9" '+MIT+'/><circle cx="182" cy="84" r="9" '+MIT+'/>';
function avSVG(g,u){const b=g==='boy',sh=b?'#3b82d6':'#e8708a';
const hair=b?'<path d="M100 44Q90 14 108 4Q114 26 100 44Z" fill="#348e58"/><path d="M96 46Q68 34 62 14Q88 18 96 46Z" fill="#43a566"/><path d="M104 46Q132 32 142 14Q118 14 104 46Z" fill="#2c7a4a"/>':'<path d="M100 44q-2-16 8-26" stroke="#548a3f" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M106 26q22-14 34 2q-20 14-34-2z" fill="#348e58"/>';
const back=b?'':'<path d="M46 76Q16 84 18 114Q38 106 46 76Z" fill="#43a566"/><path d="M154 76Q184 84 182 114Q162 106 154 76Z" fill="#43a566"/>';
const out=b?`<path d="M44 72Q100 52 156 72L154 86Q100 68 46 86Z" fill="#e0483f"/><path d="M46 79Q100 62 154 79" stroke="#fff" stroke-width="3" fill="none"/><path d="M154 74l16-6-2 14z" fill="#e0483f"/><g clip-path="url(#c${u})"><path d="M0 174Q100 192 200 174V220H0Z" fill="#3b82d6"/><path d="M0 186Q100 204 200 186" stroke="#fff" stroke-width="3" fill="none"/></g>`:'<path d="M54 170Q100 188 146 170L158 198Q100 214 42 198Z" fill="#f08aa6"/><path d="M48 192q10 12 20 4t20 6 20-2 20-4 20 2 20-8" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/><g transform="rotate(20 130 52)"><path d="M130 52l-22-14v28zM130 52l22-14v28z" fill="#e8508a"/><circle cx="130" cy="52" r="6" fill="#c9366b"/></g><circle cx="46" cy="76" r="5" fill="#e8508a"/><circle cx="154" cy="76" r="5" fill="#e8508a"/>';
const ck='<ellipse cx="58" cy="132" rx="10" ry="7" fill="#ff8fa3" opacity=".55"/><ellipse cx="142" cy="132" rx="10" ry="7" fill="#ff8fa3" opacity=".55"/>'+(b?'<g fill="#8a5a2a" opacity=".55"><circle cx="54" cy="125" r="1.5"/><circle cx="60" cy="123" r="1.5"/><circle cx="65" cy="126" r="1.5"/><circle cx="135" cy="126" r="1.5"/><circle cx="140" cy="123" r="1.5"/><circle cx="146" cy="125" r="1.5"/></g>':'');
return `<svg viewBox="0 0 200 220" data-g="${g}"><defs><radialGradient id="m${u}" cx="38%" cy="30%"><stop offset="0" stop-color="#eef9b4"/><stop offset=".7" stop-color="#a8d368"/><stop offset="1" stop-color="#86ba52"/></radialGradient><clipPath id="c${u}"><ellipse cx="100" cy="122" rx="68" ry="82"/></clipPath></defs><ellipse cx="100" cy="212" rx="64" ry="8" fill="#000" opacity=".15"/><g class="body">${back}<ellipse cx="76" cy="206" rx="17" ry="8" fill="${sh}"/><ellipse cx="76" cy="211" rx="17" ry="4" fill="#fff"/><ellipse cx="124" cy="206" rx="17" ry="8" fill="${sh}"/><ellipse cx="124" cy="211" rx="17" ry="4" fill="#fff"/><g class="arms"></g><ellipse cx="100" cy="122" rx="68" ry="82" fill="url(#m${u})" stroke="#78ad52" stroke-width="4"/><path d="M100 41Q70 82 70 124Q70 168 100 203M100 41Q130 82 130 124Q130 168 100 203" stroke="#84b85c" stroke-width="5" fill="none" opacity=".5"/><ellipse cx="66" cy="72" rx="12" ry="22" fill="#fff" opacity=".3" transform="rotate(-25 66 72)"/>${hair}${out}${ck}<g class="eyes"></g><g class="mouth"></g></g><g class="fx" font-size="24"></g></svg>`}
function setFace(r,m){const f=MOOD[m]||MOOD.ok;r.querySelector('.eyes').dataset.b=0;r.querySelector('.eyes').innerHTML=E[m==='win'?(r.querySelector('svg').dataset.g==='boy'?'s':'l'):f[0]];r.querySelector('.mouth').innerHTML=M[f[1]];r.querySelector('.arms').innerHTML=f[3]?AU:AD;
r.querySelector('.fx').innerHTML=Array.from(f[2]).map((c,i)=>`<text x="${P[i][0]}" y="${P[i][1]}">${c}</text>`).join('')}

let ch=null,plate=[],flash=null,ft=0,last=null,busy=false,cat='all';
const junkN=()=>plate.filter(id=>FM[id].g==='junk').length;
const cl=v=>Math.max(0,Math.min(100,v));
const kcal=()=>plate.reduce((s,id)=>s+FM[id].kcal,0);
function stats(){let en=50,hp=60;plate.forEach(id=>{en+=FM[id].en;hp+=FM[id].hp});hp+=water*2;if(plate.length){const k=kcal()/TG();if(k>1.3){en-=8;hp-=6}else if(k<.5)en-=10}return[cl(en),cl(hp)]}
function state(){if(!plate.length)return'empty';const[en,hp]=stats();if(hp<35)return'sick';if(en<40)return'tired';if((junkN()&&hp<75)||kcal()>TG()*1.3)return'bloat';if(hp>=80&&en>=75)return'strong';return'ok'}
const STL={empty:'Lapar 🍽️',ok:'Baik-baik saja 🙂',strong:'Bertenaga super 💪',tired:'Lemas 😴',sick:'Sakit perut 🤢',bloat:'Perut begah 😣'};
function say(a,b=''){$('#say').textContent=a;$('#note').textContent=b;const e=$('#bub');e.classList.remove('pop');void e.offsetWidth;e.classList.add('pop')}
function setFlash(m,ms=1300){flash=m;clearTimeout(ft);ft=setTimeout(()=>{flash=null;render()},ms)}
function bar(id,t,v){const b=$(id);b.style.width=v+'%';b.className=v<35?'low':v<60?'mid':'';$(t).textContent=v+'%'}
function render(){
const st=state(),[en,hp]=stats(),m=flash||st,j=junkN(),av=$('#av');
setFace(av,m);av.style.setProperty('--puff',Math.max(.88,Math.min(1.28,1+.045*(Math.max(PR[ch].kg-4,Math.min(PR[ch].kg+4,curW()))-PR[ch].kg)+.03*Math.min(j,3))));
av.className='av'+(st==='sick'?' sick':'')+(m==='strong'||m==='win'?' glow':'')+(m==='win'?' jump':'');
bar('#enB','#enT',en);bar('#hpB','#hpT',hp);$('#status').textContent=STL[st];
const tg=TG(),kc=kcal(),r=kc/tg,kb=$('#kcB');
$('#kcT').textContent=kc+' / '+tg+' kcal';kb.style.width=Math.min(100,r*100/1.5)+'%';kb.style.background=r<.8?'#e0a03a':r<=1.15?'#3aa56b':'#d9534f';
$('#kcN').textContent=!plate.length?'Target '+SES[ses].n.toLowerCase()+': sekitar '+tg+' kcal ('+Math.round(SES[ses].f*100)+'% dari kebutuhan harian).':r<.8?'Masih kurang '+(tg-kc)+' kcal supaya tenagaku cukup.':r<=1.15?'Pas! Kalorinya sesuai kebutuhan satu kali makan. ✅':'Kelebihan '+(kc-tg)+' kcal. Kalau tiap makan begini, berat badan bisa naik terlalu cepat.';
$('#wN').textContent=water;renderHud();
$('#plate').innerHTML=(plate.length?'':'<p class="hint">Piring masih kosong. Seret atau ketuk makanan di bawah!</p>')+plate.map((id,i)=>`<button class="pi${id===last?' new':''}" style="left:${SL[i][0]}%;top:${SL[i][1]}%;--t:${TC[FM[id].g]}" data-f="${id}" aria-label="Hapus ${FM[id].n} dari piring"><span class="e">${FM[id].em}</span><small>${FM[id].n} · ${FM[id].kcal}</small></button>`).join('');
last=null;
const c={};plate.forEach(id=>c[FM[id].g]=(c[FM[id].g]||0)+1);
$('#chips').innerHTML=['carbs','protein','veg','fruit','junk'].filter(g=>g!=='junk'||c.junk).map(g=>`<span class="chip ${g==='junk'?'bad':c[g]?'on':''}">${c[g]?'✓':'○'} ${GL[g]}${c[g]>1?' ×'+c[g]:''}</span>`).join('');
document.querySelectorAll('.fc').forEach(b=>{b.disabled=plate.includes(b.dataset.f);b.hidden=(cat!=='all'&&b.dataset.g!==cat)||!FM[b.dataset.f].n.toLowerCase().includes(q)});
}
function addFood(id){
if(!ch||busy||locked||!FM[id]||plate.includes(id))return;
if(plate.length>=SES[ses].max){say(V[ch].full);return}
const prev=state(),f=FM[id],v=V[ch];plate.push(id);last=id;$('#res').hidden=true;
const st=state();let main=pick(f.g==='junk'?v.bad:v.good);
if(st==='sick')main=v.sick;else if(st==='tired'&&prev!=='tired')main=v.tired;else if(st==='strong'&&prev!=='strong')main=v.strong;
say(main,f.note);setFlash(f.g==='junk'?'yuck':'joy');render();fly(id);SFX[f.g==='junk'?'bad':'good']()}
function removeFood(id){if(busy||locked)return;plate=plate.filter(x=>x!==id);$('#res').hidden=true;flash=null;say(pick(V[ch].remove),FM[id].n+' dihapus dari piring.');render()}
function eat(){
if(!ch||busy)return;const v=V[ch];
if(!plate.length){say(v.empty);return}
busy=true;$('#eat').disabled=true;say(v.eat);clearTimeout(ft);flash='eat';render();
setTimeout(()=>{
const c={};plate.forEach(id=>c[FM[id].g]=1);
const miss=SES[ses].req.filter(g=>!c[g]),j=junkN(),kr=kcal()/TG(),kok=kr>=.8&&kr<=1.15,stars=miss.length?1:(j||!kok)?2:3;
let msg;
if(!miss.length&&!j&&kok)msg=v.win;else if(!miss.length&&!j)msg=kr<.8?'Gizinya sudah lengkap, tapi kalorinya masih kurang. Tambah porsi, ya!':'Gizinya lengkap, tapi kalorinya kelebihan. Kurangi porsinya, ya!';
else if(j)msg=v.junk(plate.filter(id=>FM[id].g==='junk').map(id=>FM[id].n).join(' dan '));
else msg=v.miss(miss.map(g=>GL[g].toLowerCase()).join(', '));
busy=false;$('#eat').disabled=false;say(msg);record(stars,j);
const r=$('#res');r.hidden=false;r.textContent='⭐'.repeat(stars)+'☆'.repeat(3-stars)+(stars===3?'  Piring seimbang!':stars===2?'  Hampir seimbang!':'  Ayo perbaiki piringmu!');
if(stars===3){setFlash('win',4500);confetti();SFX.win()}else{flash=null;render();SFX.tap()}
},1500)}
function confetti(){for(let i=0;i<28;i++){const s=document.createElement('span');s.className='cf';s.textContent=pick(['🎉','⭐','✨','🍈','🥕','🍎']);s.style.left=Math.random()*100+'vw';s.style.animationDelay=Math.random()*.6+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}}
function toStart(){water=0;ch=null;plate=[];day=[];ses=0;locked=false;$('#hud').hidden=true;$('#rp').hidden=true;flash=null;busy=false;clearTimeout(ft);$('#game').hidden=true;$('#start').hidden=false;document.querySelectorAll('.cc').forEach(b=>b.setAttribute('aria-pressed','false'))}

$('#sb').innerHTML=avSVG('boy','sb');$('#sg').innerHTML=avSVG('girl','sg');setFace($('#sb'),'ok');setFace($('#sg'),'ok');
$('#foods').innerHTML=F.map(f=>`<button class="fc${f.g==='junk'?' jk':''}" draggable="true" data-f="${f.id}" data-g="${f.g}" title="${f.note}" aria-label="Tambahkan ${f.n} ke piring"><span class="em">${f.em}</span><b>${f.n}</b><small>${GL[f.g]}</small><span class="kc">${f.kcal} kcal</span></button>`).join('');
$('#tabs').innerHTML=TABS.map(t=>`<button class="tab" data-c="${t[0]}" aria-pressed="${t[0]==='all'}">${t[1]}</button>`).join('');
document.querySelectorAll('.cc').forEach(b=>b.addEventListener('click',()=>{ch=b.dataset.g;document.querySelectorAll('.cc').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('#warn').hidden=true}));
$('#go').addEventListener('click',()=>{
if(!ch){$('#warn').hidden=false;return}
$('#start').hidden=true;$('#game').hidden=false;$('#av').innerHTML=avSVG(ch,'a');$('#res').hidden=true;
const p=PR[ch],bmi=(p.kg/((p.cm/100)**2)).toFixed(1).replace('.',',');
$('#prof').innerHTML=`<span>🎂 <b>${p.age} tahun</b></span><span>⚖️ <b>${p.kg} kg</b></span><span>📏 <b>${p.cm} cm</b></span><span>IMT <b>${bmi}</b> (gizi baik)</span><span>🔥 butuh <b>±${p.need.toLocaleString('id-ID')} kcal/hari</b></span>`;
$('#hud').hidden=false;newDay();say(V[ch].welcome,SI[0]);render();window.scrollTo(0,0)});
$('#av').addEventListener('click',()=>{if(!ch||busy)return;say(pick(V[ch].poke[state()]));SFX.tap();const a=$('#av');a.classList.remove('jump');void a.offsetWidth;a.classList.add('jump')});
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;cat=b.dataset.c;document.querySelectorAll('.tab').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render()});
$('#foods').addEventListener('click',e=>{const b=e.target.closest('.fc');if(b)addFood(b.dataset.f)});
$('#foods').addEventListener('dragstart',e=>{const b=e.target.closest('.fc');if(!b||b.disabled){e.preventDefault();return}e.dataTransfer.setData('text/plain',b.dataset.f);e.dataTransfer.effectAllowed='copy'});
const pl=$('#plate');
pl.addEventListener('click',e=>{const b=e.target.closest('.pi');if(b)removeFood(b.dataset.f)});
pl.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy';pl.classList.add('over')});
pl.addEventListener('dragleave',e=>{if(!pl.contains(e.relatedTarget))pl.classList.remove('over')});
pl.addEventListener('drop',e=>{e.preventDefault();pl.classList.remove('over');addFood(e.dataTransfer.getData('text/plain'))});
$('#eat').addEventListener('click',eat);
$('#clear').addEventListener('click',()=>{if(busy)return;resetSes();say(V[ch].clear);render()});
$('#swap').addEventListener('click',toStart);
$('#q').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();render()});
$('#water').addEventListener('click',()=>{if(!ch||busy)return;if(water>=8){say('Sudah 8 gelas, cukup untuk hari ini! 💧');return}water++;say(pick(WL[ch]));setFlash('joy');render()});
document.addEventListener('pointerdown',()=>idle=0);
setInterval(()=>{if(!ch||busy||$('#game').hidden)return;if(++idle>=3){idle=0;say(pick(V[ch].poke[state()]))}},5000);

/* ===== Mode hari penuh, efek, suara ===== */
function resetSes(){if(locked&&day[ses]){wt=day[ses].w0;wh.pop();day[ses]=null}plate=[];flash=null;locked=false;$('#res').hidden=true;$('#nx').hidden=true;$('#eat').hidden=false}
function record(stars,j){const p=PR[ch],w0=wt,dw=(kcal()-TG())/1000;wt=Math.max(p.kg-4,Math.min(p.kg+4,wt+dw));wh.push(wt);day[ses]={stars,kcal:kcal(),junk:j,ids:[...plate],w0};$('#note').textContent='⚖️ Berat badan '+(Math.abs(dw)<.05?'stabil':(dw>0?'naik ':'turun ')+fm(Math.abs(dw))+' kg')+' ('+fm(wt)+' kg).';locked=true;$('#eat').hidden=true;$('#nx').hidden=false;$('#next').textContent=ses<3?'Lanjut: '+SES[ses+1].n+' ➡️':'Lihat laporan hari ini 📊'}
function renderHud(){renderProf();const ts=day.reduce((s,m)=>s+(m?m.stars:0),0),h=$('#hud');h.dataset.t=ses;document.body.dataset.t=ses;
h.innerHTML=SES.map((s,i)=>{const d=day[i]&&(i<ses||(i===ses&&locked));return `<span class="pip${i===ses?' on':''}">${s.e} ${s.n}${d?' '+'⭐'.repeat(day[i].stars):''}</span>`}).join('')+`<span class="pip tot">⭐ ${ts}/12</span><button id="snd" class="pip" aria-label="Suara">${sound?'🔊':'🔇'}</button>`}
function showReport(){
const d=day.filter(Boolean),K=d.reduce((s,m)=>s+m.kcal,0),need=PR[ch].need,S=d.reduce((s,m)=>s+m.stars,0),J=d.reduce((s,m)=>s+m.junk,0);
const VF=new Set(d.flatMap(m=>m.ids.filter(i=>FM[i].g==='veg'||FM[i].g==='fruit'))).size,pct=Math.round(K/need*100),dw=(K-need)*30/7700,bd=[];
if(VF>=5)bd.push('🌈 Pelangi Piring');if(water>=8)bd.push('💧 Si Segar');if(!J)bd.push('🚫 Bebas Jajan');if(pct>=90&&pct<=110)bd.push('🎯 Kalori Pas');if(S>=11)bd.push('🏆 Nyaris Sempurna');
let b=0;try{b=+localStorage.getItem('ps_best')||0;if(S>b){localStorage.setItem('ps_best',S);b=S}}catch(e){}
const t=S>=10?'Juara Piring Seimbang 🏆':S>=7?'Jagoan Gizi 🥈':'Pemula Sehat 🌱',w=Math.abs(dw)<.15?'stabil':(dw>0?'+':'−')+Math.abs(dw).toFixed(1).replace('.',',')+' kg';
$('#rpB').innerHTML=`<h2>${t}</h2><p class="mut">Laporan hari ini untuk ${NAME[ch]}</p><div class="rg"><div><b>${S}/12</b><small>bintang</small></div><div><b>${K}</b><small>kcal dari ${need.toLocaleString('id-ID')}</small></div><div><b>${pct}%</b><small>kebutuhan terpenuhi</small></div><div><b>${water}/8</b><small>gelas air</small></div></div><p>⚖️ Berat badan ${fm(PR[ch].kg)} → <b>${fm(wt)} kg</b> (${wt>=PR[ch].kg?'+':'−'}${fm(Math.abs(wt-PR[ch].kg))})</p>${spark()}<p class="note">Berat badan di game ini dipercepat agar mudah terlihat. Anak masih tumbuh, jadi tanyakan ke dokter atau ahli gizi untuk saran pribadi.</p><div class="chips">${bd.map(x=>`<span class="chip on">${x}</span>`).join('')||'<span class="chip">Belum ada lencana. Coba lagi!</span>'}</div><p class="mut">Rekor terbaik: ${b}/12 ⭐</p>`;
$('#rp').hidden=false;SFX.win();confetti()}
function fly(id){const f=FM[id],c=document.querySelector('.fc[data-f="'+id+'"]'),p=$('#plate');if(!c||!p||!c.animate)return;
const a=c.getBoundingClientRect(),b=p.getBoundingClientRect(),dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2),s=document.createElement('span');
s.className='fly';s.textContent=f.em;s.style.left=a.left+a.width/2+'px';s.style.top=a.top+a.height/2+'px';document.body.appendChild(s);
s.animate([{transform:'translate(-50%,-50%) scale(1)'},{transform:`translate(calc(-50% + ${dx*.5}px),calc(-50% + ${dy*.5-80}px)) scale(1.5)`},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.8)`,opacity:.2}],{duration:520,easing:'ease-in'}).onfinish=()=>{s.remove();pop(f)}}
function pop(f){const p=$('#plate').getBoundingClientRect(),s=document.createElement('span');s.className='fly pop2';s.textContent='+'+f.kcal+' kcal';
s.style.left=p.left+p.width/2+'px';s.style.top=p.top+p.height/2+'px';s.style.color=f.g==='junk'?'#d9534f':'#1f8a4c';document.body.appendChild(s);
s.animate([{transform:'translate(-50%,-50%)',opacity:1},{transform:'translate(-50%,-140px)',opacity:0}],{duration:1000}).onfinish=()=>s.remove()}
let AC;function beep(f,d=.1,t='sine',v=.08,at=0){if(!sound)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),n=AC.currentTime+at;o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,n);g.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(g);g.connect(AC.destination);o.start(n);o.stop(n+d)}catch(e){}}
const SFX={good:()=>{beep(660);beep(880,.12,'sine',.08,.08)},bad:()=>beep(180,.25,'sawtooth',.06),win:()=>[523,659,784,1047].forEach((f,i)=>beep(f,.18,'triangle',.09,i*.12)),tap:()=>beep(440,.05)};
$('#redo').addEventListener('click',()=>{resetSes();say('Oke, kita coba lagi sesi ini!');render()});
$('#next').addEventListener('click',()=>{if(ses>=3){showReport();return}ses++;resetSes();say(SI[ses]);render();window.scrollTo(0,0)});
$('#again').addEventListener('click',()=>{$('#rp').hidden=true;newDay();say(V[ch].welcome,SI[0]);render()});
$('#rpx').addEventListener('click',()=>$('#rp').hidden=true);
$('#hud').addEventListener('click',e=>{if(e.target.closest('#snd')){sound=!sound;renderHud();SFX.tap()}});
setInterval(()=>{const a=$('#av'),e=a&&a.querySelector('.eyes');if(!e||$('#game').hidden)return;const o=e.innerHTML;if(!o.includes('<circle'))return;e.dataset.b=1;e.innerHTML=E.t;setTimeout(()=>{if(e.dataset.b==='1'){e.innerHTML=o;e.dataset.b=0}},140)},3500);

/* ===== Berat badan dinamis ===== */
const fm=n=>n.toFixed(1).replace('.',',');
const curW=()=>wt+(plate.length&&!locked?(kcal()-TG())/1000:0);
const wLabel=b=>b<14.5?'perlu lebih banyak gizi':b<19?'gizi baik':'perlu dijaga';
function newDay(){day=[];ses=0;water=0;wt=PR[ch].kg;wh=[wt];locked=false;resetSes()}
function renderProf(){if(!ch)return;const p=PR[ch],w=Math.max(p.kg-4,Math.min(p.kg+4,curW())),d=w-p.kg,b=w/((p.cm/100)**2),c=d>.05?'up':d<-.05?'dn':'';
$('#prof').innerHTML=`<span>🎂 <b>${p.age} th</b></span><span>📏 <b>${p.cm} cm</b></span><span class="wt ${c}">⚖️ <b>${fm(w)} kg</b> ${c==='up'?'▲':c==='dn'?'▼':'●'} ${d<0?'−':'+'}${fm(Math.abs(d))}</span><span>IMT <b>${fm(b)}</b> · ${wLabel(b)}</span><span>🔥 butuh <b>±${p.need.toLocaleString('id-ID')} kcal/hari</b></span>`}
function spark(){const m=Math.min(...wh)-.1,M=Math.max(...wh)+.1,W=240,H=60,pt=wh.map((v,i)=>[10+i*(W-20)/Math.max(1,wh.length-1),H-8-(v-m)/(M-m)*(H-16)]);
return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:300px"><polyline points="${pt.map(p=>p.join(',')).join(' ')}" fill="none" stroke="var(--acc)" stroke-width="3" stroke-linejoin="round"/>${pt.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="var(--acc)"/>`).join('')}</svg>`}
