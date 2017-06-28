var map = {
	/*
	runs: [
		 "bourkest" // Run.
		,"bullrun" // Run.
		,"fannys" // Run.
		,"summit" // Run.
		,"chamois" // Run.
	]
	,
	*/
	init: function() {
		var sImg = "";
		for (sRun in runs) {
			sImg += "<img src=\"../img/runs/" + sRun + ".png\" id=\"" + sRun + "\" onclick=\"map.toggleRunDisplay(this.id)\" />";
		}
		el("div#runImages").innerHTML = sImg;
	}
	,toggleRunDisplay: function(sId) {
		el("img#" + sId).style.display = "none";
	}
	,showRuns: function(asRuns) {
		this.setDisplayAllRuns(false);
		for (var iR = 0; iR < asRuns.length; iR++) {
			el("img#" + asRuns[iR]).style.display = "";
		}
	}
	,showAllRuns: function() {
		this.setDisplayAllRuns(true);
	}
	,hideAllRuns: function() {
		this.setDisplayAllRuns(false);
	}
	,setDisplayAllRuns: function(isShow) {
		//for (var iR = 0; iR < runs.length; iR++) {
		var sStyle = isShow ? "" : "none";
		for (sRun in runs) {
			try {
				el("img#" + sRun).style.display = sStyle;
			} catch(e) {
				console.log("error when trying to show/hide map.setDisplayAllRuns(" + sRun + ")")
			}
		}
	}
}
