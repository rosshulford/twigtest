### Twig Technical Test 

`npm install ` install the dependencies
`npm run test ` test the function

The function takes in an array and splits it into `n` chunks, this value is passed in

```
  for (let i =0; i < inputArray.length; i += Math.ceil(arraySize)){
        result.push(inputArray.slice(i, i +  Math.ceil(arraySize)));
    }
```
The main body of the function loops through and pushes to a new array until it equals the chunk size.
Any remaining items will populate the last array.
