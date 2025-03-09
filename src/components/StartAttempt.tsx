import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4); //this is for the attempts
    const [progress, setprogress] = useState<boolean>(false); //this is for the progress of the quiz. Initially there is no progress in the quiz(false)

    //function for the Start Quiz button
    function quizStart(): void {
        if (attempt > 0) {
            setAttempt(attempt - 1);
            setprogress(true);
        }
    }

    //function for the Stop Quiz button
    function quizEnd(): void {
        setprogress(false);
    }

    //function for the Mulligan button
    function quizMulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            Start Attempt Welcome to THE QUIZ!!!
            <div>
                <Button
                    onClick={quizStart}
                    disabled={progress || attempt === 0}
                >
                    Start Quiz
                </Button>
                Quiz In progress: <span>{progress ? "Yes" : "No"}</span>
            </div>
            <div>
                <Button onClick={quizMulligan} disabled={progress}>
                    Mulligan
                </Button>
                Attempts: <span>{attempt}</span>
            </div>
            <div>
                <Button onClick={quizEnd} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
