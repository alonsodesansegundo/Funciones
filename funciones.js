/**
 * 
 * @file  Resumen de funciones en javascript
 * @author Lucas Alonso
 * @version 1.0
 */

/**
 * @description piramideMediaInversa
 * @example 012345
 * @example 01234
 * @example 0123
 * @example 012
 * @example 01
 * @example 1
 
 *           
 * @param {number} altura Altura de la pirámide
 * @returns {void} Muestra en consola una media pirámide inversa
 */
function piramideMediaInversa(altura){
    for(let i=0;i<altura;i++){
        let linea="";
        for(let j=altura-i;j>=0;j--){
            linea=linea+j;
        }
        console.log(linea);
    }
    console.log(0);
}

/**
 * @description A esta función, le introducimos una altura y nos devuelve media piramide en posicion normal, cuya altura es la establecida
 * @example 1
 * @example 01
 * @example 012
 * @example 0123
 * @example 01234
 * @example 012345
 * 
 * @param {number} altura Altura de la pirámide
 * @returns {void} Muestra en consola media pirámide en posición normal
 */
function piramideMedia(altura){
    let contador=0;
    for(let i=0;i<=altura;i++){
        let linea="";
        for(let j=altura-i;j>0;j--){
            linea=linea+" ";
        }
        for(let k=i;k>=0;k--){
            linea=linea+k;
        }
        console.log(linea);
    }    
}

/**
 * @description A esta función, le introducimos una altura y nos devuelve una piramide normal, cuya altura es la establecida

 * @param {number} altura Altura de la pirámide
 * @return {void} Muestra en consola una pirámide en posición normal
 */
function piramide(altura){
    let contador=0;
    for(let i=0;i<=altura;i++){
        let linea="";
        for(let j=altura-i;j>0;j--){
            linea=linea+" ";
        }
        for(let j=i;j>=0;j--){
            linea=linea+j;
        }
        if(i>0){
        for(let j=1;j<=i;j++){
            linea=linea+j;
        }
    }   
        console.log(linea);
    }    
}

/**
 * @description piramideAsteriscos Función que muestra por consola una pirámide de asteriscos          
 * @param {number} altura Altura de la pirámide de asteriscos
 * @returns {void} Muestra en consola una pirámide de asteriscos en posición normal
 */
function piramideAsteriscos(altura){
    let contador=0;
    for(let i=0;i<=altura;i++){
        let linea="";
        for(let j=altura-i;j>0;j--){
            linea=linea+" ";
        }
        for(let j=i;j>=0;j--){
            linea=linea+"*";
        }
        if(i>0){
        for(let j=1;j<=i;j++){
            linea=linea+"*";
        }
    }   
        console.log(linea);
    }  

}


piramideMediaInversa(8);
piramideMedia(8);
piramide(8);
piramideAsteriscos(8);
