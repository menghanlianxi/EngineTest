var canvas = document.getElementById("app");
var stage = engine.run(canvas);
var bitmap = new engine.Bitmap();
stage.addChild(bitmap);
var button = new engine.Bitmap();
button.src = "按钮.jpg";
button.x = 300;
var bitmap1 = new engine.Bitmap();
bitmap1.src = "1.jpg";
bitmap1.x = 300;
/**
 * 动画
 *
 */
var standData = {
    name: "three",
    frames: [
        { image: "resource/stand/stand1.jpg" },
        { image: "resource/stand/stand2.jpg" },
        { image: "resource/stand/stand3.jpg" },
        { image: "resource/stand/stand4.jpg" },
        { image: "resource/stand/stand5.jpg" },
        { image: "resource/stand/stand6.jpg" },
        { image: "resource/stand/stand7.jpg" },
        { image: "resource/stand/stand8.jpg" },
    ]
};
var moveRightData = {
    name: "three",
    frames: [
        { image: "resource/moveR/moveR1.jpg" },
        { image: "resource/moveR/moveR2.jpg" },
        { image: "resource/moveR/moveR3.jpg" },
        { image: "resource/moveR/moveR4.jpg" },
        { image: "resource/moveR/moveR5.jpg" },
        { image: "resource/moveR/moveR6.jpg" },
        { image: "resource/moveR/moveR7.jpg" },
        { image: "resource/moveR/moveR8.jpg" },
    ]
};
var moveLeftData = {
    name: "three",
    frames: [
        { image: "resource/moveL/moveL1.jpg" },
        { image: "resource/moveL/moveL2.jpg" },
        { image: "resource/moveL/moveL3.jpg" },
        { image: "resource/moveL/moveL4.jpg" },
        { image: "resource/moveL/moveL5.jpg" },
        { image: "resource/moveL/moveL6.jpg" },
        { image: "resource/moveL/moveL7.jpg" },
        { image: "resource/moveL/moveL8.jpg" },
    ]
};
var fightData = {
    name: "three",
    frames: [
        { image: "resource/fight/fight1.jpg" },
        { image: "resource/fight/fight2.jpg" },
        { image: "resource/fight/fight3.jpg" },
        { image: "resource/fight/fight4.jpg" },
        { image: "resource/fight/fight5.jpg" },
        { image: "resource/fight/fight6.jpg" },
        { image: "resource/fight/fight7.jpg" },
        { image: "resource/fight/fight8.jpg" },
    ]
};
/**
 * 来个形状和文字
 */
var shape = new engine.Shape();
shape.beginFill("#000000", 0.5);
shape.drawRect(200, 100, 100, 100);
var text1 = new engine.TextField();
text1.text = "lalala";
text1.textcolor = "#0000FF";
text1.x = 300;
text1.y = 100;
var text2 = new engine.TextField();
text2.text = "lalala";
text2.textcolor = "#0000FF";
text2.size = 20;
text2.x = 300;
text2.y = 110;
//动画序列
var moveRightclip = new engine.MovieClip(moveRightData);
var moveLeftclip = new engine.MovieClip(moveLeftData);
var fightclip = new engine.MovieClip(fightData);
var standclip = new engine.MovieClip(standData);
var container1 = new engine.DisplayObjectContainer();
container1.x = 0;
var container2 = new engine.DisplayObjectContainer();
container2.x = 100;
var container3 = new engine.DisplayObjectContainer();
container3.x = 100;
container3.y = 100;
var container4 = new engine.DisplayObjectContainer();
container4.x = 100;
container4.y = 200;
var container5 = new engine.DisplayObjectContainer();
container4.x = 100;
container4.y = 300;
container1.addChild(bitmap1);
container1.addChild(button);
container2.addChild(moveRightclip);
container3.addChild(moveLeftclip);
container4.addChild(fightclip);
container5.addChild(standclip);
// container5.addChild(shape);
// container5.addChild(text1);
// container5.addChild(text2);
// moveRightclip.touchEnabled = true;
// moveRightclip.addEventListener(engine.MouseState.MOUSE_CLICK, () => {
// 	console.log("1212");
// });
// stage.addChild(container1);
stage.addChild(container2);
stage.addChild(container3);
stage.addChild(container4);
stage.addChild(container5);
moveRightclip.touchEnabled = true;
moveRightclip.addEventListener(engine.MouseState.MOUSE_MOVE, function (e) {
    console.log("e.offsetX: " + e.offsetX + "  e.offsetY: " + e.offsetY);
    container2.x += e.movementX;
    container2.y += e.movementY;
});
moveLeftclip.touchEnabled = true;
moveLeftclip.addEventListener(engine.MouseState.MOUSE_CLICK, function (e) {
    alert("111");
});
shape.touchEnabled = true;
text2.touchEnabled = true;
text2.addEventListener(engine.MouseState.MOUSE_DOWN, function (e) {
    var width = text2.width;
    var height = text2.height;
    console.log("找到了width: " + width + "  height: " + height);
});
