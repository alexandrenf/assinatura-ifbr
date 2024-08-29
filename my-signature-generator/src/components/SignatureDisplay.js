import React, { useState } from 'react';

function SignatureForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    instituicao: '',
    ano: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-esquerda">
      <div className="bloco-input">
        <label>Nome</label>
        <input name="nome" type="text" value={formData.nome} onChange={handleChange} />
      </div>
      <div className="bloco-input">
        <label>Cargo</label>
        <input name="cargo" type="text" value={formData.cargo} onChange={handleChange} />
      </div>
      <div className="bloco-input">
        <label>Instituição</label>
        <input name="instituicao" type="text" value={formData.instituicao} onChange={handleChange} />
      </div>
      <div className="bloco-input">
        <label>Ano</label>
        <input name="ano" type="text" value={formData.ano} onChange={handleChange} />
      </div>
      <div className="bloco-input">
        <label>Telefone</label>
        <input name="telefone" type="text" value={formData.telefone} onChange={handleChange} />
      </div>
      <button type="submit" className="button">Generate Signature</button>
    </form>
  );
}

export default SignatureForm;