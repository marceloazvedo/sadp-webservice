class DateUtil {


    static contadorDiasEntreDatas(dataInicia, dataFinal) {
        var date1_ms = dataInicia.getTime();
        var date2_ms = dataFinal.getTime();
        var difference_ms = Math.abs(date2_ms - date1_ms);
        return Math.round(difference_ms / this.UM_DIA);
    }

    static getDataExpiracao() {
        return new Date().getTime() + this.TRINTA_MINUTOS;
    }


    static get UM_DIA() {
        return (1000 * 60 * 60 * 24);
    }

    static get TRINTA_MINUTOS() {
        return (1 * 30 * 60 * 1000);
    }

}

module.exports = DateUtil;