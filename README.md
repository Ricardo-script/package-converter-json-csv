# Function to export JSON data to csv file

How to use?

npm install converter-json-csv

import package into your project


### Function call

```js
To use the function is very simple:

downloadCSVFromJson(`yourfile.csv`, jsonCSV);

The function receives two parameters, the first one receives the name of the file, the second one will receive the data in JSON
```

### Using with React.js

```js
import React, { useEffect } from 'react';
import downloadCSVFromJson from 'converter-json-csv';
```js

```json
const fruits = [
    {'apple': 50, 'watermelon': 120, 'pear': 250},
    {'apple': 150, 'watermelon': 240, 'pear': 10},
    {'apple': 170, 'watermelon': 182, 'pear': 19},
]
```

```js
export default function App(){

    useEffect(() => {
        downloadCSVFromJson('yourFile.csv', fruits);       
    },[]);
```
...

###
github: https://github.com/Ricardo-script/package-converter-json-csv


