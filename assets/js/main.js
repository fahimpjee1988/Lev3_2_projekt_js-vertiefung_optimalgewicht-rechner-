let size = document.getElementById("size")
let age = document.getElementById("age")
let breite = document.getElementById("width")
let smallbr = document.getElementById("smallwidth")


function results(){
    if (breite.checked ==true){
     document.getElementById("result")  = ((size.value-100)+(age.value/10)*0.9*0.9)
    }else{
        document.getElementById("result")  = ((size.value-100)+(age.value/10)*0.9*1.1)

    }
}


