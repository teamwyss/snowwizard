

function el(sXPath) {
	return document.querySelector(sXPath);
}

var testManager = {
	init: function(){
		el("body").innerHTML = "";
	}
	,addTest: function(oTestData, aoRuns){
	}
	,runTest: function(oTestData){
		var sOut = "";
		//d ebugger;
		aavParams = oTestData.params;
		var sParamsForHeading = "";
		for (var iP = 0; iP < aavParams.length; iP++) {
			//if (aavParams[iP][0] == "skill") {
			sParamsForHeading += aavParams[iP][0] + ":" + aavParams[iP][1] + " ";
			//}
			decisionEngine.setParamLevel(aavParams[iP][0], aavParams[iP][1]);
		}
		var oResults = decisionEngine.decideRuns();
		sParamsForHeading += " :: runCount:" + oResults.runs.length + "";
		//c onsole.log(oResults);
		//Do not delete :::: sOut += JSON.stringify(oResults);
		sOut += "<div class=\"testWrapper\">";
		sOut += "<h3>" + oTestData.title + " " + sParamsForHeading + "</h3>";
		sOut += "<table>";
		sOut += trDiamond("niveau", oResults.niveau);
		//sOut += trDiamond("niveauMin", oResults.niveauMin);
		//sOut += trDiamond("niveauMax", oResults.niveauMax);
		//sOut += trRange("tollerance", oResults.tollerance);
		sOut += drawTolleranceAndRange(oResults);
		var sDebugOut = "<br/>";
		var sFoundRuns = ",";
		for (var iRunAll = 0; iRunAll < oResults.runs.length; iRunAll++) {
			var sType = "run";
			var sFailMsg = "";
			var isRunExpected = this.isRunExpected(oResults.runs[iRunAll], oTestData.expectedRuns);
			if (!isRunExpected) {
				sType = "fail";
				sFailMsg = " <b>(not-expected)</b>";
				sDebugOut += "\t,runsDict." + oResults.runs[iRunAll].id + "<br/>";
			} else {
				sFoundRuns += oResults.runs[iRunAll].id + ",";
			}
			sOut += trDiamond(oResults.runs[iRunAll].label + sFailMsg, oResults.runs[iRunAll].difficulty, sType);
		}
		//alert("found " + sFoundRuns);
		/*
		 */
		for (var iRunUnexpected = 0; iRunUnexpected < oTestData.expectedRuns.length; iRunUnexpected++) {
			var isRunExpected = this.isRunExpected(oTestData.expectedRuns[iRunUnexpected], oResults.runs);
			if (!isRunExpected) {
				//c onsole.log("");
				sOut += trDiamond(oTestData.expectedRuns[iRunUnexpected].label + " <b>(expected)</b>", oTestData.expectedRuns[iRunUnexpected].difficulty, "fail");
				///sDebugOut += "\t,runs." + oResults.runs[iRunUnexpected].id + " //<br/>";
			}
		}
		//for (var iR = 0; iR < runs.length; iR++) {
		var aoRunsNotFound = [];
		debugger;
		for (sR in runsDict) {
			//var oR = runs[iR];
			if (sFoundRuns.indexOf("," + sR + ",") == -1) {
				var oR = runsDict[sR];
				if (oR.difficulty >= 0) {
					aoRunsNotFound.push(oR.difficulty);
				}
			}
		}
		sOut += trNotFound("Ok - Not found Not Expected", aoRunsNotFound, "run");
		sOut += "</table>";
		sOut += "</div>";
		//d ebugger;
		el("body").innerHTML = el("body").innerHTML + "<br/><hr/><br/>" + sOut + sDebugOut;
	}
	,isRunExpected: function(oRun, aoRuns){
		debugger;
		for (var iR = 0; iR < aoRuns.length; iR++) {
			if (oRun.id == aoRuns[iR].id) {
				return true;
			}
		}
		return false;
	}
};

function drawTolleranceAndRange(oResults) {
	//d ebugger;
	var iMaxDisplay = Math.min(100, oResults.max);
	var iMinDisplay = Math.max(0, oResults.min);
	var iTolleranceTaking0And100IntoAccount = iMaxDisplay - iMinDisplay;
	var sColTwoGraph = "";
	sColTwoGraph = "<div style=\"width:" + toPx(iTolleranceTaking0And100IntoAccount) + "px;"
		//+ "margin-left: " + toPx(oResults.niveau - oResults.tollerance) + "px;"
		+ "margin-left: " + toPx(iMinDisplay) + "px;"
		+ "background-color: black;"
		//+ "color:white;text-align: center;\">&plusmn;" + oResults.tollerance + " --" + iTolleranceTaking0And100IntoAccount + "</div>";
		//+ "color:white;text-align: center;\">&plusmn;" + iTolleranceTaking0And100IntoAccount + "</div>";
		+ "color:white;text-align: center;\"> " + iMinDisplay + "-" + oResults.max + " </div>";
	return "<tr><td>range</td><td>" + "" + "</td><td>" + sColTwoGraph + "</td></tr>";
}

function toPx(iOut) {
	return (iOut * 4);
}

function trNotFound(sColOne, aiColTwo, sType) {
	var sColTwoGraph = "";
	var sBarBgColor = "silver"
	if(sType == "run") {
		sBarBgColor = "#90e0ec";
	} else if (sType == "fail") {
		sBarBgColor = "#ff639f";
	}
	sColTwoGraph += "<div class=\"notFound\" style=\"width:" + toPx(100) + "px;background-color:" + sBarBgColor + ";position:relative;\">";
	for (var iCT = 0; iCT < aiColTwo.length; iCT++) {
		var iColTwo = aiColTwo[iCT];
		if (typeof iColTwo == "number") {
			//sColTwoGraph += "<div style=\"width:" + toPx(Math.min(((iColTwo * 2) + 6), 202)) + "px;background-color: transparent;text-align:right;\">&diams;</div>";
			sColTwoGraph += "<div style=\"";
			if (iCT > 0) {
				sColTwoGraph += "position: absolute;";
			}
			sColTwoGraph += "top:0;width:" + (toPx(iColTwo) + 4) + "px;background-color: transparent;text-align:right;\">&diams;</div>";
			//c onsole.error("iColTwo:" + iColTwo);
		}
	}
	sColTwoGraph += "</div>";
	return "<tr><td>" + sColOne + "</td><td>" + iColTwo + "</td><td>" + sColTwoGraph + "</td></tr>";
}

function trDiamond(sColOne, iColTwo, sType) {
	var sColTwoGraph = "";
	var sBarBgColor = "silver"
	if(sType == "run") {
		sBarBgColor = "#90e0ec";
	} else if (sType == "fail") {
		sBarBgColor = "#ff639f";
	}
	if (typeof iColTwo == "number") {
		sColTwoGraph = "<div style=\"width:" + toPx(100) + "px;background-color:" + sBarBgColor + ";\">";
		//sColTwoGraph += "<div style=\"width:" + toPx(Math.min(((iColTwo * 2) + 6), 202)) + "px;background-color: transparent;text-align:right;\">&diams;</div>";
		sColTwoGraph += "<div style=\"width:" + (toPx(iColTwo) + 4) + "px;background-color: transparent;text-align:right;\">&diams;</div>";
		sColTwoGraph += "</div>";
		//c onsole.error("iColTwo:" + iColTwo);
	}
	return "<tr><td>" + sColOne + "</td><td>" + iColTwo + "</td><td>" + sColTwoGraph + "</td></tr>";
}

function trRange(sColOne, iColTwo) {
	var sColTwoGraph = "";
	if (typeof iColTwo == "number") {
		sColTwoGraph = "<div style=\"width:" + (iColTwo * 2) + "px;background-color: black;color:white;text-align:right;\">&nbsp;</div>";
	}
	return "<tr><td>" + sColOne + "</td><td>" + iColTwo + "</td><td>" + sColTwoGraph + "</td></tr>";
}

function doOnLoad() {

	testManager.init();

	var oTestData = null;

	if (true) {
		oTestData = {
			title:"SA:EA:: skill very high, energy very high"
			,params:[
				 ["skill", 100]
				,["energy", 100]
			]
			,expectedRuns: [
				 runsDict.fannysfinish
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S8:E5:: skill high, energy medium"
			,params:[
				 ["skill", 80]
				,["energy", 50]
			]
			,expectedRuns: [
				 runsDict.cowcamp
				,runsDict.mensdownhill
				,runsDict.womensdownhill
				,runsDict.bloodyhell
				,runsDict.boulders
				,runsDict.chaletcreek
				,runsDict.chamois
				,runsDict.cut73
				,runsDict.damrun
				,runsDict.elephantrun
				,runsDict.fallline
				,runsDict.fannysfinish
				,runsDict.fastone
				,runsDict.federation
				,runsDict.funnel
				,runsDict.hoggsback
				,runsDict.howqua
				,runsDict.outeredge
				,runsDict.plughole
				,runsDict.powderkeg
				,runsDict.robins
				,runsDict.roughcut
				,runsDict.scvhutrun
				,runsDict.slalomgully
				,runsDict.sunvalley
				,runsDict.village
				,runsDict.woodrun
				,runsDict.yurredla			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S5-E5:: skill medium, energy medium"
			,params:[
				["skill", 50]
				,["energy", 50]
			]
			,expectedRuns: [
				 runsDict.boomerang
				,runsDict.standard
				,runsDict.summit
				,runsDict.wombat
				,runsDict.boggycreek
				,runsDict.brumby
				,runsDict.cattlemanstrail
				,runsDict.chute
				,runsDict.colt
				,runsDict.crosscut
				,runsDict.familyrun
				,runsDict.laycockslane
				,runsDict.littlebullerspur
				,runsDict.shakeyknees
				,runsDict.skyline
				,runsDict.tirol
				,runsDict.vista
				,runsDict.waler
				,runsDict.wenzelsweave
				,runsDict.whiskeycreektrail
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S5-E4.5:: skill medium, energy medium-low"
			,params:[
				["skill", 50]
				,["energy", 45]
			]
			,expectedRuns: [
				 runsDict.standard
				,runsDict.summit
				,runsDict.wombat
				,runsDict.boomerang
				,runsDict.boggycreek
				,runsDict.brumby
				,runsDict.cattlemanstrail
				,runsDict.chute
				,runsDict.colt
				,runsDict.crosscut
				,runsDict.familyrun
				,runsDict.laycockslane
				,runsDict.littlebullerspur
				,runsDict.shakeyknees
				,runsDict.skyline
				,runsDict.tirol
				,runsDict.vista
				,runsDict.waler
				,runsDict.wenzelsweave
				,runsDict.whiskeycreektrail
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S4-E3:: skill medium-low, energy medium-low"
			,params:[
				["skill", 40]
				,["energy", 30]
			]
			,expectedRuns: [
				 //runsDict.littlebullerspur
				 runsDict.shakeyknees
				,runsDict.summit
				,runsDict.wombat
				,runsDict.boomerang
				,runsDict.baldy
				,runsDict.burnthutspur
				,runsDict.bullrun
				,runsDict.colt
				,runsDict.familyrun
				,runsDict.littlebullerspur
				,runsDict.skyline
				,runsDict.tirol
				,runsDict.wenzelsweave
				,runsDict.whiskeycreektrail
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S2-E4:: skill low, energy medium-low"
			,params:[
				["skill", 20]
				,["energy", 40]
			]
			,expectedRuns: [
				 runsDict.bourkest
				,runsDict.baldy
				//,runsDict.littlebullerspur
				//,runsDict.shakeyknees
				//,runsDict.boulders
				//,runsDict.brumby
				,runsDict.bullrun
				,runsDict.burnthutspur
				,runsDict.gliders
				,runsDict.happyfeet
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S1-E0:: skill very low, energy none"
			,params:[
				 ["skill", 1]
				,["energy", 0]
			]
			,expectedRuns: [
				 //runsDict.burnthutspur
				 //,runsDict.boulders
				 //,runsDict.brumby
				  runsDict.gliders
				 ,runsDict.happyfeet
			]
		};
		testManager.runTest(oTestData);
	}

	if (true) {
		oTestData = {
			title:"S2-E0:: skill low, energy none"
			,params:[
				["skill", 20]
				,["energy", 0]
			]
			,expectedRuns: [
				 runsDict.baldy
				,runsDict.bourkest
				//,runsDict.burnthutspur
				//,runsDict.littlebullerspur
				//,runsDict.boulders
				//,runsDict.brumby
				//,runsDict.bullrun
				,runsDict.gliders
				,runsDict.happyfeet
			]
		};
		testManager.runTest(oTestData);
	}

}
