
const log=console.log;


const testMap = ()=>{
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map((value)=>value*2);
    log(doubled);
};
export function functional(){
    testMap();
}