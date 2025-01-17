// async function fetchApi(){
//     let a=  await fetch('https://github-contributions-api.jogruber.de/v4/Piysing14')
//     let data=await a.json()
//     let allContri=0;
//     const all=Object.keys(data.total)
//     const totalLength = Object.keys(data.total).length;
//     for(let i=0;i<totalLength;i++){
//         console.log(`Contribution in Year ${all[i]}:`,data.total[all[i]])
//         allContri+=data.total[all[i]];
//     }
//     console.log(`Total Contributions : ${allContri}`)
// }

// fetchApi();



async function findGraph(userName){
  await fetch(`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${userName}&theme=default`)
  .then(response => response.blob())  // Get the image as a Blob
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);  // Create an object URL for the Blob
    const imgElement = document.createElement('img');  // Create an img element
    imgElement.src = imageUrl;  // Set the image URL as the source of the img element
    document.body.appendChild(imgElement);  // Append the img element to the DOM
  })
  .catch(error => console.log('Error fetching image:', error));

}

findGraph();

