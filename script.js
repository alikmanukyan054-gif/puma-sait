const AC = e => document.createElement(e);
const body = document.body;
const style = AC('style');
document.head.append(style);
style.innerHTML = `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}`;

const GlobalData = Object.seal({ //frize metodi nman e uxaki toxnum e popoxutyun anel
    language:[
        {
            link:['home','about us','product','services','contacts'],// anvanumnery
            proNameData:['puma pro classic','Puma RS-X','s-l400','puma suede one','puma doublecourt prm','puma-ca-pro-classic','puma suede one','Puma Shoe power','miami grand prix','puma tenaz V Jr','puma fat buddha','puma accelerate nitro'],
            proPriceData:['100$','120$','150$','180$','200$','110$','190$','140$','185$','130$','210$','115$'], // apranqi gnery
        },
        {
            link:['home','about us','product','services','contacts'],
        },
        {
            link:['home','about us','product','services','contacts'],
        }
    ],
    scrollId:['#home','#about','#product','#services','#contacts'],// texadrvelu e menui meji hrefneri mej
    image:['puma1.jpg','https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/195/195-best-puma-basketball-shoes-001-16189037-main.jpg','puma2.webp','puma3.jpeg','https://perksandmini.com/cdn/shop/collections/pam-puma-bio-verse.jpg?v=1706759468','puma1.jpg'],
    proImg:['puma-pro-classic.png','Puma-RS-X.png','s-l400.png','puma_suede_one.png','puma-doublecourt-prm.png','puma-ca-pro-classic.png','puma_suede_one.png','Puma Shoe power.png','miami_grand_prix.png','puma tenaz V Jr.png','puma fat buddha.png','puma accelerate nitro.webp'],
    rate:'$',
    totalData:[],// mejy grancvum ev pahvum e tvyal apranqi giny yst indexneri

});
(writeTitle = () =>{
    const titleName = 'Puma Shoes';
    let titleCur = 0;
    let setTitle = setInterval(() =>{
        document.title = titleName.slice(0,++titleCur);
        if(document.title == titleName){
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(() => {
                    document.title = titleName.slice(0,titleCur--);
                    if(document.title == 'P'){
                        clearInterval(setTitle2);
                        writeTitle();
                    }
                },250);
            },1e3);
        }
    },250);
})();

const pageIcon = AC('link');
document.head.append(pageIcon);
pageIcon.rel = 'shortcut icon';
pageIcon.href = 'Section19.png';
const header = AC('header');
header.style = 'background:#00f; display:flex; justify-content: space-between; align-items: center; padding: 0 20px;';
body.append(header);
const logo = AC('a');
logo.style = 'display:block;';
logo.href = 'index.html';
header.append(logo);
const logoImg = AC('img');
logoImg.alt = 'nkar';
logoImg.title = 'Puma Shoes';
logoImg.src = 'logo.png';
logo.append(logoImg);
logoImg.setAttribute('style','height:110px; transition:.5s;');
logo.onmouseover = () => logoImg.style.transform = 'scale(-1) rotate(180deg)';
logo.onmouseleave = () => logoImg.style.transform = null;
const nav = AC('nav');
logo.after(nav);
const menu = AC('ul');
menu.setAttribute('style','display:flex; list-style: none; text-transform: capitalize;');
nav.append(menu);
GlobalData.language[0].link.forEach((item,index) => {
    const li = AC('li');
    menu.append(li);
    const a = AC('a');
    li.append(a);
    a.innerText = item;
    a.href = GlobalData.scrollId[index];
    a.style = 'color: #fff; font:bold 22px cursive; margin:0 20px; text-decoration: none; position: relative;';
    const after = AC('span');
    a.append(after);
    after.style = 'position: absolute; bottom: -5px; left: 0; width:100%; height: 3px; background: #fff; transition: .4s; scale: 0 1;';
    a.onmouseover = () => after.style.scale = '1';
    a.onmouseleave = () => after.style.scale = '0 1';
});

const searchBlock = AC('div');
nav.after(searchBlock);
const search = AC('input');
search.type = 'search';
searchBlock.append(search);
search.setAttribute('style','height: 30px; width:220px; border-radius: 30px; border: 2px solid #000; outline: none; font: bold 16px cursive; transition: .4s; padding: 0 10px;');
search.onfocus = e => (e.target.style.background = '#000',e.target.style.color = '#fff');
search.onblur = e =>  (e.target.style.background = null,e.target.style.color = null);
(autoWrite = () => {
    const titleName ='Search...';
    let titleCur = 0;
    let setTitle =setInterval(() => {
        search.placeholder = titleName.slice(0,++titleCur);
        if(search.placeholder == titleName) {
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(() => {
                    search.placeholder = titleName.slice(0, titleCur--);
                    if(search.placeholder == '') {
                        clearInterval(setTitle2);
                        autoWrite();
                    }
                },100)
            },1500);
        }
    },100)
})();
const slider = AC('div');
slider.setAttribute('style','overflow: hidden; height:'.concat(innerHeight - header.offsetHeight,'px'));
header.after(slider);
const chiefTitle = AC('h1');
chiefTitle.innerText = 'puma shoes';
slider.append(chiefTitle);
chiefTitle.setAttribute('style','position: absolute; top:50%; left: 50%; translate: -50% -50%; z-index: 1; text-transform:capitalize; font: bold 7vw arial; color: #00f8;-webkit-text-stroke: 2px #fff; text-shadow:0 8px 7px #0008, 0 -10px 7px #00f8;')
const sliderBig = AC('div');
sliderBig.setAttribute('style',`width:${GlobalData.image.length * 100}%; height: 100%; display: flex; position: relative; left: -100%; transition :.4s;`);
slider.append(sliderBig);
const sliderRadio = AC('div');
sliderRadio.style = 'position:absolute; bottom: 3%; left: 0; width: 100%; text-align: center;';
slider.append(sliderRadio);
let sliderCur = -100;
let sliderBool = true;
let radCur = 0; // arandzin radioneri hamar enq grum vor btn -n sexmeluc radion poxvi 

GlobalData.image.forEach((item,index) => {
    const list = AC('div');
    sliderBig.append(list);
    list.setAttribute('style',`width: 100%; height: 100%; background: url(${item}) no-repeat center / cover;`);
    list.className = 'repeat';
    if(index != GlobalData.image.length -1){ // radioneri qanaky stanalu hamar
        const inpRad = AC('input');
        inpRad.type = 'radio';
        inpRad.name = 'repeat';
        index == 0 ? inpRad.checked = true : '';
        sliderRadio.append(inpRad);
        inpRad.style = 'width: 20px; height: 20px; margin: 0 4px; cursor: pointer; accent-color: #00f';
        inpRad.onchange = () => {
            sliderCur = (index +1) * -100;
            radCur = index;
            sliderBig.style.left = sliderCur + '%';
        }
    }
});

for(let i = 0; i < 2; i++){
    const btn = AC('button');
    btn.className = 'slide';
    slider.append(btn);
    btn.setAttribute('style','padding: 15px 40px; font-size: 4.5rem; border-radius: 12px; background: #0008; position: absolute; top: 50%; translate: 0 -50%; cursor: pointer; transition: .4s; color: #fff; box-shadow:0 0 15px 4px #fff;');
    i == 0 ? (btn.style.left = '3%', btn.innerHTML = '&#10096;') :(btn.style.right = '3%', btn.innerHTML = '&#10097;');
    btn.onmouseover = () => (btn.style.background = '#00f8',btn.style.color = '#000');
    btn.onmouseleave = () => (btn.style.background = '#0008',btn.style.color = '#fff');
    btn.onclick = () => {
        if(i == 0){
            if(sliderBool){
                sliderBool = false;
                sliderCur += 100;
                radCur--;
                radCur < 0 ? radCur = GlobalData.image.length -2 : '';
                if(sliderCur > 0){
                    sliderBig.style.transition = 'none';
                    sliderCur = (GlobalData.image.length -1)* -100;
                    setTimeout(() => {
                        sliderBig.style.transition = '.4s';
                        sliderCur = (GlobalData.image.length -2) * -100;
                        sliderBig.style.left = sliderCur + '%';
                    },40);
                }
                sliderBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBool = true, 400);
                sliderRadio.children[radCur].checked = true;// radionery miacnum e slaqin
            }
            
        }
        else{
            if(sliderBool) {
                sliderBool = false;
                sliderCur -= 100;
                radCur++;
                radCur == GlobalData.image.length -1 ? radCur = 0 : '';
                if(sliderCur < (GlobalData.image.length -1)* -100){
                    sliderBig.style.transition = 'none';
                    sliderCur = 0;
                
                setTimeout(() => {
                    sliderBig.style.transition = '.4s';
                    sliderCur = -100;
                    sliderBig.style.left = sliderCur + '%';

                },40);
            }
                sliderBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBool = true,400);
                sliderRadio.children[radCur].checked = true;
            }
        }
    }
}
const main = AC('main');
slider.after(main);
main.style = 'display: flex; flex-wrap: wrap; justify-content: space-evenly; padding: 50px 0; overflow: hidden;';
for(let i = 0; i < 12; i++){
    const itemBlock = AC('div');
    itemBlock.className = 'product';
    main.append(itemBlock);
    itemBlock.style = 'width:400px; height: 460px; perspective: 850px; padding:30px;';
    const item = AC('div');
    itemBlock.append(item);
    item.style = 'height:100%; transition: .2s; box-shadow: inset 0 0 15px #0006; padding: 0 20px; text-align:center;';
    itemBlock.onmousemove = e => {
        item.style.transform = `rotateY(${(e.layerX - item.offsetWidth/2)/7}deg) rotateX(${(e.layerY - item.offsetHeight/2)/7}deg)`;
    }
    itemBlock.onmouseleave = e => item.style.transform = 'none';
    const img = AC('img'); // nkar
    const proName = AC('h3'); //anvanum
    const proPrice = AC('h4'); // gin
    img.src = GlobalData.proImg[i];
    img.alt = 'image';
    img.style = 'width:250px; height:175px; object-fit: contain;';
    proName.innerText = GlobalData.language[0].proNameData[i];
    proName.style = 'font: bold 22px verdana; color: #555;-webkit-text-stroke: 0.8px #000; text-shadow: 0 2px 0 #000, 0 4px 4px #999; text-transform:capitalize;';
    proPrice.innerText = GlobalData.language[0].proPriceData[i];
    proPrice.style = 'font: bold 24px verdana; margin-top: 7px;color:#000;';
    const quantityBlock = AC('div');
    item.append(img, proName, proPrice,quantityBlock);
    const minus = AC('div');
    const display = AC('div');
    const plus = AC('div');
    minus.innerText = '-';
    display.innerText = 1;
    plus.innerText = '+';
    quantityBlock.style = 'display: flex; justify-content: center; align-items: center; margin-top: 10px; padding-left: 37px; user-select: none;';
    minus.style = 'border: 1px solid #000; width:30px; height: 30px; font: bold 18px arial; display: grid; place-items: center; cursor: pointer;';
    display.style = 'border: 1px solid #000; width:30px; height: 30px; font: bold 18px arial; display: grid; place-items: center; background: #00f8;';
    plus.style = 'border: 1px solid #000; width:30px; height: 30px; font: bold 18px arial; display: grid; place-items: center; cursor: pointer;';
    const add = AC('div');
    add.innerHTML = '<img src ="https://cdn-icons-png.flaticon.com/512/10340/10340739.png" alt="add" height="40px">';
    add.style = 'cursor: pointer; margin-left: 7px; transition: .4s; transform-origin: top left;';
    quantityBlock.append(minus, display, plus, add);
    add.onmouseover = () => add.style.rotate = '-10deg';
    add.onmouseleave = () => add.style.rotate = null;
    plus.onclick = () => display.innerText < 10 ? display.innerText++ : ''; // qanaky avelacnum enq
    minus.onclick = () => display.innerText > 1 ? display.innerText-- : ''; // qanaky pakasacnelu hamar
    add.onclick = () => {
        add.style.filter = 'hue-rotate(180deg)';
        add.style.pointerEvents = 'none';
        quantityBlock.style.pointerEvents = 'none';
        quantityBlock.style.opacity = 0.3;
        const line = AC('div');
        cartDisplay.append(line); 
        line.style = 'border-bottom: 2px solid #fff; height: 170px; padding: 20px 40px; display:flex; align-items: center; justify-content: space-between;';
        const cloneImg = img.cloneNode(true);
        cloneImg.style = 'height:100%;';
        const cloneName = proName.cloneNode(true);
        cloneName.style = 'color:#fff; font:bold 22px arial; text-transform: capitalize;';
        const clonePrice = proPrice.cloneNode(true);
        clonePrice.style = 'color:#fff; font:bold 22px arial;';
        const myQuantity = AC('h4');
        myQuantity.innerText = 'Quantity - ' + display.innerText;
        myQuantity.style = clonePrice.getAttribute('style');
        const total = AC('h4');
        total.innerText = 'Total - ' + display.innerText * /[0-9]+/.exec(proPrice.innerText) + GlobalData.rate;
        GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(proPrice.innerText);
        globalTotal.innerText = 'Total - ' + GlobalData.totalData.reduce((total,item) => total + item, 0) + GlobalData.rate;
        total.style = clonePrice.getAttribute('style');
        const plusMinusBlock = AC('div');
        plusMinusBlock.style = 'display: flex;';
        const cloneMinus = minus.cloneNode(true);
        cloneMinus.style.borderColor = '#fff';
        cloneMinus.style.color = '#fff';
        const clonePlus = plus.cloneNode(true);
        clonePlus.style.borderColor = '#fff';
        clonePlus.style.color = '#fff';
        cloneMinus.onclick = () => {
            display.innerText > 1 ? display.innerText-- : '';
            total.innerText = 'Total - ' + display.innerText * /[0-9]+/.exec(proPrice.innerText) + GlobalData.rate;
            GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(proPrice.innerText);
            globalTotal.innerText = 'Total - ' + GlobalData.totalData.reduce((total,item) => total + item, 0) + GlobalData.rate;
            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('-') + 1)// textic arandznacnum enq tivy
            x--;
            if(x == 0){
                plusMinusBlock.style.pointerEvents = 'none';
                quantityBlock.style.pointerEvents = null;
                quantityBlock.style.opacity = null;
                add.style.filter = null;
                add.style.pointerEvents = null;
                line.style.scale = 0;

                GlobalData.totalData[i] = 0; // vorpeszi verjnakan ardyunqy zambyuxy datarkveluc 0 lini
                
                globalTotal.innerText = 'Total - ' + GlobalData.totalData.reduce((total,item) => total + item, 0) + GlobalData.rate;// es toxovel verevi zangvacy tarmacvum e
                setTimeout(() =>{
                    line.remove();
                    cartDisplay.childElementCount == 0 ? cartBlock.style.clipPath = 'circle(0 at 100% 100%)' : '';
                }, 5e2);
            };
            myQuantity.innerText = 'Quantity - ' + x;
        };
        clonePlus.onclick = () => {
            display.innerText < 10 ? display.innerText++ : '';
            total.innerText = 'Total - ' + display.innerText * /[0-9]+/.exec(proPrice.innerText) + GlobalData.rate;
            GlobalData.totalData[i] = display.innerText * /[0-9]+/.exec(proPrice.innerText);// stacvacy drvum e totalDatai mej
            globalTotal.innerText = 'Total - ' + GlobalData.totalData.reduce((total,item) => total + item, 0) + GlobalData.rate;
            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('-') +1);
            x < 10 ? x++ : '';
            myQuantity.innerText = 'Quantity - ' + x;
        };
        plusMinusBlock.append(cloneMinus, clonePlus)
        line.append(cloneImg, cloneName, clonePrice, myQuantity, total, plusMinusBlock);
    }
}
const cartBlock = AC('div');
main.after(cartBlock);
cartBlock.style = 'position: fixed; top: 0; left: 0; width: 100%; height:100%; backdrop-filter: blur(5px);z-index:2; transition: 4s; display: grid; place-items: center; clip-path:circle(0 at 100% 100%); user-select: none; align-content:center;';
const cartDisplay = AC('div');
cartDisplay.style = 'width: 70%; height: 80vh; background: #111; border-radius:25px; overflow: auto;';
const cartLogo = AC('div');
cartBlock.after(cartLogo);
cartLogo.innerHTML = '<img src="cartlogo.png" alt="cartLogo" height="70px">';
cartLogo.style = 'position: fixed; bottom: 10px; right:5px; cursor: pointer;';
cartLogo.onclick = () => cartBlock.style.clipPath = 'circle(100%)';// zambyuxy bacvelu hamar
const closeCart = AC('div');
closeCart.innerText = 'x';
closeCart.style = 'position: absalute; top: 5px; left:50%; translate: -50%; font: bold 22px arial; cursor: pointer;';
closeCart.onclick = () => cartBlock.style.clipPath = 'circle(0 at 100% 100%)';

const globalTotal = AC('h2');
globalTotal.innerText = 'Total - 0';
cartBlock.append(closeCart, cartDisplay, globalTotal);
globalTotal.style = 'background: #111; color: #fff; padding: 10px 25px; border-radius: 0 0 40px 40px; font: bold 22px arial;';


/// paralax efekt stanalu hamar nshvac elementneri talis enq className vorpesi karoxananq ashxatacnel

window.onscroll = () => {
    // console.log(scrollY); // stugelu hamar
    document.querySelectorAll('.repeat').forEach(item => {
        item.style.backgroundPositionY = -scrollY/6 + 50 + '%';
        chiefTitle.style.translate = '-50%' + (scrollY/4 - 50) + '%';
        document.querySelectorAll('.slide').forEach(item => {
            item.style.opacity = Math.max(-scrollY/300 + 1,0);
            // console.log(Math.max(-scrollY/300 + 1,0));
            });
            document.querySelectorAll('.product').forEach(item => {
                if(scrollY > item.offsetTop - 600){
                    if(item.offsetLeft < innerWidth/2){
                        item.style.translate = Math.min((scrollY - item.offsetTop + 200),0) + 'px';
                    }
                    else if(item.offsetLeft + item.offsetWidth > innerWidth/2){
                        item.style.translate = Math.max(-(scrollY - item.offsetTop + 200),0) + 'px';
                    }
                }
            });
    });

    
}
const section = AC('section');
main.after(section);
section.style = 'width:100%; height:500px; background: #00f;';
// tnayin sectioni mej stanal 4 hat div ira mej koshikner voronq akcai tak en. ev sarqum eq sirun footer
const akciaTitle = AC('h2');
akciaTitle.innerText = '🔥 Special Offers 🔥';
akciaTitle.style = 'text-align:center; color:#fff; font:bold 36px arial; padding:20px 0;';
section.append(akciaTitle);

const akciaContainer = AC('div');
akciaContainer.style = 'display:flex; justify-content:space-evenly; flex-wrap:wrap; padding:20px;';
section.append(akciaContainer);

for (let i = 0; i < 4; i++) {
  const akciaItem = AC('div');
  akciaItem.style = `
    width:260px;
    background:#fff;
    border-radius:15px;
    text-align:center;
    padding:15px;
    box-shadow:0 0 10px #0004;
    transition:.3s;
  `;
  akciaItem.onmouseover = () => akciaItem.style.transform = 'scale(1.05)';
  akciaItem.onmouseleave = () => akciaItem.style.transform = 'scale(1)';
  
  const img = AC('img');
  img.src = GlobalData.proImg[i];
  img.style = 'width:180px; height:150px; object-fit:contain;';
  const name = AC('h3');
  name.innerText = GlobalData.language[0].proNameData[i];
  name.style = 'font:bold 18px arial; margin:10px 0;';
  const oldPrice = AC('s');
  oldPrice.innerText = GlobalData.language[0].proPriceData[i];
  const newPrice = AC('h4');
  newPrice.innerText = (/[0-9]+/.exec(GlobalData.language[0].proPriceData[i]) * 0.8) + '$';
  newPrice.style = 'color:red; font:bold 20px arial;';
  akciaItem.append(img, name, oldPrice, newPrice);
  akciaContainer.append(akciaItem);
}

// ===== Footer =====
const footer = AC('footer');
footer.style = `
  background:#111;
  color:#fff;
  text-align:center;
  padding:30px 0;
  font:16px arial;
  margin-top:40px;
`;
footer.innerHTML = `
  <p>&copy; 2025 Puma Shoes. All Rights Reserved.</p>
  <p>Follow us on 
    <a href="#" style="color:#00f8; text-decoration:none;">Instagram</a> |
    <a href="#" style="color:#00f8; text-decoration:none;">Facebook</a> |
    <a href="#" style="color:#00f8; text-decoration:none;">Twitter</a>
  </p>
`;
section.after(footer);

