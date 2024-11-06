//　Open Modal
import { useState } from "react"

/**
 * Trigger to open buttons to open create deck and card
 * @returns 
 */
export default function CreateCardButton() {


  return (
    <div className="">
        <button className="rounded-full w-12 h-12 bg-white fixed bottom-10 right-10 text-blue-700">
            A
        </button>
        <button className="rounded-full w-12 h-12 bg-white fixed bottom-32 right-10 text-blue-700">
            B
        </button>
        <button className="rounded-full w-12 h-12 bg-white fixed bottom-10 right-32 text-blue-700">
            C
        </button>
    </div>
  )
}
