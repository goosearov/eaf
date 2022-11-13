const numberFormatter = (num) => {
    const mapper = {
        "1": "K",
        "2": "M",
        "3": "B",
    }
    let i = 0;
    while (num > 1000) {
        num /= 1000;
        i++;
    }
    if (mapper[i]) return num + mapper[i];
    return num ;
}

export default numberFormatter;