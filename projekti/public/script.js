/*
https://github.com/SelbyJGomes/R-Place                  (JavaScript and NodeJS)
https://codepen.io/ste-vg/pen/dvLvzy                    (Typescript)
https://www.youtube.com/watch?v=XSw5fFo0_pA             (javascript + PHP vue)
https://github.com/aschmelyun/laraplace                 (ylemmän videon github. hämmentävä)
https://github.com/dynastic/place                       (Javascript, NodeJS, Mongo, Yarn package manager)
*/
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

var canvas;
var ctx;
window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
}
/*
//https://github.com/dynastic/place/blob/main/models/pixel.js 
var PixelSchema = new Schema({
    xPos: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },
    yPos: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },
    editorID: {
        type: Schema.ObjectId,
        required: false
    },
    lastModified: {
        type: Date,
        required: true
    },
    colour:{
        type: string,
        required: true
    }
});
*/
const pixel = () =>
{
	let yPos;
    let xPos;
    let color;
}

const activePixel = ref(null);
const canvasClicked = (e) => {
    let clickedX = e.pageX / 16;
    let clickedY = e.pageY;
//huomaa ´-merkki ei ole heittomerkki
activePixel.value = `${clickedX}:${clickedY}`;
}

//let cursor = Pixel.find().cursor();

function changePixelColor(){

}
const colors = [ 'ffffff',
				 'e4e4e4',
				 '888888',
				 '222222',
				 'ffa7d1',
				 'e50000',
				 'e59500',
				 'a06a42',
				 'e5d900',
				 '94e044',
				 '02be01',
				 '00d3dd',
				 '0083c7',
				 '0000ea',
				 'cf6ee4',
				 '820080'
                ];
const gridSize = [500, 500];
const squareSize = [5, 5];
const coolDownTime = 500; //milliseconds
let uid = ""; //user id


//Codepen code
function writePixel(x=0,y=0,color='ffffff'){
    //if we have user id 
    if(uid){
       
    }
}

function createRect(x = 0, y= 0){
    console.log("create rect");
    let side = 50;
    let color = "#";
    const colorpicker = "0123456789ABCDEF";

    for(let i=0;i<6;i++){
        let temp = Math.floor(Math.random()*16);
        color = color + colorpicker[temp];
    }

    //canvas.getContext("2d").fillStyle = color;
    //canvas.getContext("2d").fillRect(x,y,side,side);
    ctx.fillStyle = color;
    ctx.fillRect(x,y,side,side);

   /* https://stackoverflow.com/questions/30208747/give-rectangle-an-id 
    You can assign ids only to elements.
    Since your rectangle is not an element, but the content of a canvas, 
    it cannot have an id.
    */
    //https://www.w3schools.com/graphics/svg_rect.asp 
    console.log("create rect end");
}
function round5(x)
{
    if(x % 5 == 0){
        return x;
    }
    else{
        //Math.ceil rounds up, so we decrease 5 at the end to get lowest value.
        //ONLY IF x IS NOT MULTIPLE OF 5
        return Math.ceil(x / 5) * 5 - 5;
    }
}

//pixel data contains data of all pixels
let pixelData = [

]

function updatePixelData(){
    
}

function startCanvas(){
    console.log("start rects");
    createRect(10,10);
    createRect(50,50);
    createRect(100,100);
    createRect(200,200);
    console.log("end of start");

}
