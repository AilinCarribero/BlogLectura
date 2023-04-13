
export const formatFechaISO = (fecha) => {
    const newFecha = new Date(fecha).toISOString().slice(0, 10);
    return newFecha;
}

export const formatFecha = (fecha) => {
    /*
    ****ARREGLAR EL FORMATEO DE FECHA***
    */

    const date = new Date(fecha);
    //const dateUTC = date.toISOString();
    //console.log(dateUTC, date.getUTCDate(), date.getFullYear(), date.getMonth(), date.getDate());
    const año = date.getFullYear();
    const dia = date.getUTCDate();
    const mes = dia == 1 ? (date.getMonth()+2 > 12 ? date.getMonth()+2 - 12 : date.getMonth()+2 ) : (date.getMonth()+1 > 12 ? date.getMonth()+1 - 12 : date.getMonth()+1);

    const fechaFormat = dia +'-'+ mes +'-'+ año;
    //console.log(dateUTC, fechaFormat)
    return fechaFormat
}