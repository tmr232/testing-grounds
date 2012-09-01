$(document).ready(function() {
    			var canvas = $("#canvas")[0];
				var ctx = canvas.getContext("2d");
				var context = ctx
				ctx.fillStyle = "rgb(200,0,0)";  
        		ctx.fillRect (10, 10, 55, 50);  
                
                
                context.beginPath();
                context.moveTo(50,60);
                context.lineTo(100,100);
                context.strokeStyle = 'blue';
                context.lineWidth = 50;
                context.lineCap = 'round';
                context.stroke();
                
                context.beginPath();
                context.moveTo(80,90);
                context.lineTo(10,300);
                context.lineWidth = 5;
                context.strokeStyle = 'salmon';
                context.lineCap = 'square';
                context.stroke();
                
                context.beginPath();
        context.moveTo(100, 20);

        // line 1
        context.lineTo(200, 160);

        // quadratic curve
        context.quadraticCurveTo(230, 200, 250, 120);

        // bezier curve
        context.bezierCurveTo(290, -40, 300, 200, 400, 150);

        // line 2
        context.lineTo(500, 90);

        context.lineWidth = 5;
        context.strokeStyle = "blue";
        context.stroke();
        
        context.strokeStyle = 'rgba(123,234,213,0.5)';
        
        // set line width for all lines
        context.lineWidth = 25;

        // miter line join (left)
        context.beginPath();
        context.moveTo(99, 150);
        context.lineTo(149, 50);
        context.lineTo(199, 150);
        context.lineJoin = "miter";
        context.stroke();

        // round line join (middle)
        context.beginPath();
        context.moveTo(239, 150);
        context.lineTo(289, 50);
        context.lineTo(339, 150);
        context.lineJoin = "round";
        context.stroke();

        // bevel line join (right)
        context.beginPath();
        context.moveTo(379, 150);
        context.lineTo(429, 50);
        context.lineTo(479, 150);
        context.lineJoin = "bevel";
        context.stroke();
        
        // begin custom shape
        context.beginPath();
        context.moveTo(170, 80);
        context.bezierCurveTo(130, 100, 130, 150, 230, 150);
        context.bezierCurveTo(250, 180, 320, 180, 340, 150);
        context.bezierCurveTo(420, 150, 420, 120, 390, 100);
        context.bezierCurveTo(430, 40, 370, 30, 340, 50);
        context.bezierCurveTo(320, 5, 250, 20, 250, 50);
        context.bezierCurveTo(200, 5, 150, 20, 170, 80);

        // complete custom shape
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = "rgba(12,32,140,0.3)";
        context.fill();
        context.strokeStyle = "rgba(200,40,50,0.4)";
        context.stroke();
                
                //http://www.html5canvastutorials.com/tutorials/html5-canvas-line-color/
			});