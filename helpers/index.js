export const formatearNumero = (numero) => {

    return numero.toLocaleString('de-DE', {
     style: 'currency',
     currency: 'EUR',
    })


};

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const options = {day: '2-digit', year: 'numeric', month: 'short' };
    
    return fechaNueva.toLocaleDateString('en-GB', options);
};

