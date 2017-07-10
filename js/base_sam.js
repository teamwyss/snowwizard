
var runs = [
 {name:"bourkest",level:10}
,{name:"baldy",level:30}
,{name:"littlebullerspur",level:40}
,{name:"wombat",level:50}
,{name:"shakeyknees",level:40}
,{name:"cowcamp",level:80}
,{name:"fannys",level:100}
,{name:"summit",level:50}
,{name:"howqua",level:60}
,{name:"mensdownhill",level:70}
,{name:"womensdownhill",level:70}
,{name:"standard",level:40}
];


function showRuns(sMessage) {
	//debugger;
	var sValueEnergy =  document.querySelector("#energy").value;
	var nValueEnergy = parseInt(sValueEnergy);
	var sValueSkill =  document.querySelector("#skill").value;
	var nValueSkill = parseInt(sValueSkill);
	var sOut = "";
	
	var nValueTotal = (nValueEnergy + nValueSkill) / 2;
	for (var i = 0; i < runs.length; i++){
		if (runs[i].level >= nValueTotal){
			//alert (sValueEnergy + " " + runs[i].name + " " + runs[i].level);	
			sOut += nValueTotal + " " + runs[i].name + " " + runs[i].level + "\n";
			try {
				var imgRun = document.querySelector("#" + runs[i].name);
				imgRun.style.display = "";
			} catch (e){}
		} else {
			try {
				var imgRun = document.querySelector("#" + runs[i].name);
				imgRun.style.display = "none";
			} catch (e){}
		}
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