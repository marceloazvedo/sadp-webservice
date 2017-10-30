const md5 = require('md5');

class StringUtil {

    static formatarNumero(number) {
        if (number < 10 && number >= 0) {
            return '0' + number;
        }
        return number;
    };

    static dataParaString(date, mask) {
        let diaMes = date.getDate();
        let mesAno = date.getMonth();
        let ano = date.getFullYear();

        let hora = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();

        if (mask.indexOf('dd') !== -1) {
            mask = mask.replace('dd', this.formatarNumero(diaMes));
        }
        if (mask.indexOf('MM') !== -1) {
            mask = mask.replace('MM', this.formatarNumero(mesAno));
        }
        if (mask.indexOf('yyyy') !== -1) {
            mask = mask.replace('yyyy', ano);
        }
        if (mask.indexOf('HH') !== -1) {
            mask = mask.replace('HH', this.formatarNumero(hora));
        }
        if (mask.indexOf('mm') !== -1) {
            mask = mask.replace('mm', this.formatarNumero(minutos));
        }
        if (mask.indexOf('ss') !== -1) {
            mask = mask.replace('ss', this.formatarNumero(segundos));
        }

        return mask;
    };

    static stringParaData(data) {
        var arrayData = data.split('/');
        return new Date(arrayData[2], arrayData[1] - 1, arrayData[0]);
    };

    static stringParaCpfCnpj(cpfCnpj) {
        if (cpfCnpj.length === 11) {
            let newCpf = cpfCnpj.slice(0, 3).concat('.')
                .concat(cpfCnpj.slice(3, 6)).concat('.')
                .concat(cpfCnpj.slice(6, 9)).concat('-')
                .concat(cpfCnpj.slice(9, 11));
            return newCpf;
        } else if (cpfCnpj.length === 14) {
            let newCnpj = cpfCnpj.slice(0, 2).concat('.')
                .concat(cpfCnpj.slice(2, 5)).concat('.')
                .concat(cpfCnpj.slice(5, 8)).concat('/')
                .concat(cpfCnpj.slice(8, 12)).concat('-')
                .concat(cpfCnpj.slice(12, 14));
            return newCnpj;
        } else {
            throw {codigo: '015', mensagem: 'Insira um CPF/CNPJ válido '};
        }
    };

    static validarCpf(cpf) {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }

    static validarCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj === "00000000000000" ||
            cnpj === "11111111111111" ||
            cnpj === "22222222222222" ||
            cnpj === "33333333333333" ||
            cnpj === "44444444444444" ||
            cnpj === "55555555555555" ||
            cnpj === "66666666666666" ||
            cnpj === "77777777777777" ||
            cnpj === "88888888888888" ||
            cnpj === "99999999999999")
            return false;

        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(1))
            return false;

        return true;

    }


    static limparCpfCnpj(cpfCnpj) {
        if (!cpfCnpj)
            return '';
        cpfCnpj = cpfCnpj.replace('.', '').replace('.', '');
        cpfCnpj = cpfCnpj.replace('-', '');
        cpfCnpj = cpfCnpj.replace('/', '');
        return cpfCnpj;
    }

    static validarEmail(email) {
        let er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
        return !er.exec(email);
    }

    static getSenhaPadrao(nomeCompleto, cpfCnpj) {
        let novaSenha = nomeCompleto[0].concat(cpfCnpj).concat(nomeCompleto[nomeCompleto.length - 1]);
        return novaSenha;
    }

    static getToken(perfil) {
        return md5(perfil.senha.concat(perfil.cpfCnpj).concat(perfil.login).concat(new Date()).concat(this.getSecret()))
    }

    static validarLogin(login) {
        return /(?=^.{4,15}$)^[a-z][a-z0-9]*[a-z0-9]+$/g.test(login);
    }

    static validarSenha(senha) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/.test(senha);
    }

    static apenasNumeros(valor) {
        return /^\d+$/.test(valor);
    }

    static getSecret() {
        return 'c0d3l1neh3s0y4m';
    }

}


module.exports = StringUtil;