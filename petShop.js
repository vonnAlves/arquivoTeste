const nomeEmpresa = "Animal Petshop";

console.log(nomeEmpresa);

let listaDePets = []
const adicionarPet = (Nome, 
  Idade, 
  Raca,
  Sexo,
  Cuidador,
  Castrado, 
Vacinado,
  rga) => {
  let novoPet = {
    Nome,
    Idade,
    Raca,
    Sexo,
    Cuidador,
    Castrado,
    Vacinado,
    rga,
  }
  listaDePets.push(novoPet);
}
  
adicionarPet("Flor", 5, "Gato", "F", "Vinny", false, false,12345);
adicionarPet("toto", 4, "chow-chow", "Masculino", "Carlos", false, false, 12334);


listaDePets.forEach((pet) => {
    console.log("-".repeat(12));
    console.log("Nome Do Pet:" + pet.Nome);
    console.log("Idade Do Pet:" + pet.Idade);
    console.log("Raça Do Pet:" + pet.Raca);
    console.log("Sexo Do Pet:" + pet.Sexo);
    console.log("Cuidador:" + pet.Cuidador);
    console.log("Castrado:" + pet.Castrado);
    console.log("Vacinado:" + pet.Vacinado);
    console.log("Registro:" + pet.rga);
  })

const castrarPet = petNumero => {
  listaDePets.map(function(){
  return petNumero.Castrado = true;
  });
}
const vacinarPet = petNumero =>{
  petNumero.Vacinado
    listaDePets.map(function(){
      petNumero.Vacinado = true;
      });
  }

const servico = (petNumero, tipoServico) => tipoServico(petNumero);
servico(listaDePets[1],vacinarPet);

const encontraPet = (petRga) => {
  let petAchado = listaDePets.find(
    (pet, numero) => !!(listaDePets[numero].rga == petRga)
  );

  return petAchado != undefined;
};

console.log("existe", encontraPet(12344445));


