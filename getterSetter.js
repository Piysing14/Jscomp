let obj={
    firstName:"Piyush",
    surName:"Khati",

    get getFullName(){
        console.log(this.firstName+" "+ this.surName);
    },

    set setFullName(para){
        this.firstName=para.fName;
        this.surName=para.sName;
    }
}

obj.setFullName={fName:"Peeyush", sName:"Singh"};
obj.getFullName;