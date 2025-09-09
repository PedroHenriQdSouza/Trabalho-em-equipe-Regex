function validafrm() {
    alert("função 1 ok");

    return txtarea();
}
function txtarea() {
    alert("função 2 ok (validando textarea )");

    /* var textarea = document.form1.txtarea.value;
    var textareaRegex = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    var textareaCensurado = textarea.replace(textareaRegex, 'palavra')

    if(!textareaRegex.test(textarea)){
        alert("Tá errado isso ai")
        return false;
    }

     */

    const textarea = document.getElementById("area");
    const regex1 = /Avião/gi; // 'gi' for global and case-insensitive replacement

    const replacement1 = "✈️🚗🏠👴";
    textarea.value = textarea.value.replace(regex, replacement1);
    
    return false;
}