var i = 0;
var arr = [];
var brr = ["name","email","qq","mobile","user"];
console.log(brr[i] + ":");
process.stdin.on("data", function(data){
    arr[i] = data.toString();
    i++;
    console.log(brr[i] + ":");
    if(i==4){
        var user = {
            name : arr[0],
            email : arr[1],
            QQ : arr[2],
            mobile : arr[3]
        }
        console.log(user);
        process.exit();
    }
        

})
