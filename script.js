function enviarPedidoWhatsApp(idTarjeta) {
    const telefonoComercial = "584242311038";
    const tarjeta = document.getElementById(idTarjeta);
    
    if (!tarjeta) {
        console.error("Error: No se encontró la tarjeta " + idTarjeta);
        return;
    }

    const nombreDulce = tarjeta.getAttribute("data-nombre");
    const presentacion = tarjeta.querySelector(".select-presentacion").value;
    const saborRelleno = tarjeta.querySelector(".select-relleno").value;
    
    const textoMensaje = `¡Hola, Maide! Vi tu Menú Digital y quiero ordenar:
━━━━━━━━━━━━━━━━━━━━
📌 *Dulce:* ${nombreDulce}
📦 *Presentación:* ${presentacion}
🍫 *Detalles/Rellenos:* ${saborRelleno}
━━━━━━━━━━━━━━━━━━━━
Por favor, confírmame el total de la orden para concretar el pago. ¡Gracias!`;

    const urlWhatsApp = `https://whatsapp.com{telefonoComercial}&text=${encodeURIComponent(textoMensaje)}`;
    window.open(urlWhatsApp, '_blank');
}
