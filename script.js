function gethistory() {
  return document.getElementById("history-value").innerText;
}

function printhistory(num) {
  document.getElementById("history-value").innerText = num
}

function getoutput() {
  return document.getElementById("output-value").innerText;
}

function printoutput(num) {
  if (num == "") {
    document.getElementById
  }
  document.getElementById("output-value").innerText = getformattednumber(num)
}

function getformattednumber(num) {
  if (num=="-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString();
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    if (this.id == "clear") {
      printhistory("");
      printoutput("0");
    }
    else if (this.id == "backspace") {
      var output = reverseNumberFormat(getoutput()).toString();
      if (output) {//if output has a value
        output = output.substr(0, output.length - 1);
        printoutput(output);
      }
    }
    else {
      var output = getoutput();
      var history = gethistory();
      if (output=="" && history!=""){
        if(isNaN(history[history.length-1])){
          hsitory=history.substr(0,history.length-1);
        }
      }
    
   
      if (output!= ""|| history!="") {
        output=output==" "?
        output:reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printoutput(result);
          printhistory("");
        }
        else{
          history=history+this.id;
          printhistory(history);
          printoutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    var output = reverseNumberFormat(getoutput());
    // alert(output);
    if (output != NaN) {
      output = output + this.id;
      printoutput(output);
    }
  });
}