const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function aprobado(array){
    let temp=0;
   for (let i = 0; i < array.length; i++) {
           if (array[i].T1==true && array[i].T2==true || array[i].T1==true && array[i].T3==true || array[i].T2==true && array[i].T3==true) {
            array[i].isApproved =true;

           }
           else{
            array[i].isApproved = false;
           }
           
       }
       
    for (let i = 0; i < array.length; i++) {
        for (const property in array[i]) {
            console.log(`${property}: ${array[i][property]}`);
        }
        
    } 
   
}
aprobado(alumns);