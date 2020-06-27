function getNum(num){
    var res=document.getElementById("result")
    res.value+=num
}

function clearRes(){
    var res=document.getElementById("result")
    result.value=""
}

function answer(){
    var res=document.getElementById("result")
    res.value= eval(res.value)
}