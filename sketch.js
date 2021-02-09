  var ground,groundImage,redImage,blueImage;
  var greenImage,pinkImage,bow,bowImage;
  var arrow,arrowImage;
  var balloons;
  var score;
  var arrowGroup;
  var redB,blueB,greenB,pinkB;

  function preload(){

    groundImage = loadAnimation("background0.png");
    redImage = loadAnimation("red_balloon0.png");
    blueImage = loadAnimation("blue_balloon0.png");
    greenImage = loadAnimation("green_balloon0.png");
    pinkImage = loadAnimation("pink_balloon0.png");
    bowImage =loadAnimation("bow0.png");  
    arrowImage = loadAnimation("arrow0.png");   

  }

  function setup() {  

    createCanvas(600, 600);
    ground = createSprite(0,0,600,600);
    ground.addAnimation("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    ground.scale = 3;

    bow = createSprite(560,300,20,100);
    bow.addAnimation("bow0.png",bowImage);

    balloons = new Group();
    
    arrowGroup = new Group();
    
    redB = new Group();
    
    blueB = new Group();
    
    greenB = new Group();
    
    pinkB = new Group();

    score = 0;
  }

    function draw() {
      //background(220);
      //display score here

       bow.y = mouseY;
       if (ground.x < 0) {
          ground.x = ground.width / 2;
        }

      var select_balloon = Math.round(random(1,4));
      if (World.frameCount % 80 == 0) {

       if (select_balloon == 1) 
      { 
        redBalloon();
      } 
        else if (select_balloon == 2) {
          greenBalloon(); 
        } 
        else if (select_balloon == 3) {
          blueBalloon(); 
        } 
        else {
          pinkBalloon(); 
        } 
      }

       if(arrowGroup.isTouching(redB)){
        redB.destroyEach();
        arrowGroup.destroyEach();
        score = score + 2;
      }

      if(arrowGroup.isTouching(blueB)){
        blueB.destroyEach();
        arrowGroup.destroyEach();
        score = score + 3;
      }

      if(arrowGroup.isTouching(greenB)){
          greenB.destroyEach();
          arrowGroup.destroyEach();
          score = score + 5;
      }

      if(arrowGroup.isTouching(pinkB)){
        pinkB.destroyEach();
        arrowGroup.destroyEach();
        score = score + 1;
      }

        if(keyDown("space")){
          createarrow();
          arrow.y = bow.y;
          //row.addImage(arrowImage);
          arrow.addAnimation("pink_balloon0.png",arrowImage);
        }
        drawSprites();
      text("Score : "+ score,270,30);
      textSize(20);

    }

  function createarrow(){
    
    arrow = createSprite(340,bow.y,10,10);  
    arrow.scale = 0.5;
    arrow.velocityX = -4;
    arrow.lifetime = 150;
    arrow.setCollider("rectangle",0,0,2,3);
    
    //arrow.debug = true;
    arrowGroup.add(arrow);
    }

  function redBalloon() {
    var redballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
    redballoon.addAnimation("redImage",redImage);
    redballoon.velocityX = 4 ;
    redballoon.lifetime = 150;
    redballoon.scale = 0.1; 
    redballoon.lifetime = 150; 
    redB.add(redballoon); 
  }

  function blueBalloon() {
    var blueballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
    blueballoon.addAnimation("blueImage",blueImage);
    blueballoon.velocityX = 4 ;
    blueballoon.lifetime = 150;
    blueballoon.scale = 0.1; 
    blueballoon.lifetime = 150; 
    blueB.add(blueballoon); 
  }

  function greenBalloon() {
    var greenballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
    greenballoon.addAnimation("greenImage",greenImage);
    greenballoon.velocityX = 4 ;
    greenballoon.lifetime = 150;
    greenballoon.scale = 0.1; 
    greenballoon.lifetime = 150; 
    greenB.add(greenballoon); 
  }

  function pinkBalloon() {
    var pinkballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
    pinkballoon.addAnimation("pinkImage",pinkImage);
    pinkballoon.velocityX = 4 ;
    pinkballoon.lifetime = 150;
    pinkballoon.scale = 1; 
    pinkballoon.lifetime = 150; 
    pinkB.add(pinkballoon); 
  }