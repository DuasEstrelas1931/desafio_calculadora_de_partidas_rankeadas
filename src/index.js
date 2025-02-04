//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

const number_of_wins = "90";
 const number_of_defeats = "20";
 
 //Chame a função passando os valores de vitórias e derrotas
const rankedScore = calculateRankedResult(number_of_wins, number_of_defeats);


//Chame a função passando os valores de vitórias e derrotas
function calculateRankedResult(victories, defeats) {
  const rankedScore = victories - defeats;
  return rankedScore;
  
}

//Crie uma função que recebe como parâmetro o saldo de Rankeadas
//  e retorne o resultado nivel com laço de repetição

let level ;

function calculateLevel(rankedScore){
  for(let xl = 0; xl <= rankedScore; xl++){
        if(rankedScore <= 10){
            level = "Ferro"
          }else if(rankedScore >= 11 && rankedScore <= 20){
              level = "Bronze"
            }else if(rankedScore >= 21 && rankedScore <= 50){
                level = "Prata"
              }else if(rankedScore >= 51 && rankedScore <= 80){
                  level = "Ouro"
                }else if(rankedScore >= 81 && rankedScore <= 90){
                    level = "Diamante"
                  }else if(rankedScore >= 91 && rankedScore <= 100){
                      level = "Lendário"
                    }else {          
                        level ="Imortal"
                    }
        
  }
}

calculateLevel(rankedScore);
console.log(`O Herói tem de saldo de ${rankedScore} está no nível de ${level}`);