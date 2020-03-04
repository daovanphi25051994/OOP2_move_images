/**
 * Created by nhatnk on 4/26/17.
 * phi edited
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 10;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function(){
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += 50;
        console.log('ok: ' + this.top);
    }

}

let arrayImages = ["https://lh3.googleusercontent.com/proxy/SEK7LQBbpTb1zRJXptGQF0T8OGX1oDjuWePzJr2nn6pgK4YyNV6zzLBLrOjjFJ-riOQ0E4zRy6tSIMNAGV1HxHDFaUl5dW2BPrmhyE0s69M-2MPAFIvGoAaBeBuCRXnpZqpnTv4Lk-cveFA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-tO0fsCX1U73IxHYdRNfCf7dUAeVqreceekzqUVUesWXIijJi",
    "https://1.bp.blogspot.com/-duGpeVR-c-k/WRsD2I1yItI/AAAAAAAAnJY/n9v7A1FAZUcojThvw5xsmOcJBISQfxwTQCLcB/s1600/01f7886a6458eb2f9128630f34e882a1.jpg"]


var hero = new Hero(arrayImages[2], 20, 30, 200);
let pikachu = new Hero(arrayImages[0], 700, 1000, 200);
let dragon = new Hero(arrayImages[1], 600, 1500, 300);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    if(pikachu.top > 0 ){
        pikachu.moveUp();
    }
    if(dragon.left > 0){
        dragon.moveLeft();
    }
    document.getElementById('hero-part1').innerHTML = hero.getHeroElement();
    document.getElementById('hero-part2').innerHTML = pikachu.getHeroElement();
    document.getElementById('hero-part3').innerHTML = dragon.getHeroElement();
    setTimeout(start, 500)
}

start();