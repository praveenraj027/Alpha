'use client'
import React, { useState, useRef } from 'react';

const totalFrames = 8;
const Car360Viewer = () => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const isDragging = useRef(false);
    const startX = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
    }
    const handleMouseUp = () => {
        isDragging.current = false;
    }
    const handleMouseLeave = () =>{
        isDragging.current = false;
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const deltaX = e.clientX - startX.current;
        if (Math.abs(deltaX) > 10) {
            let newFrame = currentFrame + (deltaX > 0 ? -1 : 1);
            if (newFrame > totalFrames) newFrame = 1;
            if (newFrame < 1) newFrame = totalFrames;
            setCurrentFrame(newFrame);
            startX.current = e.clientX;

        }
    }
    const handleTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
    }
    const handleTouchEnd = () => {
        isDragging.current = false;
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) return;
        const deltaX = e.touches[0].clientX - startX.current;

        if (Math.abs(deltaX) > 10) {
            let newFrame = currentFrame + (deltaX > 0 ? -1 : 1)
            if (newFrame > totalFrames) newFrame = 1;
            if (newFrame < 1) newFrame = totalFrames;
            setCurrentFrame(newFrame);
            startX.current = e.touches[0].clientX;

        }
    }
    const imageSrc = `/images/car360/car${currentFrame}.jpg`;
    return (
        <>
            <div className='w-full max-w-3xl mx-auto my-8 rounded-xl shadow-lg overflow-hidden bg-white'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
            >
                <img src={imageSrc} alt={`Car frame ${currentFrame}`}
                    className='object-contain w-full h-auto transition-all duration-200'
                    draggable={false} />
            </div>
        </>
    )

};
export default Car360Viewer;