import React, { useState } from 'react';

function SignatureEditor() {
  const [name, setName] = useState('Nome da pessoa');
  const [position, setPosition] = useState('Posição');
  const [institution, setInstitution] = useState('Universidade');
  const [year, setYear] = useState('2021/22');
  const [phone, setPhone] = useState('11 99999-9999');

  const logoUrl = "https://www.ifmsabrazil.org/images/logoemail.png";
  const fbIconUrl = "https://www.ifmsabrazil.org/images/icofb.png";
  const instaIconUrl = "https://www.ifmsabrazil.org/images/icoinsta.png";
  const twitterIconUrl = "https://www.ifmsabrazil.org/images/icotwitter.png";

  return (
    <div className="signature-editor">
      {/* Form Fields */}
      <div className="form-section">
        <h2>Preencha suas informações abaixo:</h2>
        <div className="bloco-input">
          <label>Nome</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="bloco-input">
          <label>Cargo</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div className="bloco-input">
          <label>Instituição</label>
          <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
        </div>
        <div className="bloco-input">
          <label>Ano</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="bloco-input">
          <label>Telefone</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      {/* Formatted Signature Display */}
      <div className="signature-preview">
        <h2>Assinatura Formatada</h2>
        <p>Copie de baixo para cima, a partir de dentro da borda:</p>
        <div className="bordawhere">
          <div id="whereto" className="whereto">
            <table className="body-wrap" style={{ borderCollapse: 'collapse', width: '600px' }}>
              <tbody>
                <tr>
                  <td style={{ height: '123px', padding: '0 15px' }}>
                    <img height="123" src={logoUrl} alt="IFMSA Brazil Logo" style={{ height: '123px' }} />
                  </td>
                  <td style={{ width: '510px', lineHeight: '1.4', paddingLeft: '30px', borderLeft: '2px solid #0050A0' }}>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#0050A0', fontSize: '22px', margin: '0', padding: '0', fontWeight: '600', lineHeight: '1.2' }}>
                      {name}
                    </p>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#0050A0', fontSize: '14px', margin: '0', padding: '0', lineHeight: '1.4' }}>
                      <strong style={{ fontWeight: '600' }}>{position}</strong> <span>({year})</span>
                    </p>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#0050A0', fontSize: '12px', margin: '0', padding: '0', lineHeight: '1.4' }}>
                      {institution}
                    </p>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#00963C', fontSize: '14px', margin: '10px 0 0 0', padding: '0', lineHeight: '1.4', fontWeight: '600'}}>
                      <a href={`tel:+${phone}`} style={{ color: '#00963C', textDecoration: 'none' }}>{phone}</a>
                    </p>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#00963C', fontSize: '12px', margin: '0px 0 0 0', padding: '0', fontWeight: '400', lineHeight: '1.4' }}>
                      <a href="http://www.ifmsabrazil.org" target="_blank" rel="noopener noreferrer" style={{ color: '#00963C', textDecoration: 'none' }}>www.ifmsabrazil.org</a>
                    </p>
                    <p style={{ fontFamily: '"Century Gothic", Calibri, Segoe, Arial, sans-serif', color: '#00963C', fontSize: '12px', margin: '10px 0 0 0', padding: '0', fontWeight: 'bold' }}>
                      <a target="_blank" href="https://www.facebook.com/ifmsabrazil" className="icone-inline">
                        <img width="16" height="16" src={fbIconUrl} alt="Facebook" style={{ width: '16px', height: '16px', marginRight: '3px' }} />
                      </a>
                      <a target="_blank" href="https://www.instagram.com/ifmsabrazil/" className="icone-inline">
                        <img width="16" height="16" src={instaIconUrl} alt="Instagram" style={{ width: '16px', height: '16px', marginRight: '3px' }} />
                      </a>
                      <a target="_blank" href="https://twitter.com/ifmsabrazil" className="icone-inline">
                        <img width="18" height="16" src={twitterIconUrl} alt="Twitter" style={{ width: '19px', height: '16px', marginRight: '5px' }} />
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignatureEditor;