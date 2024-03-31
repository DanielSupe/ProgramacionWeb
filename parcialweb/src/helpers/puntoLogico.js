const GetRayitas = (num,signo)=>{
    const len = num.toString().length;
    let rayitas = ""
    for(let a = 0; a < len;a++){
            rayitas += `${signo}`
    }
    return rayitas;
}


export const sumarCuadros = (arrayNumeros)=>{
    let string = ""
    let sum = 0;
    arrayNumeros.map((num)=>{
        sum += num
        const rayitas = GetRayitas(num,"-")
        string += `\n + ${rayitas} + \n | ${num} | \n + ${rayitas} +`
    })

    const rayitas = GetRayitas(sum,"=")
    string += `\n + ${rayitas} + \n | ${sum} | \n + ${rayitas} +`

    return string;

}

console.log(sumarCuadros([1,23,453,3267,12354, 123456]))