/**
 * Created by 31040701SL141040 on 4/25/2017.
 */
function compareString(){
    var str1 = document.getElementById('first').value;
    var str2 = document.getElementById('second').value;

    var regularize = function(str){
        return str.toLocaleLowerCase().split('').sort().join('').trim();
    }

    var x = regularize(str1);
    var y = regularize(str2);

    if (x === y) {
        this.isAnagram = true;
        document.getElementById('text').innerHTML = '"' + str1 + '"' + " and " + '"' + str2 + '"' + " are anagrams.";
    } else {
        this.isAnagram = false;
        document.getElementById('text').innerHTML = '"' + str1 + '"' + " and " + '"' + str2 + '"' + " are not anagrams.";
    }
}