const imagens = ["imagens/MS_01/img-ms1-01.jpg", "imagens/MS_01/img-ms1-02.jpg", "imagens/MS_01/img-ms1-02.jpg", "imagens/MS_01/img-ms1-03.jpg", "imagens/MS_01/img-ms1-04.jpg", "imagens/MS_01/img-ms1-05.jpg", "imagens/MS_01/img-ms1-06.jpg"];
let indice = 0;

function mudarImagem() {
    const imagem = document.getElementById("imagem");
    indice = (indice + 1) % imagens.length;
    imagem.src = imagens[indice];
    imagem.alt = `Imagem ${indice + 1}`;
}