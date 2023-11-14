## Description

Testing Project for Neversitup

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn run start:dev
```

## Test

```bash
$ yarn run test
```

## Usage
### Permutations
```bash
GET /permutations/{string}
```
_Example_
```bash
GET /permutations/aabb
```
```json
{
    "result": [
        "aabb",
        "abab",
        "abba",
        "baab",
        "baba",
        "bbaa"
    ]
}
```

### Find the odd int
```bash
POST /find-the-odd
---------------------
{
    "data" : number[]
}
```
_Example_
```bash
POST /find-the-odd
---------------------
{
    "data" : [1,2,2,3,3,3,4,3,3,3,2,2,1]
}
```

```json
{
    "result": 4
}
```

### Count the smiley faces!
```bash
POST /count-the-smiley-faces
---------------------
{
    "data" : string[]
}
```
_Example_
```bash
POST /count-the-smiley-faces
---------------------
{
    "data" : [";]", ":[", ";*", ":$", ";-D"]
}
```

```json
{
    "result": 1
}
```
