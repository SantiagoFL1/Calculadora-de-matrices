/* PENDIENTE

Arreglar el texto de los inputs al ppio
*/

const m11= document.getElementById('m11')
const m12= document.getElementById('m12')
const m21= document.getElementById('m21')
const m22= document.getElementById('m22')

const m1= document.getElementById('m1')
const m2= document.getElementById('m2')

const MatricesCompletas = document.getElementById('MatricesCompletas')
const TablaM1 = document.getElementById('TablaM1')
const TablaM2 = document.getElementById('TablaM2')
const operacion= document.getElementById('operacion')
const MatrizResultado= document.getElementById('MatrizResultado')


const generar = document.getElementById('generar')

const Matriz1Completa = document.getElementById('Matriz1Completa')
const Matriz2Completa = document.getElementById('Matriz2Completa')

const RealizarOperacion = document.getElementById('RealizarOperacion')

let Multiplicables = true
let Sumables = true
let Divisibles = true
let Completas = true

let FilasM1 = []
let FilasM2 = []
let CeldasM1 = []
let CeldasM2 = []

let ColumnasM1 = []
let ColumnasM2 = []

generar.addEventListener('click',(c)=>{
    
    if (m11.valueAsNumber>9 || m11.value=='' || 
        m12.valueAsNumber>9 || m12.value=='' ||
        m21.valueAsNumber>9 || m21.value=='' ||
        m22.valueAsNumber>9 || m22.value=='' )
        {alert('Las dimensiones de las matrices deben ser entre 1 y 9')}
        else{

    FilasM1 = []
            FilasM2 = []
            CeldasM1 = []
            CeldasM2 = []
    MatrizResultado.innerHTML=''
    TablaM1.innerHTML=''
    TablaM2.innerHTML=''
    
         {
        MostrarMatrices=true
        
        const NFilas1 = m11.valueAsNumber
        const NColumnas1 = m12.valueAsNumber

        const NFilas2 = m21.valueAsNumber
        const NColumnas2 = m22.valueAsNumber
        
        if (NFilas1!==NFilas2 || NColumnas1!==NColumnas2){
            Sumables=false
    }
        else {
            Sumables=true
    }


        if (NColumnas1!==NFilas2){
            Multiplicables=false
        }
        else {
            Multiplicables=true
        }

        if (NFilas2!==1 || NColumnas2!==1){
            Divisibles=false
        }
        else {
            Divisibles=true
        }

        //PRIMERA MATRIZ
        
        for (let i=0;i<NFilas1;i++){
            const x = document.createElement('tr')
            x.setAttribute('id',`Fila${i}`)
            TablaM1.append(x)
            FilasM1.push(x)
            
            
            
            for (let j=0;j<NColumnas1;j++){
                const y = document.createElement('input')
                y.setAttribute('type','number')
                y.setAttribute('id',`ID${j}`)
                y.setAttribute('name',`${j}`)
                x.prepend(y)
                CeldasM1.push(y)

            }    
        }
        console.log(TablaM1)
        
        //SEGUNDA MATRIZ

        for (let k=0;k<NFilas2;k++){
            const x = document.createElement('tr')
            x.setAttribute('id',`Fila${k}`)
            TablaM2.append(x)
            FilasM2.push(x)
            
            for (let j=0;j<NColumnas2;j++){
                const y = document.createElement('input')
                y.setAttribute('type','number')
                y.setAttribute('id',`${j}`)
                y.setAttribute('class',`${j}`)
                x.prepend(y)
                CeldasM2.push(y)
            }    
        }
        console.log(TablaM2)
        MatricesCompletas.setAttribute('style','display:flex;')
        RealizarOperacion.setAttribute('style','display:flex;')

        //Operaciones




        RealizarOperacion.addEventListener('click',(c)=>{

            
            for (let j = 0; j<CeldasM1.length ; j++){
                if (CeldasM1[j].value===''){CeldasM1[j].value='0'} else {}}
            for (let j = 0; j<CeldasM2.length ; j++){
                if (CeldasM2[j].value===''){CeldasM2[j].value='0'}}

            const filas1 = TablaM1.children
            const filas2 = TablaM2.children

            let CeldasResultado = []
            let NumerosResultado = []

            MatrizResultado.innerHTML=''

            switch (operacion.value){

                    //SUMA
                
                case '+':{
                    switch (Sumables){
                        case false: alert('No se pueden sumar matrices de diferentes dimensiones.'); break;
                        case true: {
                            //sumas
                            for (let j = 0; j<CeldasM1.length ; j++){
                                if (CeldasM1[j].value===''){CeldasM1[j].value='0'} else {}
                                if (CeldasM2[j].value===''){CeldasM2[j].value='0'}
                                
                                let SumaCeldas = parseFloat(CeldasM1[j].value) + parseFloat(CeldasM2[j].value)
                                NumerosResultado.push(SumaCeldas)}
                                
                            //Crear matriz de resultado
                            for (let i = 0; i<FilasM1.length; i++){
                                const FilaResultado = document.createElement('tr')
                                FilaResultado.setAttribute('id',`FR${i}`)
                                MatrizResultado.appendChild(FilaResultado)
 
                                for (let j=0;j<FilasM1[0].children.length;j++){
                                    const y = document.createElement('th')
                                    FilaResultado.prepend(y)    
                                    CeldasResultado.push(y)}
                            }

                            for (celda of CeldasResultado){
                                celda.textContent=NumerosResultado[CeldasResultado.indexOf(celda)]
                               
                            } 
                            break;}
                    }
                    
                break;}

                //RESTA
                
                case '-':{

                    switch (Sumables){
                        case false: alert('No se pueden sumar matrices de diferentes dimensiones.'); break;
                        case true: {
                            //restas
                            for (let j = 0; j<CeldasM1.length ; j++){
                                if (CeldasM1[j].value===''){CeldasM1[j].value='0'} else {}
                                if (CeldasM2[j].value===''){CeldasM2[j].value='0'}
                                
                                let SumaCeldas = parseFloat(CeldasM1[j].value) - parseFloat(CeldasM2[j].value)
                                NumerosResultado.push(SumaCeldas)}
                                
                            //Crear matriz de resultado
                            for (let i = 0; i<FilasM1.length; i++){
                                const FilaResultado = document.createElement('tr')
                                FilaResultado.setAttribute('id',`FR${i}`)
                                MatrizResultado.appendChild(FilaResultado)
 
                                for (let j=0;j<FilasM2[0].children.length;j++){
                                    const y = document.createElement('th')
                                    FilaResultado.prepend(y)    
                                    CeldasResultado.push(y)}
                            }

                            for (celda of CeldasResultado){
                                celda.textContent=NumerosResultado[CeldasResultado.indexOf(celda)]
                          } 
                            break;}
                    }

                    break;
                }

                //MULTIPLICACIÓN

                case 'X':{
                    
                    switch (Multiplicables){
                        
                        case false:alert('No se puede multiplicar'); break;
                        case true: {
                            
                            let cantidadColumnas = FilasM2[0].children.length
                            
                                for (let i = 0 ; i<cantidadColumnas ; i++){
                                    let columna = document.getElementsByClassName(`${i}`)
                                    ColumnasM2.push(columna)
                            }
                            //console.log(ColumnasM2[0],ColumnasM2[1])


                       { /*    for (let i = 0 ; i<cantidadColumnas ; i++){
                           let TotalCelda1=0
                                for (let j=0 ; j<ColumnasM2[i].length ; j++){
                                    const Celda1 = parseFloat(FilasM1[i].children[j].value)
                                    const Celda2 = parseFloat(ColumnasM2[i][j].value)
                                    
                                    let ParcialCelda = Celda1*Celda2
                                    console.log(`${Celda1}*${Celda2}=${ParcialCelda}`)
                                    TotalCelda1+=ParcialCelda
                                }
                                console.log(TotalCelda1)
                            let TotalCelda2=0
                            for (let j=0 ; j<ColumnasM2[i].length ; j++){
                                const Celda1 = parseFloat(FilasM1[i].children[j].value)
                                const Celda2 = parseFloat(ColumnasM2[i][j].value)
                                
                                let ParcialCelda = Celda1*Celda2
                                console.log(`${Celda1}*${Celda2}=${ParcialCelda}`)
                                TotalCelda2+=ParcialCelda
                            }
                            console.log(TotalCelda2)


                            }*/}
                            
                            // CREAR MATRIZ DE RESULTADO
                             for (let i=0;i<FilasM1.length;i++){
                                 const FilaResultado = document.createElement('tr')
                                 FilaResultado.setAttribute('id',`FR${i}`)
                                 MatrizResultado.appendChild(FilaResultado)
                                 for (let j = 0 ; j<FilasM2[0].children.length; j++){
                                     const y = document.createElement('th')
                                     y.setAttribute('id',`${i}${j}`)
                                     y.textContent='japi'
                                     FilaResultado.prepend(y)    
                                     CeldasResultado.push(y)

                        }
                        for (let i=0 ; i<FilasM1.length ; i++){
                            
                    }}
                    
                            for (let i=0 ; i<CeldasResultado.length ; i++){
                                let ResultadoCelda = 0
                                let FilaM = FilasM1[CeldasResultado[i].id[0]].children
                                let ColumnaM = ColumnasM2[CeldasResultado[i].id[1]]
                                
                                for (let i=0 ; i<ColumnasM2[0].length ; i++){
                                    ResultadoCelda +=parseFloat(FilaM[i].value)*parseFloat(ColumnaM[i].value)
                                }
                         
                                CeldasResultado[i].textContent=ResultadoCelda
                            }
                }
                    }
                    break;
                
                }
                case '/':{
                    switch (Divisibles){
                        case false: alert('No se puede dividir una matriz entre otra; la segunda debe ser de 1x1');break 
                        case true:{
                            console.log(NColumnas1)
                            // CREAR MATRIZ DE RESULTADO
                            for (let i = 0; i<FilasM1.length; i++){
                                const FilaResultado = document.createElement('tr')
                                FilaResultado.setAttribute('id',`FR${i}`)
                                MatrizResultado.appendChild(FilaResultado)
 
                                for (let j=0;j<FilasM1[0].children.length;j++){
                                    const y = document.createElement('th')
                                    FilaResultado.prepend(y)    
                                    CeldasResultado.push(y)}
                            }
                            
                            //Operaciones
                            console.log(CeldasResultado)
                            for (x in CeldasM1){
                                CeldasResultado[x].textContent = parseFloat(CeldasM1[x].value)/parseFloat(CeldasM2[0].value)
                            }

                        }
                    }

                }
            }        
        })

}}})