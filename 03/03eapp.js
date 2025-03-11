import{writeFile,readFile} from 'fs';
import { start,use } from './cmdframework.js';
use("sum", function sum(input){
            
    console.log(Number(input[0]) + Number(input[1]));
} )
use("minus",function minus(input){
    console.log(Number(input[0]) - Number(input[1])); })

use("print", function print(input){
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
}
console.log(obj);
})
use("print2",function print2(input){
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    for(let x in obj){
        console.log('salam: ' + obj[x]);
    }
} )
use("write",function write(input){
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    function writeCallback(error, data){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('write done.');
        }
    }
    writeFile('./data.txt', JSON.stringify(obj), writeCallback);
} )
use("create",function create(input){
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    
} )
use("read",function read(input){
    readFile('./data.json', 'utf8', function (error, data){
        if(error){
            console.log('error',error);  
        }
        else{
            console.log('file data:',JSON.parse(data));
        }
       });
} )
start();