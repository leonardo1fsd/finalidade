function mostrarPersonalizacao(valor) {
    const opcoes = document.getElementById('personalizacao-opcoes');
    opcoes.style.display = valor === 'sim' ? 'block' : 'none';
}

// Função para mudar a imagem principal
function mudarImagem(src) {
    document.getElementById('imagem-principal').src = src;
}

// Adicionar eventos às miniaturas
document.addEventListener('DOMContentLoaded', () => {
    const imagemPrincipal = document.getElementById('imagem-principal');
    const miniaturas = document.querySelectorAll('.miniaturas img');
    
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            const novaImagem = this.src;
            mudarImagem(novaImagem);
        });
    });
    
    // Limpar campos de personalização ao focar
    const nomeInput = document.getElementById('nome-personalizado');
    const numeroInput = document.getElementById('numero-personalizado');

    nomeInput.addEventListener('focus', function() {
        this.value = '';
    });

    numeroInput.addEventListener('focus', function() {
        this.value = '';
    });
});
