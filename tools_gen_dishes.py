import random, math, os, re, zlib
O='src/assets/generated'; os.makedirs(O,exist_ok=True)
def R(i): return random.Random(zlib.crc32(i.encode()))
def pts(r,n,rad,cx=300,cy=225):
    for _ in range(n):
        a=r.random()*6.283; d=rad*math.sqrt(r.random()); yield cx+d*math.cos(a),cy+d*math.sin(a)
def plate(rad=150): return (f'<circle cx="300" cy="225" r="{rad}" fill="#f4efe6" filter="url(#s)"/>'
  f'<circle cx="300" cy="225" r="{rad*.84:.0f}" fill="#fffdf8" stroke="#e6dccb" stroke-width="3"/>')
def dip(c): return f'<circle cx="490" cy="350" r="40" fill="#f4efe6" filter="url(#s)"/><circle cx="490" cy="350" r="28" fill="{c}"/>'
def leaf(r,n=6,rad=100): return ''.join(f'<ellipse cx="{x:.0f}" cy="{y:.0f}" rx="7" ry="4" fill="#4f8a3c" transform="rotate({r.randint(0,180)} {x:.0f} {y:.0f})"/>' for x,y in pts(r,n,rad))
def soup(i,a,b):
    r=R(i); s=plate()+f'<circle cx="300" cy="225" r="98" fill="{a}" stroke="#0002" stroke-width="6"/><ellipse cx="268" cy="188" rx="40" ry="13" fill="#fff4" transform="rotate(-25 268 188)"/>'
    s+=''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r.randint(4,9)}" fill="{b}" opacity=".9"/>' for x,y in pts(r,16,80)); return s+leaf(r,5,80)
def mound(i,a,b):
    r=R(i); s=plate()+f'<ellipse cx="300" cy="232" rx="100" ry="78" fill="{a}"/><ellipse cx="275" cy="200" rx="50" ry="26" fill="#fff3" />'
    s+=''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r.randint(2,6)}" fill="{b}"/>' for x,y in pts(r,45,85)); return s+leaf(r,6,95)
def skewers(i,a,b='#5a9a3a'):
    r=R(i); s='<rect x="40" y="90" width="520" height="270" rx="34" fill="#8a5a32" filter="url(#s)"/>'
    s+=''.join(f'<line x1="50" x2="550" y1="{y}" y2="{y}" stroke="#0002" stroke-width="2"/>' for y in range(110,350,22))
    for y in (150,225,300):
        s+=f'<line x1="70" y1="{y}" x2="530" y2="{y}" stroke="#d8c9a8" stroke-width="6" stroke-linecap="round"/>'
        for k in range(6): s+=f'<rect x="{100+k*68}" y="{y-24}" width="58" height="48" rx="15" fill="{b if k%3==2 else a}" stroke="#0003" stroke-width="2"/>'
    return s
def sticks(i,a,b):
    r=R(i); s=plate()
    for k in range(3):
        y=170+k*40; s+=f'<g transform="rotate(-8 300 225)"><rect x="185" y="{y}" width="230" height="34" rx="17" fill="{a}" stroke="#0003" stroke-width="2"/>'
        s+=''.join(f'<line x1="{x}" x2="{x+10}" y1="{y+6}" y2="{y+28}" stroke="#0004" stroke-width="4"/>' for x in range(215,400,38))+'</g>'
    return s+leaf(r,5,110)+dip(b)
def dumplings(i,a,b):
    s=plate(); pos=[(300,225)]+[(300+88*math.cos(t*0.8976),225+80*math.sin(t*0.8976)) for t in range(7)]
    for x,y in pos: s+=f'<ellipse cx="{x:.0f}" cy="{y:.0f}" rx="38" ry="31" fill="{a}" stroke="{b}" stroke-width="3"/><circle cx="{x:.0f}" cy="{y-6:.0f}" r="9" fill="{b}"/>'
    return s
def salad(i,pal):
    r=R(i); s=plate()
    for x,y in pts(r,48,108): s+=f'<ellipse cx="{x:.0f}" cy="{y:.0f}" rx="{r.randint(8,19)}" ry="{r.randint(6,12)}" fill="{r.choice(pal)}" transform="rotate({r.randint(0,180)} {x:.0f} {y:.0f})" opacity=".95"/>'
    return s
def pizza(i,a,b):
    r=R(i); s=f'<circle cx="300" cy="225" r="170" fill="#c98a45" filter="url(#s)"/><circle cx="300" cy="225" r="150" fill="{a}"/>'
    s+=''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r.randint(11,19)}" fill="{b}"/>' for x,y in pts(r,13,125))+leaf(r,9,125)
    return s+''.join(f'<line x1="300" y1="225" x2="{300+150*math.cos(t*.785):.0f}" y2="{225+150*math.sin(t*.785):.0f}" stroke="#0003" stroke-width="2"/>' for t in range(4))
def boat(i,yolk):
    s='<g transform="rotate(-10 300 225)"><ellipse cx="300" cy="225" rx="180" ry="92" fill="#d99a4a" filter="url(#s)"/><ellipse cx="300" cy="225" rx="138" ry="58" fill="#f6dc82"/>'
    s+='<circle cx="300" cy="225" r="30" fill="#f0a020"/><ellipse cx="290" cy="215" rx="9" ry="6" fill="#fff8"/>' if yolk else '<path d="M180 225 Q240 190 300 225 T420 225" stroke="#e8b84a" stroke-width="6" fill="none"/>'
    return s+'</g>'
def disc(i,a):
    r=R(i); s=f'<circle cx="300" cy="225" r="150" fill="{a}" filter="url(#s)"/>'
    return s+''.join(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r.randint(5,13)}" fill="#8a5a2a" opacity=".35"/>' for x,y in pts(r,16,125))
def buns(i,a):
    s=''
    for x,y in [(190,170),(410,170),(300,235),(190,310),(410,310)]: s+=f'<circle cx="{x}" cy="{y}" r="64" fill="{a}" filter="url(#s)"/><ellipse cx="{x-16}" cy="{y-22}" rx="26" ry="13" fill="#fff4"/><path d="M{x-24} {y+4} q24 14 48 0" stroke="#0004" stroke-width="4" fill="none"/>'
    return s
def moons(i,a):
    s=plate()
    for x,y,t in [(255,190,-20),(350,215,15),(285,290,-5)]: s+=f'<g transform="translate({x} {y}) rotate({t})"><path d="M-72 0 A72 52 0 0 1 72 0 Z" fill="{a}" stroke="#0003" stroke-width="3"/><path d="M-60 0 A60 40 0 0 1 60 0" stroke="#0003" stroke-width="3" stroke-dasharray="6 5" fill="none"/></g>'
    return s
def cake(i,layers):
    s='<ellipse cx="300" cy="350" rx="215" ry="42" fill="#f4efe6" filter="url(#s)"/>'
    for k,c in enumerate(layers): s+=f'<rect x="160" y="{320-(k+1)*28}" width="280" height="30" rx="{20 if k==len(layers)-1 else 8}" fill="{c}" stroke="#0003" stroke-width="2"/>'
    return s
def glass(i,a,b):
    s='<ellipse cx="300" cy="385" rx="100" ry="16" fill="#0006"/><polygon points="215,90 385,90 360,375 240,375" fill="#ffffff22" stroke="#fff8" stroke-width="4"/>'
    s+=f'<polygon points="221,150 379,150 358,372 242,372" fill="{a}" opacity=".9"/>'
    s+=''.join(f'<rect x="{x}" y="{y}" width="46" height="46" rx="8" fill="#fff6" transform="rotate({t} {x+23} {y+23})"/>' for x,y,t in [(245,190,15),(310,230,-20),(260,290,30),(320,150,8)])
    return s+f'<line x1="345" y1="40" x2="305" y2="330" stroke="{b}" stroke-width="10" stroke-linecap="round"/><circle cx="388" cy="95" r="30" fill="{b}" stroke="#fff6" stroke-width="3"/>'
def cup(i,a,foam):
    s='<rect x="400" y="205" width="70" height="42" rx="21" fill="none" stroke="#f4efe6" stroke-width="14"/><circle cx="300" cy="225" r="160" fill="#f4efe6" filter="url(#s)"/><circle cx="300" cy="225" r="108" fill="#fffdf8" stroke="#e6dccb" stroke-width="3"/>'
    s+=f'<circle cx="300" cy="225" r="90" fill="{a}"/>'
    if foam: s+=f'<circle cx="300" cy="225" r="68" fill="{foam}" opacity=".9"/><path d="M300 255 C255 225 275 190 300 212 C325 190 345 225 300 255Z" fill="{a}" opacity=".7"/>'
    return s+'<ellipse cx="262" cy="185" rx="26" ry="10" fill="#fff4" transform="rotate(-30 262 185)"/>'
def steak(i,a,b):
    r=R(i); s=plate()+f'<g transform="rotate(-15 290 225)"><ellipse cx="290" cy="225" rx="100" ry="64" fill="{a}" stroke="#0003" stroke-width="3"/>'
    s+=''.join(f'<line x1="{x}" y1="175" x2="{x+22}" y2="275" stroke="#0005" stroke-width="6" stroke-linecap="round"/>' for x in range(235,350,28))+'</g>'
    return s+leaf(r,10,60).replace('4f8a3c',b[1:]) if False else s+''.join(f'<ellipse cx="{x:.0f}" cy="{y:.0f}" rx="12" ry="7" fill="{b}" transform="rotate({r.randint(0,180)} {x:.0f} {y:.0f})"/>' for x,y in pts(r,9,35,400,270))
def stack(i,a,b):
    s='<ellipse cx="300" cy="350" rx="215" ry="44" fill="#f4efe6" filter="url(#s)"/>'
    for k in range(4): s+=f'<ellipse cx="300" cy="{325-k*36}" rx="150" ry="34" fill="{a}" stroke="#0003" stroke-width="2"/>'
    return s+f'<ellipse cx="300" cy="190" rx="95" ry="22" fill="{b}"/><circle cx="300" cy="172" r="16" fill="#c0392b"/><circle cx="326" cy="178" r="11" fill="#a52a2a"/>'
def board(i,pal):
    r=R(i); s='<circle cx="300" cy="225" r="170" fill="#9a6a3a" filter="url(#s)"/><circle cx="300" cy="225" r="150" fill="none" stroke="#0002" stroke-width="3"/>'
    for x,y in pts(r,13,115): s+=f'<polygon points="-30,-20 30,-20 0,28" fill="{r.choice(pal)}" stroke="#0003" stroke-width="2" transform="translate({x:.0f} {y:.0f}) rotate({r.randint(0,359)})"/>'
    return s
def balls(i,a,b):
    s=plate(); pos=[(300,225)]+[(300+88*math.cos(t*1.047),225+80*math.sin(t*1.047)) for t in range(6)]
    for x,y in pos: s+=f'<circle cx="{x:.0f}" cy="{y:.0f}" r="30" fill="{a}" stroke="#0003" stroke-width="2"/><ellipse cx="{x-9:.0f}" cy="{y-10:.0f}" rx="10" ry="6" fill="#fff4"/>'
    return s+dip(b)
def ice(i,pal):
    s=''.join(f'<circle cx="{x}" cy="{y}" r="62" fill="{c}" stroke="#0002" stroke-width="3"/>' for (x,y),c in zip([(225,225),(375,225),(300,150)],pal))
    return s+'<path d="M150 235 Q300 420 450 235 Z" fill="#dfe8ee" stroke="#fff8" stroke-width="4"/><rect x="270" y="360" width="60" height="30" fill="#dfe8ee"/><ellipse cx="300" cy="395" rx="90" ry="14" fill="#dfe8ee" filter="url(#s)"/>'

G=['#d63a2f','#f2b134','#59a14f','#8cc152']
M={
'blini':('stack','#e3b45f','#f6f0e0'),'syrniki':('stack','#d99a4e','#f6f0e0'),
'omelet':('salad',['#f6d96b','#f2c94c','#e8523f','#6b3fa0','#4f8a3c']),'sausages':('sticks','#d9825b','#f2c94c'),
'khachapuri-megrel':('boat',0),'khachapuri-adjar':('boat',1),'bread-basket':('buns','#c98a45'),
'lavash':('disc','#ecd3a0'),'lepyoshka':('disc','#d9993e'),'buns':('buns','#b8793f'),
'cheburek-cheese':('moons','#e0a85a'),'cheburek-beef':('moons','#d49a4c'),'cheburek-lamb':('moons','#c78a3f'),
'cheese-plate':('board',['#f2c94c','#e8e0c8','#d97d2b','#f7e9a0']),'meat-plate':('board',['#a63d3d','#c2705a','#e0b08a','#7a2e2e']),
'combo-plate':('board',['#f2c94c','#a63d3d','#e8e0c8','#c2705a']),'eggplant-rolls':('sticks','#5a2d4a','#f2ead8'),
'veg-bouquet':('salad',G),'herring':('sticks','#9fb4c7','#c64a6a'),'pickles':('salad',['#6a9a3a','#c0392b','#8bb85a','#e8dcb0']),
'uzbek-salad':('salad',['#d63a2f','#e8f0c0','#8e44ad','#59a14f']),'greek-salad':('salad',['#d63a2f','#cfe8a0','#f5f2e8','#2b2b2b','#f2b134']),
'eastern-salad':('salad',['#e8b4a0','#f4e6a0','#59a14f','#f2f2f2','#d9a05b']),'caesar':('salad',['#a8d46f','#7fb04a','#f4e8c0','#d9a05b','#e8523f']),
'chicken-corn':('salad',['#f4d03f','#f2ead0','#d9a05b','#59a14f']),'yakhna-til':('salad',['#c27c6a','#f2ead0','#d9a05b','#7fb04a']),
'eggplant-tomato':('salad',['#5a2d4a','#d63a2f','#7fb04a']),'crispy-eggplant':('salad',['#d9a05b','#f4f1e6','#a8d46f','#5a2d4a']),
'warm-beef':('salad',['#8a4a35','#5a2d4a','#f4f1e6','#a8d46f','#d63a2f']),
'strips':('sticks','#d99a4e','#f2c94c'),'chicken-breaded':('balls','#d08a3c','#e87a8a'),'garlic-croutons':('sticks','#d9a05b','#f4f1e6'),
'bbq-wings':('sticks','#8a3a1c','#3a1a0c'),'dolma':('dumplings','#6f9a3a','#4f7a2a'),'hot-suluguni':('balls','#f2d27a','#9c2a4a'),
'shrimp-batter':('balls','#e0a04a','#e8523f'),
'kharcho':('soup','#b8431f','#4f8a3c'),'lagman':('soup','#c9852f','#4f8a3c'),'kuza-shurpa':('soup','#d9a24a','#8a4a35'),'shurpa':('soup','#d9a24a','#8a4a35'),
'mushroom-cream':('soup','#d9c3a0','#8a6a4a'),'creamy-fish':('soup','#f0dcb0','#e8734a'),'borsch':('soup','#a82a2a','#f4f1e6'),
'chicken-soup':('soup','#e8c35a','#f4f1e6'),'tom-yum':('soup','#d9531e','#f4f1e6'),
'beef-steak':('steak','#6b3a22','#4f8a3c'),'salmon-steak':('steak','#e88a5a','#4f8a3c'),'beefstroganoff':('mound','#9a5a35','#f2e8c8'),
'potato-chicken':('mound','#e8d098','#d9a05b'),'kazan-kebab':('mound','#a8582f','#e8b44a'),'zharkoe':('mound','#a05a30','#d9822b'),
'julienne':('mound','#e8c070','#8a6a4a'),'tagliatelle':('mound','#f0d48a','#8a6a4a'),'creamy-pasta':('mound','#f2cf90','#e8734a'),
'manti':('dumplings','#f0dfb8','#e0c88a'),'khinkali-cheese':('dumplings','#f2e6c8','#d8c090'),'khinkali-beef':('dumplings','#f2e6c8','#d8c090'),
'khinkali-lamb':('dumplings','#f2e6c8','#d8c090'),'plov':('mound','#d9962b','#6b3a22'),'plov-chaikh':('mound','#c98424','#6b3a22'),
'lula-chicken':('sticks','#d9953f','#f4f1e6'),'lula-beef':('sticks','#8a4a28','#f4f1e6'),'lula-lamb':('sticks','#7a3e22','#f4f1e6'),
'lamb-loin':('sticks','#8a4a28','#9c2a4a'),'shashlik-wings':('sticks','#c0652a','#c0392b'),
'shashlik-fillet':('skewers','#e0a85a'),'shashlik-thigh':('skewers','#d08a3c'),'shashlik-beef':('skewers','#8a4a28'),
'caucasian-shashlik':('skewers','#7a3e22','#e8b44a'),'shashlik-lamb':('skewers','#9a5a30'),'fillet-cheese':('steak','#e0b070','#4f8a3c'),
'saj-chicken':('salad',['#d08a3c','#e8523f','#f2b134','#59a14f','#e0b070']),'saj-meat':('salad',['#8a4a28','#e8523f','#f2b134','#59a14f','#a8582f']),
'assorti':('skewers','#a8582f','#d9953f'),
'margarita':('pizza','#f4e4b0','#d63a2f'),'four-cheese':('pizza','#f2d27a','#e8e0c8'),'teriyaki':('pizza','#f2d27a','#9a5a35'),
'napoleon':('cake',['#e8c88a','#f6e8c0','#e8c88a','#f6e8c0','#e8c88a','#f6f0e0']),'medovik':('cake',['#c98a45','#f3e4c0','#c98a45','#f3e4c0','#c98a45']),
'cheesecake':('cake',['#d9a05b','#f6ead0','#f6ead0','#4a2c1e']),'baklava':('cake',['#d9a03a','#8a6a2a','#d9a03a','#8a6a2a','#e8c35a']),
'fruit-plate':('salad',['#e8523f','#f2b134','#8cc152','#8e44ad','#f28c38','#f4e6a0']),'ice-cream':('ice',['#f6ecd0','#5a3420','#e8788a']),
'kids-pizza':('pizza','#f4e4b0','#d63a2f'),'nuggets':('balls','#d9953f','#d63a2f'),
'kids-burger':('cake',['#d9953f','#6b3a22','#59a14f','#f2c94c','#e8523f','#d9953f']),'kids-cutlet':('steak','#c9843f','#4f8a3c'),
'kids-sausages':('sticks','#d9825b','#f2c94c'),'kids-salad':('salad',G),'kids-borsch':('soup','#a82a2a','#f4f1e6'),
'lemonade-note':('glass','#e8523f','#f2c94c'),'milkshake':('glass','#f6d8d8','#e8788a'),'cocktails':('glass','#e8734a','#c0392b'),
'shots':('glass','#c0392b','#f2c94c'),'author-tea':('cup','#d9902f',None),'regular-tea':('cup','#b8731f',None),
'author-coffee':('cup','#8a5a3a','#f1e2c8'),'regular-coffee':('cup','#4a2c1e','#d9b88a'),
}
ids=re.findall(r"id: '([^']+)',\n\s+name:",open('src/data/menu.ts').read())
miss=[i for i in ids if i not in M]; assert not miss,miss
for i,(k,*a) in M.items():
    body=globals()[{'steak':'steak','pizza':'pizza'}.get(k,k)](i,*a)
    svg=('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><defs><radialGradient id="g" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#4a3326"/><stop offset="1" stop-color="#1e1510"/></radialGradient>'
         '<filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-opacity=".4"/></filter></defs>'
         f'<rect width="600" height="450" fill="url(#g)"/>{body}</svg>')
    open(f'{O}/{i}.svg','w').write(svg)
print(len(ids),'menu ids,',len(os.listdir(O)),'svg')
