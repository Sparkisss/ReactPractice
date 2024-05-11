import React, { useState, useEffect } from "react";
import './TestComponent.css'

export const TestComponent = () => {
    const [slide, setSlide] = useState(3)
    const [effect, setEffect] = useState("Resolution ")

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    useEffect(() => {
        console.log(effect)
    }, [effect]); // Передаем effect в массив зависимостей

    return (
        <div onClick={() => changeSlide(1)} className="testComponent">
            It's my testComponent! {slide}
        </div>
    )
}
