import { useCallback, useEffect, useRef, useState } from "react";
import getGrid from "./hook/useGrid";
import "./Grid.css";
import Case from "./Case";

const directions = {
    LEFT: 0,
    TOP: 1,
    RIGHT: 2,
    BOTTOM: 3
}

const Grid = (props) => {

    const [gridsDone, setGridsDone] = useState([])
    const [grid, setGrid] = useState(getGrid(gridsDone))
    const [cursorDirection, setCursorDirection] = useState(directions.RIGHT)
    const [currentWord, setCurrentWord] = useState([])
    const [checkWord, setCheckWord] = useState(false)
    const casesRef = useRef([])
    const [lastClickPos, setLastClickPos] = useState()
    const [isWon, setIsWon] = useState(false);
    const [noMoreGrid, setNoMoreGrid] = useState(false)

    const replay = () => {
        let gDone = gridsDone;
        gDone.push(grid.id);
        setGridsDone(gDone);
        const newGrid = getGrid(gDone)
        setGrid(newGrid);
        if (!newGrid) setNoMoreGrid(true)
        setIsWon(false);
        setCurrentWord([]);
    }

    const isEveryWordFound = () => {
        let isFull = true;
        casesRef.current.forEach((c) => {
            if (c && c.className.includes("case__letter")) {
                if (!c.children[0].disabled) {
                    isFull = false;
                }
            }
        })
        setIsWon(isFull);
    }

    const onKeyPress = (pos,event) => {
        if(event.keyCode === 8 && getCaseValue(pos) === "") {
            checkCursorDirection("", pos)
        }
    }

    const getCaseValue = useCallback((pos) => {
        if (isLetter(pos)) {
            return casesRef.current[pos].children[0].value.toUpperCase();
        }
    }, [casesRef])

    const onClick = (pos) => {
        let direction;
        if (lastClickPos === pos) {
            direction = cursorDirection === directions.RIGHT ? directions.BOTTOM : directions.RIGHT;
        } else {
            direction = (cursorDirection === directions.RIGHT || cursorDirection === directions.BOTTOM) ? cursorDirection : directions.RIGHT;
        }
        setLastClickPos(pos)
        const nextCaseOK = isMoveOK(pos, getNextPos(pos, direction));

        if (!nextCaseOK) {
            if (direction === directions.RIGHT) {
                direction = directions.BOTTOM;
            } else {
                direction = directions.RIGHT
            }
        }
        setCursorDirection(direction)
        getCurrentWord(pos, direction)
    }

    const onInputChange = (pos, event) => {
        let currentVal = event.target.value;
        event.target.value = (currentVal ? currentVal[currentVal.length - 1] : "")
        checkCursorDirection(event.target.value, pos); 
        setCheckWord(true)
    }

    const checkCursorDirection = (currentVal, pos) => {
        let newDirection = cursorDirection;
        if (currentVal === "") {
            if (newDirection === directions.RIGHT) {
                newDirection = directions.LEFT;
            } else if (newDirection === directions.BOTTOM) {
                newDirection = directions.TOP;
            }
        } else {
            if (newDirection === directions.LEFT) {
                newDirection = directions.RIGHT;
            } else if (cursorDirection === directions.TOP) {
                newDirection = directions.BOTTOM;
            }
        }

        moveCursor(pos, getNextPos(pos, newDirection), newDirection)
        setCursorDirection(newDirection)

    }

    const getNextPos = (pos, direction) => {
        let nextPos = pos;
        switch (direction) {
            case directions.LEFT:
                nextPos -= 1;
                break;
            case directions.RIGHT:
                nextPos += 1;
                break;
            case directions.TOP:
                nextPos -= grid.width;
                break;
            case directions.BOTTOM:
                nextPos += grid.width;
                break;
            default:
                break;
        }
        return nextPos;
    }

    const moveCursor = (oldPos, newPos, direction) => {
        if (isMoveOK(oldPos, newPos)) {
            if (casesRef.current[newPos].children[0].disabled) {
                moveCursor(newPos, getNextPos(newPos, direction), direction)
            } else {
                casesRef.current[newPos].children[0].focus();
            }
            
        }
    }

    const getCurrentWord = (pos, direction) => {
        const word = []
        removeOldWord();

        let startIndex = pos;
        let backwardDirection = (direction === directions.RIGHT) ? directions.LEFT : directions.TOP;
        
        let nextIndex = getNextPos(startIndex, backwardDirection)
            while (nextIndex !== startIndex && isMoveOK(startIndex, nextIndex)) {
                startIndex = nextIndex;
                nextIndex = getNextPos(startIndex, backwardDirection);
        }


        colorCase(startIndex, word)
        let currentIndex = startIndex;
        nextIndex = getNextPos(currentIndex, direction)

        while (nextIndex !== currentIndex && isMoveOK(currentIndex, nextIndex)) {
            currentIndex = nextIndex;
            nextIndex = getNextPos(currentIndex, direction);
            if (isLetter(currentIndex)) {
                colorCase(currentIndex, word)
            } else {
                break;
            }
        }
        setCurrentWord(word)
    }

    const colorCase = (pos, word) => {
        casesRef.current[pos].className += " current-word"
        word.push(pos)
    }


    const removeOldWord = () => {
        currentWord.forEach(index => {
            casesRef.current[index].className = casesRef.current[index].className.replace(" current-word", "");
        })
        setCurrentWord([])
    }

    const isMoveOK = (oldPos, newPos) => {
        const isSameRow = Math.floor(oldPos / grid.width) === Math.floor(newPos / grid.width);
        const isSameColumn = oldPos % grid.width === newPos % grid.width;
        return (isLetter(newPos) && (isSameRow || isSameColumn) && oldPos !== newPos)
    }

    const isLetter = (pos) => {
        const exists = casesRef.current[pos];
        return exists && casesRef.current[pos].className.includes("case__letter");
    }

    useEffect( () => {
        const disableWord = () => {
            currentWord.forEach(index => {
                casesRef.current[index].children[0].disabled = true;
            });
        }
        if (checkWord) {
            let isWordOK = true;
            currentWord.forEach(index => {
                if (getCaseValue(index) !== grid.solution[index]) {
                    isWordOK = false;
                }
            });
            if (isWordOK) {
                disableWord();
                isEveryWordFound();
            }
            setCheckWord(false)
        }
        
    }, [checkWord, currentWord, getCaseValue, grid.solution])

    return (
        <div id="grid">
            {isWon && !noMoreGrid && (<div className="grid-won">
                <span>Bravo !</span>
                <button onClick={replay}>Nouvelle Grille</button>
            </div>)}
            {grid && grid.cases.map((row, index) => (
                <div key={`grid-row-${index}`} className="grid__row">
                    {row.map((c, i) => (
                        <Case {...c} ref={(element) => casesRef.current.push(element)} onInputChange={onInputChange} onClick={onClick} onKeyPress={onKeyPress} key={`grid-case-${row}-${i}`}></Case>
                    ))}
                </div>
            ))}
            {noMoreGrid && (
                <span className="no-more-grid"> Impressionant, vous avez réussi toutes les grilles !!</span>
            )}
        </div>
    )
}

export default Grid