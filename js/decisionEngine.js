
var decisionEngine = {
	init: function(){}
	,isDebug: true
	,debug: function(sOut) {
		if (this.isDebug) {
			console.log(sOut);
		}
	}
	,params: {
		// Level values for this are set by other parts of the app.
		skill:50
		,energy:50
	}
	,setParamLevel: function(sParamId, iLevel){
		//d ebugger;
		if (!this.params.hasOwnProperty(sParamId)) {
			console.log("Trying to set non-existant param:[" + sParamId + "]");
			return;
		}
		this.params[sParamId] = iLevel;
	}
	,decideRunsAsString: function(){
		var oResult = this.decideRuns();
		var sOut = ",";
		for (var iR = 0; iR < oResult.runs.length; iR++) {
			sOut += oResult.runs[iR].id + ",";
		}
		return sOut;
	}
	,decideRuns: function(){
		/*
		 * The decisionEngine must have been given a series of parameters.
		 * EG: {skill: 87, energy: 30}
		 * This will be converted to a list of run objects in an object.
		 *		See code below in the oOut object.
		 *    v min           v max
		 * |--<=======X=======>------------|
		 *            ^ niveau
		 * |nnYYYYYYYYYYYYYYYYYnnnnnnnnnnnn| where n=do not select run, Y=select.
		 *	Note: runsDict equal to level will also be selected.
		 */
		var iFixedRange = 5;
		var iMainFlexibleRange = 10;
		// rangeUp: Extends from the niveau, UP to the MAX difficulty level.
		var iRangeUp = iFixedRange + iMainFlexibleRange; // Overwritten later;
		// rangeDown: Extends from the niveau, DOWN to the MIN difficulty level.
		var iRangeDown = iRangeUp; // Overwritten later;
		var oOut = {
			 niveau: 50 // Base level for setting max and min.
			,max: 0 // Final calculation; niveau plus rangeUp.
			,min:	0 // Final calculation; niveau minus rangeDown.
			,runs: [] // Main output. Array of run objects.
		};
		if (this.params.hasOwnProperty("skill")) {
			oOut.niveau = this.params.skill;
		}
		if (this.params.hasOwnProperty("energy")) {
			// Push the range up or down depending on energy level.
			var iEnergy = this.params.energy;
			var iUp = (iEnergy * iMainFlexibleRange / 50);
			var iDown = (iMainFlexibleRange * 2) - iUp;
			iRangeUp = iUp + iFixedRange;
			iRangeDown = iDown + iFixedRange;
		}
		// Set the range. Does not go above 100 or below 0.
		oOut.max = Math.min(100, oOut.niveau + iRangeUp);
		oOut.min = Math.max(0, oOut.niveau - iRangeDown);
		/*
		for (var sRunName in runsDict) {
			if (runsDict.hasOwnProperty(sRunName)) {
				var runTemp = runsDict[sRunName];
				if (
					(runTemp.difficulty >= oOut.min)
					&& (runTemp.difficulty <= oOut.max)
				) {
					oOut.runsDict.push(runTemp);
				}
			}
		}
		*/
		for (var iR = 0; iR < runs.length; iR++) {
			var runTemp = runs[iR];
			//this.debug("checking:[id:" + runTemp.id + ",difficulty:" + runTemp.difficulty + "] against oOut:[min:" + oOut.min + ",max:" + oOut.max + "}");
			if (
				(runTemp.difficulty >= 0)
				&& (runTemp.difficulty >= oOut.min)
				&& (runTemp.difficulty <= oOut.max)
			) {
				//(runTemp.label);
				oOut.runs.push(runTemp);
			}
		}
		return oOut;
	}
	,getParamLevelAsString: function(sParamId, iParamLevel){
		var sV = iParamLevel + " : very high"
		if (iParamLevel < 21) {
			sV = iParamLevel + " : very low";
		} else if (iParamLevel < 41) {
			sV = iParamLevel + " : low";
		} else if (iParamLevel < 61) {
			sV = iParamLevel + " : medium";
		} else if (iParamLevel < 81) {
			sV = iParamLevel + " : high";
		}
		return sV;
	}
};

function minMax(iVal, iMin, iMax) {
	return Math.max(Math.min(iVal, iMax), iMin);
}
