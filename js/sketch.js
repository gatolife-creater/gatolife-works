class Light {
    constructor() {
        //---ゆっくりマウスについてくるポインターの変数---//
        this.x = width / 2;
        this.y = height / 2;
        this.easing = 0.1;
        //------------------------------------------------//

        //---マウスをクリックすると発生する円の変数---//
        this.circle_count = 0; //円の数
        this.circle_x = [];
        this.circle_y = [];
        this.circle_size = [];
        this.circle_speed = []; //円が大きくなるスピード
        //--------------------------------------------//

        //---上二の色---//
        this.r = 255;
        this.g = 255;
        this.b = 200;
        //--------------//
    }

    d() {
        noFill();

        for (let i = 0; i < this.circle_count; i++) {
            //---円が指定以上の大きさになったときの処理---//
            if (this.circle_size[i] > 120) {
                this.circle_count--;
                this.circle_x.shift();
                this.circle_y.shift();
                this.circle_size.shift();
                this.circle_speed.shift();
            }
            //--------------------------------------------//
            this.circle_size[i] += this.circle_speed[i]; //円のサイズが大きくなる
            stroke(this.r, this.g, this.b, 200);
            circle(this.circle_x[i], this.circle_y[i], this.circle_size[i]);
        }

        noStroke();
        this.mouse_effect(mouseX, mouseY);
    }

    mouse_effect(targetX, targetY) {
        let dx = targetX - this.x;
        this.x += dx * this.easing;

        let dy = targetY - this.y;
        this.y += dy * this.easing;

        if (!mouseIsPressed) {
            fill(this.r, this.g, this.b, 255 / 120);
            circle(this.x, this.y, (10 / 3) * 100);
            fill(this.r, this.g, this.b, 255 / 50);
            circle(this.x, this.y, (10 / 3) * 20);
            fill(this.r, this.g, this.b, 255 / 30);
            circle(this.x, this.y, (10 / 3) * 12);
            fill(this.r, this.g, this.b);
            circle(this.x, this.y, 10);
        }
        if (mouseIsPressed && !(movedX == 0 && movedY == 0)) {
            this.circle_count += 1;
            this.circle_x.push(mouseX);
            this.circle_y.push(mouseY);
            this.circle_size.push(50);
            this.circle_speed.push(4);
        }
    }

    //---引数に応じて,ポインターカラーを設定する---//
    check_color(color_) {
            switch (color_) {
                case "red":
                    this.r = 255;
                    this.g = 0;
                    this.b = 200;
                    break;
                case "green":
                    this.r = 0;
                    this.g = 255;
                    this.b = 125;
                    break;

                case "blue":
                    this.r = 0;
                    this.g = 125;
                    this.b = 255;
                    break;

                case "white":
                    this.r = 255;
                    this.g = 255;
                    this.b = 200;
                    break;
                case "aqua":
                    this.r = 0;
                    this.g = 255;
                    this.b = 255;
                    break;

                case "lavender":
                    this.r = 204;
                    this.g = 204;
                    this.b = 255;
                    break;
            }
        }
        //---------------------------------------------//
}
class Back {
    constructor() {
        this.count = 1e2;
        this.x = [];
        this.y = [];
        this.size = [];
        this.speed = [];
        this.r = 255;
        this.g = 255;
        this.b = 200;
        this.alpha = [];
        this.alpha_speed = [];
        for (let i = 0; i < this.count; i++) {
            this.x[i] = random(0, width);
            this.y[i] = random(0, height);
            this.size[i] = random(1, 6);
            this.speed[i] = random(0.1, 0.5);
            this.alpha[i] = random(0, 255);
            this.alpha_speed[i] = random(3, 5);
        }
    }


    //---複数の星が点滅する-------------------------------------//
    d() {
            for (let i = 0; i < this.count; i++) {
                this.alpha[i] -= this.alpha_speed[i];
                if (this.alpha[i] < -50 || this.alpha[i] > 300) {
                    this.alpha_speed[i] *= -1;
                }
                if (this.y[i] < 0) {
                    this.x[i] = random(width);
                    this.y[i] = random(height);
                }
                if (this.y[i] > height) {
                    this.x[i] = random(width);
                    this.y[i] = random(height);
                }
                noStroke();

                fill(this.r, this.g, this.b, this.alpha[i] / 90);
                circle(this.x[i], this.y[i], (this.size[i] / 3) * 20);

                fill(this.r, this.g, this.b, this.alpha[i] / 60);
                circle(this.x[i], this.y[i], (this.size[i] / 3) * 12);

                fill(this.r, this.g, this.b, this.alpha[i]);
                circle(this.x[i], this.y[i], this.size[i]);
            }
        }
        //----------------------------------------------------------//


    //---引数に応じて,背景色を設定する---//
    check_color(color_deta) {
            switch (color_deta) {
                case "red":
                    this.r = 255;
                    this.g = 0;
                    this.b = 200;
                    break;
                case "green":
                    this.r = 0;
                    this.g = 255;
                    this.b = 125;
                    break;

                case "blue":
                    this.r = 0;
                    this.g = 125;
                    this.b = 255;
                    break;

                case "white":
                    this.r = 255;
                    this.g = 255;
                    this.b = 200;
                    break;
                case "aqua":
                    this.r = 0;
                    this.g = 255;
                    this.b = 255;
                    break;

                case "lavender":
                    this.r = 204;
                    this.g = 204;
                    this.b = 255;
                    break;
            }
        }
        //-----------------------------------//
}


function setup() {
    let background_canvas = createCanvas(windowWidth, windowHeight);
    background_canvas.style("z-index", "-100");
    background_canvas.style("display", "break");
    background_canvas.style("position", "fixed");
    background_canvas.style("top", "0");
    background_canvas.style("left", "0");
    light = new Light();
    back = new Back();
}

function draw() {
    //---残像用。fillの第二引数が小さいほど、残像が長く残る---//
    fill(0);
    rect(0, 0, width, height);
    //-------------------------------------------------//
    light.check_color("aqua");
    back.check_color("aqua");
    light.d();
    back.d();
}