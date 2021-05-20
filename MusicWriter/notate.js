var autoPlay = function(){
  // if (set_autoPlay){
  if ((finLoading) && (listening)){ //send msg to pd and svg
    let freq = readLattice(counter)
    midi = convertToMidi(freq);
    console.log(midi);
    addNote(midi);
    osc.i(0).message([freq])
    counter++;
    notepositionCounter++;
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

// determines position of notes.
function detPosition(){
  let xpos = 70; //this is middle C
  let ypos = 78;
  let yunit = 5;
  let xunit = 20;
  let linespace = 100;
  xpos = xpos + (notepositionCounter*xunit);
  if (xpos>560){
    xpos=70;
    notepositionCounter=0;
    lineNo++;
    addStaffLine( lineNo )
  }
  ypos = ypos + (60-midi)*yunit + (linespace*lineNo);

  return [xpos,ypos];
}

function addNote(midi){
  let p = detPosition();
  var svg = document.getElementsByTagName('svg')[0];
  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./assets/quarter.svg");
  img.setAttributeNS(null, 'x', p[0]);
  // img.setAttributeNS(null, 'x', 560);
  img.setAttributeNS(null, 'y', p[1]);
  svg.appendChild(img);

}

// opt refers to clef
function addStaffLine( lineNo ){
  let linespace = 100; //same as earlier, should organize fields.
  let ypos = linespace*lineNo;
  var svg = document.getElementsByTagName('svg')[0];
  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./assets/staff.svg");
  img.setAttributeNS(null, "x", -110);
  img.setAttributeNS(null, "y", ypos);
  img.setAttributeNS(null, "width", 700);
  img.setAttributeNS(null, "height", 350);
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
