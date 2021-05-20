var autoPlay = function(){
  // if (set_autoPlay){
  if ((finLoading) && (listening)){ //send msg to pd and svg
    let freq = readLattice(counter)
    midi = convertToMidi(freq);
    console.log(midi);
    addNote(counter,midi);
    osc.i(0).message([freq])
    counter++;
  }
    timeout = setTimeout(autoPlay, bpm);
}
var timeout = setTimeout(autoPlay, bpm);

function readLattice( ind ){
  return (Math.pow(2,latticePitchContents[ind])*f0) ;
}


function convertToMidi( f ){
  return Math.round((Math.log(f/440)/Math.log(2))*12+69);
}

function addNote(counter,midi){
  let xpos = 70; //this is middle C
  let ypos = 78;
  let yunit = 5;
  let xunit = 20;
  xpos = xpos + (counter*xunit);
  ypos = ypos + (60-midi)*yunit;

  var svg = document.getElementsByTagName('svg')[0];
  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./assets/quarter.svg");
  img.setAttributeNS(null, 'x', xpos);
  img.setAttributeNS(null, 'y', ypos);
  svg.appendChild(img);

}

// opt refers to clef
function addStaffLine( opt ){
  var svg = document.getElementsByTagName('svg')[0];
  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./assets/staff.svg");
  svg.appendChild(img);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
