# My very first CRUD API

My very first CRUD API using Express js.
This is created for testing purposes only.
This is created by a noob, so don't be angry.

KEEP IN MIND THAT THE MODEL USED IS ONLY A LOCAL VARIABLE!
I DID NOT USE ANY DATABASE IN THIS PROJECT

## How to use?

### Get all hobbies

```sh
GET https://my-crud-app-1.herokuapp.com/api/hobbies/
```

Example output:

```sh
[
{
    "id": "1",
    "hobby": "coding"
},
{
    "id": "2",
    "hobby": "sleeping"
},
{
    "id": "3",
    "hobby": "being sad"
},
]
```

### Get one hobby

Requires:

- id as a parameter(number)

```sh
GET https://my-crud-app-1.herokuapp.com/api/hobbies/:id
```

Example output:

```sh
{
    "id": "1", //the id number corresponds to the id parameter
    "hobby": "coding"
}
```

### Create a hobby

Requires:

- Content-type: application/json on the header

```sh
POST https://my-crud-app-1.herokuapp.com/api/hobbies/
Content-type: application/json

{
    "id":"x", // x must be a number
    "hobby":"y" // y must be a string
}
```

### Delete a hobby

Requires:

- id as a parameter

```sh
DELETE https://my-crud-app-1.herokuapp.com/api/hobbies/:id
```

### Patch a hobby

Requires:

- id as a parameter(number)
- Content-type: application/json on the header

```sh
PATCH https://my-crud-app-1.herokuapp.com/api/hobbies/:id
Content-type: application/json

{
    "hobby":"y" // y must be a string
}
```
