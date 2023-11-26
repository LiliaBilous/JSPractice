function filterCollection(arr, string, boolean, name1, name2) {
    
}



// Приклад виклику функції
const vehicles = [
    {
      name: 'Toyota Corolla',
      description: 'A compact car from Toyota',
      locales: [
        { name: 'en_US', description: 'English description' },
        { name: 'es_ES', description: 'Spanish description' },
      ],
    },
    {
      name: 'Honda Accord',
      description: 'A mid-size car from Honda',
      locales: [
        { name: 'fr_FR', description: 'French description' },
        { name: 'de_DE', description: 'German description' },
      ],
    },
  ];
  
  const filteredVehicles = filterCollection(vehicles, 'en_US Toyota', true, 'name', 'description', 'locales.name', 'locales.description');
  console.log(filteredVehicles);