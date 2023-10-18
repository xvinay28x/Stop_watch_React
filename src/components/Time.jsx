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

    function reset() {
        clearInterval(interval.current)
        setSecond(0)
        setMinute(0)
        setHour(0)
    }

    return (
        <>
            <div className='text-9xl mb-10'>{hour} : {minute} : {second}</div>
            <button className='bg-green-600 hover:bg-green-700 text-black' onClick={start}>Start</button>
            <button className='bg-yellow-500 text-black hover:bg-yellow-600 ml-10 mr-10' onClick={reset}>Reset</button>
            <button className='bg-red-500 hover:bg-red-600 text-black'>Mark</button>
        </>
    )
}

export default Time