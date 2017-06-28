var runsDict = {};
var runs = [
	 {id:"baldy",		label:"Baldy",difficulty:20}
	,{id:"bloodyhell",	label:"Bloody Hell",difficulty:90}
	,{id:"boggycreek",	label:"Boggy Creek",difficulty:80}
	,{id:"boomerang",	label:"Boomerang",difficulty:35}
	,{id:"boulders",	label:"Boulders",difficulty:5}
	,{id:"bourkest",	label:"Bourke St",difficulty:10}
	,{id:"brumby",		label:"Brumby",difficulty:6}
	,{id:"bullrun",		label:"Bull Run",difficulty:7}
	,{id:"burnthutspur",label:"Burnt Hut Spur",difficulty:1}
	//,canyontrail:		{name:"Canyon Trail",difficulty:0}
	,{id:"cattlemanstrail",label:"Cattleman's Trail",difficulty:0}
	,{id:"chaletcreek",	label:"Chalet Creek",difficulty:0}
	,{id:"chamois",		label:"Chamois",difficulty:0}
	,{id:"chute",		label:"Chute",difficulty:0}
	,{id:"colt",		label:"Colt",difficulty:0}
	,{id:"cowcamp",		label:"Cow Camp",difficulty:80}
	,{id:"crosscut",	label:"Cross Cut",difficulty:0}
	,{id:"cut73",		label:"Cut 73",difficulty:0}
	,{id:"damrun",		label:"Dam Run",difficulty:0}
	,{id:"elephantrun",	label:"Elephant Run",difficulty:0}
	,{id:"fallline",	label:"Fall Line",difficulty:0}
	,{id:"familyrun",	label:"Family Run",difficulty:0}
	,{id:"fannysfinish",label:"Fanny's Finish",difficulty:99}
	,{id:"fastone",		label:"Fast One",difficulty:0}
	,{id:"federation",	label:"Federation",difficulty:0}
	,{id:"funnel",		label:"Funnel",difficulty:0}
	,{id:"hogsback",	label:"Hog's Back",difficulty:0}
	,{id:"howqua",		label:"Howqua",difficulty:60}
	,{id:"laycockslane",label:"Laycock's Lane",difficulty:0}
	,{id:"littlebullerspur",label:"Little Buller Spur",difficulty:20}
	//,mclaughlinsshoulder: {name:"McLaughlin's Shoulder",difficulty:0}
	,{id:"mensdownhill",label:"Men's Downhill",difficulty:70}
	,{id:"outeredge",	label:"Outer Edge",difficulty:0}
	//,playground:		{name:"Playground",difficulty:0}
	,{id:"plughole",	label:"Plug Hole",difficulty:0}
	,{id:"powderkeg",	label:"Powder Keg",difficulty:0}
	,{id:"robins",		label:"Robin's",difficulty:0}
	,{id:"roughcut",	label:"Rough Cut",difficulty:0}
	,{id:"scvhutrun",	label:"SCV Hut Run",difficulty:0}
	,{id:"shakeyknees",	label:"Shakey Knees",difficulty:30}
	,{id:"slalomgully",	label:"Slalom Gully",difficulty:0}
	,{id:"standard",	label:"Standard",difficulty:40}
	,{id:"summit",		label:"Summit",difficulty:50}
	,{id:"sunvalley",	label:"Sun Valley",difficulty:0}
	//,telecom:			{name:"Telecom",difficulty:0}
	,{id:"tirol",		label:"Tirol",difficulty:0}
	,{id:"village",		label:"Village",difficulty:0}
	,{id:"vista",		label:"Vista",difficulty:0}
	,{id:"whiskeycreektrail",label:"Whiskey Creek Trail",difficulty:0}
	,{id:"womansdownhill",label:"Woman's Downhill",difficulty:70}
	,{id:"wombat",		label:"Wombat",difficulty:50}
	//,wombatvalley:	{name:"Wombat Valley",difficulty:0}
	,{id:"woodrun",		label:"Wood Run",difficulty:0}
];

for (var iR = 0; iR < runs.length; iR++) {
	var run = runs[iR];
	if (run.difficulty == 0) {
		run.difficulty = -10; //Math.max(Math.round(iR * 1.5), 99);
		console.log(run.id + " :: " + run.difficulty);
	}
	runsDict[run.id] = run;
}
/*
for (var sRunName in runs) {
	if (this.runs.hasOwnProperty(sRunName)) {
		this.runs[sRunName].id = sRunName;
		this.runs[sRunName].difficulty *= 10;
		if (this.runs[sRunName].difficulty == 0) {
			this.runs[sRunName].difficulty = -10;
		}
	}
}
*/