import { ObjectValueMap } from "../services/interfaces";

function isPlainObject (obj: unknown): obj is ObjectValueMap {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        !Array.isArray(obj) &&
        Object.prototype === Object.getPrototypeOf(obj)
    );
}

export default isPlainObject;