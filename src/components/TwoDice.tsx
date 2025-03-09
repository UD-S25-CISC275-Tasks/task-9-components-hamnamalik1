import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    //left Dice
    const [lDice, setLDice] = useState<number>(3);

    //right Dice
    const [rDice, setRDice] = useState<number>(1);

    // Left Roll button function
    function leftRollButton(): void {
        setLDice(d6());
    }
    // Right Roll button function
    function rightRollButton(): void {
        setRDice(d6());
    }

    return (
        <div>
            Two Dice
            <div>
                <div>
                    <span data-testid="left-die">{lDice}</span>

                    <span data-testid="right-die">{rDice}</span>
                </div>

                <Button onClick={leftRollButton}>Roll Left</Button>
                <Button onClick={rightRollButton}>Roll Right</Button>
            </div>
            <div>
                {lDice === rDice && lDice === 1 && <span>Lose</span>}
                {lDice === rDice && lDice !== 1 && <span>Win</span>}
            </div>
        </div>
    );
}
