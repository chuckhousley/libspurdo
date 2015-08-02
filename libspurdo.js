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

function toSpurdo(string) {
    // define replacements
    replacements = [
        ["[.]", " :DD"],
        [",", " XDD"],
        ["''", ""],

        ["wh", "w"],
        ["th", "d"],

        ["af", "ab"],
        ["ap", "ab"],
        ["ca", "ga"],
        ["ck", "gg"],
        ["co", "go"],
        ["ev", "eb"],
        ["ex", "egz"],
        ["et", "ed"],
        ["iv", "ib"],
        ["it", "id"],
        ["ke", "ge"],
        ["nt", "nd"],
        ["op", "ob"],
        ["ot", "od"],
        ["po", "bo"],
        ["pe", "be"],
        ["pi", "bi"],
        ["up", "ub"],
        ["va", "ba"],

        ["ck", "gg"],
        ["cr", "gr"],
        ["kn", "gn"],
        ["lt", "ld"],
        ["mm", "m"],
        ["nt", "dn"],
        ["pr", "br"],
        ["ts", "dz"],
        ["tr", "dr"],

        ["bs", "bz"],
        ["ds", "dz"],
        ["es", "es"],
        ["fs", "fz"],
        ["gs", "gz"],
        [" is", " iz"],
        ["ls", "lz"],
        ["ms", "mz"],
        ["ns", "nz"],
        ["rs", "rz"],
        ["ss", "sz"],
        ["ts", "tz"],
        ["us", "uz"],
        ["ws", "wz"],
        ["ys", "yz"],

        ["alk", "olk"],
        ["ing", "ign"],

        ["ic", "ig"],
        ["ng", "nk"],

        ["kek", "geg"],
        ["epic", "ebin"],
    ];

    // apply replacements
    replacements.forEach(function(filter) {
        replaceFrom = new RegExp(filter[0], "gi");
        string = string.replace(replaceFrom, filter[1]);
    });

    // append ":D" if not found
    if (string.indexOf(":D") < 0) {
        string = string + " :DD";
    }

    // return spurdo'd text
    return string;
}

if (typeof module != "undefined") {
    module.exports = toSpurdo
}
