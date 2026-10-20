class Funcionarios {
    id_funcionario: number;
    nome: string;
    sexo: string;
    CPF: string;
    RG: string;
    dt_contratacao: Date;

    constructor(
        id_funcionario: number,
        nome: string,
        sexo: string,
        dt_contratacao: Date,
        CPF: string,
        RG: string
    ) {
        this.id_funcionario = id_funcionario;
        this.nome = nome;
        this.sexo = sexo;
        this.dt_contratacao = dt_contratacao;
        this.CPF = CPF;
        this.RG = RG;
    }

    apresentarDados(){
        console.log(
            "ID:", this.id_funcionario,
            "| Nome:", this.nome,
            "| Sexo:", this.sexo,
            "| Data de contratação:",
            this.dt_contratacao.toLocaleDateString("pt-BR"),
            "| CPF:", this.CPF,
            "| RG:", this.RG
        );
    }
}

class Pratos {
    id_prato: number;
    nome_prato: string;
    dt_validade: Date;
    nacionalidade: string;
    preco_unid: number;

    constructor(
        id_prato: number,
        nome_prato: string,
        dt_validade: Date,
        nacionalidade: string,
        preco_unid: number
    ) {
        this.id_prato = id_prato;
        this.nome_prato = nome_prato;
        this.dt_validade = dt_validade;
        this.nacionalidade = nacionalidade;
        this.preco_unid = preco_unid;
    }

    apresentarDados() {
        console.log(
            "ID:", this.id_prato,
            "| Nome:", this.nome_prato,
            "| Data de validade:",
            this.dt_validade,
            "| Nacionalidade:", this.nacionalidade,
            "| Preço unitário: R$", this.preco_unid
        );
    }
}

class Pedido {
    id_pedido: number;
    numero_pedido: number;
    pratoNome: string;
    quantidade: number;
    preco_unitario: number;

    constructor(
        id_pedido: number,
        numero_pedido: number,
        pratoNome: string,
        quantidade: number,
        preco_unitario: number
    ) {
        this.id_pedido = id_pedido;
        this.numero_pedido = numero_pedido;
        this.pratoNome = pratoNome;
        this.quantidade = quantidade;
        this.preco_unitario = preco_unitario;
    }

    calcularSubtotal(){
        return this.quantidade * this.preco_unitario;
    }

    apresentarDados() {
        console.log(
            "ID:", this.id_pedido,
            "| Número do pedido:", this.numero_pedido,
            "| Nome do prato:", this.pratoNome,
            "| Preço unitário: R$",
            this.preco_unitario,
            "| Quantidade:", this.quantidade,
            "| Subtotal:",
            this.calcularSubtotal().toFixed(2)
        );
    }
}

class Entrega {
    id_entrega: number;
    data_entrega: Date;
    horaSaida: string;
    horaChegada: string;
    numero_pedido: number;
    frete: number;

    constructor(
        id_entrega: number,
        data_entrega: Date,
        horaSaida: string,
        horaChegada: string,
        numero_pedido: number,
        frete: number
    ) {
        this.id_entrega = id_entrega;
        this.data_entrega = data_entrega;
        this.horaSaida = horaSaida;
        this.horaChegada = horaChegada;
        this.numero_pedido = numero_pedido;
        this.frete = frete;
    }

    calcularValorTotal(){
        return calcularValorTotalPedido(this.numero_pedido)
            + this.frete;
    }

    apresentarDados(){
        console.log(
            "ID:", this.id_entrega,
            "| Data da entrega:",
            this.data_entrega.toLocaleDateString("pt-BR"),
            "| Horário de saída:", this.horaSaida,
            "| Horário de chegada:", this.horaChegada,
            "| Número do pedido:", this.numero_pedido,
            "| Valor dos pratos:",
            calcularValorTotalPedido(this.numero_pedido).toFixed(2),
            "| Frete:", this.frete.toFixed(2),
            "| Valor total:",
            this.calcularValorTotal().toFixed(2)
        );
    }
}

class Endereco {
    id_endereco: number;
    cep: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    constructor(
        id_endereco: number,
        cep: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: number
    ) {
        this.id_endereco = id_endereco;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }

    cadastrar(){
        listaEnderecos.push(this);
    }

    apresentarDados(){
        console.log(
            "ID:", this.id_endereco,
            "| CEP:", this.cep,
            "| Cidade:", this.cidade,
            "| Bairro:", this.bairro,
            "| Rua:", this.rua,
            "| Número:", this.numero
        );
    }
}

class Freelancer extends Funcionarios {
    id_freelancer: number;
    diasRestantes: number;
    contratoAtivo: boolean;
    salarioHora: number;

    constructor(
        id_freelancer: number,
        id_funcionario: number,
        nome: string,
        sexo: string,
        dt_contratacao: Date,
        CPF: string,
        RG: string,
        salarioHora: number,
        diasRestantes: number = 0,
        contratoAtivo: boolean = true
    ) {
        super(
            id_funcionario,
            nome,
            sexo,
            dt_contratacao,
            CPF,
            RG
        );

        this.id_freelancer = id_freelancer;
        this.diasRestantes = diasRestantes;
        this.contratoAtivo = contratoAtivo;
        this.salarioHora = salarioHora;
    }

    apresentarDados(){
        super.apresentarDados();

        console.log(
            "ID Freelancer:", this.id_freelancer,
            "| Dias restantes:", this.diasRestantes,
            "| Contrato ativo:", this.contratoAtivo,
            "| Salário por hora:", this.salarioHora.toFixed(2)
        );
    }
}

class Contratado extends Funcionarios {
    id_contratado: number;
    salarioFixo: number;

    constructor(
        id_contratado: number,
        id_funcionario: number,
        nome: string,
        sexo: string,
        dt_contratacao: Date,
        CPF: string,
        RG: string,
        salarioFixo: number
    ) {
        super(
            id_funcionario,
            nome,
            sexo,
            dt_contratacao,
            CPF,
            RG
        );

        this.id_contratado = id_contratado;
        this.salarioFixo = salarioFixo;
    }

    apresentarDados(){
        super.apresentarDados();

        console.log(
            "ID Contratado:", this.id_contratado,
            "| Salário fixo:", this.salarioFixo.toFixed(2)
        );
    }
}


const listaFuncionarios: Funcionarios[] = [];
const listaPratos: Pratos[] = [];
const listaPedidos: Pedido[] = [];
const listaEntregas: Entrega[] = [];
const listaEnderecos: Endereco[] = [];
const listaFreelancers: Freelancer[] = [];
const listaContratados: Contratado[] = [];


function calcularValorTotalPedido(numeroPedido: number): number {
    return listaPedidos
        .filter(pedido => pedido.numero_pedido === numeroPedido)
        .reduce(
            (total, pedido) => total + pedido.calcularSubtotal(),
            0
        );
}


const contratado1 = new Contratado(
    5,
    12,
    "Sabrina Sato Bieber",
    "Feminino",
    new Date("2024-11-01"),
    "329.464.988-20",
    "11.878.666-9",
    5400
);

listaContratados.push(contratado1);


const freelancer1 = new Freelancer(
    1,
    2,
    "Livia Arantes de Sousa",
    "Feminino",
    new Date("2026-01-15"),
    "987.654.321-00",
    "98.765.432-1",
    40.00,
    15,
    true
);

listaFreelancers.push(freelancer1);


const funcionario1 = new Funcionarios(
    1,
    "João Silva",
    "Masculino",
    new Date("2025-03-10"),
    "123.456.789-00",
    "12.345.678-9"
);

listaFuncionarios.push(funcionario1);


const prato1 = new Pratos(
    1,
    "Feijoada",
    new Date("2026-12-31"),
    "Brasileira",
    35.00
);

listaPratos.push(prato1);

const prato2 = new Pratos(
    2,
    "Inhoque",
    new Date("2026-11-30"),
    "Italiana",
    42.00
);

listaPratos.push(prato2);

const pedido1 = new Pedido(
    1,
    1001,
    prato1.nome_prato,
    2,
    prato1.preco_unid
);

listaPedidos.push(pedido1);

const pedido2 = new Pedido(
    2,
    1001,
    prato2.nome_prato,
    1,
    prato2.preco_unid
);

listaPedidos.push(pedido2);


const endereco1 = new Endereco(
    1,
    "13001-074",
    "São Paulo",
    "Sé",
    "Praça da Sé",
    100
);

endereco1.cadastrar();


const entrega1 = new Entrega(
    1,
    new Date("2026-10-20"),
    "12:00",
    "12:35",
    1001,
    8.00
);

listaEntregas.push(entrega1);


console.log("FUNCIONÁRIOS");
listaFuncionarios.forEach(funcionario =>
    funcionario.apresentarDados()
);

console.log("FREELANCERS");
listaFreelancers.forEach(freelancer =>
    freelancer.apresentarDados()
);

console.log("CONTRATADOS");
listaContratados.forEach(contratado =>
    contratado.apresentarDados()
);

console.log("PRATOS");
listaPratos.forEach(prato =>
    prato.apresentarDados()
);

console.log("PEDIDOS");
listaPedidos.forEach(pedido =>
    pedido.apresentarDados()
);

console.log(
    "Valor total dos pratos do pedido 1001: R$",
    calcularValorTotalPedido(1001).toFixed(2)
);

console.log("ENDEREÇOS");
listaEnderecos.forEach(endereco =>
    endereco.apresentarDados()
);

console.log("ENTREGAS");
listaEntregas.forEach(entrega =>
    entrega.apresentarDados()
);