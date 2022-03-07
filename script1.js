var speech= "I like big turtles. Do you like turtles? Awesome! hahaha ha . What's going on????";
var speech = speech.replace(/\?/g, ".");
var speech = speech.replace(/\!/g, ".");
var ans=speech.split(".")
for(i in ans){
    ans[i]= ans[i].trim();
    if(ans[i].split(' ').length>3)
    {
    console.log(ans[i]);
    }  
}