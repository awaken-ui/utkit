import { ObjectValueMap } from "./interfaces";

// Types for nested objects and variants
export type VariantValue = string | string[];

export type VariantOptions = {
    [key: string]: VariantValue | VariantOptions
};

export type Variants = {
    [key: string]: VariantValue | VariantOptions;
};


export type ObjectValue = string | boolean | ObjectValueMap;