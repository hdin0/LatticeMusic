/* LOADS FILE */
async function loadFile(url) {
  const req = await fetch(url);
  return req.text();
}

function parseData( text ) {
  //split into lines
  text.split('\n').forEach( (line) => {
    parts.push( line );
  });
  return parts;
};

async function handleData( file ){
  latticePitchContents = new Array( 64000 );
  parts = [];
  latticePitchContents = await loadFile(file).then(parseData);
  finLoading = true;
}
handleData('./lattice_files/sept11pValuesByLine.txt');

function getPitchInteger( latticePitchIndex ) {
  let val = latticePitchContents[latticePitchIndex];
  // console.log(val);
  switch (Math.round(val*12)) {
    case 0:
      return 0;
      break;
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 5;
      break;
    case 6:
      return 6;
      break;
    case 7:
      return 7;
      break;
    case 8:
      return 8;
      break;
    case 9:
      return 9;
      break;
    case 10:
      return 10;
      break;
    case 11:
      return 11;
      break;
    case 12:
      return 0;
  }
}

// This is only used for index3, changing files.
function chooseFile( ind ){
console.log(latticePitchContents[0])
  switch (ind){
    case 1:
      handleData('./lattice_files/sept11pValuesByLine.txt').then(liston);
    break;
    case 2:
      handleData('./lattice_files/sept14pValuesByLine.txt').then(liston); //nrep 20
    break;
    case 3:
      handleData('./lattice_files/sept8pValuesByLine.txt').then(liston) //nrep 30
    break;
    case 4:
      handleData('./lattice_files/a9pValuesByLine.txt') //nrep 60
    break;
    case 5:
      handleData('./lattice_files/testpValuesByLine.txt').then(liston)
    break;
  }


}

// I don't think I need a function for this? used only in chooseFile function.
function liston(){
  listening = 1;
}
