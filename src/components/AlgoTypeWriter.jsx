import React from 'react'
import Typewriter from "typewriter-effect";


const AlgoTypeWriter = () => {
  return (
    <div>
        <span className="font-bold text-2xl md:text-4xl text-grey-400">
                <Typewriter
                    options={{
                        strings: ['Sorting Algorithm',"Searching Algorithm", "Bubble Sort" , "Merge Sort"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
    </div>
  )
}

export default AlgoTypeWriter