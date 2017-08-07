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

var g_iBrowserWidth = null;
var g_iMapWidth = 760;
var g_iMinMapZoom = null;
var g_iMaxMapZoom = 400;

function showRuns() {
	//debugger;
	var sValueEnergy =  document.querySelector("#energy").value;
	var nValueEnergy = parseInt(sValueEnergy);
	var sValueSkill =  document.querySelector("#skill").value;
	var nValueSkill = parseInt(sValueSkill);
	var sOut = "";

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
	showMapSection();
}
function showMapSection(){
	zoomRuns(-100);
	var divRuns = document.querySelector("#mapSection");
	divRuns.style.display = "";
	var divSettings = document.querySelector("#parameterControlSection");
	divSettings.style.display = "none";
}
function safeParseInt(vIn) {
	if (isNaN(vIn)) {
		return iDefault;
	}
	return parseInt(vIn);
}

function zoomRuns(iChange) {
	var ui = document.querySelector("#mapWrapper");
	var iCurrentZoom = 100;
	var sCurrentZoom = ui.style.zoom;
	if (sCurrentZoom != "") {
		sCurrentZoom = sCurrentZoom.replace("px", "").replace("%", "");
		iCurrentZoom = safeParseInt(sCurrentZoom, 100);
	}
	var iNewZoom = (iCurrentZoom + iChange);
	iNewZoom = iNewZoom + iChange;
	iNewZoom = Math.max(Math.min(iNewZoom, g_iMaxMapZoom), g_iMinMapZoom);
	console.log("[" + iNewZoom + "]");
	ui.style.zoom = iNewZoom + "%";
}
function showAllRuns() {
	for (var i = 0; i < runs.length; i++){
		var imgRun = document.querySelector("#" + runs[i].id);
		imgRun.style.display = "";
	}
	showMapSection();
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
	/*
	var divMap = document.querySelector("#mapWrapper");
	var sOut = "<img src=\"img/mapBuller.png\"/>";
	for (var iR = 0; iR < runs.length; iR++) {
		sOut += "<img src=\"img/runs/" + runs[iR].id + ".png\" id=\"" + runs[iR].id + "\" style=\"display:none;\"/>";
	}
	divMap.innerHTML = sOut;
	*/
	g_iBrowserWidth = window.innerWidth;
	g_iMinMapZoom = ((g_iBrowserWidth * 100) / g_iMapWidth);
	zoomRuns(-100);
	
	//alert("" + window.innerWidth + " # " + document.documentElement.clientWidth + " # " + document.body.clientWidth);
	
}
