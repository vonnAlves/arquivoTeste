const nomeEmpresa = "Animal Petshop";

console.log(nomeEmpresa);

let listaDePets = [];

// funcao para adicionar pets , e puxar para a array lista de pets.
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
  
adicionarPet("Flor", 5, "Gato", "Feminino", "Vinny", false, false,12345);
adicionarPet("toto", 4, "chow-chow", "Masculino", "Carlos", false, false, 12334);

//lista todos os pets dentro da array
const listarPet = () =>{
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
}

//funcao para castrar um pet, quando chamada gera uma nova array, que retornara "true" para pet.Castrado;
const castrarPet = petNumero => {
  listaDePets.map(function(){
    return petNumero.Castrado = true;
    });
}
//funcao para vacinar um pet, quando chamada gera uma nova array, que retornara "true" para pet.Vacinadp;
const vacinarPet = petNumero =>{
  listaDePets.map(function(){
    return petNumero.Vacinado = true;
    });
}
//realiza o tipo de servico que ira ser prestado;
const servico = (petNumero, tipoServico) => tipoServico(petNumero);
  
servico(listaDePets[1],castrarPet);
listarPet();

//verifica se pet esta cadastrado no sistema por meio de seu registro;
const buscarPet = (petRga) => {
  let petAchado = listaDePets.find(
    (pet, numero) => !!(listaDePets[numero].rga == petRga)
  );

  return petAchado != undefined;
};

console.log("Pet existe:", buscarPet(12345));


