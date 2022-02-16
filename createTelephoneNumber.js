// +(012) 345-6789




function base() {
    let range = [...new Array (10).keys()];
    let format = "+(xxx) xxx-xxxx"
    for (let i = 0; i < range.length; i++) {
        format.replace("x", range[i])
    }
    return format
}
base()