/*
+This program is free software: you can redistribute it and/or modify
+it under the terms of the GNU General Public License as
+published by the Free Software Foundation, either version 3 of the
+License, or (at your option) any later version.
+
+This program is distributed in the hope that it will be useful,
+but WITHOUT ANY WARRANTY; without even the implied warranty of
+MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
+GNU General Public License for more details.
+
+You should have received a copy of the GNU General Public License
+along with this program.  If not, see <http://www.gnu.org/licenses/>
+*/

// Return a random ebin face
var ebinFaces = [":D", ":DD", ":DDD", ":-D", "XD", "XXD", "XDD", "XXDD", ":D:D",
                 "xD", "xDD", "xDDD", ":--D"];
function getEbinFace () {
	return ebinFaces[Math.floor(Math.random() * ebinFaces.length)];
}

// define replacements
var replacements = [
    ["you're", "your"],
    ["kek", "geg"],
	["epic", "ebin"],
	["some", "sum"],
	["meme", "maymay"],
    ["pretty", "breddy"],
    ["good", "gud"],
    ["else", "els"],
    ["fuck ", "fug "],
    ["you ", "yuo "],
    ["every", "evry"],
    [" is ", " iz "],
    
    ["alk", "olk"],
	["ing", "ign"],
    ["cious", "shus"],
    ["dge", "ge"],
    ["ight", "ite"],
    ["ght", "ghd"],
    ["ist", "isd"],
    
	["wh", "w"],
	["th", "d"],
    
	["af", "ab"],
	["ap", "ab"],
    
    ["bs", "bz"],
    
	["ca", "ga"],
	["ck", "gg"],
	["co", "go"],
    ["cr", "gr"],
    
    ["ds", "bs"],
    
    ["et", "ed"],
	["ev", "eb"],
    ["ex", "egz"],
    
    ["fs", "fz"],
    
	["gs", "gz"],
    
    ["ic ", "ig "],
	["iv", "ib"],
	["it", "id"],
    
    ["ka", "ga"],
	["ke", "ge"],
    ["kn", "gn"],
    
    ["ls", "lz"],
	["lt", "ld"],
    
	["mm", "m"],
    ["ms", "mz"],
    
    ["ng", "nk"],
    ["ns", "nz"],
	["nt", "nd"],
    
	["op", "ob"],
	["ot", "od"],
    
    ["pl", "bl"],
	["po", "bo"],
	["pe", "be"],
	["pi", "bi"],
    ["pr", "br"],
    
	["rk", "rg"],
    ["rs", "rd"],
    
    ["ss", "s"],
    
	["te", "de"],
    ["ti", "di"],
    ["ts", "ds"],
	["tr", "dr"],
    ["tt", "dd"],
    
    ["up", "ub"],
    
	["va", "ba"],
    ["vo", "bo"],	
];

function toSpurdo (string) {
	// Convert to lowercase (TODO: add upercase handling)
	string = string.toLowerCase();

	// apply replacements
	replacements.forEach(function(filter) {
		var replaceFrom = new RegExp(filter[0], "gm"),
			replaceTo = filter[1];

		string = string.replace(replaceFrom, replaceTo);
	});

	// Replace "," and "." with ebin faces
	while (string.match(/\.|,(?=\s|$)/m)) {
		string = string.replace(/\.|,(?=\s|$)/m, " " + getEbinFace());
	}

	// append an ebin face if not found
	var ebinFaceFound = false;
	ebinFaces.forEach(function (face) {
		if (string.indexOf(face) != -1) {
			ebinFaceFound = true;
		}
	});

	if (!ebinFaceFound) {
		string += " " + getEbinFace();
	}

	// return spurdo'd text
	return string;
}

if (typeof module != "undefined") {
	module.exports = toSpurdo
}
