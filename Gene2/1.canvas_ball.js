var __DEBUG__ = false;
var Canvas = null;
var ctx = null;
var G_Items = new function(){
	this.objs = {};
	this.__serial__ = 0;
	this.count = 0;
	this.add = function(o){
		if(typeof o.Update == 'function' && typeof o.Render == 'function'){
			var key = 'k_' + this.__serial__;
			this.objs[ key ] = o;
			o.__GLOBAL_KEY__ = key;
			o.del = function(){
				G_Items.count--;
				delete G_Items.objs[ o.__GLOBAL_KEY__ ];
			};
			this.count++;
			this.__serial__++;
		}
	};
	return this;
};

var FrameCounter = new function(){
	this.lastfps = 0;
	this.lastTime = 0;
	this.framecount = 0;
	this.Update = function(){
		this.framecount++;
		var now = new Date();
		if(this.lastTime + 1000 < now.getTime() ){
			this.lastfps = this.framecount;
			this.framecount = 0;
			this.lastTime = now.getTime();
		}
	};
	this.Render = function(){
		if(__DEBUG__){
			ctx.save();
			ctx.fillStyle = '#ffffff';
			ctx.font = "14px Arial";
			ctx.textAlign = 'left';
			ctx.textBaseLine = 'top';
			ctx.fillText('FPS : ' + this.lastfps, 10, 10);
			ctx.restore();
		}
	};
	return this;
};

window.addEventListener("keydown", function(e){
	if(e.keyCode==27){
		__DEBUG__ = !__DEBUG__;
	}
}, false);
window.addEventListener("load", function(){
	Canvas = document.getElementById('id_myCanvas');
	ctx = Canvas.getContext('2d');
	
	G_Items.add(FrameCounter);
	
	var b1 = new C_BALL(); b1.ptr.cx = 3; b1.shape = 'box'; b1.color = 'green'; b1.lineWidth = 1;
	var b2 = new C_BALL(); b2.shape = 'ball'; b2.color = 'red'; b2.lineWidth = 1;
	
	
	G_Items.add(b1);
	G_Items.add(b2);
	//console.log(G_Items.count);
	//b2.del();
	console.log(G_Items.objs);
	
	setInterval(function(){
		// 1. 캔버스를 지운다
		//ctx.fillStyle = '#808080';
		//ctx.fillRect(0, 0, Canvas.width, Canvas.height);
		ctx.clearRect(0, 0, Canvas.width, Canvas.height);
		
		// 	  2. 위치를 계산한다         --> xxxx.Update();
		//b1.Update(); b1.Render();
		// 	  3. 해당위치에 그림을 그린다. --> xxxx.Render();
		
		//b2.Update(); b2.Render();
		// 4. 여러개의 그림이 있으면 2, 3을 반복한다.
		for(var k in G_Items.objs){
			G_Items.objs[ k ].Update();
		}

		for(var k in G_Items.objs){
			G_Items.objs[ k ].Render();
		}
		
	}, 1000/60);
	
}, false);


var C_BALL = function(){
	this.size = 50;
	this.shape = 'circle';
	this.color = '#ff0000';
	this.lineWidth = 5;
	this.ptr = {
		x: 30, y: 30, cx: 5, cy: 5
	};
	this.Update = function(){
		with(this.ptr){
			x += cx;
			if(x<this.size/2 || x > Canvas.width - this.size/2){
				x -= cx;
				cx *= -1;
			}
			y += cy;
			if(y<this.size/2 || y > Canvas.height - this.size/2){
				y -= cy;
				cy *= -1;
			}
		}
		//console.log(this.ptr);
	};
	this.Render = function(){
		switch(this.shape){
			case 'circle':
				ctx.strokeStyle = this.color;
				ctx.lineWidth = this.lineWidth;
				ctx.beginPath();
				ctx.arc(this.ptr.x, this.ptr.y, this.size/2, 0, 2*Math.PI);
				ctx.stroke();
				break;
			case 'ball':
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.ptr.x, this.ptr.y, this.size/2, 0, 2*Math.PI);
				ctx.fill();
				break;
			case 'box':
				ctx.fillStyle = this.color;
				ctx.fillRect(this.ptr.x - this.size/2, this.ptr.y - this.size/2, this.size, this.size);
				break;
			case 'rect':
				ctx.strokeStyle = this.color;
				ctx.strokeRect(this.ptr.x - this.size/2, this.ptr.y - this.size/2, this.size, this.size);
				break;
		}
	};
};