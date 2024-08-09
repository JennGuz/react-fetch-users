¡Entendido, Charly! Aquí tienes la prueba técnica actualizada para usar Vite.js en lugar de Create React App, con instrucciones detalladas.

---

## Prueba Técnica: Fetch y Mostrar Datos de una API

### Objetivo
El objetivo de esta prueba es evaluar tu capacidad para realizar una solicitud a una API y mostrar los datos obtenidos en un componente de React.

### Requisitos
1. *Realizar una solicitud a una API pública*: Utiliza la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener una lista de usuarios.
2. *Mostrar los datos en un componente*: Crea un componente de React que muestre la lista de usuarios obtenida de la API.

### Instrucciones
1. *Configuración del Proyecto*:
   - Crea un nuevo proyecto de React utilizando Vite.js.
   - Asegúrate de tener instalado axios o utiliza fetch para realizar la solicitud a la API.

2. *Realizar la Solicitud a la API*:
   - Realiza una solicitud GET a https://jsonplaceholder.typicode.com/users para obtener la lista de usuarios.

3. *Crear el Componente*:
   - Crea un componente llamado UserList que se encargue de realizar la solicitud a la API y mostrar los datos.
   - Muestra los siguientes datos de cada usuario: nombre, correo electrónico y compañía.

4. *Estilos*:
   - Aplica algunos estilos básicos para que la lista de usuarios sea legible y esté bien presentada.

### Pasos Detallados

#### 1. Configuración del Proyecto con Vite.js
1. *Instalar Vite.js*:
   bash
   npm create vite@latest my-react-app -- --template react
   cd my-react-app
   npm install
   

2. *Instalar Axios* (opcional, puedes usar fetch si prefieres):
   bash
   npm install axios
   

#### 2. Realizar la Solicitud a la API
- Utiliza axios o fetch para realizar la solicitud GET a https://jsonplaceholder.typicode.com/users.

#### 3. Crear el Componente UserList
- Crea un archivo llamado UserList.jsx en el directorio src y añade el código necesario para que el componente realice la solicitud al endpoint mencionado anteriormente y muestre los usuarios disponibles


#### 5. Ejecutar la Aplicación
- Inicia el servidor de desarrollo de Vite.js:
  bash
  npm run dev
  

### Evaluación
- *Funcionalidad*: La aplicación debe realizar correctamente la solicitud a la API y mostrar los datos en el componente.
- *Código Limpio*: El código debe estar bien estructurado y comentado.
- *Estilos*: La presentación de los datos debe ser clara y legible.

---

Espero que esta prueba técnica sea útil para evaluar las habilidades de los principiantes en React con Vite.js. ¿Hay algo más que te gustaría agregar o modificar?