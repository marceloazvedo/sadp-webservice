class ResponseUtil {

    constructor() {
    }

    static getResponse(mensagem, response) {
        return Object.assign({}, this.getMensagem(mensagem), response);
    }

    static getErro(err) {
        if (err.codigo)
            return {status: this.STATUS_SUCESSO, mensagem: err};
        if(err.erros)
            return {status: this.STATUS_SUCESSO, mensagem: ResponseUtil.getMensagem(this.ERRO_VALIDACAO)};
        return {status: this.STATUS_ERRO_INTERNO, mensagem: err};
    }

    static getMensagem(mensagem) {
        if (mensagem === this.SUCESSO)
            return {codigo: '000', mensagem: 'Sucesso'};
        if (mensagem === this.ERRO_VALIDACAO)
            return {codigo: '000', mensagem: 'Verifique os campos'};

        return {};
    }

    static get SUCESSO() {
        return 'SUCESSO';
    }

    static get ERRO_VALIDACAO() {
        return 'ERRO_VALIDACAO';
    }

    static get STATUS_SUCESSO() {
        return 200;
    }

    static get STATUS_ERRO_INTERNO() {
        return 500;
    }
}

module.exports = ResponseUtil;