import React, { useReducer } from "react";

// styled components
import { IncDecWrapper,
        Button,
        Number 
        } from "./CounterStyled";

const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            if (state > 0){
            return state - 1;
            } else { return state }
        default:
            return state;
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    
    // start of main return
    return (
        <IncDecWrapper>
            <Button  type="button"
                    value="PLUS"
                    onClick={() => dispatch({type: "INCREMENT"})}
                    />
            <Number>{count}</Number>
            <Button  type="button"
                    value="MINUS"
                    onClick={() => dispatch({type: "DECREMENT"})}
                    />
            
        </IncDecWrapper>


    ) // end of main return


}

export default Counter;