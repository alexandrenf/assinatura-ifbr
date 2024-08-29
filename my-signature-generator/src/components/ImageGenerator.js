import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function ImageGenerator({ targetId }) {
  const [imageGenerated, setImageGenerated] = useState(false);

  const generateImage = () => {
    const element = document.getElementById(targetId);
    window.scrollTo(0, 0); // Scroll to the top before capturing

    html2canvas(element, {
      scrollX: 0,
      scrollY: 0,
      backgroundColor: '#ffffff',
      scale: 1,
    }).then((canvas) => {
      const canvasContainer = document.querySelector('.bloco-canvas');
      canvasContainer.innerHTML = ''; // Clear any previous canvas
      canvasContainer.appendChild(canvas);
      setImageGenerated(true);
    });
  };

  return (
    <div className="image-generator">
      <h2 className="titulo-topo">Assinatura em Imagem</h2>
      <button onClick={generateImage} className="button">
        Clique para gerar ou atualizar a imagem
      </button>
      {imageGenerated && (
        <div className="bloco-canvas"></div>
      )}
    </div>
  );
}

export default ImageGenerator;