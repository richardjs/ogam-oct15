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

function pool()
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

function maze()
{
	//I am subtracting Y values from 1480 to avoid having to convert from Inkscape manually
	new Car(860, 1480 - 620, {angle:deg(-90)});

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
	
	//button
	new Button(1340, 1480 - 380, 25,
		//gate
		new Wall(980, 1480 - 1100, 200, 40, {image:IMAGE_GATE04, angle:deg(90)}), false,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(140, 1480 - 140, 25,
		//gate
		new Wall(980, 1480 - 1100, 200, 40, {image:IMAGE_GATE04, angle:deg(90)}), false,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	new FinishLine(860, 1480 - 1100, 200, 200);
	
	mapImage = document.getElementById('IMAGE_MAP04');
	backgroundColor = '#784421';
}

function backtrack()
{
	//I am subtracting Y values from 1640 to avoid having to convert from Inkscape manually
	new Car(120, 1640 - 1000, {angle:deg(-90)});
	
	//map borders
	new Wall(-30, 1640 - 820, 100, 1640);
	new Wall(510, 1640 - 1670, 1020, 100);
	new Wall(1050, 1640 - 820, 100, 1640);
	new Wall(510, 1640 + 30, 1020, 100);
	
	//interior walls
	new Wall(150, 1640 - 640, 300, 40);
	new Wall(280, 1640 - 820, 120, 1110);
	new Wall(506, 1640 - 820, 500, 120);
	new Wall(281.5, 1640 - 1381, 35, 80);
	new Wall(761, 1640 - 820, 80, 34);
	new Wall(281.5, 1640 - 260, 35, 80);
	new WallCircle(265, 1640 - 1376, 45);
	new WallCircle(295, 1640 - 1376, 45);
	new WallCircle(756, 1640 - 835, 45);
	new WallCircle(756, 1640 - 805, 45);
	new WallCircle(295, 1640 - 265, 45);
	new WallCircle(265, 1640 - 265, 45);
	
	new Wall(640, 1640 - 266, 200, 500);
	new Wall(735, 1640 - 1150, 300, 140);
	new WallCircle(585, 1640 - 516, 45);
	
	new Wall(640, 1640 - 1375, 200, 500);
	new Wall(735, 1640 - 491, 300, 140);
	new WallCircle(585, 1640 - 1125, 45);
	
	//round corners
	new Wall(158, 1640 - 1637, 100, 50, {angle: deg(-15)});
	new Wall(120, 1640 - 1623, 100, 50, {angle: deg(-30)});
	new Wall(70, 1640 - 1589, 100, 50, {angle: deg(-45)});
	new Wall(20, 1640 - 1525, 100, 50, {angle: deg(-60)});
	new Wall(4, 1640 - 1485, 100, 50, {angle: deg(-75)});
	
	new Wall(402, 1640 - 1637, 100, 50, {angle: deg(15)});
	new Wall(440, 1640 - 1623, 100, 50, {angle: deg(30)});
	new Wall(490, 1640 - 1589, 100, 50, {angle: deg(45)});
	new Wall(540, 1640 - 1525, 100, 50, {angle: deg(60)});
	new Wall(556, 1640 - 1485, 100, 50, {angle: deg(75)});
	
	new Wall(478, 1640 - 863, 100, 50, {angle: deg(15)});
	new Wall(440, 1640 - 877, 100, 50, {angle: deg(30)});
	new Wall(390, 1640 - 911, 100, 50, {angle: deg(45)});
	new Wall(340, 1640 - 975, 100, 50, {angle: deg(60)});
	new Wall(324, 1640 - 1015, 100, 50, {angle: deg(75)});
	
	new Wall(862, 1640 - 1097, 100, 50, {angle: deg(15)});
	new Wall(900, 1640 - 1083, 100, 50, {angle: deg(30)});
	new Wall(950, 1640 - 1049, 100, 50, {angle: deg(45)});
	new Wall(1000, 1640 - 985, 100, 50, {angle: deg(60)});
	new Wall(1016, 1640 - 945, 100, 50, {angle: deg(75)});
	
	new Wall(862, 1640 - 544, 100, 50, {angle: deg(-15)});
	new Wall(900, 1640 - 558, 100, 50, {angle: deg(-30)});
	new Wall(950, 1640 - 592, 100, 50, {angle: deg(-45)});
	new Wall(1000, 1640 - 656, 100, 50, {angle: deg(-60)});
	new Wall(1016, 1640 - 696, 100, 50, {angle: deg(-75)});
	
	new Wall(478, 1640 - 777, 100, 50, {angle: deg(-15)});
	new Wall(440, 1640 - 763, 100, 50, {angle: deg(-30)});
	new Wall(390, 1640 - 729, 100, 50, {angle: deg(-45)});
	new Wall(340, 1640 - 665, 100, 50, {angle: deg(-60)});
	new Wall(324, 1640 - 625, 100, 50, {angle: deg(-75)});
	
	new Wall(401, 1640 - 3, 100, 50, {angle: deg(-15)});
	new Wall(439, 1640 - 17, 100, 50, {angle: deg(-30)});
	new Wall(489, 1640 - 51, 100, 50, {angle: deg(-45)});
	new Wall(539, 1640 - 115, 100, 50, {angle: deg(-60)});
	new Wall(555, 1640 - 155, 100, 50, {angle: deg(-75)});
	
	new Wall(158, 1640 - 3, 100, 50, {angle: deg(15)});
	new Wall(120, 1640 - 17, 100, 50, {angle: deg(30)});
	new Wall(70, 1640 - 51, 100, 50, {angle: deg(45)});
	new Wall(20, 1640 - 115, 100, 50, {angle: deg(60)});
	new Wall(4, 1640 - 155, 100, 50, {angle: deg(75)});
	
	//Button
	new Button(120, 1640 - 525, 25,
		//gate
		new Wall(120, 1640 - 880, 200, 40, {image: IMAGE_GATE04}), false,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	new FinishLine(120, 1640 - 760, 200, 200);
	
	mapImage = document.getElementById('IMAGE_MAP05');
	backgroundColor = '#784421';
}

function crate()
{
	//I am subtracting Y values from 1500 to avoid having to convert from Inkscape manually
	new Car(250, 1500 - 120, {angle:deg(-90)});
	
	//walls
	new Wall(244, 1500 + 30, 200, 100);
	new Wall(396, 1500 - 11, 200, 100, {angle:deg(150)});
	new Wall(500, 1500 - 123, 200, 100, {angle:deg(300)});
	new Wall(530, 1500 - 253, 100, 200);
	new Wall(484, 1500 - 405, 200, 100, {angle:deg(-300)});
	new Wall(424, 1500 - 473, 200, 100, {angle:deg(-150)});
	new Wall(362, 1500 - 660, 100, 360);
	new Wall(424, 1500 - 847, 200, 100, {angle:deg(150)});
	new Wall(494, 1500 - 933, 200, 100, {angle:deg(300)});
	new Wall(530, 1500 - 1069, 100, 200);
	new Wall(492, 1500 - 1211, 200, 100, {angle:deg(-300)});
	new Wall(423, 1500 - 1293, 200, 100, {angle:deg(-150)});
	new Wall(361, 1500 - 1399, 100, 200);
	new Wall(250, 1500 - 1505, 160, 50);
	new Wall(139, 1500 - 1399, 100, 200);
	new Wall(77, 1500 - 1293, 200, 100, {angle:deg(150)});
	new Wall(6, 1500 - 1207, 200, 100, {angle:deg(300)});
	new Wall(-30, 1500 - 1069, 100, 200);
	new Wall(4, 1500 - 936, 200, 100, {angle:deg(-300)});
	new Wall(76, 1500 - 847, 200, 100, {angle:deg(-150)});
	new Wall(138, 1500 - 660, 100, 360);
	new Wall(76, 1500 - 473, 200, 100, {angle:deg(150)});
	new Wall(16, 1500 - 405, 200, 100, {angle:deg(300)});
	new Wall(-30, 1500 - 253, 100, 200);
	new Wall(8, 1500 - 109, 200, 100, {angle:deg(-300)});
	new Wall(100, 1500 - 13, 200, 100, {angle:deg(-150)});
	
	//crate
	new Wall(250, 1500 - 1070, 60, 60, {isStatic:false, frictionAir:0.1, density:0.02, image:IMAGE_CRATE});
	
	//Button
	new Button(250, 1500 - 250, 25,
		//gate
		new Wall(250, 1500 - 1319, 124, 40, {image: IMAGE_GATE03}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	new FinishLine(250, 1500 - 1409, 124, 140);
	
	mapImage = document.getElementById('IMAGE_MAP06');
	backgroundColor = '#784421';
}

function island()
{
	//I am subtracting Y values from 1500 to avoid having to convert from Inkscape manually
	new Car(170, 1500 - 170, {frictionAir:0.2});
	
	//islands
	new FrictionZoneCircle(170, 1500 - 170, 150, 0.08);
	new FrictionZoneCircle(170, 1500 - 170, 110, 0.05);
	
	new FrictionZoneCircle(310, 1500 - 390, 51, 0.08);
	new FrictionZoneCircle(310, 1500 - 390, 39, 0.05);
	
	new FrictionZoneCircle(520, 1500 - 260, 100, 0.08);
	new FrictionZoneCircle(520, 1500 - 260, 75, 0.05);
	
	new FrictionZoneCircle(760, 1500 - 160, 60, 0.08);
	new FrictionZoneCircle(760, 1500 - 160, 45, 0.05);
	
	new FrictionZoneCircle(820, 1500 - 400, 120, 0.08);
	new FrictionZoneCircle(820, 1500 - 400, 90, 0.05);
	
	new FrictionZoneCircle(1075, 1500 - 425, 75, 0.08);
	new FrictionZoneCircle(1075.5, 1500 - 425.5, 57.5, 0.05);
	
	new FrictionZoneCircle(1055, 1500 - 625, 75, 0.08);
	new FrictionZoneCircle(1055.5, 1500 - 625.5, 57.5, 0.05);
	
	new FrictionZoneCircle(1290, 1500 - 590, 100, 0.08);
	new FrictionZoneCircle(1290, 1500 - 590, 75, 0.05);
	
	new FrictionZoneCircle(1150, 1500 - 880, 130, 0.08);
	new FrictionZoneCircle(1150, 1500 - 880, 100, 0.05);
	
	new FrictionZoneCircle(1290, 1500 - 1150, 51, 0.08);
	new FrictionZoneCircle(1290, 1500 - 1150, 39, 0.05);
	
	new FrictionZoneCircle(910, 1500 - 890, 51, 0.08);
	new FrictionZoneCircle(910, 1500 - 890, 39, 0.05);
	
	new FrictionZoneCircle(950, 1500 - 1100, 110, 0.08);
	new FrictionZoneCircle(950, 1500 - 1100, 85, 0.05);
	
	new FrictionZoneCircle(780, 1500 - 1290, 90, 0.08);
	new FrictionZoneCircle(780, 1500 - 1290, 70, 0.05);
	
	new FrictionZoneCircle(620, 1500 - 1080, 60, 0.08);
	new FrictionZoneCircle(620, 1500 - 1080, 45, 0.05);
	
	new FrictionZoneCircle(510, 1500 - 1340, 140, 0.08);
	new FrictionZoneCircle(510, 1500 - 1340, 105, 0.05);
	
	new FinishLine(510, 1500 - 1340, 120, 120);
	
	mapImage = document.getElementById('IMAGE_MAP07');
	backgroundColor = '#0000FF';
}

function hockey()
{
	//I am subtracting Y values from 620 to avoid having to convert from Inkscape manually
	new Car(610, 620 - 255, {frictionAir:0.01});
	
	//walls
	new Wall(-40, 620 - 330, 100, 700);
	new Wall(200, 620 - 576, 420, 130);
	new Wall(520, 620 - 521, 420, 20);
	new Wall(610, 620 - 675, 420, 130);
	new Wall(1020, 620 - 576, 420, 130);
	new Wall(1260, 620 - 330, 100, 700);
	new Wall(600, 620 + 50, 1200, 100);
	
	//corners
	new Wall(1144, 620 - 522, 60, 30, {angle:deg(10)});
	new Wall(1158, 620 - 516, 60, 30, {angle:deg(20)});
	new Wall(1176, 620 - 506, 60, 30, {angle:deg(30)});
	new Wall(1186, 620 - 498, 60, 30, {angle:deg(40)});
	new Wall(1198, 620 - 486, 60, 30, {angle:deg(50)});
	new Wall(1212, 620 - 466, 60, 30, {angle:deg(60)});
	new Wall(1220, 620 - 448, 60, 30, {angle:deg(70)});
	new Wall(1224, 620 - 432, 60, 30, {angle:deg(80)});
	
	new Wall(1144, 620 + 11, 60, 30, {angle:deg(-10)});
	new Wall(1158, 620 + 5, 60, 30, {angle:deg(-20)});
	new Wall(1176, 620 - 5, 60, 30, {angle:deg(-30)});
	new Wall(1186, 620 - 13, 60, 30, {angle:deg(-40)});
	new Wall(1198, 620 - 25, 60, 30, {angle:deg(-50)});
	new Wall(1212, 620 - 45, 60, 30, {angle:deg(-60)});
	new Wall(1220, 620 - 63, 60, 30, {angle:deg(-70)});
	new Wall(1224, 620 - 79, 60, 30, {angle:deg(-80)});
	
	new Wall(78, 620 + 11, 60, 30, {angle:deg(10)});
	new Wall(63, 620 + 5, 60, 30, {angle:deg(20)});
	new Wall(45, 620 - 5, 60, 30, {angle:deg(30)});
	new Wall(35, 620 - 13, 60, 30, {angle:deg(40)});
	new Wall(23, 620 - 25, 60, 30, {angle:deg(50)});
	new Wall(9, 620 - 45, 60, 30, {angle:deg(60)});
	new Wall(1, 620 - 63, 60, 30, {angle:deg(70)});
	new Wall(-3, 620 - 79, 60, 30, {angle:deg(80)});
	
	new Wall(77, 620 - 522, 60, 30, {angle:deg(-10)});
	new Wall(63, 620 - 516, 60, 30, {angle:deg(-20)});
	new Wall(45, 620 - 506, 60, 30, {angle:deg(-30)});
	new Wall(35, 620 - 498, 60, 30, {angle:deg(-40)});
	new Wall(23, 620 - 486, 60, 30, {angle:deg(-50)});
	new Wall(9, 620 - 466, 60, 30, {angle:deg(-60)});
	new Wall(1, 620 - 448, 60, 30, {angle:deg(-70)});
	new Wall(-3, 620 - 432, 60, 30, {angle:deg(-80)});
	
	//Buttons
	new Button(1178, 620 - 255, 25,
		//gate
		new Wall(770, 620 - 520, 80, 20, {image:IMAGE_GATE02}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	new Button(42, 620 - 255, 25,
		//gate
		new Wall(770, 620 - 520, 80, 20, {image:IMAGE_GATE02}), true,
		IMAGE_BUTTONUP, IMAGE_BUTTONDOWN
	);
	
	//pucks
	new WallCircle(610, 620 - 395, 20, {isStatic:false, color:'#1A1A1A', frictionAir:0.01});
	new WallCircle(610, 620 - 115, 20, {isStatic:false, color:'#1A1A1A', frictionAir:0.01});
	
	new FinishLine(475, 620 - 570, 130, 80);
	
	mapImage = document.getElementById('IMAGE_MAP08');
	backgroundColor = '#784421';
}