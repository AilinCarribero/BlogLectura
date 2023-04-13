export const formatTextMix = (text) => {
    if (text && typeof text === 'string') {
        const letra1 = text.charAt(0); //Obtenemos la primer letra del texto
        const letraResto = text.slice(1); //Obtenemos el resto de las letras

        //Formateamos la primer letra a MAYUSCULA y el resto del texto en minuscula volviendo a unir todo
        const newText = letra1.toUpperCase() + letraResto.toLowerCase();
        return newText.replace(/-/g, " ");
    } else {
        return text;
    }
}
