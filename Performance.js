//Performing on blank HTML page

let t1=performance.now();

for(let i=1;i<=100;i++){
  let p=document.createElement('p');
  p.textContent=`This is Para ${i}`
    document.body.appendChild(p);
}
let t2=performance.now();
console.log("Time for code 1:",t2-t1);


let t3=performance.now();
let div=document.createElement('div')

for(let i=1;i<=100;i++){
  let p=document.createElement('p');
  p.textContent=`This is Para ${i}`  
  div.appendChild(p)
}
document.body.appendChild(div);
let t4=performance.now();
console.log("Time for code 2:",t4-t3);

//best practice

let fragment= document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let p=document.createElement('p');
    p.textContent=`This is Para ${i}`  
    //No reflow and no repaint for the below line
    fragment.appendChild(p)
  }

  // below line takes only 1 reflow and 1 repaint
  document.body.appendChild(fragment);


