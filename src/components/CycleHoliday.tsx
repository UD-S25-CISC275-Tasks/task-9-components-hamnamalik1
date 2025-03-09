import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Holidays Chosen:
 * test
 * New Year’s Day (January 1)
 *St. Patrick’s Day (March 17)
 *Independence Day (July 4)
 *Halloween (October 31)
 * Christmas (December 25)
 */
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("New Year's Day");

    let chronologicalYear: string[] = [
        "New Year's Day",
        "St. Patrick's Day",
        "Independence Day",
        "Halloween",
        "Christmas"
    ];

    let alphabetical: string[] = [
        "Christmas",
        "Halloween",
        "Independence Day",
        "New Year's Day",
        "St. Patrick's Day"
    ];

    //alphabettically
    function changeAlphabetically(): void {
        let curr = alphabetical.indexOf(holiday);
        if (curr !== alphabetical.length - 1) {
            setHoliday(alphabetical[curr + 1]);
        } else {
            setHoliday(alphabetical[0]);
        }
    }

    //chronologically
    function changeYearWise(): void {
        let curr1 = chronologicalYear.indexOf(holiday);
        if (curr1 !== chronologicalYear.length - 1) {
            setHoliday(chronologicalYear[curr1 + 1]);
        } else {
            setHoliday(chronologicalYear[0]);
        }
    }

    //Record with Emojis
    const emojiLookup = new Map<string, string>([
        ["New Year's Day", "🎉"],
        ["St. Patrick's Day", "🍀"],
        ["Independence Day", "🎆"],
        ["Halloween", "🎃"],
        ["Christmas", "🎄"]
    ]);

    return (
        <div>
            Cycle Holiday
            <div>
                Holiday: {emojiLookup.get(holiday)} {holiday}
            </div>
            <div>
                <Button onClick={changeAlphabetically}>Alphabet</Button>
                <Button onClick={changeYearWise}>Year</Button>
            </div>
        </div>
    );
}
