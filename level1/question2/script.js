//Console.log out elements in JSON file

var input = '{"id": 12312412312, "name": "Ecuaciones Diferenciales", "url": "/video/math/edo/12312412312", "author": {"data": [{"name_author": "Alejandro Morales", "url": "/author/alejandro-morales", "type": "master"}]}}'
var jsonObject = JSON.parse(input);
console.log(jsonObject.id);
console.log(jsonObject.name);
console.log(jsonObject.url);
console.log(jsonObject.author);