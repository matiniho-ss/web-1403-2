
let input = process.argv.slice(3);
let command = process.argv[2];


let controllers=[]

function use(name , func){
    let item={
    command:name,
    function: func
}
    controllers.push(item)
}
function start(){
for(let item of controllers){
    if(item.command===command){
    item.function(input);
    }
}
}
export{
    start,
    use
}