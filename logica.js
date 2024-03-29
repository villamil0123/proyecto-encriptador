//Funcion para encriptar
function mensaje_encriptar() {
    const nombre= document.getElementById('texto-usuario').value;
    if (/[A-Z]/.test(nombre) || /[áéíóúÁÉÍÓÚ]/.test(nombre)){
        alert('Solo letras minúsculas y sin acentos');
    }else{
    const nombre_nuevo = nombre.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    const ocultarImagen = document.getElementById('img-cuerpo');
    const mostrarImagen = document.getElementById ('boton_copiar');
    let mensaje_pantalla = document.querySelector('#mensaje-prin');
    mensaje_pantalla.style.color='gray';
    let mensaje_pantalla_2= document.querySelector('#mensaje-prin-2')
    
    mensaje_pantalla_2.innerHTML=('');
    mensaje_pantalla.innerHTML=(nombre_nuevo);
    ocultarImagen.style.display = 'none';
    mostrarImagen.style.display ='block';
    }
}


//Funcion para desencriptar
function mensaje_desencriptar() {
    const mensaje_desencriptado=document.getElementById('texto-usuario').value
    const ocultarImagen = document.getElementById('img-cuerpo');
    const mostrarImagen = document.getElementById ('boton_copiar');
    const mensaje_nuevo=mensaje_desencriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    let mensaje_pantalla = document.querySelector('#mensaje-prin');
    mensaje_pantalla.style.color='gray';
    let mensaje_pantalla_2= document.querySelector('#mensaje-prin-2')

    mensaje_pantalla_2.innerHTML=('');
    mensaje_pantalla.innerHTML=(mensaje_nuevo);
    ocultarImagen.style.display = 'none';
    mostrarImagen.style.display ='block';

}

//Funcion para copiar
function copiarAlPortapapeles(){
    var codigoACopiar = document.getElementById('mensaje-prin');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);

    try {
      var res = document.execCommand('copy');
      if (res) {
        // Éxito al copiar
        alert('Texto copiado al portapapeles');
      } else {
        // Error al copiar
        alert('No se pudo copiar el texto');
      }
    } catch (ex) {
      // Excepción
      console.error('Error al ejecutar el comando de copia');
    } finally {
      window.getSelection().removeRange(seleccion);
    }
  }