
function validaForm(frm) {
  var nome =frm.txtnome.value;
  var padrao = /[^a-zà-ú]/gi;
  var valida_nome = nome.match(padrao);

  if (valida_nome || !nome) {
    alert("Por favor, insira um nome válido.");
    frm.txtnome.focus();
    return false;
  } else {
    if (frm.txtnome.value == "" || frm.txtnome.value == null || frm.txtnome.value.lenght < 3) {
      alert("Por favor, informe o seu nome.");
      frm.txtnome.focus();
      return false;
    }
  }  
  if (frm.txtmail.value.indexOf("@") == -1 ||
    frm.txtmail.valueOf.indexOf(".") == -1 ||
    frm.txtmail.value == "" ||
    frm.txtmail.value == null) {
    alert("Por favor, informe um e-mail válido.");
    frm.txtmail.focus();
    return false;
  }  
  // if (frm.txtphone.value=="" || frm.txtphone.value==null || frm.txtphone.value.lenght < 12) {
  //   alert("Por favor, informe um telefone correto.");

  //   var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  //   var digits = p.replace(/\D/g, "");
  //   if(phoneRe.test(frm.txtphone.value)){
  //   frm.txtphone.focus();
  //   }else{
      
  //   }

  // }
  var fone =frm.txtphone.value;
  var padrao2 = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var valida_fone = fone.match(padrao2);

  if (valida_fone || !fone) {
    alert("Por favor, informe o seu telefone corretamente.");
    frm.txtphone.focus();
    return false;
  } else {
    if (frm.txtphone.value == "" || frm.txtphone.value == null || frm.txtphone.value.lenght < 3) {
      alert("Por favor, informe o seu telefone corretamente.");
      frm.txtphone.focus();
      return false;
    }
  }  
  if (frm.txtmsg.value == "" || frm.txtmsg.value == null || frm.txtmsg.value.lenght > 100) {
    alert("Por favor, conte-nos um pouco sobre si.");
    frm.txtmsg.focus();
    return false;
  }

}
