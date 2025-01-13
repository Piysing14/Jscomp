//To check if a point lies in or out of circle

function check_a_point(a, b, x, y, r) {
    let distance=((x-a)**2+(y-b)**2)**0.5;
    if(distance>=r) return false;
    else return true;

}

console.log(check_a_point(2,8,5,5,7));