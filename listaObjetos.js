const cliente = {
    nome:"João",
    idade:24,
    email:"joão@hotmail.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
};

cliente.enderecos = [
 {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "Ap 934",
},
];

cliente.enderecos.push({
    rua:"R. joseph ladder",
    numero: 404,
    apartamento:false,
});

const litaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(litaApenasApartamentos);