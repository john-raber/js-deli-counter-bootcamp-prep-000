var katzDeliLine= [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing() {
  if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
  } else {
      return katzDeliLine.shift()
  }
}