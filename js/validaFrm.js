function validafrm(){
    
    var nome= document.form1.txtnome.value;
    var nomeRegex= new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

        if(!nomeRegex.test(nome)){

            alert("❌Preencha o campo Nome e Sobrenome corretamente!");
            document.form1.txtnome.focus();
            return false;
        }
    
    var email= document.form1.txtmail.value;
    var emailRegex= new RegExp("^([A-z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$");

        if(!emailRegex.test(email)){

            alert("❌Preencha o campo de e-mail correntamente!");
            document.form1.txtmail.focus();
            return false;
        }
    
    var cpf= document.form1.txtcpf.value;
    var cpfRegex = new RegExp("^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}\\-[0-9]{2}$");

        if(!cpfRegex.test(cpf)){

            alert("❌Preencha o campo de CPF corretamente!");
            document.form1.txtcpf.focus();
            return false;
        }

    var cnpj= document.form1.txtcnpj.value;
    var cnpjRegex = new RegExp("(\\d{2}\\.?\\d{3}\\.?\\d{3}\\/?\\d{4}-?\\d{2})", "g");

        if(!cnpjRegex.test(cnpj)){

            alert("❌Preencha o campo de CNPJ corretamente!");
            document.form1.textcnpj.focus();
            return false;
        }
    
    var dataNasc= document.form1.txtdata.value;
    var dataNascRegex = new RegExp("^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/](19|20)\d{2}$");


        if(!dataNascRegex.test(dataNasc)){

            alert("❌Preencha o campo de Data de Nascimento corretamente!");
            document.form1.txtdata.focus();
            return false;
        }
}