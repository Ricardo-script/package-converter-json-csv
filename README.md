# Function to export JSON data to csv file

How to use?

npm install converter-json-csv

import package into your project


# Function call

To use the function is very simple:

downloadCSVFromJson(`yourfile.csv`, jsonCSV);

The function receives two parameters, the first one receives the name of the file, the second one will receive the data in JSON

# Using with React.js

import React, { useEffect } from 'react';
import downloadCSVFromJson from 'converter-json-csv';

const fruits = [
    {'apple': 50, 'watermelon': 120, 'pear': 250},
    {'apple': 150, 'watermelon': 240, 'pear': 10},
    {'apple': 170, 'watermelon': 182, 'pear': 19},
]


export default function App(){

    useEffect(() => {
        downloadCSVFromJson('yourFile.csv', fruits);       
    },[]);

...


