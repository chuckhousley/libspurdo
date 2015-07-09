module.exports = function(string) {
    // define replacements
    replacements = [
        ["[.]", " :DD"],
        [",", " XDD"],
        ["''", ""],

        ["wh", "w"],
        ["th", "d"],

        ["af", "ab"],
        ["at", "ad"],
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
        ["up", "ub"],

        ["ic", "ig"],

        ["ck", "gg"],
        ["cr", "gr"],
        ["kn", "gn"],
        ["lt", "ld"],
        ["mm", "m"],
        ["ng", "nk"],
        ["nt", "dn"],
        ["pr", "br"],
        ["ts", "dz"],
        ["tr", "dr"],

        ["as", "az"],
        ["bs", "bz"],
        ["ds", "dz"],
        ["es", "es"],
        ["fs", "fz"],
        ["gs", "gz"],
        ["is", "iz"],
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
