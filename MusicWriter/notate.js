function hear( note_ind ){

}

var autoPlay = function(){
  // if (set_autoPlay){
  if ((finLoading) && (listening)){ //send msg to pd and svg
    let freq = readLattice(counter)
    midi = convertToMidi(freq);
    osc.i(0).message([freq])
    addNew(midi);
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

function addNew( midi ){
  if (cw==1){
    let staff = SVG().addTo('#drawing');
    draw.use('treble_staff','./assets/staff.svg').move(cw,0);
    draw.use('lines','./assets/lines.svg').move(283.511,0);
    draw.use('lines','./assets/lines.svg').move(2*283.511,0);
draw.use('treble_staff','./assets/staff.svg').move(cw,0);
    // console.log(staff_ele);
    // staff_ele.resize(100,200);

    console.log(draw);

  }
  let note = new SVG().addTo('#drawing');
  note.size(15,42);
  draw.use('svg5','./assets/quarter2.svg').move((noteW*cw)+5,(49-midi)*2+(noteH*ch+5)); //49 is A concert pitch, 440, the higher the number, the lower on the screen (y).
  if ((noteW*cw) > (window.innerWidth-300)){
    cw = 1;
    ch++;
  }
  cw++;
}
