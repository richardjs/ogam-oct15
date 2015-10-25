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
function inabox()
{
	//I am subtracting Y values from 4000 to avoid having to convert from Inkscape manually
	new Car(200, 4000 - 200, {angle:deg(-90)});
	
	//border walls
	new Wall(0, 4000 - 2000, 100, 4000);
	new Wall(1000, 4000 - 0, 2000, 100);
	new Wall(2010, 4000 - 2000, 100, 4000);
	new Wall(1000, 4000 - 4014, 2000, 100);
	
	//interior walls
	new Wall(715, 4000 - 217.5, 730, 335);
	new Wall(714, 4000 - 357.5, 630, 135);
	
	new Wall(830, 4000 - 904, 1560, 360);
	new Wall(1520, 4000 - 716.5, 280, 653);
	new Wall(1519, 4000 - 399, 184, 100);
	
	new Wall(1357, 4000 - 1517, 1280, 266);
	new Wall(565, 4000 - 1434, 350, 100);
	new Wall(747, 4000 - 1815, 60, 360);
	
	new Wall(201, 4000 - 1833, 338, 100);
	new Wall(213, 4000 - 2146, 410, 628);
	new Wall(580, 4000 - 2392, 400, 136);
	new Wall(1187.5, 4000 - 2562.5, 847, 477);
	new Wall(1368.5, 4000 - 2375, 585, 752);
	new Wall(1368.5, 4000 - 1999, 485, 100);
	new Wall(764, 4000 - 2638, 50, 276);
	
	new Wall(215, 4000 - 2836.5, 32, 405);
	new Wall(395, 4000 - 2625, 342, 32);
	new Wall(575, 4000 - 2836.5, 32, 405);
	new Wall(1004, 4000 - 2995, 888, 92);
	new Wall(1525, 4000 - 3132.5, 172, 367);
	new Wall(1611, 4000 - 3145, 100, 292);
	new Wall(1537.5, 4000 - 3316, 147, 50);
	new Wall(835, 4000 - 3166, 552, 300);
	new Wall(835, 4000 - 3316, 502, 50);
	
	new Wall(395, 4000 - 3013.5, 32, 405);
	new Wall(220.5, 4000 - 3437.5, 381, 455);
	new Wall(995.5, 4000 - 3577, 1231, 176);
	new Wall(1275, 4000 - 3413.5, 32, 405);
	new Wall(1611, 4000 - 3577, 100, 76);
	
	//interior corners
	new WallCircle(399, 4000 - 375, 50);
	new WallCircle(1031, 4000 - 375, 50);
	
	new WallCircle(1429, 4000 - 399, 50);
	new WallCircle(1611, 4000 - 399, 50);
	new WallCircle(1611, 4000 - 1035, 50);
	
	new WallCircle(391, 4000 - 1434, 50);
	new WallCircle(747, 4000 - 1994, 30);
	
	new WallCircle(368, 4000 - 1833, 50);
	new WallCircle(1126, 4000 - 1999, 50);
	new WallCircle(1611, 4000 - 1999, 50);
	new WallCircle(1611, 4000 - 2751, 50);
	new WallCircle(764, 4000 - 2776, 25);
	
	new WallCircle(215, 4000 - 3039, 16);
	new WallCircle(224, 4000 - 2634, 25);
	new WallCircle(566, 4000 - 2634, 25);
	new WallCircle(1611, 4000 - 2999, 50);
	new WallCircle(1611, 4000 - 3291, 50);
	new WallCircle(1464, 4000 - 3316, 25);
	new WallCircle(1086, 4000 - 3316, 25);
	new WallCircle(584, 4000 - 3316, 25);
	
	new WallCircle(395, 4000 - 2811, 16);
	new WallCircle(1275, 4000 - 3211, 16);
	new WallCircle(1611, 4000 - 3539, 50);
	new WallCircle(1611, 4000 - 3615, 50);
	
	//big exterior corners
	new Wall(110, 4000 - 714, 100, 50, {angle: deg(-15)});
	new Wall(68, 4000 - 694, 100, 50, {angle: deg(-30)});
	new Wall(30, 4000 - 662, 100, 50, {angle: deg(-45)});
	new Wall(2, 4000 - 624, 100, 50, {angle: deg(-60)});
	new Wall(-16, 4000 - 584, 100, 50, {angle: deg(-75)});
	
	new Wall(1220, 4000 - 714, 100, 50, {angle: deg(15)});
	new Wall(1262, 4000 - 694, 100, 50, {angle: deg(30)});
	new Wall(1300, 4000 - 662, 100, 50, {angle: deg(45)});
	new Wall(1328, 4000 - 624, 100, 50, {angle: deg(60)});
	new Wall(1346, 4000 - 584, 100, 50, {angle: deg(75)});
	
	new Wall(1140, 4000 - 10, 100, 50, {angle: deg(15)});
	new Wall(1098, 4000 - 30, 100, 50, {angle: deg(30)});
	new Wall(1060, 4000 - 62, 100, 50, {angle: deg(45)});
	new Wall(1032, 4000 - 100, 100, 50, {angle: deg(60)});
	new Wall(1014, 4000 - 140, 100, 50, {angle: deg(75)});
	
	new Wall(1800, 4000 - 10, 100, 50, {angle: deg(-15)});
	new Wall(1842, 4000 - 30, 100, 50, {angle: deg(-30)});
	new Wall(1880, 4000 - 62, 100, 50, {angle: deg(-45)});
	new Wall(1908, 4000 - 100, 100, 50, {angle: deg(-60)});
	new Wall(1926, 4000 - 140, 100, 50, {angle: deg(-75)});
	
	new Wall(1800, 4000 - 1374, 100, 50, {angle: deg(15)});
	new Wall(1842, 4000 - 1354, 100, 50, {angle: deg(30)});
	new Wall(1880, 4000 - 1322, 100, 50, {angle: deg(45)});
	new Wall(1908, 4000 - 1284, 100, 50, {angle: deg(60)});
	new Wall(1926, 4000 - 1244, 100, 50, {angle: deg(75)});
	
	new Wall(110, 4000 - 1044, 100, 50, {angle: deg(15)});
	new Wall(68, 4000 - 1064, 100, 50, {angle: deg(30)});
	new Wall(30, 4000 - 1096, 100, 50, {angle: deg(45)});
	new Wall(2, 4000 - 1134, 100, 50, {angle: deg(60)});
	new Wall(-16, 4000 - 1174, 100, 50, {angle: deg(75)});
	
	new Wall(109, 4000 - 1773, 100, 50, {angle: deg(-15)});
	new Wall(67, 4000 - 1753, 100, 50, {angle: deg(-30)});
	new Wall(29, 4000 - 1721, 100, 50, {angle: deg(-45)});
	new Wall(1, 4000 - 1683, 100, 50, {angle: deg(-60)});
	new Wall(-17, 4000 - 1643, 100, 50, {angle: deg(-75)});
	
	new Wall(557, 4000 - 1444, 100, 50, {angle: deg(-15)});
	new Wall(599, 4000 - 1464, 100, 50, {angle: deg(-30)});
	new Wall(637, 4000 - 1496, 100, 50, {angle: deg(-45)});
	new Wall(665, 4000 - 1534, 100, 50, {angle: deg(-60)});
	new Wall(683, 4000 - 1574, 100, 50, {angle: deg(-75)});
	
	new Wall(477, 4000 - 2314, 100, 50, {angle: deg(-15)});
	new Wall(435, 4000 - 2294, 100, 50, {angle: deg(-30)});
	new Wall(397, 4000 - 2262, 100, 50, {angle: deg(-45)});
	new Wall(369, 4000 - 2224, 100, 50, {angle: deg(-60)});
	new Wall(351, 4000 - 2184, 100, 50, {angle: deg(-75)});
	
	new Wall(917, 4000 - 2314, 100, 50, {angle: deg(15)});
	new Wall(959, 4000 - 2294, 100, 50, {angle: deg(30)});
	new Wall(997, 4000 - 2262, 100, 50, {angle: deg(45)});
	new Wall(1025, 4000 - 2224, 100, 50, {angle: deg(60)});
	new Wall(1043, 4000 - 2184, 100, 50, {angle: deg(75)});
	
	new Wall(837, 4000 - 1610, 100, 50, {angle: deg(15)});
	new Wall(795, 4000 - 1630, 100, 50, {angle: deg(30)});
	new Wall(757, 4000 - 1662, 100, 50, {angle: deg(45)});
	new Wall(729, 4000 - 1700, 100, 50, {angle: deg(60)});
	new Wall(711, 4000 - 1740, 100, 50, {angle: deg(75)});
	
	new Wall(1800, 4000 - 1610, 100, 50, {angle: deg(-15)});
	new Wall(1842, 4000 - 1630, 100, 50, {angle: deg(-30)});
	new Wall(1880, 4000 - 1662, 100, 50, {angle: deg(-45)});
	new Wall(1908, 4000 - 1700, 100, 50, {angle: deg(-60)});
	new Wall(1926, 4000 - 1740, 100, 50, {angle: deg(-75)});
	
	new Wall(1800, 4000 - 3954, 100, 50, {angle: deg(15)});
	new Wall(1842, 4000 - 3934, 100, 50, {angle: deg(30)});
	new Wall(1880, 4000 - 3902, 100, 50, {angle: deg(45)});
	new Wall(1908, 4000 - 3864, 100, 50, {angle: deg(60)});
	new Wall(1926, 4000 - 3824, 100, 50, {angle: deg(75)});
	
	//truck
	new Wall(1863, 4000 - 2900, 230, 80, {angle:deg(54.8)});
	new Wall(1717, 4000 - 3005, 110, 78, {angle:deg(10)});
	new WallCircle(1790, 4000 - 2996, 25);
	
	new FinishLine(200, 4000 - 3814, 300, 300);
	
	mapImage = document.getElementById('IMAGE_MAP02');
	backgroundColor = '#784421';
}