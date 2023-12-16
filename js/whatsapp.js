function enviarMensaje(producto) {
    var numeroTelefono = '51910645892';
    var mensaje = encodeURIComponent('¡Hola! Quisiera solicitar información sobre ' + producto);
    var url = 'https://api.whatsapp.com/send/?phone=' + numeroTelefono + '&text=' + mensaje + '&type=phone_number&app_absent=0';
    window.open(url, '_blank');
}