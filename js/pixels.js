/**
 * **** BISMILLAH-HIRRAHMAH-NIRRAHEEM ***
 * Created by samuleghurry on 21/01/2018.
 */

var pixelGeneratorCode = {
    "A":"_..._/.___./.___./.___./...../.___./.___.",
    "B":"...._/.___./.___./...._/.___./.___./...._",
    "C":"_..../.____/.____/.____/.____/.____/_....",
    "D":"...._/.___./.___./.___./.___./.___./...._",
    "E":"...../.____/.____/...._/.____/.____/.....",
    "F":"...../.____/.____/...._/.____/.____/.____",
    "G":"_..../.____/.____/.__../.___./.___./_....",
    "H":".___./.___./.___./...../.___./.___./.___.",
    "I":"...../__.__/__.__/__.__/__.__/__.__/.....",
    "J":"__.../____./____./____./.___./.___./_..._",
    "K":".___./.__._/._.__/..___/._.__/.__._/.___.",
    "L":".____/.____/.____/.____/.____/.____/.....",
    "M":".___./.._../._._./.___./.___./.___./.___.",
    "N":".___./..__./._._./.__../.___./.___./.___.",
    "O":"_..._/.___./.___./.___./.___./.___./_..._",
    "P":"...._/.___./.___./.___./...._/.____/.____",
    "Q":"_..._/.___./.___./.___./._._./.__../_..._",
    "R":"...._/.___./.___./...._/.__._/.___./.___.",
    "S":"_..../.____/.____/_..._/____./____./...._",
    "T":"...../__.__/__.__/__.__/__.__/__.__/__.__",
    "U":".___./.___./.___./.___./.___./.___./_..._",
    "W":".___./.___./.___./.___./._._./.._../.___.",
    "X":".___./.___./_._._/__.__/_._._/.___./.___.",
    "Y":".___./.___./.___./_._._/__.__/__.__/__.__",
    "Z":"...../____./___._/__.__/_.___/.____/.....",
    ".":"___/___/___/___/___/___/_._",
    "-":"_____/_____/_____/_..._/_____/_____/_____",
    "/":"____./____./___._/__.__/_.___/.____/.____",
    "\\":".____/.____/_.___/__.__/___._/____./____.",
};

$.fn.pixxelate = function(word) {
    var pixelSpaceCode = "_";
    var pixelRows = 7;

    var codeForEacRow = [];
    for (var pixelRow = 0; pixelRow < pixelRows; pixelRow++) {
        var code = "";

        for (var charIndex = 0; charIndex < word.length; charIndex++) {
            var letter = word.charAt(charIndex);

            if (pixelGeneratorCode[letter]) {
                code += pixelGeneratorCode[letter].split("/")[pixelRow];

                // Only add space if its not the last character,
                if (charIndex != (word.length - 1))code += pixelSpaceCode;
            }
        }

        codeForEacRow.push(code);
    }

    var pixels = "";
    for (row = 0; row < codeForEacRow.length; row++) {
        var rowCode = codeForEacRow[row];

        for (var col = 0; col < rowCode.length; col++) {
            var newline = (col == 0) ? " br" : "";

            if (rowCode.charAt(col) == ".") {
                pixels += "<pixel class='r-" + row + " c-" + col + " white" + newline + "'></pixel>";
            } else if (rowCode.charAt(col) == "_") {
                pixels += "<pixel class='r-" + row + " c-" + col + " blank" + newline + "'></pixel>";
            }
        }
    }

    return $(this).append("<pixels>" + pixels + "</pixels>");
};
