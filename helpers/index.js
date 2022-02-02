export const formatearNumero = (numero) => {

    return numero.toLocaleString('de-DE', {
     style: 'currency',
     currency: 'EUR',
    })


};

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const options = {year: 'numeric', month: 'short', day: '2-digit'};
    return fechaNueva.toLocaleDateString('es-ES', options);
};

