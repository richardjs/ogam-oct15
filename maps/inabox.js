/*
function inabox(){
	new Car(0, 0);
	new Wall(-500, 0, 10, 1000);
	new Wall(500, 0, 10, 1000);
	new Wall(0, -500, 1000, 10);
	new Wall(0, 500, 1000, 10);
	new FinishLine(400, 400, 200, 200);
}
*/
/*
function inabox(){
	new Car(0, 0);
	new Wall(-200, 0, 10, 400);
	new Wall(200, -20, 10, 360);
	new Wall(0, -200, 400, 10);
	new Wall(-20, 200, 360, 10);
	
	//tunnel
	new Wall(370, 410, 10, 600, {angle:Math.PI/-4});
	new Wall(410, 370, 10, 600, {angle:Math.PI/-4});
	
	//exit
	new Wall(580, 800, 10, 360);
	new Wall(980, 780, 10, 400);
	new Wall(800, 580, 360, 10);
	new Wall(780, 980, 400, 10);
	
	new FinishLine(900, 900, 150, 150);
}
*/
/*
function inabox(){
	new Car(100, 100);
	
	new Wall(2000, -100, 4200, 20);
	new Wall(-100, 2000, 20, 4200);
	new Wall(4200, 2000, 20, 4200);
	new Wall(2000, 4000, 4200, 20);
	
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j < 10; j++)
		{
			new Wall(400 * i, 400 * j, 100, 100);
		}
	}
	
	new FinishLine(4000, 4000, 200, 200);
}
*/
function inabox()
{
	//I am subtracting Y values from 1024 to avoid having to convert from InkScape manually
	new Car(150, 1024 - 150, {angle: -Math.PI/2});
	
	//border walls
	new Wall(-25, 1024 - 512, 150, 1024); //left
	new Wall(1045, 1024 - 512, 150, 1024); //right
	new Wall(512, 1024 + 25, 1024, 150); //bottom
	new Wall(512, 1024 - 1045, 1024, 150); //top
	
	//interior walls
	new Wall(275, 1024 - 275, 50, 550);
	new Wall(400, 1024 - 525, 300, 50);
	new Wall(650, 1024 - 275, 300, 50);
	new Wall(775, 1024 - 525, 50, 550);
	new Wall(400, 1024 - 775, 800, 50);
	
	new FinishLine(135, 1024 - 885, 170, 170);

	mapImage = document.getElementById('IMAGE_MAP01');
	backgroundColor = 'rgb(120, 68, 33)';
}
