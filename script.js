function dogy(){

    var size = document.getElementById("sizenum").value
    var age = parseInt(document.getElementById("agenum").value)

    if (age > 20) {
        alert ("cannot Input values more than 20")
    }else if (age == '' || size == '') {
        alert ("Please input values")
    }else {
        if (age==1){
        dage =15}

       else if (age<6 || size == 'Small' && age > 1){
            dage = 24 + 4*(age-2)
        }
        //for medium and latge sizes above 6 years
        else if(age > 5 && size != 'Small'){
            if(age%2 == 1){
                dage = parseInt(24 +4*(age-2) + (age/2))
            }
            else{
                dage = parseInt(24 +4*(age-2) + (age-1)/2)
            }
        }
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<h2>In human years your dog is <br> <br> <span class='answer'>${dage}</span> </h2><br>`;
        resultDiv.style.display = "block";

        document.getElementById("calForm").style.display = "none"
    }
	
}
