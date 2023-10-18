import React, { useState, useRef } from 'react'

function Time() {

    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const interval = useRef()
    

    function start() {
        
        interval.current = setInterval(start_time, 1000)

        function start_time() {
            setSecond(current_second => current_second + 1)
        }
    }

    if (second == 60) {
        setMinute(minute + 1)
        setSecond(0)
    }
    else if (minute == 60) {
        setHour(hour + 1)
        setMinute(0)
    }

    function pause() {
        clearInterval(interval.current)
    }

    function reset() {
        clearInterval(interval.current)
        setSecond(0)
        setMinute(0)
        setHour(0)
    }

    return (
        <>
            <div className='
            text-9xl 
            mb-10
            text-center
            mt-48
            text-white'>{hour} : {minute} : {second}
            </div>

            <div className='flex justify-center items-center w-full h-20'>
                <button className='
                h-10
                w-24
                rounded-lg
                shadow-md
                hover:shadow-green-700/70
                bg-green-600
                m-5
                hover:bg-green-700
                text-black' onClick={start}>Start
                </button>


                <button className='
                h-10
                w-24
                rounded-lg
                shadow-md
                border-solid-black
                hover:shadow-yellow-600/60
                bg-yellow-500
                text-black
                m-5
                hover:bg-yellow-600
                ' onClick={reset}>Reset
                </button>


                <button className='
                h-10
                w-24
                rounded-lg
                shadow-md
                hover:shadow-red-600/60
                bg-red-500
                m-5
                hover:bg-red-600
                text-black'
                onClick={pause}>Stop
                </button>
                
            </div>
        </>
    )
}

export default Time