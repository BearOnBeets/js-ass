var speech= "I like big turtles 9326585150 kkkkkkkkkkkkkk. Do you like turtles? Awesome! hahaha ha . What's going on????";
var speech = speech.replace(/\./g, "@.");
var speech = speech.replace(/\?/g, "?.");
var speech = speech.replace(/\!/g, "!.");
var line=speech.split(".");
for(j in line)
{
line[j]=line[j].trim();
var ans=line[j].split(" ");

for(i in ans)
{
    if(ans[i].length==10 && !isNaN(ans[i]))
    {
        ans[i]='XXXXXXXXXX';
    }
}

var speech = ans.join(" ");
speech = speech.replace(/\@/g, ".");
console.log(speech);
}



