function filterBy(arr, dataType) {
 return arr.filter((item) => typeof item !== dataType);
}

const inputArray = ['hello', 'world', 23, '23', null];
const dataTypeToFilter = 'string'; // Тип даних для фільтрації

const filteredArray = filterBy(inputArray, dataTypeToFilter);
console.log(filteredArray);
