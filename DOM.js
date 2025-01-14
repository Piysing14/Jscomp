//HTML Code
{/* <div style="background-color: yellow; padding: 2rem">
    Hello jee
    <div id="mydiv" style="background-color: aqua; padding: 1rem">
      <p id="fpara">First</p>
      <h1>Second</h1>
      <p>Third</p>
    </div>
  </div> */}

let myDiv=document.querySelector("#mydiv");
let newElement= document.createElement('span');
newElement.textContent="Piyush";
myDiv.insertAdjacentElement('afterend',newElement);

let child=document.querySelector('#fpara');
let parent=child.parentElement;
parent.removeChild(child);