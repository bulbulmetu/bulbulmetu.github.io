var newsText = new Array();
			newsText[0] = "(1) Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World.Welcome Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World To First Choice Hospital..This is a Most Wonderful Hospital In World......................1..";
			newsText[1] = "(2) We Add More Department In Our First Choice.Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World.......2";
			newsText[2] = "(3) This Department is More Careful In All Other Department..Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World...........3..";
			newsText[3] = "(4) This Department Has Many Facility.....Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World...4";
			newsText[4] = "(5) We Take Care Very Carefully.The New Department Give Us More Service In First Choice......Welcome To First Choice Hospital..This is a Most Wonderful Hospital In World......5."

			var ttloop = 1;    // Repeat forever? (1 = True; 0 = False)
			var tspeed = 110;   // Typing speed in milliseconds (larger number = slower)
			var tdelay = 500; // Time delay between newsTexts in milliseconds

			// ------------- NO EDITING AFTER THIS LINE ------------- \\
			var dwAText, cnews=0, eline=0, cchar=0, mxText;

			function doNews() {
			  mxText = newsText.length - 1;
			  dwAText = newsText[cnews];
			  setTimeout("addChar()",1000)
			}
			function addNews() {
			  cnews += 1;
			  if (cnews <= mxText) {
				dwAText = newsText[cnews];
				if (dwAText.length != 0) {
				  document.news.news2.value = "";
				  eline = 0;
				  setTimeout("addChar()",tspeed)
				}
			  }
			}
			function addChar() {
			  if (eline!=1) {
				if (cchar != dwAText.length) {
				  nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
				  document.news.news2.value = nmttxt;
				  cchar += 1;
				  if (cchar != dwAText.length) document.news.news2.value += "____@Look  Look!";
				} else {
				  cchar = 0;
				  eline = 1;
				}
				if (mxText==cnews && eline!=0 && ttloop!=0) {
				  cnews = 0; setTimeout("addNews()",tdelay);
				} else setTimeout("addChar()",tspeed);
			  } else {
				setTimeout("addNews()",tdelay)
			  }
			}

			doNews()