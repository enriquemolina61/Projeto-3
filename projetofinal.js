const prompt = require("prompt-sync")();
console.clear();
let continuar = "";
let jogador = prompt("Digite seu nome:");
let escolha = "";
let treino;
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
  forca: 3,
  conceito: 2,
  popularidade: 1,
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
  console.log();
  console.log(`São ${hora}h do dia ${dia}. Você acaba de acordar e precisa decidir o que vai fazer a partir de agora. Você tem 3 opções:);
1) Tomar Café e assistir tv. -> Stamina +1
2) Dormir mais um pouco e tomar um café rápdio. -> Stamina +2 / Força -1
3)Levantar tomar um café rápido e fazer exercícios. -> Stamina -1/ Força +2`);
  escolha = escolher();
  if (escolha == 1) {
    dados.adicionastamina();
  } else if (escolha == 2) {
    dados.adicionastamina();
    dados.adicionastamina();
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
  console.log(`São ${hora}h, você acaba de chegar no clube para treinar e precisa decidir o qual treino vai realizar. Você tem 3 opções:);
1) Treino Fisico
2) Treino Tático
3) Treino Coletivo`);

  escolha = escolher();
  hora = 10;
  console.log();
  if (escolha == 1) {
    //Treino Fisico
    console.log(`Aqui você tem duas opções de treino fisico:
    1)Se dedicar ao treino físico com muita vontade e gastar tudo o que tem. Cuidado pois existe a possibilidade de lesão.
    2)Ir um pouco de leve no treino fisico para não se desgastar para o treino da tarde.`);
    escolha = escolher2();
    if (escolha == 1) {
      treino = Math.floor(Math.random() * 101);
      if (treino < 10) {
        console.log(`Você tentou se destacar no treino,
    mas infelizmente acabou sentindo uma lesão e não pode seguir no treinamento.
    Você acabou perdendo 4 pontos de stamina e 2 pontos de força`);
        dados.diminuistamina();
        dados.diminuistamina();
        dados.diminuistamina();
        dados.diminuistamina();
        dados.diminuiforca();
        dados.diminuiforca();
        aperte();
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
    console.log(`Aqui você tem duas opções de treino tático:
    1)Estuda atentamente todas as instruções, para que nao perca nenhum detalhe das taticas que o time irá usar.
    2)Prefere sentar um pouco afastado, sem prestar muita atenção no treino tatico. Cuidado para o treinador não te pegar desatento.`);
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
    console.log(`Aqui você tem duas opções de treino coletivo:
    1)Tentar jogar o máximo que der, para aparecer bem para o técnico. Mas o risco de lesão existe.
    2)Tenta jogar mais para o time e fazer a parte tatica corretamente, sem riscos.`);
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
        dados.diminuistamina;
        dados.diminuistamina;
        dados.diminuiforca;
        dados.diminuiforca;
        dia++;
        continuar = prompt("Deseja continuar?");
        continue;
      } else if (treino < 10) {
        console.log(
          "Parabens! Você se destacou no treinamento e marcou até um gol! Você ganha 2 pontos de conceito, 1 de força e perde 3 de stamina."
        );
        dados.adicionaconceito;
        dados.adicionaconceito;
        dados.adicionaforca;
        dados.diminuistamina;
        dados.diminuistamina;
      } else {
        console.log(
          "Você fez um bom coletivo, não se destacou mas ganhou pontos de força pela sua vontade. Ganhou 2 pontos de força e perdeu 3 de stamina."
        );
        dados.adicionaforca;
        dados.adicionaforca;
        dados.diminuistamina;
        dados.diminuistamina;
      }
    } else {
      treino = Math.floor(Math.random() * 101);
      if (treino < 10) {
        console.log(
          `O treinador achou que você não se dedicou muito ao treino, com isso você acaba perdendo ponto de conceito com ele. Você perdeu 1 ponto de conceito, 2 de stamina e ganhou 1 de força.`
        );
        dados.adicionaforca;
        dados.diminuistamina;
        dados.diminuiconceito;
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
    dados.adicionaforca;
    dados.adicionaforca;
    dados.adicionastamina;
    dados.adicionastamina;
  } else {
    treino = Math.floor(Math.random() * 101);
    if (treino < 10) {
      console.log(
        "Você comeu rápido demais! Ao invés de descansar no horário de almoço, teve que ir no ambulatório se recuperar para o treino da tarde. Você perde 2 pontos de força e 1 de stamina."
      );
      dados.diminuistamina;
      dados.diminuiforca;
      dados.diminuiforca;
    } else {
      console.log(
        "Mesmo comendo rápido, você se sente bem e vai dar uma descansada para o treino da tarde e recupera 4 pontos de stamina."
      );
      dados.adicionastamina;
      dados.adicionastamina;
      dados.adicionastamina;
      dados.adicionastamina;
    }
  }
  console.log();
  console.log(
    `Para continuar jogando e ir para o dia seguinte aperte qualquer tecla, para parar de jogar, escreva sair: `
  );
  continuar = prompt("").toLocaleLowerCase();
  dia++;
}