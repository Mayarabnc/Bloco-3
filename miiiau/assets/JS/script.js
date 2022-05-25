function validarNome(){
    
    let txtNome = document.querySelector("#txtNome");
   
    if(nome.value.length < 2){
                 
        txtNome.innerHTML = "nome invalido :(";

        txtNome.style.color = "red";
        nomeOk = false;

    }else{

        txtNome.innerHTML = "nome valido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}