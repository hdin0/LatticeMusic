var autoPlay = function(){
  // if (set_autoPlay){
  if ((finLoading) && (listening)){ //send msg to pd and svg
    let freq = readLattice(counter)
    midi = convertToMidi(freq);
    addSVG(1,midi);
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

// <button onclick="addSVG(1,)">Add</button>
function addSVG(type,midi) {
  node = document.getElementById("drawing");
  let dis = (49-midi)*2 + (noteH*ch)+15;
  switch (type){
    case 1:
      href='./assets/quarter2.svg#quarter';

      // let xpos = 1;
      // let ypos = 1;
    break;
      href='./assets/staff.svg#staff';
    case 2:
    break;
    case 3:
    break;
  }
  node.innerHTML+='<' + 'svg role="presentation"' + '><' + 'use xlink:href="' + href + '" y="' + dis + '"/' + '><' + '/svg' + '>';
  // console.log(1)
  // node.parentNode.replaceChild(node.lastChild, node);

  if ((noteW*cw) > (window.innerWidth-300)){
    cw = 1;
    ch++;
  }
}
