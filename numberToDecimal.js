const val = 0;
function addLeadingZeros(num, totalLength) {
  return String(num).padEnd(totalLength+1, '0');
}

function convertDecimal(exiStingnum=0,decimal, NewNumber){
    console.log()
    const decimalCheck= addLeadingZeros('1', decimal);
    const withoutDecimal = exiStingnum*decimalCheck;
    const addNum = withoutDecimal.toString()+NewNumber.toString();
    
    return addNum/decimalCheck;
}
console.log(convertDecimal(exiStingnum=0.223,3, 4));
