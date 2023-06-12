let season = ["summer","winter","spring"]
let Viv = {name: "Vivian", pronouns: "she", icf: "strawberry"}
let Han = {name: "Matthew", pronouns: "he", icf: "mint chocolate chip"}
let Izzy = {name: "Isabelle", pronouns: "she", icf: "dulce de leche"}
let Mek = {name: "Melissa", pronouns: "she", icf: "vanilla"}
let Ber = {name: "Bernice", pronouns: "she", icf: "chocolate"}
let Amb = {name: "Amber", pronouns: "she", icf: "cookies and cream"}
let names = [Viv, Han, Izzy, Mek, Ber, Amb]
let feelings = ["loved","hated","liked","was confused by","was digusted by","was impressed by","fell in love with"]
let fontSize = 20

function setup() {
  img = loadImage('vic.png')
  let titleSize = 40
  createCanvas(750,700);
  fill('#566575');
  rect(0,0,800,600);
  fill('white');
  textSize(titleSize)
  textStyle(BOLDITALIC)
  textFont('Courier New')
  text("Ice Cream Shop",20,68)
  text("Shenanigans",20,68+titleSize)
  let s = int(random(3))
  let n = int(random(6));
  let n2 = int(random(6));
  let fe = int(random(6));
  let fontSize = 20;
  
  if (n==n2&&n2<6){
    n2=n2+1
  }
  else if (n==n2&&n2==6){
    n2=n2-1
  }
  textSize(fontSize);
  textStyle(ITALIC);
  textFont('Courier New');
  fill('#ffc3b1');
  text("Over "+season[s]+" break, ",20,150);
  fill('#f9efc7');
  text(names[n].name+" and "+names[n2].name+" went to an ice cream shop.",20,150+fontSize);
  fill('#c3edbf');
  text(names[n].name +" likes "+ names[n].icf +" ice cream,",20,150+2*fontSize);
  fill('#b8dfe6');
  textWrap(WORD);
  text("but "+names[n2].name+" introduced "+names[n].name+" to "+names[n2].icf+" ice cream today",20,150+3*fontSize);
  fill('#c5bbde');
  text("and "+names[n].pronouns+" "+feelings[fe]+" it.",20,150+4*fontSize)
}

function draw(){
  image(img,200,300,350,260)
}