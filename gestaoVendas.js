var readline= require('readline-sync');
console.log("\n"+"---------------------------");
console.log ("    1- Comprar Passagem");
console.log("    2- Consultar Voos");
console.log("    3- Mapa de Assentos");
console.log("    4- Emitir Ticket");
console.log("    0- Encerrar Programa");
console.log("---------------------------");
var resposta= readline.question ('     DIGITE UM NUMERO: ');



switch(resposta){
    case "1":
        console.log("\n \n"+"+----------Passagens Aéreas----------+"+"\n \n"+"  Você está em --> Comprar Passagem"+"\n");
        var nome= readline.question("Nome: ");
        var sobrenome= readline.question("Sobrenome: ");
        var idade= readline.question("Idade: ");
        var assento= readline.question("Assento: ");
        var origem= readline.question("Origem: ");
        var destino= readline.question("Destino: ");
        break;
    case "2":
        console.log("\n \n"+"+----------Passagens Aéreas----------+"+"\n \n"+"  Você está em --> Consultar Voos"+"\n"+" Origem                Destino"+"\n"+"---------------------------------"+"\n "+origem+"             "+destino+"\n "+origem+"             "+"Moscou"+"\n "+origem+"             Luxemburgo"+"\n "+origem+"             Alasca");
    break;
        case "3":
    console.log("a1 "+"a2 "+"a3 "+"a4 "+"a5 "+"a6 "+"a7 "+"a8 "+"a9 "+"a10 "+"a11 "+"a12 \n"+"b1 "+"b2 "+"b3 "+"b4 "+"b5 "+"b6 "+"b7 "+"b8 "+"b9 "+"b10 "+"b11 "+"b12 ");
    var assentoDesejado=readline.question("Digite o assento desejado: ");
    
        function mapaAssentos(){
            var assentosDisponiveis="a1";"a2";"a3";"a4";"a5";"a6";"a7";"a8";"a9";"a10";"a11";"a12";"b1";"b2";"b3";"b4";"b5", "b6";"b7";"b8";"b9";"b10";"b11";"b12";
            if(assentoDesejado.value == assentosDisponiveis){
                console.log = assentosDesejado.replace(assentosDisponiveis, "X");
            }
        };break;
    case "4":
        console.log("\n \n"+"+----------Passagens Aéreas----------+"+"\n \n"+"  Você está em --> Emitir Ticket"+"\n"+"**********************************\n"+"OBRIGADO POR VIAJAR CONOSCO!"+"\n \n"+"Cliente: "+nome+" "+sobrenome+"\n"+"Idade: "+idade+"    Assento: "+assento+"\n"+"Origem/Destino: "+origem+" > "+destino+"\nStatus do voo: Confirmado");
    break;
        case "5":

}