const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var divisions=[];
var particle;
var plinkos1=[];
var plinkos2=[];
var plinkos3=[];
var plinkos4=[];
var score=0;
var gameState="play";
var count;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,700);
  
  base1=new Ground(400,700,800,20)
 
 
}

function draw() {
 
  background("#000000"); 
  Engine.update(engine);



for(var a=40; a<=width; a=a+50)
  {
    plinkos1.push(new Plinko(a,75))
  }

  
  for(var b=15; b<width-10; b=b+50)
  {
    plinkos2.push(new Plinko(b,175));
  }


  for(var c=40; c<width; c=c+50)
  {
    plinkos3.push(new Plinko(c,275));
  }

  
  for(var d=15; d<width-10; d=d+50)
  {
    plinkos4.push(new Plinko(d,375));
  }

for(var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))

}

for (var k=0;k<divisions.length;k++) {
  divisions[k].display()
}

//for (var j=0;j<particle.length;j++){
 // particle[j].display()
//}

for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos1[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos2[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos3[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos4[e].display();
  }

base1.display()





  //drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)

textSize(30)

text("500",20,640)
text("500",100,640)
text("500",170,640)
text("500",260,640)
text("200",330,640)
text("200",420,640)
text("200",500,640)
text("100",580,640)
text("100",640,640)
text("100",720,640)
text("SCORE : "+score,40,40)
}
if(gameState==="end"){
  textSize(100);
  text("GameOver", 150, 250);
}

function mousePressed(){
  if(gameState!=="end"){
   
   score++;
   particle=new Particle(mouseX,200,10,10)

   
  }
  
  
}
if(particle!=null)
{
   particle.display();
    
    if (particle.body.position.y>760)
    {
          if (particle.body.position.x < 300) 
          {
              score=score+500;      
              particle=null;
              if ( count>= 5) gameState ="end";                          
          }


          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
          {
                score = score + 100;
                particle=null;
                if ( count>= 5) gameState ="end";

          }
          else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
          {
                score = score + 200;
                particle=null;
                if ( count>= 5)  gameState ="end";

          }      
          
    }

  }