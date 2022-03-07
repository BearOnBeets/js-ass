var maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}
for(i=0;i<sortable.length;i++)
{
    for(j=0;j<sortable.length;j++)
    {
        console.log(sortable[j][1]);
        if(sortable[i][1]>sortable[j][1])
        {
            var temp=sortable[i][1];
            sortable[i][1]=sortable[j][1];
            sortable[j][1]=temp;
        }
    }
} 
console.log(sortable);
