# Animación de corazón de twitter

## Se crea el contenedor

```html
<div class="heart"></div>
```

## Los estilos del contenedor

Establecemos la altura y la anchura, y establecemos una imagen de fondo con la animación del corazón.
La imagen se posicionará a la izquierda y evitaremos que se repita la imagen. La imagen de fondo tendrá 
un tamaño de 2900% para que solo se muestre un frame de la imagen. La animación puede descomentarse después
generará una animación infinita que dura un segundo y se llama "heart-burst".

```css
.heart {
    cursor: pointer;
    width: 100px;
    height: 100px;
    background-image: url(./web_heart_animation.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: 2900%;
    /*animation: heart-burst 1s infinite;*/
}
```

## Animación con css

Se tienen dos animaciones la primera es para dar la animación del corazón y la segunda es la animación invertida,
se establece que el frame empieza a la izquierda y termina en la derecha y viceversa en el caso opuesto.

```css
@keyframes heart-burst {
    0% {
        background-position: left;
    }

    100% {
        background-position: right;
    }
}

@keyframes heart-burst-revert {
    0% {
        background-position: right;
    }

    100% {
        background-position: left;
    }
}
```

## Clases de css que activan las animaciones

Simplemente se manda a llamar a la animación con una duración de 0.8s y un saltado de 28 que depende del tamaño 
de las animaciones.

```css
.is_animating {
    animation: heart-burst .8s steps(28) 1;
}

.is_animating-revert{
    animation: heart-burst-revert .8s steps(28) 1;
}
```

## JS 

Se obtienen todos los elementos que contienen la clase heart, posteriormente se le añade a cada elemento
dos eventos el de click y animación terminada (animationend). En el evento click preguntamos si la imagen
de los sprites esta a la izquierda (implica que el corazón esta blanco) o derecha (implica que el corazón esta rojo), dependiendo del caso movemos la animación de un lado o de otro y dejamos la imagen en el sprite derecho
o izquierdo según sea el caso. Cuando la animación termina se activa el otro evento el cual simplemente
elimina las clases que activaron la animación para volver a ocuparla de nuevo.

```js
const hearts = Array.from(document.getElementsByClassName('heart'));

hearts.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.style.backgroundPosition===''||element.style.backgroundPosition==='left center'){
            element.classList.add('is_animating');
            element.style.backgroundPosition = 'right';
        }else{
            element.classList.add('is_animating-revert');
            element.style.backgroundPosition = 'left';
        }
    })
    element.addEventListener('animationend',()=>{
        element.classList.remove('is_animating');
        element.classList.remove('is_animating-revert');
    })
});
```