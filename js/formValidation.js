
  const cpf = document.getElementById('cpf');
  cpf.addEventListener('input', () => {
    let v = cpf.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpf.value = v;
  });


  const telefone = document.getElementById('telefone');
  telefone.addEventListener('input', () => {
    let v = telefone.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    telefone.value = v.substring(0, 15);
  });


  const cep = document.getElementById('cep');
  cep.addEventListener('input', () => {
    let v = cep.value.replace(/\D/g, '');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    cep.value = v.substring(0, 9);
  });

  function validarFormulario() {
    const cpfVal = cpf.value.replace(/\D/g, '');
    if (cpfVal.length !== 11) {
      alert('CPF inválido. Verifique o número.');
      return false;
    }
    return true;
  }