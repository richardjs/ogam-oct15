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
	new Wall(50 + 110, 3975 - 714, 100, 50, {angle: deg(-15)});
	new Wall(50 + 68, 3975 - 694, 100, 50, {angle: deg(-30)});
	new Wall(50 + 30, 3975 - 662, 100, 50, {angle: deg(-45)});
	new Wall(50 + 2, 3975 - 624, 100, 50, {angle: deg(-60)});
	new Wall(50 + -16, 3975 - 584, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1220, 3975 - 714, 100, 50, {angle: deg(15)});
	new Wall(50 + 1262, 3975 - 694, 100, 50, {angle: deg(30)});
	new Wall(50 + 1300, 3975 - 662, 100, 50, {angle: deg(45)});
	new Wall(50 + 1328, 3975 - 624, 100, 50, {angle: deg(60)});
	new Wall(50 + 1346, 3975 - 584, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1140, 3975 - 10, 100, 50, {angle: deg(15)});
	new Wall(50 + 1098, 3975 - 30, 100, 50, {angle: deg(30)});
	new Wall(50 + 1060, 3975 - 62, 100, 50, {angle: deg(45)});
	new Wall(50 + 1032, 3975 - 100, 100, 50, {angle: deg(60)});
	new Wall(50 + 1014, 3975 - 140, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1800, 3975 - 10, 100, 50, {angle: deg(-15)});
	new Wall(50 + 1842, 3975 - 30, 100, 50, {angle: deg(-30)});
	new Wall(50 + 1880, 3975 - 62, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1908, 3975 - 100, 100, 50, {angle: deg(-60)});
	new Wall(50 + 1926, 3975 - 140, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1800, 3975 - 1374, 100, 50, {angle: deg(15)});
	new Wall(50 + 1842, 3975 - 1354, 100, 50, {angle: deg(30)});
	new Wall(50 + 1880, 3975 - 1322, 100, 50, {angle: deg(45)});
	new Wall(50 + 1908, 3975 - 1284, 100, 50, {angle: deg(60)});
	new Wall(50 + 1926, 3975 - 1244, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 110, 3975 - 1044, 100, 50, {angle: deg(15)});
	new Wall(50 + 68, 3975 - 1064, 100, 50, {angle: deg(30)});
	new Wall(50 + 30, 3975 - 1096, 100, 50, {angle: deg(45)});
	new Wall(50 + 2, 3975 - 1134, 100, 50, {angle: deg(60)});
	new Wall(50 + -16, 3975 - 1174, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 109, 3975 - 1773, 100, 50, {angle: deg(-15)});
	new Wall(50 + 67, 3975 - 1753, 100, 50, {angle: deg(-30)});
	new Wall(50 + 29, 3975 - 1721, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1, 3975 - 1683, 100, 50, {angle: deg(-60)});
	new Wall(50 + -17, 3975 - 1643, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 557, 3975 - 1444, 100, 50, {angle: deg(-15)});
	new Wall(50 + 599, 3975 - 1464, 100, 50, {angle: deg(-30)});
	new Wall(50 + 637, 3975 - 1496, 100, 50, {angle: deg(-45)});
	new Wall(50 + 665, 3975 - 1534, 100, 50, {angle: deg(-60)});
	new Wall(50 + 683, 3975 - 1574, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 477, 3975 - 2314, 100, 50, {angle: deg(-15)});
	new Wall(50 + 435, 3975 - 2294, 100, 50, {angle: deg(-30)});
	new Wall(50 + 397, 3975 - 2262, 100, 50, {angle: deg(-45)});
	new Wall(50 + 369, 3975 - 2224, 100, 50, {angle: deg(-60)});
	new Wall(50 + 351, 3975 - 2184, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 917, 3975 - 2314, 100, 50, {angle: deg(15)});
	new Wall(50 + 959, 3975 - 2294, 100, 50, {angle: deg(30)});
	new Wall(50 + 997, 3975 - 2262, 100, 50, {angle: deg(45)});
	new Wall(50 + 1025, 3975 - 2224, 100, 50, {angle: deg(60)});
	new Wall(50 + 1043, 3975 - 2184, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 837, 3975 - 1610, 100, 50, {angle: deg(15)});
	new Wall(50 + 795, 3975 - 1630, 100, 50, {angle: deg(30)});
	new Wall(50 + 757, 3975 - 1662, 100, 50, {angle: deg(45)});
	new Wall(50 + 729, 3975 - 1700, 100, 50, {angle: deg(60)});
	new Wall(50 + 711, 3975 - 1740, 100, 50, {angle: deg(75)});
	
	new Wall(50 + 1800, 3975 - 1610, 100, 50, {angle: deg(-15)});
	new Wall(50 + 1842, 3975 - 1630, 100, 50, {angle: deg(-30)});
	new Wall(50 + 1880, 3975 - 1662, 100, 50, {angle: deg(-45)});
	new Wall(50 + 1908, 3975 - 1700, 100, 50, {angle: deg(-60)});
	new Wall(50 + 1926, 3975 - 1740, 100, 50, {angle: deg(-75)});
	
	new Wall(50 + 1800, 3975 - 3954, 100, 50, {angle: deg(15)});
	new Wall(50 + 1842, 3975 - 3934, 100, 50, {angle: deg(30)});
	new Wall(50 + 1880, 3975 - 3902, 100, 50, {angle: deg(45)});
	new Wall(50 + 1908, 3975 - 3864, 100, 50, {angle: deg(60)});
	new Wall(50 + 1926, 3975 - 3824, 100, 50, {angle: deg(75)});
	
	//small exterior corners
	new Wall(692, 4000 - 2958, 50, 30, {angle: deg(-15)});
	new Wall(659, 4000 - 2944, 50, 30, {angle: deg(-30)});
	new Wall(625, 4000 - 2918, 50, 30, {angle: deg(-45)});
	new Wall(598, 4000 - 2884, 50, 30, {angle: deg(-60)});
	new Wall(581, 4000 - 2844, 50, 30, {angle: deg(-75)});
	
	new Wall(638, 4000 - 2451, 50, 30, {angle: deg(-15)});
	new Wall(671, 4000 - 2465, 50, 30, {angle: deg(-30)});
	new Wall(705, 4000 - 2491, 50, 30, {angle: deg(-45)});
	new Wall(732, 4000 - 2525, 50, 30, {angle: deg(-60)});
	new Wall(749, 4000 - 2565, 50, 30, {angle: deg(-75)});
	
	new Wall(152, 4000 - 2451, 50, 30, {angle: deg(15)});
	new Wall(119, 4000 - 2465, 50, 30, {angle: deg(30)});
	new Wall(85, 4000 - 2491, 50, 30, {angle: deg(45)});
	new Wall(58, 4000 - 2525, 50, 30, {angle: deg(60)});
	new Wall(41, 4000 - 2565, 50, 30, {angle: deg(75)});
	
	new Wall(152, 4000 - 3218, 50, 30, {angle: deg(-15)});
	new Wall(119, 4000 - 3204, 50, 30, {angle: deg(-30)});
	new Wall(85, 4000 - 3178, 50, 30, {angle: deg(-45)});
	new Wall(58, 4000 - 3144, 50, 30, {angle: deg(-60)});
	new Wall(41, 4000 - 3104, 50, 30, {angle: deg(-75)});
	
	new Wall(278, 4000 - 3218, 50, 30, {angle: deg(15)});
	new Wall(311, 4000 - 3204, 50, 30, {angle: deg(30)});
	new Wall(345, 4000 - 3178, 50, 30, {angle: deg(45)});
	new Wall(372, 4000 - 3144, 50, 30, {angle: deg(60)});
	new Wall(389, 4000 - 3104, 50, 30, {angle: deg(75)});
	
	new Wall(332, 4000 - 2632, 50, 30, {angle: deg(15)});
	new Wall(299, 4000 - 2646, 50, 30, {angle: deg(30)});
	new Wall(265, 4000 - 2672, 50, 30, {angle: deg(45)});
	new Wall(238, 4000 - 2706, 50, 30, {angle: deg(60)});
	new Wall(221, 4000 - 2746, 50, 30, {angle: deg(75)});
	
	new Wall(458, 4000 - 2632, 50, 30, {angle: deg(-15)});
	new Wall(491, 4000 - 2646, 50, 30, {angle: deg(-30)});
	new Wall(525, 4000 - 2672, 50, 30, {angle: deg(-45)});
	new Wall(552, 4000 - 2706, 50, 30, {angle: deg(-60)});
	new Wall(569, 4000 - 2746, 50, 30, {angle: deg(-75)});
	
	new Wall(512, 4000 - 3498, 50, 30, {angle: deg(-15)});
	new Wall(479, 4000 - 3484, 50, 30, {angle: deg(-30)});
	new Wall(445, 4000 - 3458, 50, 30, {angle: deg(-45)});
	new Wall(418, 4000 - 3424, 50, 30, {angle: deg(-60)});
	new Wall(401, 4000 - 3384, 50, 30, {angle: deg(-75)});
	
	new Wall(1158, 4000 - 3498, 50, 30, {angle: deg(15)});
	new Wall(1191, 4000 - 3484, 50, 30, {angle: deg(30)});
	new Wall(1225, 4000 - 3458, 50, 30, {angle: deg(45)});
	new Wall(1252, 4000 - 3424, 50, 30, {angle: deg(60)});
	new Wall(1269, 4000 - 3384, 50, 30, {angle: deg(75)});
	
	new Wall(1212, 4000 - 3032, 50, 30, {angle: deg(15)});
	new Wall(1179, 4000 - 3046, 50, 30, {angle: deg(30)});
	new Wall(1145, 4000 - 3072, 50, 30, {angle: deg(45)});
	new Wall(1118, 4000 - 3106, 50, 30, {angle: deg(60)});
	new Wall(1101, 4000 - 3146, 50, 30, {angle: deg(75)});
	
	new Wall(1338, 4000 - 3032, 50, 30, {angle: deg(-15)});
	new Wall(1371, 4000 - 3046, 50, 30, {angle: deg(-30)});
	new Wall(1405, 4000 - 3072, 50, 30, {angle: deg(-45)});
	new Wall(1432, 4000 - 3106, 50, 30, {angle: deg(-60)});
	new Wall(1449, 4000 - 3146, 50, 30, {angle: deg(-75)});
	
	new Wall(1392, 4000 - 3498, 50, 30, {angle: deg(-15)});
	new Wall(1359, 4000 - 3484, 50, 30, {angle: deg(-30)});
	new Wall(1325, 4000 - 3458, 50, 30, {angle: deg(-45)});
	new Wall(1298, 4000 - 3424, 50, 30, {angle: deg(-60)});
	new Wall(1281, 4000 - 3384, 50, 30, {angle: deg(-75)});
	
	//truck
	new Wall(1863, 4000 - 2900, 230, 80, {angle:deg(54.8)});
	new Wall(1717, 4000 - 3005, 110, 78, {angle:deg(10)});
	new WallCircle(1790, 4000 - 2996, 25);
	
	new FinishLine(200, 4000 - 3814, 300, 300);
	
	mapImage = document.getElementById('IMAGE_MAP02');
	backgroundColor = '#784421';
}
*/
/*
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
	
	//gate
	new Wall(300, 1240 - 1025, 100, 70, {restitution:0.5});
	
	//balls
	new WallCircle(260, 1240 - 820, 20, {isStatic:false});
	new WallCircle(300, 1240 - 820, 20, {isStatic:false});
	new WallCircle(340, 1240 - 820, 20, {isStatic:false});
	new WallCircle(280, 1240 - 786, 20, {isStatic:false});
	new WallCircle(320, 1240 - 786, 20, {isStatic:false});
	new WallCircle(300, 1240 - 752, 20, {isStatic:false, image: IMAGE_EIGHTBALL});
	
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
*/
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
	
	//gate
	new Wall(980, 1480 - 1100, 40, 200);
	
	//button (TODO)
	
	new FinishLine(860, 1480 - 1100, 200, 200);
	
	mapImage = document.getElementById('IMAGE_MAP04');
	backgroundColor = '#784421';
}
