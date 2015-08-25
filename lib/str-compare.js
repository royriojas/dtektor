module.exports = function strCompare( strA, strB, ignoreCase = true ) {
  strA = String( strA );
  strB = String( strB );

  if ( ignoreCase ) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
  }

  return strA === strB;
};
