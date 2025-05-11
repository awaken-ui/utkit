import { ObjectValue, Variants } from "./types";

// Input structure for the function
export interface ICombineClasses {
    variants: Variants;
}


//
export interface ObjectValueMap {
    [key: string]: ObjectValue;
}