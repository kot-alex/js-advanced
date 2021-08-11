const text = "'I'm going to London for two weeks', said Alice. 'Put on your jacket, please', mother said to him. 'It’s freezing today'. 'I’ll call you tomorrow', she said. 'Take care'. 'It’s my umbrella', he said crossly. 'Yours is in your room'.";

const double_quotes = /(?<!\w)\'|\'(?!\w)/g;

console.log(text);

console.log(text.replace(double_quotes, '\"'));