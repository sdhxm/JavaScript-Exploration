let jsonData = '[{"name": "syakila", "age": 19}, {"name": "delina", "age": 18}]';
let parsedData = JSON.parse(jsonData); // Mengubah JSON string menjadi array of objects

console.log(parsedData[0].name); 
