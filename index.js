function appendVal(val){
    var a = document.getElementById('result');
    a.value += val;
}

function calcResult(){
    var num = document.getElementById('result').value;

    try {
        var secondNum = eval(num);
        document.getElementById('result').value = secondNum;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay(){
    var clear = document.getElementById('result');
    clear.value = '';
}