function validafrm() {

    var nome = document.form1.txtnome.value;
    var nomeRegex = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!nomeRegex.test(nome)) {

        alert("❌Preencha o campo Nome e Sobrenome corretamente!");
        document.form1.txtnome.focus();
        return false;
    }

    var email = document.form1.txtmail.value;
    var emailRegex = new RegExp("^([A-z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$");

    if (!emailRegex.test(email)) {

        alert("❌Preencha o campo de e-mail correntamente!");
        document.form1.txtmail.focus();
        return false;
    }

    var cpf = document.form1.txtcpf.value;
    var cpfRegex = new RegExp("^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}\\-[0-9]{2}$");

    if (!cpfRegex.test(cpf)) {

        alert("❌Preencha o campo de CPF corretamente!");
        document.form1.txtcpf.focus();
        return false;
    }

    var cnpj = document.form1.txtcnpj.value;
    var cnpjRegex = new RegExp("(\\d{2}\\.?\\d{3}\\.?\\d{3}\\/?\\d{4}-?\\d{2})", "g");

    if (!cnpjRegex.test(cnpj)) {

        alert("❌Preencha o campo de CNPJ corretamente!");
        document.form1.textcnpj.focus();
        return false;
        return false;
    }


    var telefone = document.form1.txtfone.value
    var foneRegex = new RegExp("^[(]{1}[0-9]{2}[)]{1}([ ]{1})?[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!foneRegex.test(telefone)) {
        alert("❌Preencha o campo de telefone corretamente!");
        document.form1.txtfone.focus();
        return false;
    }
    return false;
}
function substituirTexto() {
    const textarea = document.getElementById('area');
    const texto = textarea.value;

    // Dicionário de censura
    const censura = {
        "avião": "✈️",
        "carro": "🚗",
        "moto": "🏍️",
        "feliz": "😁",
        "palhaço": "🤡",
        "casa": "🏠",
        "puto": "😡",
        "idiota": "@#%*!&"
    };

    // Regex que captura todas as palavras do dicionário
    const regex = new RegExp("\\b(" + Object.keys(censura).join("|") + ")\\b", "gi");

    // Substituição dinâmica
    const textoCensurado = texto.replace(regex, (palavra) => {
        const chave = palavra.toLowerCase();
        return censura[chave] || palavra;
    });

    textarea.value = textoCensurado;
}