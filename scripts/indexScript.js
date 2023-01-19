document.getElementById("generate-button").onclick = () => {

    // Pegando os inputs no html
    let inputValue = document.getElementById("chosen-number").value;
    let inputValueParagraph = document.getElementById("paragraph-select").checked;
    let inputValueWord = document.getElementById("word-select").checked;

    // Chamando a função generateLoremIpsum
    let loremIpsumP = generateParagraphLoremIpsum(inputValue);
    let loremIpsumW = generateWordsLoremIpsum(inputValue);

    // Verificando a opção selecionada
    if (inputValueParagraph == true) {
        document.getElementById("lorem-ipsum").innerHTML = loremIpsumP;
    } else if (inputValueWord == true) {
        document.getElementById("lorem-ipsum").innerHTML = loremIpsumW;
    } else {
        document.getElementById("lorem-ipsum").innerHTML = "Escolha um tipo de lorem antes de clicar em Gerar"
    }



    //-------------------------------------------------------------------------------

    function generateParagraphLoremIpsum(paragraphs) {
        // Lista de parágrafos Lorem Ipsum
        let loremIpsumParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.\n\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.\n\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.";

        // Convertendo a lista de parágrafos em um array
        let loremIpsumParagraphsArray = loremIpsumParagraphs.split("\n\n");

        // Escolhendo os parágrafos desejados
        let chosenParagraphs = [];
        for (let i = 0; i < paragraphs; i++) {
            let randomIndex = Math.floor(Math.random() * loremIpsumParagraphsArray.length);
            chosenParagraphs.push(loremIpsumParagraphsArray[randomIndex]);
        }

        // Juntando os parágrafos escolhidos
        let loremIpsum = chosenParagraphs.join("\n\n");

        // Retornando os parágrafos gerados
        return loremIpsum;
    }

    function generateWordsLoremIpsum(words) {
        // Lista de palavras Lorem Ipsum
        let loremIpsumWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.";

        // Convertendo a lista de palavras em um array
        let loremIpsumWordsArray = loremIpsumWords.split(" ");

        // Escolhendo as palavras desejadas
        let chosenWords = [];
        for (let i = 0; i < words; i++) {
            var randomIndex = Math.floor(Math.random() * loremIpsumWordsArray.length);
            chosenWords.push(loremIpsumWordsArray[randomIndex]);
        }

        // Juntando as palavras escolhidas em uma frase
        let loremIpsum = chosenWords.join(" ");

        // Retornando a frase gerada
        return loremIpsum;
    }
}
