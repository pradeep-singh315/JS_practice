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