export const currentlyValuesOfFood = (obj, written) => {
    return Object.assign(
        ...Object.keys(obj)
            .map(k => {
                if (typeof obj[k] === "number") {
                    return {
                        [k]: Math.round(obj[k] * (written / 100))
                    }
                } else {
                    return {
                        [k]: obj[k]
                    }
                }
            })
    );
}