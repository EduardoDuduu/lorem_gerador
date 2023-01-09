let loremInput = document.getElementById('ilorem-num')
let mostraLorem = document.getElementById('loremSection')

function gerarLorem() {
    mostraLorem.innerHTML += `<p> O valor digitado foi ${loremInput.value} </p>`
}















/*
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);
*/