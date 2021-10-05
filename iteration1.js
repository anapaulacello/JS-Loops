function incluye(array){
    /* let valores=''; */
    for (let index = 0; index < array.length; index++) {
        if (array[index].includes("Camiseta")) {
            console.log(index);
        }
        
    }
    
}
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
incluye(products);