var socket;
var mySketches = [];
var r;
var g;
var b;
var a;

// socket = io.connect('https://canvas-online.herokuapp.com/'); 
socket = io.connect('http://192.168.88.23:3000');

var myDrawingSketch = function(p) {

	p.setup = function() {
<<<<<<< HEAD
		p.createCanvas(855, 200);
		p.background(225);
=======
		p.createCanvas(1284.09, 437.67);
		p.background(255);
>>>>>>> f0e91c14619e152c5a77a10d562afacb4d07fce2

		socket.on('mouse', p.newDrawing);
	}

	p.newDrawing = function(data){
		if(data.index === p.index) {
			p.noStroke();
			p.fill(255,0,1);
			p.rect(data.x, data.y, 5, 5);
		}
	}

	p.mouseDragged = function() {

		console.log(p.mouseX + ',' + p.mouseY);
		
		p.data = {
			index: p.index,
			x: p.mouseX,
			y: p.mouseY
		}

		socket.emit('mouse', p.data); 

		r = random(255); 
  		g = random(100,200); 
  		b = random(100);
  		a = random(200,255); 

		p.noStroke();
		p.fill(r,g,b,a);
		p.rect(p.mouseX, p.mouseY, 5, 5);
	}

	p.draw = function(){
		// p.background(255);
	}
}

for(var i = 0; i < 2; i++) {
	mySketches[i] = new p5(myDrawingSketch);
	mySketches[i].index = i;
}

