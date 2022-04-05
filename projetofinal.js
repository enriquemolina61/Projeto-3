//Instruções do jogo estão no readme.md, presente no respositorio git
const prompt = require("prompt-sync")();
console.clear();
let continuar = "";
let jogador = prompt("Digite seu nome:");
let escolha = "";
let treino;
let convocado;
let jogadas;
//Declarando variáveis das opçoes de treinamento
let treinocoletivo = [
  "1)Tentar jogar o máximo que der, para aparecer bem para o técnico. Mas o risco de lesão existe.",
  "2)Tenta jogar mais para o time e fazer a parte tatica corretamente, sem riscos.",
];
let treinotatico = [
  "1)Estuda atentamente todas as instruções, para que nao perca nenhum detalhe das taticas que o time irá usar.",
  "2)Prefere sentar um pouco afastado, sem prestar muita atenção no treino tatico. Cuidado para o treinador não te pegar desatento.",
];
let treinofisico = [
  "1)Se dedicar ao treino físico com muita vontade e gastar tudo o que tem. Cuidado pois existe a possibilidade de lesão.",
  "2)Ir um pouco de leve no treino fisico para não se desgastar para o treino da tarde.",
];
let treinoacademia = [
  "1)Após treinos pesados pela manhã, você opta por um treino leve a tarde, para não perder força.",
  "2)Você opta por um treino pesado na academia, para deixar o descanso para a noite de sono.",
];

// Funçao para controlar a hora
function avancahora(hora, horapassada) {
  hora = hora + horapassada;
  if (horapassada == 1) {
    console.log(`Se passou ${horapassada} hora, agora são ${hora}h`);
  } else {
    console.log(`Se passaram ${horapassada} horas, agora são ${hora}h`);
  }
  return hora;
}
//Obejto que contem todas as informaçoes do jogador
const dados = {
  nome: jogador,
  stamina: 5,
  forca: 5,
  conceito: 2,
  popularidade: 0,
  adicionastamina: function () {
    this.stamina++;
  },
  diminuistamina: function () {
    this.stamina--;
  },
  adicionaforca: function () {
    this.forca++;
  },
  diminuiforca: function () {
    this.forca--;
  },
  adicionaconceito: function () {
    this.conceito++;
  },
  diminuiconceito: function () {
    this.conceito--;
  },
  adicionapopularidade: function () {
    this.popularidade++;
  },
  diminuipopularidade: function () {
    this.popularidade--;
  },
};
//Funçao para mostrar as informacoes a cada tomada de decisão
function informaçoes(hora, nome, stamina, forca, conceito, popularidade, dia) {
  console.log(`Suas informaçoes até o momento são:
Hora: ${hora}h
Nome: ${nome}
Stamina: ${stamina}
Força: ${forca}
Conceito: ${conceito}
Popularidade: ${popularidade}
Dia: ${dia}`);
}
//Funcao para escolha da decisao de 3 opçoes
function escolher() {
  let i = prompt("Digite sua escolha: ");
  while (i != 1 && i != 2 && i != 3) {
    i = prompt("Digite sua escolha novamente inserindo apenas 1,2 ou 3: ");
  }
  return i;
}
//Funcao para escolha da decisao de 2 opcoes
function escolher2() {
  let j = prompt("Digite sua escolha: ");
  while (j != 1 && j != 2) {
    j = prompt("Digite sua escolha novamente inserindo apenas 1 ou 2: ");
  }
  return j;
}
//Funcao para apertar para continuar
function aperte() {
  console.log(`Aperte qualquer tecla para continuar:`);
  const teclado = prompt();
}

//INICIO
let dia = 1;
continuar = "sim";
while (continuar != "sair") {
  console.clear();
  let hora = 8;
  informaçoes(
    hora,
    dados.nome,
    dados.stamina,
    dados.forca,
    dados.conceito,
    dados.popularidade,
    dia
  );
  if (dia % 4 == 0) {
    console.log(`Hoje é dia de jogo!`);
    convocado = Math.floor(Math.random() * 101);
    if (convocado < 60 && dados.conceito > 5 && dados.forca > 10) {
      console.log(`Você foi convocado!`);
      aperte();
      console.log(`O jogo vai começar!`);
      aperte();
      console.log(`Apita o árbitro, começa o jogo!`);
      for (let k = 10; k < 91; k += 10) {
        console.log(`Estamos com ${k} minutos de jogo. Você escolhe qual jogada:
        1) Tentar chutar para fazer um gol. Lembrando que isso te custa stamina, mas se for gol, você ganha popularidade. Você precisa ter 5 pontos de conceito e 10 de força!
        2) Tenta não correr muito para não se desgastar muito e recuperar um pouco de stamina! Você precisa ter 5 pontos de força!
        3) Tenta realizar assitência para o gol, onde você ganha conceito com seu treinador! Você precisa ter 10 pontos de força!
        `);
        escolha = escolher();

        if (escolha == 1 && dados.stamina > 10 && dados.forca > 10) {
          jogadas = Math.floor(Math.random() * 101);
          console.clear();
          if (jogadas >= 40) {
            console.log(``);
            console.log(
              `Gol ao ${k}minutos! Você ganha popularidade! (-2 de stamina e +1 popularidade)`
            );
            dados.adicionapopularidade();
            dados.diminuistamina();
            dados.diminuistamina();
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          } else {
            console.log(``);
            console.log(
              `O chute vai pra fora! Segue o jogo! (-3 de força e -2 de stamina)`
            );
            dados.diminuistamina();
            dados.diminuistamina();
            dados.diminuiforca();
            dados.diminuiforca();
            dados.diminuiforca();
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          }
        } else if (escolha == 2 && dados.forca > 5) {
          jogadas = Math.floor(Math.random() * 101);
          console.clear();
          if (jogadas >= 50) {
            console.log(``);
            console.log(
              `Você consegue passar um tempo sem correr muito e recupera 2 pontos de stamina! (+2 stamina)`
            );
            dados.adicionastamina();
            dados.adicionastamina();
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          } else {
            console.log(``);
            console.log(
              `A sua tentativa de recuperar stamina acaba fazendo o time levar um gol.(-2 conceito, -1 stamina e -1 força)`
            );
            dados.diminuistamina();
            dados.diminuiforca();
            dados.diminuiconceito();
            dados.diminuiconceito();
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          }
        } else if (escolha == 3 && dados.forca > 10) {
          jogadas = Math.floor(Math.random() * 101);
          console.clear();
          if (jogadas >= 50) {
            console.log(
              `Excelente passe para gol ao ${k} minutos! Você ganha conceito! (+1 conceito/-2 stamina)`
            );
            dados.adicionaconceito();
            dados.diminuistamina();
            dados.diminuistamina();
            console.log(``);
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          } else {
            console.log(``);
            console.log(
              `O passe foi ruim! (-1 conceito/ -2 força / -2 stamina)`
            );
            dados.diminuistamina();
            dados.diminuistamina();
            dados.diminuiforca();
            dados.diminuiforca();
            dados.diminuiconceito();
            console.log(``);
            console.log(`Informaçoes do jogador:
          Forca: ${dados.forca}
          Stamina:${dados.stamina}
          Popularidade:${dados.popularidade}`);
            console.log(``);
            aperte();
          }
        } else {
          console.log(
            `Você não tem atributos suficiente para essa jogada! Você perde a bola para o adversário. (-2 conceito)`
          );
          dados.diminuiconceito();
          dados.diminuiconceito();
        }
      }
      console.log(``);
      console.log(`Fim de jogo!`);
      console.log(``);
      if (dados.popularidade > 19) {
        console.log(
          `Parabéns, você chegou ao final do jogo! Sua popularidade atingiu o valor de 20 pontos!`
        );
        break;
      }
    } else {
      console.log(
        `Você não foi convocado e tem o dia para recuperar sua stamina mas perde popularidade! Mais 5 pontos de stamina!`
      );
      dados.adicionastamina();
      dados.adicionastamina();
      dados.adicionastamina();
      dados.adicionastamina();
      dados.adicionastamina();
      if (dados.popularidade > 0) {
        dados.diminuipopularidade();
      }
    }
    console.log(
      `Para continuar jogando e ir para o dia seguinte aperte qualquer tecla, para parar de jogar, escreva sair: `
    );
    continuar = prompt("").toLowerCase();
    dia++;
  } else {
    console.log();
    console.log(`São ${hora}h do dia ${dia}. Você acaba de acordar e precisa decidir o que vai fazer a partir de agora. Você tem 3 opções:);
1) Tomar café e assistir tv. -> (Stamina +1)
2) Dormir mais um pouco e tomar um café rápido. -> (Stamina +2 / Força -2)
3) Levantar tomar um café rápido e fazer exercícios. -> (Stamina -1/ Força +1)`);
    escolha = escolher();
    if (escolha == 1) {
      dados.adicionastamina();
    } else if (escolha == 2) {
      dados.adicionastamina();
      dados.adicionastamina();
      dados.diminuiforca();
      dados.diminuiforca();
    } else {
      dados.diminuistamina();
      dados.adicionaforca();
      dados.adicionaforca();
    }
    console.clear();
    hora = avancahora(hora, 1);
    informaçoes(
      hora,
      dados.nome,
      dados.stamina,
      dados.forca,
      dados.conceito,
      dados.popularidade,
      dia
    );
    console.log();
    console.log(`Agora você está pronto para ir ao treino, mas cuidado, pode ser que você pegue trânsito no camminho e acabe se atrasando. 
 `);
    aperte();
    console.clear();
    let probabilidadeatraso = Math.floor(Math.random() * 101);
    if (probabilidadeatraso < 10) {
      console.log(
        `Houve um acidente no caminho e você irá se atrasar para o treino, com isso você perde conceito com o treinador.`
      );
      dados.diminuiconceito();
      hora = avancahora(hora, 1.5);
      informaçoes(
        hora,
        dados.nome,
        dados.stamina,
        dados.forca,
        dados.conceito,
        dados.popularidade,
        dia
      );
      console.log();
    } else {
      console.log(
        `Você chegou no horário correto e com isso não perdeu pontos com o treinador.`
      );
      hora = avancahora(hora, 1);
      informaçoes(
        hora,
        dados.nome,
        dados.stamina,
        dados.forca,
        dados.conceito,
        dados.popularidade,
        dia
      );
      console.log();
    }
    console.log();
    aperte();
    console.clear();
    informaçoes(
      hora,
      dados.nome,
      dados.stamina,
      dados.forca,
      dados.conceito,
      dados.popularidade,
      dia
    );
    console.log(`São ${hora}h, você acaba de chegar no clube para treinar e precisa decidir o qual treino vai realizar. Você tem 3 opções:);
1) Treino Fisico
2) Treino Tático
3) Treino Coletivo`);

    escolha = escolher();
    hora = 10;
    console.log();
    if (escolha == 1) {
      //Treino Fisico
      console.log(
        `Digite qual treino coletivo você deseja:
      ${treinofisico[0]}
      ${treinofisico[1]}`
      );
      escolha = escolher2();
      if (escolha == 1) {
        treino = Math.floor(Math.random() * 101);
        if (treino < 15) {
          console.log(`Você tentou se destacar no treino,
    mas infelizmente acabou sentindo uma lesão e não pode seguir no dia de treinamento.
    Você acabou perdendo 4 pontos de stamina e 2 pontos de força`);
          dados.diminuistamina();
          dados.diminuistamina();
          dados.diminuistamina();
          dados.diminuistamina();
          dados.diminuiforca();
          dados.diminuiforca();
          console.log("Você irá para o próximo dia!");
          aperte();
          dia++;
          continue;
        } else {
          console.log(`Você se destacou muito nesse treino, o treinador gostou bastante da sua dedicação.
    Você ganhou 3 pontos de força, perdeu 2 de stamina e ganhou 2 de conceito`);
          dados.diminuistamina();
          dados.diminuistamina();
          dados.adicionaforca();
          dados.adicionaforca();
          dados.adicionaforca();
          dados.adicionaconceito();
        }
      } else {
        console.log(`Você fez um treino leve, mas o suficiente para não sofrer nenhuma lesão.
    Você ganhou 2 pontos de força e perdeu 1 ponto de stamina`);
        dados.diminuistamina();
        dados.adicionaforca();
        dados.adicionaforca();
        dados.adicionaconceito();
      }
    } else if (escolha == 2) {
      console.log(
        `Digite qual treino coletivo você deseja:
      ${treinotatico[0]}
      ${treinotatico[1]}`
      );
      escolha = escolher2();
      if (escolha == 1) {
        console.log(`Parabéns você ganhou pontos de conceito com o treinador!
         +2 pontos de conceito para você!`);
        dados.adicionaconceito();
        dados.adicionaconceito();
      } else {
        treino = Math.floor(Math.random() * 101);
        if (treino < 30) {
          console.log(
            `O treinador percebeu que você não estava muito atento ao treino, com isso você perde conceito e um pouco de stamina, já que ele mandou você pagar 20 abdominais.`
          );
          dados.diminuistamina();
          dados.diminuistamina();
          dados.diminuiconceito();
        } else {
          console.log(
            `Dessa vez o treinador não percebeu e assim você passou ileso de perder conceito e ainda recuperou um pouco de stamina.
        +2 pontos de stamina`
          );
          dados.adicionastamina();
          dados.adicionastamina();
        }
      }
    } else {
      console.log(
        `Digite qual treino coletivo você deseja:
      ${treinocoletivo[0]}
      ${treinocoletivo[1]}`
      );
      escolha = escolher2();
      if (escolha == 1) {
        treino = Math.floor(Math.random() * 101);
        if (treino < 20 && dados.conceito < 5) {
          console.log(
            "Você não foi relacionado para o coletivo, pois se conceito está abaixo de cinco e o treinador preferiu colocar outros para jogar."
          );
        } else if (treino > 95 && dados.stamina < 5) {
          console.log(
            "Você chegou cansado para o coletivo e tentou se destacar, mas acabou indo mal e se lesionando e perdendo o restante de dia de treinos. Você perde 2 pontos de stamina e 2 pontos de força."
          );
          dados.diminuistamina();
          dados.diminuistamina();
          dados.diminuiforca();
          dados.diminuiforca();
          dia++;
          continuar = prompt("Deseja continuar?");
          continue;
        } else if (treino < 10) {
          console.log(
            "Parabens! Você se destacou no treinamento e marcou até um gol! Você ganha 2 pontos de conceito, 1 de força e perde 3 de stamina."
          );
          dados.adicionaconceito();
          dados.adicionaconceito();
          dados.adicionaforca();
          dados.diminuistamina();
          dados.diminuistamina();
        } else {
          console.log(
            "Você fez um bom coletivo, não se destacou mas ganhou pontos de força pela sua vontade. Ganhou 2 pontos de força e perdeu 3 de stamina."
          );
          dados.adicionaforca();
          dados.adicionaforca();
          dados.diminuistamina();
          dados.diminuistamina();
        }
      } else {
        treino = Math.floor(Math.random() * 101);
        if (treino < 10) {
          console.log(
            `O treinador achou que você não se dedicou muito ao treino, com isso você acaba perdendo ponto de conceito com ele. Você perdeu 1 ponto de conceito, 2 de stamina e ganhou 1 de força.`
          );
          dados.adicionaforca();
          dados.diminuistamina();
          dados.diminuiconceito();
        } else {
          console.log(
            `Você faz o seu famoso "feijão com arroz" e seu treino te rende 2 pontos de força e perde apenas 1 de stamina.`
          );
        }
      }
    }
    aperte();
    console.clear();
    hora = avancahora(hora, 2);
    informaçoes(
      hora,
      dados.nome,
      dados.stamina,
      dados.forca,
      dados.conceito,
      dados.popularidade,
      dia
    );
    console.log();
    console.log(`Chegou a hora de almoço, onde você terá que escolher entre duas opções de almoço:
1)Almoço de acordo com a nutricionista do time, com isso você recupera pouco sua stamina mas ganha ponto de força.
2)Prefere um almoço rápido, para ir descansar por mais tempo, sua stamina recupera o dobro, mas você não ganha força extra.`);
    escolha = escolher2();

    if (escolha == 1) {
      console.log(
        "Você almoça conforme planejado pelo clube, com isso você tem ganhos de força. Você recupera 2 pontos de stamina e ganha 2 pontos de força."
      );
      dados.adicionaforca();
      dados.adicionaforca();
      dados.adicionastamina();
      dados.adicionastamina();
    } else {
      treino = Math.floor(Math.random() * 101);
      if (treino < 10) {
        console.log(
          "Você comeu rápido demais! Ao invés de descansar no horário de almoço, teve que ir no ambulatório se recuperar para o treino da tarde. Você perde 2 pontos de força e 1 de stamina."
        );
        dados.diminuistamina();
        dados.diminuiforca();
        dados.diminuiforca();
      } else {
        console.log(
          "Mesmo comendo rápido, você se sente bem e vai dar uma descansada para o treino da tarde e recupera 4 pontos de stamina."
        );
        dados.adicionastamina();
        dados.adicionastamina();
        dados.adicionastamina();
        dados.adicionastamina();
      }
    }
    aperte();
    console.clear();
    hora = avancahora(hora, 2);
    console.log();
    informaçoes(
      hora,
      dados.nome,
      dados.stamina,
      dados.forca,
      dados.conceito,
      dados.popularidade,
      dia
    );

    console.log();
    console.log(`Agora você está pronto para decidir qual será o seu treino a tarde:
  1) Academia
  2) Força
  3) Descanso`);
    escolha = escolher();
    if (escolha == 1) {
      console.log(`Digite qual atividade na academia você deseja:
    ${treinoacademia[0]}
    ${treinoacademia[1]}`);
      escolha = escolher2();
      if (escolha == 1) {
        console.log(
          `Você faz um treino leve e garante mais 2 pontos de força e perde apenas 1 de stamina`
        );
        dados.adicionaforca();
        dados.adicionaforca();
        dados.diminuistamina();
      } else {
        treino = Math.floor(Math.random() * 101);
        if (treino < 40 && dados.stamina < 5) {
          console.log(
            `Você acaba se lesionando ao tentar ganhar mais força. Seu dia acaba e você retorna no dia seguinte. Perde 2 pontos de força e 1 de stamina`
          );
          dados.diminuiforca();
          dados.diminuiforca();
          dados.diminuistamina();
        } else {
          console.log(
            `Você realmente quer ganhar muita força,e garante isso com um treino forte a tarde. Mais 3 pontos de força e perde 2 de stamina.`
          );
          dados.adicionaforca();
          dados.adicionaforca();
          dados.adicionaforca();
          dados.diminuistamina();
          dados.diminuistamina();
        }
      }
    } else if (escolha == 2) {
      console.log(
        `Você prefere um treino de força, misturado com a parte tática, onde isso irá ajudar nas partidas. Você ganha 1 ponto de força e 1 ponto de conceito. `
      );
      dados.adicionaforca();
      dados.adicionaconceito();
    } else {
      console.log(
        `Você recupera bem sua stamina, mas acaba perdendo força por não treinar. Ganha 3 pontos de stamina e perde 1 de força`
      );
      dados.diminuiforca();
      dados.adicionastamina();
      dados.adicionastamina();
    }
    aperte();
    console.clear();
    hora = avancahora(hora, 2);
    console.log();
    informaçoes(
      hora,
      dados.nome,
      dados.stamina,
      dados.forca,
      dados.conceito,
      dados.popularidade,
      dia
    );
    console.log(
      `Fim do dia de treinamento, agora são ${hora} horas e você se dirige para sua casa.`
    );
    hora = avancahora(hora, 1);
    console.log(
      `São ${hora} horas. Você já chegou em casa após um longo dia de treino e vai descansar. Sua noite de descanso vai te render mais 4 pontos de stamina. `
    );
    dados.adicionastamina();
    dados.adicionastamina();
    dados.adicionastamina();
    dados.adicionastamina();
    aperte();
    console.log(
      `Para continuar jogando e ir para o dia seguinte aperte qualquer tecla, para parar de jogar, escreva sair: `
    );
    continuar = prompt("").toLowerCase();
    dia++;
  }
}
