interface Alimento {
    nome: string;
    cod: string;
    carb: number;
    prot: number;
    gor: number;
    cal: number
}

const alimentos: Alimento[] = [
    {
        nome: 'arroz tipo 1 cozido',
        cod: 'ar-1-co',
        carb: 28.1,
        prot: 2.5,
        gor: 0.2,
        cal: 128
    },
    
    {
        nome: 'feijão preto cozido',
        cod: 'fj-pr-co',
        carb: 14,
        prot: 4.5,
        gor: 0.5,
        cal: 77
    },

    {
        nome: 'banana prata crua',
        cod: 'bn-pt-cr',
        carb: 26,
        prot: 1.3,
        gor: 0.1,
        cal: 98
    },

    {
        nome: 'frango peito cru',
        cod: 'fg-pt-cr',
        carb: 0,
        prot: 21.5,
        gor: 3,
        cal: 119
    },

    {
        nome: 'batata inglesa cozida',
        cod: 'bt-in-co',
        carb: 11.9,
        prot: 1.2,
        gor: 0,
        cal: 52
    }
]

export default alimentos;