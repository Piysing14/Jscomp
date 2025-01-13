//Repaet string n times

function string_copies(str,n) 
{   
    if(n<=0) return "";

    else return str.repeat(n);

}

console.log(string_copies("hello",2));