# infer


### A dynamic type that is utilizes type inference to generate type hints


## Overview

Typescript has a very powerful and flexible type system, with a push for developer friendliness. However, as projects grow, the number of types that need to be created and maintained also substantially increases, leading to more tech debt. This repository looks to creates a simple solution to the this by utlizing type inference to clone fields and types, allowing a more flexible type system where all types can have their strictly typed properties inferred directly by the current Typescript autocompletion and linters, creating a more powerful and flexible way to use strictly typed data without the need to create an endless number of types.


## Design

The type inference is written using Typescript's type system and performs a deep search on nested objects to recursively build the object attributes into the newly inferred type.


## Usage

```ts
import { Infer } from 'infer';


(() => {
  const hello = { 
    hi: 1, 
    world: 'hi',
    nested: {
      nested-inside: 'inside'
    }
  };

  
  const hello1 = hello // type any
  const inferredHello: Infer<typeof hello> = { // typeof hello
    //... all fields are available for autocomplete
  }
})();
```
