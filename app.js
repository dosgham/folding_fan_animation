
var image = document.createElement('img');
image.src = 'data:image/jpeg;base64,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';


const pieces = 30;
var angle0 = 90;
const canvas_agreg = new Array(pieces);
const ctx_agreg = new Array(pieces);
const total_angle = Math.PI;
var angle_final_piece;
var opacity1 = 0.25;
var opacity2 = 0.3;
var is_open = true;
var static_angle = 0;
static_piece =7;
var fan = {
    angle_start: 0,
    angle_end: 0,
    fillStyle: `rgba(0,0,255,${opacity1})`,
    vertical_angle: 0,
    ref_line_angle: 0,
    Delta: 0,
    static_piece:0
};
var fan_container_angle = {
    X_angle:0,
    Y_angle:0,
    Z_angle:0
}

angle0 = 90;
var delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));



var fan_container = document.querySelector('.fan-container');

draw_one_fan();
function draw_one_fan(){
    for (let i = 0; i < pieces+2; i++) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas_agreg[i] = canvas;
        ctx_agreg[i] = ctx;
    }
    
    window.requestAnimationFrame(animation_fan_open);
}

function animation_fan_open() {
    if (image.complete) {
        draw_all();
    } else {
        image.onload = (() => {
            draw_all();
        })
    }
    angle0 = angle0 - 1;
    delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));
    
    if (angle0 > 0) {
        setTimeout(()=>{
            window.requestAnimationFrame(animation_fan_open);
        },3);
    }else{
        setTimeout(() => {
            window.requestAnimationFrame(animation_fan_close);
        }, 3)
    }
}

function animation_fan_close() {

    if (image.complete) {
        draw_all();
    } else {
        image.onload = (() => {
            draw_all();
        })
    }
    angle0 = angle0 + 1;
    
    delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));
    if (angle0 < 90) {
        setTimeout(() => {
            window.requestAnimationFrame(animation_fan_close);
        }, 3)
    }else{
        console.log(window.innerWidth)
        fan_container.style.transform = `translateX(${(Math.random()-0.5)*50}vw) translateY(${(Math.random()-0.5)*20}vh) rotateZ(${180*(Math.random()-0.5)}deg) rotateY(${(Math.random()-0.5)*180}deg)`;
   
        setTimeout(() => {
            window.requestAnimationFrame(animation_fan_open);
        }, 3)
    }
}

function draw_all() {
    for (let i = 0; i < pieces / 2; i++) {
        fan.angle_start = -i * 2 / pieces * total_angle;
        fan.angle_end = -(i * 2 + 1) / pieces * total_angle;
        fan.fillstyle =`rgba(0,0,255,${opacity1})`;
        fan.piece_angle = angle0;
        fan.ref_line_angle = -(i * 2 + 1) / pieces * total_angle;
        fan.Delta = delta * (2 * (i-static_piece) + 1);
        drawFan(canvas_agreg[i * 2], ctx_agreg[i * 2], fan);


        fan.angle_start = -(i * 2 + 1) / pieces * total_angle;
        fan.angle_end = -(i * 2 + 2) / pieces * total_angle;
        fan.fillstyle =`rgba(0,0,255,${opacity2})`;
        fan.piece_angle = -angle0;
        drawFan(canvas_agreg[i * 2 + 1], ctx_agreg[i * 2 + 1], fan);
    }

    fan.angle_start = total_angle/pieces;
    fan.angle_end = 0;
    fan.fillstyle =`rgba(157, 78, 221,1)`;
    fan.piece_angle = 90;
    //fan.piece_angle = 0;
    fan.ref_line_angle = 0;
    fan.Delta =delta*(2 * (0-static_piece));
    drawFan(canvas_agreg[pieces],ctx_agreg[pieces],fan);

    fan.angle_start = -total_angle;
    fan.angle_end = -total_angle *(1+1/pieces);
    fan.fillstyle =`rgba(157, 78, 221,1)`;
    fan.piece_angle = -90;
    fan.ref_line_angle = -total_angle;
    fan.Delta =delta*(2 * (pieces/2-static_piece));
    drawFan(canvas_agreg[pieces+1],ctx_agreg[pieces+1],fan);
}

function drawFan(canvas, ctx, fan) {
    const { angle_start, angle_end, fillstyle, piece_angle, ref_line_angle, Delta,static_piece } = fan;
    canvas.width = 1000;
    // canvas.height = 1000;
    canvas.height = 500;
    // canvas.style.height = '80vmin';
    canvas.style.height = '40vmin';
    canvas.style.width = '80vmin';
    image.style.height = '32vmin';
    image.style.width = '64vmin';
    canvas.style.position = 'absolute';
    canvas.style.top = 'calc(40vh - 40vmin)';
    canvas.style.left = 'calc(50vw - 40vmin)';
    fan_container.append(canvas);

    // ctx.clearRect(0, 0, 1000, 1000);
    ctx.clearRect(0, 0, 1000, 500);
    ctx.save();
    // ctx.translate(500, 800);
    ctx.translate(500, 450);
    ctx.rotate(Delta);
    // ctx.translate(-500, -800);
    ctx.translate(-500, -450);
    ctx.fillStyle = fillstyle;
    ctx.beginPath();
    
    // ctx.arc(500, 800, 400, angle_start, angle_end, true);
    // ctx.lineTo(500, 800);
    ctx.arc(500, 450, 400, angle_start, angle_end, true);
    ctx.lineTo(500, 450);
    ctx.strokeStyle = '#7b2cbf';
    ctx.lineWidth = 1;
    
    ctx.stroke()
    ctx.clip();
    
    // ctx.drawImage(image, 100, 400, 800, 400);
    ctx.drawImage(image, 100, 50, 800, 400);
    ctx.fill();
    ctx.fillStyle = `#7b2cbf`;
    ctx.beginPath();
    // ctx.arc(500, 800, 40, angle_start, angle_end, true);
    ctx.arc(500, 450, 40, angle_start, angle_end, true);
    // ctx.lineTo(500, 800);
    ctx.lineTo(500, 450);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    // ctx.moveTo(500,800);
    ctx.moveTo(500,450);
    ctx.strokeStyle='#7b2cbf';
    // ctx.lineTo(500+Math.cos(angle_end)*400,800+Math.sin(angle_end )*400);
    ctx.lineTo(500+Math.cos(angle_end)*400,450+Math.sin(angle_end)*400);
    ctx.stroke();
    canvas.style.transform = `translateZ(0vmin) rotate3d(${Math.cos(ref_line_angle + Delta)},${Math.sin(ref_line_angle + Delta)},0,${piece_angle}deg)`;
    canvas.style.transformOrigin = '40vmin 36vmin 0vmin';
    
    ctx.restore();
  
    // fan_container.style.transform = `rotateX(${fan_container_angle.X_angle}deg) rotateY(${fan_container_angle.Y_angle}deg) rotateZ(${fan_container_angle.Z_angle}deg)`;
   
    
    // fan_container_angle.X_angle = fan_container_angle.X_angle + 10*(Math.random()-0.5)/180*Math.PI;
    // fan_container_angle.Y_angle = fan_container_angle.Y_angle + 90*(Math.random()-0.5)/180*Math.PI;
    // fan_container_angle.Z_angle = fan_container_angle.Z_angle + 4*Math.random()/180*Math.PI;
    
}




