const contrasenaValida = (prop)=>{
   return ( prop == "2Fj(jjbFsuj" || prop == "eoZiugBf&g9")
}

console.log("Ejer1:",contrasenaValida("eoZiugBf&g9"))
//------------------------------------------
const bmi = (peso , altura)=>{
    const BMI = peso/(altura**2)
    console.log("BMI:",BMI)
    return (BMI < 18.5 ? "Bajo de peso":(BMI >= 18.5 && BMI <= 24.9 ? "Normal":(BMI >= 25 && BMI <= 29.9 ? "Sobrepeso":"Obeso" )) )
 }
 
 console.log("Ejer2:",bmi(52,1.75))//Peso en Kg y altura en m

//---------------------------------------------
 const imprimirArreglo = (list)=>{
    console.log("Ejer3------")
    list.map((item)=>{
        console.log(item)
    })
 }
 
imprimirArreglo([1, "Hola", 2, "Mundo"])
//----------------------------------------------------
const fizzBuzz = (numero)=>{
    return (numero % 5 == 0 && numero % 3 == 0 ? "fizzBuzz":(numero % 5 == 0?"buzz":(numero % 3 == 0? "fizz":numero)))
 }
 
 console.log("Ejer4:",fizzBuzz(30))

 //---------------------------------------------------------

 const contarRango = (num1, num2)=>{
    let contador = 0;
    for(let a = num1+1; a < num2;a++){
        contador += 1;
    }

    return contador;
 }
 
 console.log("Ejer5:",contarRango(1,9))


 //--------------------------------------
 const sumarRango = (num1,num2)=>{
    let contador = 0;
    for(num1; num1 <= num2;num1++){
        contador += num1;
    }

    return contador;
 }
 
 console.log("Ejer6:",sumarRango(12,14))

//---------------------------------------

const  numeroDeAes= (prop)=>{
    let contador = 0;
    for(let a = 0; a <= prop.length;a++){
        prop[a] =="a" ? contador+=1:null
    }

    return contador;
 }
 
 console.log("Ejer7:",numeroDeAes("abracadabra"))

 //----------------------------

 const numeroDeCaracteres = (palabra, caracter)=>{
    let contador = 0;
    for(let a = 0; a <= palabra.length;a++){
        palabra[a] == caracter ? contador+=1:null
    }

    return contador;
 }
 
 console.log("Ejer8:",numeroDeCaracteres("eeee", "e"))

 //---------------------------
 const sumarArreglo  = (prop)=>{
      let contador = 0;
    for(let a = 0; a < prop.length;a++){
        contador += prop[a];
    }

    return contador;
}

console.log("Ejer9:",sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//---------------------------------------

 const multiplicarArreglo   = (prop)=>{
      let contador = 1;
    for(let a = 0; a < prop.length;a++){
        contador *= prop[a];
    }

    return contador;
}

console.log("Ejer10:",multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8]))