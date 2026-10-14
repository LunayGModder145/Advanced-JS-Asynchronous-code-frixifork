//### Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas? ###

//Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.

//1.- Declara una funcion **getAllBreeds** que devuelva un array de strings con todas las razas de perro.

//2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.

//3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

//4.- Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento

//### GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes ###

//5.- Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

//6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

//7. Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

```html
<section>
    <img src="url de imagen" alt="imagen de usuario">
    <h1>Nombre de usuario</h1>
    <p>Public repos: (número de repos)</p>
</section>
```

//8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función **getAndPrintGitHubUserProfile(username)** que se ejecute cuando se pulse el botón buscar.(Esto no se testea).


//### GitHub API (II)- Promesas, promesas y más promesas ###

//- [ ] 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion **fetchGithubUsers(userNames)** que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario. \
//Objetivo: Usar Promise.all()\
//Recordatorio: Una llamada a fetch() devuelve un objeto promesa.\
//Pregunta. ¿cuántas promesas tendremos?

//Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

//Pasos:

//- Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
//- Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
//- Cuando Promise.all() haya terminado:
//Consigue que se imprima por consola la url del repositorio de cada usuario.
//Consigue que se imprima por consola el nombre de cada usuario.