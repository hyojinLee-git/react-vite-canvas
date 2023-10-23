import { useRef } from "react";

import "./style.css";

const RotateCanvas = () => {
    const canvasRef = useRef(null);

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
