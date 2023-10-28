let obj = {
    name : "Pradeep Singh",
    language : "Hindi",
    indian : true,
    checkLocality : function (){
        console.log(`He is indian :${this.indian}...`);
    }
}
obj.checkLocality()