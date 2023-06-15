# MARKETTIKA:
Resumen: Una red que permitiría a los individuos acceder a propiedad con valor respaldado en activos reales y fácilmente transferible entre individuos.
Problema que se intenta solucionar: El acceso a la propiedad.

### Introducción: 
El curso natural muestra que dentro de 1 o 2 décadas, casi todas las actividades serán mecanizadas y, sobre todo, mucho más eficientes. Predios agrícolas donde apenas habrá intervención humana, carros con conducción autónoma, sistemas que te indicarán en tiempo real sobre tu estado de salud, y así un largo etcétera.
Sin embargo, para que esto sea posible de una forma segura y beneficiosa para todos, antes necesitamos trabajar en temas igualmente importantes; y uno de ellos es el acceso a la propiedad, algo inherente a la persona humana y algo a lo que cada vez es más difícil de acceder.
### Descripción del proyecto.
1)	Características principales: 
a)	Objetivo: El objetivo único es ofrecer al mayor número de personas la posibilidad de acceder de manera fácil, segura y gratuita a propiedad respaldada en activos reales y fácilmente transferible entre personas. 
b)	Descentralización gradual: Se tomarán las medidas necesarias para que gradualmente el poder de decisión vaya tomando una forma aplanada, con células/nodos con libertad de actuación. De la misma forma, parte o la totalidad del código podrá ser opensource.
2)	Medios y/o formas propuestas para llevar a cabo el objetivo:
a)	Creación de un Marketplace: Casi sin excepción, las personas rutinariamente realizan compras, ya sea para suplir necesidades básicas o porque pueden permitirse comodidades. Pero lo cierto es que un Marketplace viene a ser un medio para catalizar ese hecho a favor de nuestro objetivo.
b)	Acciones: El proyecto se dividirá en 510.072.000 acciones, cuyo ticket será MRK (markets), cada uno con un valor inicial de 0.00001550 USD (0.01 CRC), y donde el mismo está respaldado por la inversión inicial para empezar el proyecto tanto en infraestructura como en trabajo, y donde se tiene la intención de que el valor de cada market se actualice de acuerdo al valor del Patrimonio Neto del proyecto.
c)	Asignación de acciones:  Esta se realizará mediante la compra en los puntos de venta Markettika (digital o físico) con dinero fiduciario y/o cualquier moneda distinta de markets, así como en la red de comercios asociados, y para todos los casos, se devolverá en markets, el 1% del total de la compra.
3)	Problemas a resolver:
a)	Escalabilidad: 
4)	Generalidades:
a)	El hecho de asignar acciones, exclusivamente vía el 1% de las compras, es una forma de asegurar que la distribución de las mismas sea lo más descentralizada posible y a lo largo de un tiempo lo suficientemente amplio como para dar la oportunidad al mayor número de personas posibles.
b)	Ningún individuo puede acumular más del 1% de las acciones, o sea 5100720
c)	No existirá comisión por la transferencia de markets de usuario a usuarios.
5)	Puesta en marcha: 
Inicialmente, MARKETTIKA, se implementará vía markettika.com, un Marketplace donde los usuarios puedan comprar y/u ofertar sus productos. En una segunda etapa, se crearán pequeños módulos físicos unipersonales que funcionarán autónomamente, de tal forma, que, sin la necesidad de un dependiente, los clientes podrán realizar sus compras.
6) Viabilidad y sostenibilidad:
a) La viabilidad y sostenibilidad de MARKETTIKA depende de varios factores, como la adopción de la red por parte de los usuarios, el éxito en la implementación de la estrategia de marketing y crecimiento, la escalabilidad de la plataforma, entre otros.
b) En cuanto a la rentabilidad, se espera que la valoración de las acciones aumente con el tiempo, a medida que el patrimonio neto del proyecto crezca. Además, se generará ingresos a través de las comisiones cobradas en las conversiones de markets a fiat, comisión por compra en la plataforma, y otros no mencionadas aquí.
7) Conclusiones:
En general, MARKETTIKA es un proyecto ambicioso que busca solucionar un problema importante, el acceso a la propiedad, a través de una plataforma descentralizada y respaldada por activos reales. Si se logra implementar adecuadamente, podría tener un impacto significativo en la forma en que las personas acceden a la propiedad en el futuro.



# ABOUT THIS APPLICATION: 
### WebApp boilerplate with React JS and Flask API

Build web applications using React.js for the front end and python/flask for your backend API.

- Documentation can be found here: https://start.4geeksacademy.com/starters/react-flask
- Here is a video on [how to use this template](https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b)
- Integrated with Pipenv for package managing.
- Fast deloyment to heroku [in just a few steps here](https://start.4geeksacademy.com/backend/deploy-heroku-posgres).
- Use of .env file.
- SQLAlchemy integration for database abstraction.

### Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% read to deploy with Render.com and Heroku in a matter of minutes. Please read the [official documentation about it](https://start.4geeksacademy.com/deploy).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
