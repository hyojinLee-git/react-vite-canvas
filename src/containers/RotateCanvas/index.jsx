import { useRef, useEffect } from "react";
import {
    Engine,
    Render,
    Runner,
    Mouse,
    MouseConstraint,
    Composite,
    Bodies,
} from "matter-js";
import "./style.css";

const RotateCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const cw = 1000;
        const ch = 1000;

        let engine, render, runner, mouse, mouseConstraint;

        initScene();
        initMouse();
        initGround();

        canvas.addEventListener("mousewheel", () => {
            addRect(mouse.position.x, mouse.position.y, 50, 50);
        });

        function initScene() {
            engine = Engine.create();
            render = Render.create({
                canvas: canvas,
                engine: engine,
                options: {
                    width: cw,
                    height: ch,
                    wireframes: false,
                    background: "#1b1b19",
                },
            });
            runner = Runner.create();

            Render.run(render);
            Runner.run(runner, engine);
        }

        function initMouse() {
            mouse = Mouse.create(canvas);
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
            });
            Composite.add(engine.world, mouseConstraint);
        }

        function initGround() {
            const segments = 32;
            const deg = (Math.PI * 2) / segments;
            const width = 50;
            const radius = cw / 2 + width / 2;
            const height = radius * Math.tan(deg / 2) * 2;

            for (let i = 0; i < segments; i++) {
                const theta = deg * i;
                const x = radius * Math.cos(theta) + cw / 2;
                const y = radius * Math.sin(theta) + ch / 2;
                addRect(x, y, width, height, {
                    isStatic: true,
                    angle: theta,
                });
            }
        }

        function addRect(x, y, w, h, options = {}) {
            const rect = Bodies.rectangle(x, y, w, h, options);
            Composite.add(engine.world, rect);
        }
    }, []);
    return (
        <div className="rotate-canvas-wrapper">
            <canvas ref={canvasRef}></canvas>
            <aside>
                <h2>JavaScript</h2>
                <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum velit quos dolores commodi. Cumque, neque? Quaerat
                    aperiam, temporibus pariatur explicabo corrupti facere
                    animi, tempora quo voluptas placeat quae commodi quas
                    accusantium corporis. Illo hic cupiditate animi doloremque
                    repudiandae! Quis dolor corporis aspernatur beatae dolore
                    mollitia quidem praesentium porro sed saepe.
                </p>
            </aside>
        </div>
    );
};

export default RotateCanvas;
