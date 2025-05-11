import { ICombineClasses, ObjectValueMap } from "../services/interfaces";
import { Variants } from "../services/types";
import isPlainObject from "./isPlainObject";

function combineApplicableClasses ({ variants }: ICombineClasses) {
    return function resolverFunction (
        argsObj: ObjectValueMap,
        overrideVariantsObj?: Variants
    ) {
        const tempObj = overrideVariantsObj ?? variants;
        let result = "";

        for(const key of Object.keys(tempObj)) {
            if(!Object.hasOwn(tempObj, key)) {
                throw new Error(`${key} - No such property exists. Please enter a valid property`);
            }

            const property = argsObj[key];
            const variantValue = tempObj[key];

            if(typeof property === 'string') {
                if(
                    isPlainObject(variantValue) &&
                    Object.hasOwn(variantValue, property)
                ) {
                    const value = variantValue[property];
                    result += Array.isArray(value) ? `${value.join(" ")} ` : `${value} `;
                } else {
                    throw new Error(`${property} - No such variant for "${key}". Please enter a valid option.`);
                }
            } else if(property && typeof property === 'boolean') {
                if(typeof variantValue === 'string' || Array.isArray(variantValue)) {
                    result += Array.isArray(variantValue) ? `${variantValue.join()} ` : `${variantValue} `;
                } else {
                    throw new Error(`${key} - Expected a string or string[] variant for boolean value.`);
                }
            } else if (isPlainObject(property)) {
                const nestedResult = resolverFunction(property, variantValue as Variants);

                result += `${nestedResult} `;
            }
        }


        return result.trim();
    }
};

export default combineApplicableClasses;