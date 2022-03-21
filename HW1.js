const readline = require('readline');
const process = require('process');

const rdln = readline.createInterface(process.stdin, process.stdout);
let questions = [
  "вы плохо спите ночью",
  "ваше сердце бьется быстрее, чем обычно",
  "Вы чувствуете усталость без видимой причины",
  "Вы мыслите не так же ясно, как раньше",
  "Вам сложно делать то, что вы умеете",
  "Вы чувствуете беспокойство и не можете усидеть на месте",
  "У вас нет надежды на будущее",
  "Вы более раздражительны, чем обычно"
];

let personResult = {
  name: '',
  count: 0,
  result: 0,
}

rdln.question("Введите свое имя->", (answer)=> {
  personResult.name =  answer;

  rdln.setPrompt(`${personResult.name}, вы готовы пройти тест( введите 0 или 1)->`);
  rdln.prompt();

  rdln.on('line', (res)  => {
    
    if(res === '0'){
      rdln.close();
       } else {
         console.log('Переходим к тесту');
         rdln.setPrompt(`${personResult.name}, вы плохо спите ночью (оцените утверждение по шкале: 1,2,3 или 4 или нажмите 0 для выхода->`);
         rdln.prompt();

         rdln.on('line', (res)  => {
          personResult.result+= +res;
       
          if(res === '0'){
            rdln.close();
          } else if(personResult.count === 8) {
           console.log(`Ваш результат ${personResult.result}`);
           rdln.close();
            
          } else {
            console.log(personResult.count+=1);
              rdln.setPrompt(`${personResult.name})} (оцените каждое утверждение поочередно по шкале: 1,2,3 или 4 нажмите 0 для выхода)->`);
              rdln.prompt();
          }
        });
      }; 
      });
     });
    





rdln.on('close', ()  => {
  console.log(`Возвращайтесь снова!`)
  process.exit(0);
});
