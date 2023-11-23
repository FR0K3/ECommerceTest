# GuitarShop
Welcome to the GuitarShop GitHub repository! This project is an e-commerce platform dedicated to guitar enthusiasts, built using React for the frontend and Spring Boot for the backend. Dive into the world of guitars, explore our diverse catalog and enjoy the experience ;)

## Backend
GuitarShop API is a Spring Boot application that serves as the backend for the GuitarShop e-commerce platform. It provides the necessary endpoints to manage guitars and facilitate smooth transactions. The GuitarShop API is built with Spring Boot, a powerful framework for Java developers. It handles the business logic and data management for the GuitarShop e-commerce application. The API communicates with the frontend, allowing users to interact with the catalog, shopping cart, and categories.

### How to Run
In order to run the aplication you have to be in the directory `ecommerce-api` and you have to open your terminal window.

Once your terminal window is open you have to run the following command:
```
./gradlew bootRun
```

You should see an output similar to the following:
```
> Task :bootRun

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.1.3)

```

Now you can start using the API which port is 8080 :)

## Frontend
GuitarShop is a React-based e-commerce project that allows users to browse a wide range of guitars, view details, and make purchases. The application was made with React as main technology. TailwindCSS was used for a sleek and modern design, and the Context API for efficient state management.

### How to Run
In order to run the application you must have installed Node.js and once you have installed Node.js you have to run the following command to install the dependencies that are used for the application:
```
npm install
```
Then you have to run the following command in order to run the frontend application:
```
npm run dev
```
Then you should see an output similar to the following:
```
> payment-frontend@0.0.0 dev
> vite


  VITE v4.4.9  ready in 439 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

As you can see the application is running in localhost port 5173 :)
