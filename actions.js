// const calcularInpuesto= (edad,ingresos)=>{
//     // if(edad >= 18 && ingresos >= 1000){
//     //     return (ingresos*40)/100
//     // }
//     return edad >= 18 && ingresos >= 1000 ? (ingresos*0.4) :null
// }
// console.log(calcularInpuesto(18,1000));

const likes= (numero)=>{
    let numeroa = `${numero}`;
    const cantidad = numeroa.length;
    return cantidad >= 4 && cantidad <= 6 ? `${numero}K`:cantidad > 6 ?`${numero}M`: numero
}
console.log(likes(100));

