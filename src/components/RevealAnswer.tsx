import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [view, setView] = useState<boolean>(false);

    function changeVisibility(): void {
        setView(!view);
    }
    return (
        <div>
            Reveal Answer
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {view && <div>42</div>}
        </div>
    );
}
