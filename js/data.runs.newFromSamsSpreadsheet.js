var runsDict = {};
var runs = [
	 {id:"baldy", label:"Baldy", difficulty:25, show:true}
	,{id:"blizzardracecourse", label:"Blizzard Racecourse", difficulty:50, show:false}
	,{id:"bloodyhell", label:"Bloody Hell", difficulty:85, show:true}
	,{id:"boggy3", label:"Boggy 3", difficulty:55, show:false}
	,{id:"boomerang", label:"Boomerang", difficulty:50, show:true}
	,{id:"boulders", label:"Boulders", difficulty:75, show:true}
	,{id:"bourkest", label:"Bourke St", difficulty:25, show:true}
	,{id:"brumby", label:"Brumby", difficulty:55, show:true}
	,{id:"burnthut", label:"Burnt Hut", difficulty:30, show:true}
	,{id:"canyontrail", label:"Canyon Trail", difficulty:40, show:true}
	,{id:"cattlemanstrail", label:"Cattleman's Trail", difficulty:60, show:true}
	,{id:"chaletcreek", label:"Chalet Creek", difficulty:75, show:true}
	,{id:"chamoisupper", label:"Chamois Upper", difficulty:48, show:true}
	,{id:"chamoislower", label:"Chamois Lower", difficulty:70, show:false}
	,{id:"chute", label:"Chute", difficulty:55, show:true}
	,{id:"colt", label:"Colt", difficulty:50, show:true}
	,{id:"cowcamp", label:"Cow Camp", difficulty:70, show:true}
	,{id:"crosscut", label:"Cross Cut", difficulty:55, show:true}
	,{id:"cut73", label:"Cut 73", difficulty:90, show:true}
	,{id:"damrun", label:"Dam Run", difficulty:75, show:true}
	,{id:"elephantrun", label:"Elephant Run", difficulty:75, show:true}
	,{id:"fallline", label:"Fall Line", difficulty:80, show:true}
	,{id:"fannysfinish", label:"Fanny's Finish", difficulty:90, show:false}
	,{id:"familyrun", label:"Family Run", difficulty:35, show:true}
	,{id:"fastone", label:"Fast One", difficulty:85, show:true}
	,{id:"federation", label:"Federation", difficulty:85, show:true}
	,{id:"foxaccess", label:"Fox Access", difficulty:40, show:false}
	,{id:"funnel", label:"Funnel", difficulty:80, show:true}
	,{id:"gliders", label:"Gliders", difficulty:10, show:false}
	,{id:"happyfeet", label:"Happy Feet", difficulty:10, show:false}
	,{id:"hoggsback", label:"Hogg's Back", difficulty:75, show:true}
	,{id:"hometrail", label:"Home Trail", difficulty:40, show:false}
	,{id:"howqua", label:"Howqua", difficulty:70, show:true}
	,{id:"laycockslane", label:"Laycock's Lane", difficulty:58, show:true}
	,{id:"littlebullerspur", label:"Little Buller Spur", difficulty:50, show:true}
	,{id:"lowermensdownhill", label:"Lower Men's Downhill", difficulty:75, show:false}
	,{id:"mensdownhill", label:"Men's Downhill", difficulty:70, show:true}
	,{id:"outeredge", label:"Outer Edge", difficulty:85, show:true}
	,{id:"plughole", label:"Plug Hole", difficulty:78, show:true}
	,{id:"powderkeg", label:"Powder Keg", difficulty:90, show:true}
	,{id:"ridgerun", label:"Ridge Run", difficulty:85, show:false}
	,{id:"robins", label:"Robin's", difficulty:90, show:true}
	,{id:"roughcut", label:"Rough Cut", difficulty:75, show:true}
	,{id:"rushrun", label:"Rush Run", difficulty:80, show:false}
	,{id:"stchristopher", label:"St Christopher", difficulty:70, show:false}
	,{id:"scvhutrun", label:"SCV Hut Run", difficulty:75, show:true}
	,{id:"shakeyknees", label:"Shakey Knees", difficulty:45, show:true}
	,{id:"skyline", label:"Skyline", difficulty:35, show:false}
	,{id:"slalomgully", label:"Slalom Gully", difficulty:85, show:true}
	,{id:"standard", label:"Standard", difficulty:55, show:true}
	,{id:"summit", label:"Summit", difficulty:45, show:true}
	,{id:"summitaccess", label:"Summit Access", difficulty:40, show:false}
	,{id:"summitblack", label:"Summit Black", difficulty:75, show:false}
	,{id:"summitslide", label:"Summit Slide", difficulty:60, show:false}
	,{id:"sunvalley", label:"Sun Valley", difficulty:75, show:true}
	,{id:"thechutes", label:"The Chutes", difficulty:95, show:false}
	,{id:"tirol", label:"Tirol", difficulty:50, show:true}
	,{id:"thulkes", label:"Thulkes", difficulty:85, show:false}
	,{id:"village", label:"Village", difficulty:70, show:true}
	,{id:"vista", label:"Vista", difficulty:55, show:true}
	,{id:"waler", label:"Waler", difficulty:55, show:false}
	,{id:"wattlewiggle", label:"Wattle Wiggle", difficulty:70, show:false}
	,{id:"wenzelweave", label:"Wenzel Weave", difficulty:50, show:false}
	,{id:"whiskeycreektrail", label:"Whiskey Creek Trail", difficulty:40, show:true}
	,{id:"windlessmarissa", label:"Windless Marissa", difficulty:55, show:false}
	,{id:"womensdownhill", label:"Women's Downhill", difficulty:75, show:true}
	,{id:"wombat", label:"Wombat", difficulty:50, show:true}
	,{id:"wombatbottomroad", label:"Wombat Bottom Road", difficulty:70, show:false}
	,{id:"wombatmidroad", label:"Wombat Mid Road", difficulty:70, show:true}
	,{id:"woodrun", label:"Wood Run", difficulty:78, show:true}
	,{id:"yurredla", label:"Yurredla", difficulty:75, show:false}
	,{id:"zwierszigzag", label:"Zwier's Zig Zag", difficulty:80, show:false}
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