export const isObjNotSame = (obj1, obj2) => {
    if (typeof obj1 !== "object" && obj1 !== obj2) {
        return false;
    }

    if (typeof obj1 !== "object" && typeof obj2 !== "object" && obj1 === obj2) {
        return true;
    }

    if (typeof obj1 === "object" && typeof obj2 === "object") {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length === obj2.length) {
                if (obj1.length === 0) {
                    return true;
                }
                const firstElemType = typeof obj1[0];

                if (typeof firstElemType !== "object") {
                    const confirmSameType = (currentType) =>
                        typeof currentType === firstElemType;

                    const checkObjOne = obj1.every(confirmSameType);
                    const checkObjTwo = obj2.every(confirmSameType);

                    if (checkObjOne && checkObjTwo) {
                        // they are primitves, we can therefore sort before and compare by index
                        // use number sort
                        // use alphabet sort
                        // use regular sort
                        if (firstElemType === "string") {
                            obj1.sort((a, b) => a.localeCompare(b));
                            obj2.sort((a, b) => a.localeCompare(b));
                        }
                        obj1.sort((a, b) => a - b);
                        obj2.sort((a, b) => a - b);

                        let equal = true;

                        obj1.map((element, index) => {
                            if (!isObjSame(element, obj2[index])) {
                                equal = false;
                            }
                        });

                        return equal;
                    }

                    if (
                        (checkObjOne && !checkObjTwo) ||
                        (!checkObjOne && checkObjTwo)
                    ) {
                        return false;
                    }

                    if (!checkObjOne && !checkObjTwo) {
                        for (let i = 0; i <= obj1.length; i++) {
                            const compareIt = isObjSame(obj1[i], obj2[i]);
                            if (!compareIt) {
                                return false;
                            }
                        }

                        return true;
                    }

                    // if()
                }
                return isObjSame(obj1, obj2);
            } else {
                return false;
            }
        }

        if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
            let equal = true;
            if (obj1 && obj2) {
                const allKeys1 = Array.from(Object.keys(obj1));
                const allKeys2 = Array.from(Object.keys(obj2));

                if (allKeys1.length === allKeys2.length) {
                    allKeys1.sort((a, b) => a - b);
                    allKeys2.sort((a, b) => a - b);

                    allKeys1.map((key, index) => {
                        if (
                            key.toLowerCase() !== allKeys2[index].toLowerCase()
                        ) {
                            equal = false;
                            return;
                        }

                        const confirmEquality = isObjSame(obj1[key], obj2[key]);

                        if (!confirmEquality) {
                            equal = confirmEquality;
                            return;
                        }
                    });
                }
            }

            return equal;

            // return false;
        }
    }
};

module.exports = function isObjSame(a, b) {
    return !isObjNotSame(a, b);
};
