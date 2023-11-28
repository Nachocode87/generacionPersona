/*crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

class Persona {
    #edad;
    #dni;
    #nombre;
    #sexo;
    #peso;
    #altura;
    #anio;

    constructor(nombreP,edadP,dniP,sexoP,pesoP,alturaP,anioP) {
        this.#edad = edadP;
        this.#dni = dniP;
        this.#nombre = nombreP;
        this.#sexo = sexoP;
        this.#peso = pesoP;
        this.#altura = alturaP;
        this.#anio = anioP;
    }
    get edad () {
        return this.#edad;
    }
    set edad (edad) {
        this.#edad = edad;
    }

    get dni () {
        return this.#dni;
    }
    set dni (dni) {
        this.#dni = dni;
    }

    get nombre () {
        return this.#nombre;
    }
    set nombre (nombre) {
        this.#nombre = nombre;
    }

    get sexo () {
        return this.#sexo;
    }
    set sexo (sexo) {
        this.#sexo = sexo;
    }
    
    get peso () {
        return this.#peso;
    }
    set peso (peso) {
        this.#peso = peso;
    }
    
    get altura () {
        return this.#altura;
    }
    set altura (altura) {
        this.#altura = altura;
    }
    
    get anio () {
        return this.#anio;
    }
    set anio (anio) {
        this.#anio = anio;
    }
    
}


class Lista extends Persona{
    nombreLista = [];
    constructor() {
        super()
    }
    
    addPersona(obj) {
        
        this.nombreLista.push(obj);    
        const filaNueva = document.createElement('tr');
        const personaTable = document.getElementById('personaTable');
    filaNueva.innerHTML = `
    <th scope="row">${obj.nombre}</th>
    <td>${obj.edad}</td>
    <td>${obj.dni}</td>
    <td>${obj.sexo}</td>
    <td>${obj.peso}</td>
    <td>${obj.altura}</td>
    <td>${obj.anio}</td>
    <td id='gen'>${obj.generacion}</td>
    <td>${obj.esMayorEdad}</td>
    `
    personaTable.appendChild(filaNueva)
    
}

    generacion(obj) {
    
    if (this.anio < 1949) {
        const gen = document.getElementById('gen');
        gen.textContent = 'pruebaaaaa'
        
    } else if (this.anio < 1969) {
        console.log('baby boom, ambicion');         
        
    } else if (this.anio < 1981) {
        console.log('generacion X, obsecion por el exito');         
        
    } else if (this.anio < 1981) {
        console.log('generacion Y, frustacion');         
        
    } else {
            console.log('generacion Z, irreverencia');         
        }
    }
    
    esMayorEdad() {
        if (this.edad < 18) {
            console.log('es menor de edad');
            
        } else {
            console.log('es mayor de edad');
        }
    }

  
    eliminarPersona(nombre) {
        for (let i = 0; i < this.nombreLista.length; i++) {
            
            
            if (this.nombreLista[i].nombre == nombre) {   
                console.log(`el Persona ${this.nombreLista[i].nombre} se elimino`);
                this.nombreLista.splice(i,1)
                break;
            } 
            
        }
        
    }
      
}

let storage = new Lista()
let btnCrearPersona = document.getElementById('btnCrearPersona');
btnCrearPersona.addEventListener('click', crearPersona)
let btnMayor = document.getElementById('btnMayor');
btnMayor.addEventListener('click', storage.esMayorEdad)
let btnGeneracion = document.getElementById('btnGeneracion');


function crearPersona(){
    const nombreInput = document.getElementById('nombreInput').value;
    const edadInput = document.getElementById('edadInput').value;
    const dniInput = document.getElementById('dniInput').value;
    const sexoInput = document.getElementById('sexoInput').value;
    const anioInput = document.getElementById('anioInput').value;
    const alturaInput = document.getElementById('alturaInput').value;
    const pesoInput = document.getElementById('pesoInput').value;
    let p1 = new Persona(nombreInput,edadInput,dniInput,sexoInput,pesoInput,alturaInput,anioInput);
    storage.addPersona(p1)
    formulario.reset()
}

