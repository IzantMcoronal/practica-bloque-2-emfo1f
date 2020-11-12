// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3).
// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.
// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)".
// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc".
// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".

//Creamos la clase User y dentro creamos el constructor.
class User {
  
  //Creamos el constructor y le declaramos los valores.
  constructor(name, money, any) {
  this.name = name;
  this.money = money;
  this.showMeTheMoney = any;
  }
}

// Con fetch obtenemos la lista de usuarios que estan dentro del archivo users.json y ademas lo meto dentro del array tenmporal data.
fetch("./users.json").then(response => response.json()).then(data => {console.log(data) // visualizamos por consola que lo recoja

// Introducimos los datos en un array para tenerlos  
let newUser = data;

// mapeamos los users antes de meterlos en el array con el nombre y el dinero 
newUser = newUser.map(newUser => new User(newUser.name, newUser.money, showMeTheMoneyFunc));

// aqui en este array meteremos los users
const users = [];
     
//recorremos el array y pusheamos los usuarios al array user.
newUser.forEach(newUser => users.push(newUser));
console.log(users) // vemos que guarda los objetos como tipo User

//Ejecutamos el método "showMeTheMoney" al tercer usuario del array llamado "Roberto".     
users[2].showMeTheMoney();
});

//Funcion que mos dira el dinero del usuario seleccionado
function showMeTheMoneyFunc() {
  
// Alerta para poder mostrar el mensaje
alert("El dinero del usuario " + this.name + " es de: " + this.money + "$");
}