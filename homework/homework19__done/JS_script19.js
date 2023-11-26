const createDeepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const value = obj[key];
        copy[key] = createDeepCopy(value);
    }
    return copy;
}

const originalObj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
  },
};

let copyObj = createDeepCopy(originalObj);
copyObj.address.city = "Kiev";
copyObj.name = "Li";

console.log("Original: ", originalObj);
console.log("Copy: ", copyObj);