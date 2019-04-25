//Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    let bonus="*"+picture[0].replace(/./g,"*")+"*"
    let result=picture.map(e=>e.replace(e, "*"+e+"*"))
    return [bonus,...result,bonus]
}


function another_addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}
