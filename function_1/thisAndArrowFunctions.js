let obj = {
    name : "Pradeep Singh",
    language : "Hindi",
    indian : true,
    checkLocality : function (){
        console.log(`He is indian :${this.indian}...`);
        console.log(`His name is : ${this.name}`);
        console.log(`His language is : ${this.language}`);
    }
}
obj.checkLocality()

// Arrow functions...
let haveId = true
const isNewUser = () => {
    if(haveId = true)
    {
        console.log(`Redirect him/her to login page...`);
    }
    else{
        console.log(`Redirect him/her to signUp page...`);
    }
}
isNewUser()