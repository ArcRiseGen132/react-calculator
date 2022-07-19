import React from "react"
import { ACTIONS } from "./App"

export const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
