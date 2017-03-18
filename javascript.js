
var btn = document.getElementById('playground-button');
var tlate = document.getElementById('translated');
var regx = new RegExp(/[^a-zA-Z\s]/g);

function toPigLatin(str) {
  var finalArr = [];
  var strArray = str.split(' ');
  strArray.forEach(function(curr, index){
      curr = curr.toLowerCase();
  var wordArr = curr.split('');
  var vowelIndex = [];
  var vowels = ["a","e","i","o","u"];
  
 for (var i = 0; i < curr.length; i++) {
   if (vowels.indexOf(curr[i]) !== -1) {
     vowelIndex.push(i);
   }
 }
  if (vowelIndex[0] === 0) {
    wordArr.push("way");
  } else if (vowelIndex[0] > 0) {
   var sliced = wordArr.slice(0, vowelIndex[0]);
   wordArr.push(sliced.join('')+"ay");
   wordArr.splice(0,vowelIndex[0]);
  }
  finalArr.push(wordArr.join(""));
    });
  return finalArr.join(" ");
}

btn.addEventListener('click', function() {
    var inpt = document.getElementById('playground-text').value;
    if(regx.test(inpt) === true) {
        tlate.innerText = "Please exclude special characters." 
    } else {
    tlate.innerText = toPigLatin(inpt);
    }
    });