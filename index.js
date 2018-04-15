var katzDeliLine= [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  var x = 0;
  if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
  } else {
      while (x < katzDeliLine.length) {
        line = line + `${x + 1}. ${katzDeliLine[x]}, `;
        x++;
      }
    }
}