// Passo 1: Importar readline para entrada do usuário
const readline = require("readline");

// Criando uma interface para leitura dos dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`);
    }
}

// Função para solicitar os dados do herói e executar o ataque
const solicitarDadosHeroi = () => {
  rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a idade do herói: ", (idade) => {
      const idadeNum = parseInt(idade);
      
      if (isNaN(idadeNum) || idadeNum <= 0) {
        console.log("Idade inválida. Por favor, insira um número positivo.");
        rl.close();
        return;
      }

      rl.question("Digite o tipo do herói (guerreiro, mago, monge, ninja): ", (tipo) => {
        const tiposValidos = ['guerreiro', 'mago', 'monge', 'ninja'];

        if (!tiposValidos.includes(tipo.toLowerCase())) {
          console.log("Tipo inválido. Por favor, escolha entre guerreiro, mago, monge ou ninja.");
          rl.close();
          return;
        }
        
        // Criar uma nova instância de Heroi com os dados fornecidos
        const heroi = new Heroi(nome, idadeNum, tipo.toLowerCase());

        // Chamar o método atacar
        heroi.atacar();

        // Fechar a interface
        rl.close();
      });
    });
  });
};

// Iniciar o processo de solicitação de dados
solicitarDadosHeroi();
