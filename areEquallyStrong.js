// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong
//  (the strongest arm can be both the right and the left), and so are their weakest arms.

//  Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let max=Math.max(yourLeft, yourRight)
   return yourLeft+yourRight===friendsLeft+friendsRight&&(max===friendsLeft||max===friendsRight)?true:false
}

function diff_areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
   return yourLeft+yourRight === friendsLeft+friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}
