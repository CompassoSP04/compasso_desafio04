<p align="center">
<h1> Challenge 03 - PB NodeJS - Spectrum Squad 🚀 </h1> 
</p>


## Description
Employee and Product information management API - created using Node.js and MongoDB

## Topics 


:small_blue_diamond: [Info about the project](#info-about-the-project-books)

:small_blue_diamond: [How to run the application](#how-to-run-the-application)

:small_blue_diamond: [Employee Endpoints](#employee-endpoints)

:small_blue_diamond: [Product Endpoints](#product-endpoints)

<br>


# Info about the project :books:
## Libs:

- [express: v4.18.1](https://expressjs.com/pt-br/)
- [joi: v17.6.0](https://www.npmjs.com/package/joi)
- [mongoose: v6.3.4](https://mongoosejs.com/docs/api.html)
- [mongoose-paginate: ](https://www.npmjs.com/package/mongoose-paginate)
- [dotenv: v16.0.1](https://www.npmjs.com/package/dotenv)
- [moment: v2.29.3](https://www.npmjs.com/package/moment)
- [mongoose-paginate-v2: v1.6.3](https://www.npmjs.com/package/mongoose-paginate-v2)

### Node Version:
```
v14.16.0
```
### NPM Version:
```
v6.14.11
```
... 

# How to run the application
<br>

### After cloning  the project
```
 git clone https://github.com/CompassoSP04/compasso_desafio04
```
<br>

### Install the dependencies:
```
 npm install
```
<br>

### Config the environment variables (.env)
```
Inside of the project you have a .env.example file with the required configuration fields:

DB_HOST =
DB_USER =
DB_PASS =
DB_NAME =
DB_PORT =
DB_COLLECTION =

```
<br>

### Start the application
```
 npm start
```
<br>

# Employee Endpoints

## Create Employee
`POST`
```
http://localhost:3000/api/v1/employee/ 
```
### Body Example
```
{
    "name": "Pedro Barbosa",
    "office": "caixa",
    "cpf": "12345678910",
    "birthday": "02/02/2002"
}
```
`Status Code: 201 Created`
```
{
    "name": "Pedro Barbosa",
    "cpf": "12345678910",
    "office": "caixa",
    "birthday": "2002-02-02T02:00:00.000Z",
    "situation": "active",
    "createdAt": "2022-05-29T22:31:11.307Z",
    "updatedAt": "2022-05-29T22:31:11.307Z",
    "employee_id": "6293f42f1b7e14b9291976a8"
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## List Employees
`GET`
```
http://localhost:3000/api/v1/employee/ 
```
### Res
`Status Code: 200 OK`
```
{
    "Employee: [
        {
        "name": "Teste Viera",
        "cpf": "12314512341",
        "office": "gerente",
        "birthday": "2002-02-02T02:00:00.000Z",
        "situation": "active",
        "createdAt": "2022-05-29T21:04:50.182Z",
        "updatedAt": "2022-05-29T21:04:50.182Z",
        "employee_id": "6293dff2cc1337353ec5e8fd"
    },
    {
        "name": "Pedro Barbosa",
        "cpf": "12345678910",
        "office": "caixa",
        "birthday": "2002-02-02T02:00:00.000Z",
        "situation": "active",
        "createdAt": "2022-05-29T22:31:11.307Z",
        "updatedAt": "2022-05-29T22:31:11.307Z",
        "employee_id": "6293f42f1b7e14b9291976a8"
    }
],
    "totalCount": 69,
    "pageSize": 25,
    "totalPages": 3,
    "currentPage": 1
}
```
<br>

## List Employee by ID
  `GET`
```
http://localhost:3000/api/v1/employee/:id
```
### Res
`Status Code: 200 OK`
```
{
        {
        "name": "Teste Viera",
        "cpf": "12314512341",
        "office": "gerente",
        "birthday": "2002-02-02T02:00:00.000Z",
        "situation": "active",
        "createdAt": "2022-05-29T21:04:50.182Z",
        "updatedAt": "2022-05-29T21:04:50.182Z",
        "employee_id": "6293dff2cc1337353ec5e8fd"
    }
    
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## Update Employee
`PUT`
```
http://localhost:3000/api/v1/employee/:id 
```
### Body Example
```
{
    "name": "Leo Guimarães Moraes",
    "cpf": "12309412312",
}
```
`Status Code: 200 OK`
```
{
    "name": "Leo Guimarães Moraes",
    "cpf": "12309412312",
    "office": "caixa",
    "birthday": "2002-02-02T02:00:00.000Z",
    "situation": "active",
    "createdAt": "2022-05-29T22:31:11.307Z",
    "updatedAt": "2022-05-29T22:31:11.307Z",
    "employee_id": "6293f42f1b7e14b9291976a8"
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## Delete Employee
`DELETE`
```
http://localhost:3000/api/v1/employee/:id 
```


`Status Code: 204 No Content`

`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

# Product Endpoints

## Create Product
`POST`
```
http://localhost:3000/api/v1/product/ 
```
### Body Example
```
{
    "employee_id": "62929f7d355256ca20e19133"
    "name": "Smartphone",
    "category": "eletronico",
    "price": "2500"

}
```
`Status Code: 201 Created`
```
{
    "employee_id": "62929f7d355256ca20e19133"
    "name": "Smartphone",
    "category": "eletronico",
    "price": "2500"
    "product_id: "6293fa9936776ae920fbed22"

}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## List Product
`GET`

```
http://localhost:3000/api/v1/product/ 
```
### Body Example
```
{
    "Product": [
        {
            "employee_id": "629141c268f6ef1d797d39ab",
            "name": "notebook dell",
            "category": "eletronico",
            "price": 3499.99,
            "product_id": "629295758de3cdb4fa87a30a"
        },
        {
            "employee_id": "62929f7d355256ca20e19133"
            "name": "Smartphone",
            "category": "eletronico",
            "price": "2500"
            "product_id: "6293fa9936776ae920fbed22"
        }
    ],
    "totalCount": 290,
    "pageSize": 25,
    "totalPages": 12,
    "currentPage": 1
}
```


<br>

---

<br>

## Authors :octocat:
- [Lucas Gonçalves](https://github.com/LucasAraujo44)
- [Kledson Costa](https://github.com/KledsonCR)
- [Paulo Batista](https://github.com/paulorayann)




  
 
