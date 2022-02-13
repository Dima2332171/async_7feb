async function getCharacters(){
  const respon = await fetch ("https://rickandmortyapi.com/api/character");
  const data = await respon.json();
  return data;
}

async function getLocation(){
  const respon = await fetch ('https://rickandmortyapi.com/api/location');
  const data = await respon.json();
  return data;
}

async function getEpisot(){
  const respon = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await respon.json();
  return data;
}

async function realise(){
  const infCharacters = await getCharacters();
  const elemCharacters = infCharacters.results;
  const infLocation = await getLocation();
  const elemLocation = infLocation.results;
  const infEpisot = await getEpisot();
  const elemEpisot = infEpisot.results;
  
  for(let i = 0; i<elemCharacters.length; i++){
    const div = document.createElement('div');
    div.textContent = `Имя персонажа: ${elemCharacters[i].name}, место положение: ${elemLocation[i].name} эпизот: ${elemEpisot[i].name}`;
    document.body.appendChild(div);
  }
}

realise();