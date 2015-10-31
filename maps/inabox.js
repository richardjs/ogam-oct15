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
/*
function inabox()
{
	//I am subtracting Y values from 1024 to avoid having to convert from InkScape manually
	new Car(150, 1024 - 150, {angle: deg(-90)});
	
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
	backgroundColor = '#784421';
}
*/
/*
*/

function inabox()
{
	//I am subtracting Y values from 1240 to avoid having to convert from Inkscape manually
	new Car(300, 1240 - 250, {angle:deg(-90)});
	
	//table edges
	new Wall(300, 1240 - 35, 390, 70, {restitution:0.5});
	new Wall(35, 1240 - 305, 70, 400, {restitution:0.5});
	new Wall(565, 1240 - 305, 70, 400, {restitution:0.5});
	new Wall(35, 1240 - 755, 70, 400, {restitution:0.5});
	new Wall(565, 1240 - 755, 70, 400, {restitution:0.5});
	new Wall(178, 1240 - 1115, 146, 250, {restitution:0.5});
	new Wall(422, 1240 - 1115, 146, 250, {restitution:0.5});
	new Wall(300, 1240 - 1210, 200, 60);
	
	//buttons
	new Button(45, 1240 - 1015, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(555, 1240 - 1015, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(45, 1240 - 530, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(555, 1240 - 530, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(45, 1240 - 45, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(555, 1240 - 45, 25,
		//gate
		new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5, image:IMAGE_GATE01}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	//balls
	new WallCircle(260, 1240 - 820, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	new WallCircle(300, 1240 - 820, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	new WallCircle(340, 1240 - 820, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	new WallCircle(280, 1240 - 786, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	new WallCircle(320, 1240 - 786, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	new WallCircle(300, 1240 - 752, 20, {isStatic:false, restitution:0.8, frictionAir:0.002, color:"#CCCCFF"});
	
	//pocket friction zones
	new FrictionZoneCircle(45, 1240 - 1015, 25, 0.1);
	new FrictionZoneCircle(555, 1240 - 1015, 25, 0.1);
	new FrictionZoneCircle(45, 1240 - 530, 25, 0.1);
	new FrictionZoneCircle(555, 1240 - 530, 25, 0.1);
	new FrictionZoneCircle(45, 1240 - 45, 25, 0.1);
	new FrictionZoneCircle(555, 1240 - 45, 25, 0.1);
	
	//side pockets
	new Wall(16, 1240 - 558, 30, 50, {angle:deg(45)});
	new Wall(5, 1240 - 530, 30, 50);
	new Wall(16, 1240 - 502, 30, 50, {angle:deg(-45)});
	
	new Wall(584, 1240 - 558, 30, 50, {angle:deg(-45)});
	new Wall(595, 1240 - 530, 30, 50);
	new Wall(584, 1240 - 502, 30, 50, {angle:deg(45)});
	
	//corner pockets
	new Wall(618, 1240 - 88, 150, 100, {angle:deg(45)});
	new Wall(595, 1240 - 45, 30, 50);
	new Wall(583, 1240 - 17, 30, 50, {angle:deg(45)});
	new Wall(556, 1240 - 5, 50, 30);
	new Wall(512, 1240 + 18, 150, 100, {angle:deg(45)});
	
	new Wall(88, 1240 + 18, 150, 100, {angle:deg(-45)});
	new Wall(45, 1240 - 5, 50, 30);
	new Wall(17, 1240 - 17, 30, 50, {angle:deg(-45)});
	new Wall(5, 1240 - 45, 30, 50);
	new Wall(-18, 1240 - 88, 150, 100, {angle:deg(-45)});
	
	new Wall(-18, 1240 - 972, 150, 100, {angle:deg(45)});
	new Wall(5, 1240 - 1015, 30, 50);
	new Wall(17, 1240 - 1043, 30, 50, {angle:deg(45)});
	new Wall(45, 1240 - 1055, 50, 30);
	new Wall(88, 1240 - 1078, 150, 100, {angle:deg(45)});
	
	new Wall(512, 1240 - 1078, 150, 100, {angle:deg(-45)});
	new Wall(556, 1240 - 1055, 50, 30);
	new Wall(583, 1240 - 1043, 30, 50, {angle:deg(-45)});
	new Wall(595, 1240 - 1015, 30, 50);
	new Wall(618, 1240 - 972, 150, 100, {angle:deg(-45)});
	
	new FinishLine(300, 1240 - 1120, 100, 120);
	
	mapImage = document.getElementById('IMAGE_MAP03');
	backgroundColor = '#93ACA7';
}

/*
function inabox()
{
	//I am subtracting Y values from 1480 to avoid having to convert from Inkscape manually
	new Car(140, 1480 - 140, {angle:deg(-90)});

	//maze borders
	new Wall(-10, 1480 - 740, 100, 1480);
	new Wall(740, 1480 + 10, 1480, 100);
	new Wall(1490, 1480 - 740, 100, 1480);
	new Wall(740, 1480 - 1490, 1480, 100);
	
	//interior walls
	new Wall(260, 1480 - 260, 40, 520);
	new Wall(260, 1480 - 740, 520, 40);
	new Wall(500, 1480 - 500, 40, 520);
	new Wall(740, 1480 - 260, 40, 520);
	new Wall(860, 1480 - 500, 280, 40);
	new Wall(980, 1480 - 620, 40, 280);
	new Wall(1100, 1480 - 740, 280, 40);
	new Wall(1100, 1480 - 260, 280, 40);
	new Wall(1220, 1480 - 380, 40, 280);
	new Wall(1340, 1480 - 500, 280, 40);
	
	new Wall(500, 1480 - 1340, 40, 280);
	new Wall(260, 1480 - 1100, 40, 280);
	new Wall(860, 1480 - 980, 1240, 40);
	new Wall(740, 1480 - 1100, 40, 280);
	new Wall(980, 1480 - 1220, 520, 40);
	
	//button (TODO)
	new Button(1340, 1480 - 380, 25,
		//gate
		new Wall(980, 1480 - 1100, 40, 200, {color: '#784421'}), false,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	new FinishLine(860, 1480 - 1100, 200, 200);
	
	mapImage = document.getElementById('IMAGE_MAP04');
	backgroundColor = '#784421';
}
*/
