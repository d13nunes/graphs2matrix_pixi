/**
 * App.js
 *
 * The main entry point from WebPack
 * - Appends render canvas to DOM
 * - Calls renderer.render
 * - Add Loading Screen and loads assets
 * - Adds Example Screen once loading is complete
 * - Subscribes and Dispatches to AppStore & DOM
 */
import { Texture, Application, Sprite, Graphics } from 'pixi.js';
import './index.html';
import LOGO from './displayobjects/Logo/logo@2x.png';
import { canvasWidth, canvasHeight } from './constants/AppConstants';


let app = new Application({ width: canvasWidth, height: canvasHeight, backgroundColor: 0xff00ff });
document.body.appendChild(app.view);

const circle = new Sprite(Texture.WHITE);
circle.x = 200;
circle.y = 200;
circle.width = 50;
circle.height = 50;
app.stage.addChild(circle);


function createCircle() {
  const circle = new Graphics()
  circle.beginFill(0xffffff)
  circle.drawCircle(30, 30, 30)
  circle.x = 100;
  circle.y = 100;
  circle.endFill()
  return circle
}


// let circle = createCircle()
circle.interactive = true;
circle.dragging = false
circle.on('mousedown', function (e) {
  console.log('Mouse clicked');
  console.log('X', e.data.global.x, 'Y', e.data.global.y);
})
app.stage.on('mousedown', function (e) {
  console.log('Mouse clicked');
  console.log('X', e.data.global.x, 'Y', e.data.global.y);

  circle.x = e.data.global.x;
  circle.y = e.data.global.y;
  circle.dragging = true;
})

circle.on('mousemove', function (e) {
  console.log('Dragging');

  if (circle.dragging) {
    console.log('Dragging11');
    circle.x = e.data.global.x;
    circle.y = e.data.global.y;
  }
});

circle.on('mouseup', function (e) {
  console.log('Moving');

  circle.x = e.data.global.x;
  circle.y = e.data.global.y;
  // circle.dragging = false;
});

app.stage.addChild(circle)
