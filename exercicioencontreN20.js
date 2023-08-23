function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid; // Valor encontrado, retorna o índice
        } else if (array[mid] < target) {
            left = mid + 1; // Procura na metade direita
        } else {
            right = mid - 1; // Procura na metade esquerda
        }
    }

    return -1; // Valor não encontrado
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const target = 20;

const index = binarySearch(array, target);

if (index !== -1) {
    console.log(`O valor ${target} foi encontrado no índice ${index}.`);
} else {
    console.log(`O valor ${target} não foi encontrado no array.`);
}
