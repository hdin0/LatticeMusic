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
  latticePitchContents = await loadFile(file).then(parseData); //to fix later. Surely it's not efficient to have to load and wait everytime for the promise to finish.
  for(let i = 0; i< latticePitchContents.length; i++){
    latticePitchIntegerContents[i] = getPitchInteger(latticePitchContents[i]);
  }
  finLoading = true;
  // init();
  // animate();
  // console.log(1);
}
handleData('./sept11pValuesByLine.txt')

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
