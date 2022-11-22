var canvas = document.getElementById("greece");
var context = canvas.getContext("2d");
context.beginPath();

posX = 0;
posY = 100;

hour = 0;
bg_color = 'lightblue'

function draw()
{
	context.clearRect(0, 0, 800, 600);
	context.beginPath();

	context.fillStyle = bg_color;
	context.fillRect(0, 0, 800, 600);
	context.fill();

	context.fillStyle = "black";
	context.font = "30px Arial";
	hour_round = Math.round(hour)
	context.fillText(hour_round, 30, 50)

	context.fillStyle = "yellow";
	context.arc(posX, 100, 50, 0, Math.PI*2);

	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.arc(posX, 100, 50, 0, Math.PI*2);
	context.stroke();

	context.fill();

}

function update()
{
	hour = hour + 0.5;
	if(hour < 100)
	{
		bg_color = 'red'
	}

	if(hour > 100 && hour < 200)
	{
		bg_color = 'green'
	}

	if(hour > 200 && hour < 300)
	{
		bg_color = 'yellow'
	}

		if(hour > 300 && hour < 400)
	{
		bg_color = 'darkblue'
	}

	if(hour > 400 && hour < 500)
	{
		bg_color = 'purple'
	}

	if(hour > 500 && hour < 600)
	{
		bg_color = 'black'
	}

	if(hour > 600 && hour < 700)
	{
		bg_color = 'grey'
	}

	if(hour > 700 && hour < 800)
	{
		bg_color = 'white'
	}

	if(hour > 800)
	{
		hour = 0
		posX = 0
	}

	posX = posX + 0.5;

	draw();
	setTimeout(update,10);
}

update();