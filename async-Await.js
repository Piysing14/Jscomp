async function fetchApi(){
    let a=  await fetch('https://github-contributions-api.jogruber.de/v4/Piysing14')
    let data=await a.json()
    console.log(data);
}

fetchApi();
