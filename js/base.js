/*
var runs = [
 {id:"bourkest",difficulty:10}
,{id:"baldy",difficulty:30}
,{id:"littlebullerspur",difficulty:40}
,{id:"wombat",difficulty:50}
,{id:"shakeyknees",difficulty:40}
,{id:"cowcamp",difficulty:80}
,{id:"fannysfinish",difficulty:100}
,{id:"summit",difficulty:50}
,{id:"howqua",difficulty:60}
,{id:"mensdownhill",difficulty:70}
,{id:"womensdownhill",difficulty:70}
,{id:"standard",difficulty:40}
];
*/

function showRuns(sMessage) {
	//debugger;
	var sValueEnergy =  document.querySelector("#energy").value;
	var nValueEnergy = parseInt(sValueEnergy);
	var sValueSkill =  document.querySelector("#skill").value;
	var nValueSkill = parseInt(sValueSkill);
	var sOut = "";

	/*
	var nValueTotal = (nValueEnergy + nValueSkill) / 2;
	for (var i = 0; i < runs.length; i++){
		if (runs[i].difficulty >= nValueTotal){
			//alert (sValueEnergy + " " + runs[i].id + " " + runs[i].difficulty);
			sOut += nValueTotal + " " + runs[i].id + " " + runs[i].difficulty + "\n";
			try {
				var imgRun = document.querySelector("#" + runs[i].id);
				imgRun.style.display = "";
			} catch (e){}
		} else {
			try {
				var imgRun = document.querySelector("#" + runs[i].id);
				imgRun.style.display = "none";
			} catch (e){}
		}
	}
	*/
	decisionEngine.setParamLevel("energy", nValueEnergy);
	decisionEngine.setParamLevel("skill", nValueSkill);
	var sResults = decisionEngine.decideRunsAsString();
	for (var i = 0; i < runs.length; i++){
		var sDisplay = "";
		if (sResults.indexOf("," + runs[i].id + ",") == -1) {
			sDisplay = "none";
		}
		var imgRun = document.querySelector("#" + runs[i].id);
		imgRun.style.display = sDisplay;
	}
	//alert(sOut);
	var divRuns = document.querySelector("#mapSection");
	divRuns.style.display = "";
	var divSettings = document.querySelector("#parameterControlSection");
	divSettings.style.display = "none";
}
function hideRuns() {
	var divRuns = document.querySelector("#mapSection");
	divRuns.style.display = "none";
	var divSettings = document.querySelector("#parameterControlSection");
	divSettings.style.display = "";
}

function doOnLoad() {
	/*
	<div id="mapWrapper">
	<img src="img/mapBuller.png"/>
	<img src="img/runs/wombat.png" id="wombat" style="display:none;"/>
	*/
	var divMap = document.querySelector("#mapWrapper");
	var sOut = "<img src=\"img/mapBuller.png\"/>";
	for (var iR = 0; iR < runs.length; iR++) {
		sOut += "<img src=\"img/runs/" + runs[iR].id + ".png\" id=\"" + runs[iR].id + "\" style=\"display:none;\"/>";
	}
	divMap.innerHTML = sOut;
}
