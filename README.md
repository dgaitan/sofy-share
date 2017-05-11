# Sofy Sharer

Simplemente una pequña libreria que permite crear ventanas modales para compartir contenido en las redes sociales (Facebook, Twitter, Google+ y Linkedin). 

Para utilizar la libreria solamente necesitas agregar dos data atributos a tu etiqueta `<a></a>`, a continuacion un ejemplo del marcado:

```html
<a href="#" class="btn-primary social-share" data-network="facebook" data-url="http://www.example.com">Facebook</a>
<a href="#" class="btn-primary social-share" data-network="twitter" data-url="http://www.example.com">Twitter</a>
```

Donde `data-network` es la red social a la que queremos compartir y `data-url` la url a compartir.

Para ejecutar esto tenemos que integrar jquery y el el archivo de sofysharer:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="../your-js/sofysharer.min.js"></script>
```

Luego solamente ejecutamos:

```javascript
$(function(){
  $('.social-share').sofyShare();
});
```

y Listo!

Si quisieramos cambiar los valores por defecto, aca tenemos las opciones:

```javascript
{
    facebookUrl: shareLinks.facebook, // url de facebook para compartir contenido
    twitterUrl: shareLinks.twitter, // url de twitter para compartir contenido
    googleUrl: shareLinks.google, // url de google para compartir contenido
    linkedinUrl: shareLinks.linkedin, // url de linkdin para compartir contenido
    networkData: 'network', // data atributo que selecciona la red social a compartir
    urlData: 'url', // url a compartir
    windowWidth: 350, // ancho del modal
    windowHeight: 550 // altura del modal
}
```

Podemos modificar estos valores por defectos como por ejemplo si quisieramos cambiar el nombre del data atributo que se encarga de detectar la red social a la que quisieramos compartir:

```javascript
$(function(){
  $('.social-share').sofyShare({
    networData: 'my-custom-name'
  });
});
```


