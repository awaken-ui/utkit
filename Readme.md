# 🧰 utkit

A lightweight utility toolkit essential for clean, reusable, and scalable TypeScript development.

## 📦 Installation

Use the package manager [npm](https://docs.npmjs.com/) to install utkit.

```bash
npm install utkit
```


## ✨ Features

- 🧼 Simple and readable utilities  
- ⚡ Lightweight and tree-shakeable  
- ✅ 100% typed with TypeScript  
- 🚫 No external dependencies  
- 📦 Supports both ESM and CommonJS



## 🧩 Importing
You can use this package with both CommonJS and ES Modules.

**Common JS**
```bash
const { combineApplicableClasses } = require('utkit');
```

**ES6 / Typescript / Mordern JS**
```bash
import { combineApplicableClasses } from 'utkit';
```



## 🚀 Usage Examples

**``` 🔍 isPlainObject(value: any): boolean ```**

Checks whether a value is a plain object (e.g. ``` {} ``` or ``` new Object() ```), not an array, class instance, or special object like ``` Date ```.

```typescript

isPlainObject({});             // ✅ true
isPlainObject(new Date());     // ❌ false
isPlainObject([]);             // ❌ false
isPlainObject(null);           // ❌ false

```


**``` 🎨 combineApplicableClasses ```**

**Function Signature**

```typescript
function combineApplicableClasses(
  { variants }: ICombineClasses
): (
    argObj: ObjectValueMap,
    overrideVariantsObj?: Variants
) => string;

```


**📚 Type Definitions**
``` typescript

type VariantValue = string | string[];
type VariantOptions = {
    [key: string]: VariantValue | VariantOptions
};
type Variants = {
    [key: string]: VariantValue | VariantOptions
};

interface ICombineClasses {
  variants: Variants;
}


type ObjectValue = string | boolean | ObjectValueMap;
interface ObjectValueMap {
    [key: string]: ObjectValue;
};

```


**1. Define your variants**
```typescript

const resolverClass = combineApplicableClasses ({
    variants: {
        variant: {
            'outline' : "outline-btn",
            'primary': {
                'prim-1': ["primary1-btn"]
            }
        },
        size: {
            'sm': 'small',
            'md': 'medium',
            'lg': 'large',
        },
        block : ["block-level"]
    }
});

```

**2. Pass in a configuration object**
```typescript

const classes = resolverClass({
    variant: {
        primary: "prim-1" 
    }
    size: 'md',
    block: true,
});

console.log(classes); // "primary1-btn medium block-level"

```


**⚠️ Error Handling**
- Throws a descriptive error if a provided variant key or value doesn’t exist in the ```variants``` config.
- Helps catch typos or misconfigurations early.



## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

- Fork the repo.
- Create a feature branch: ```git checkout -b feature/<your-feature-name>```.
- Add tests for your utility.
- Submit a pull request.

**After this wait and relax. In the mean time we will review and if accepeted will add you in the contributors list.**



## 👤 Author

**Ankit Pandey** [@ankit-pandey](https://www.linkedin.com/in/ankit-pandey-7733a6208/)


## License

[MIT](https://choosealicense.com/licenses/mit/) --- free to use, modify, or extend in your own projects