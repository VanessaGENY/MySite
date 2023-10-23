import { enumArrow, enumCaseType, grids } from "../../../shared/grids"

const getGrid = (gridsDone) => {

    let availableGrids = grids.filter(g => (
        !gridsDone.includes(g.id)
    ));
    let randomGrid = Math.round(Math.random() * availableGrids.length)
    if (randomGrid === availableGrids.length) {
        randomGrid = availableGrids.length - 1;
    }
    if (availableGrids.length > 0) {
        return parseGrid(availableGrids[randomGrid])
    } return undefined;
}



function parseGrid(gamedata) {

    var i, j,
        currentCase = 0,
        type,
        solution = [],
        grid = {
            cases: [],
            solution: [],
            width: gamedata.nbcaseslargeur,
            id: gamedata.id
        };

    [].concat(...gamedata.grille).forEach(row => {
        solution = solution.concat((row.split('')))
    });

    grid.solution = solution;
    let definitionsCounter = 0;
    for (i in gamedata.grille) {
        grid.cases[i] = [];
        for (j in gamedata.grille[i]) {
            let data = gamedata.grille[i][j];
            type = getCaseType(data);
            let description;
            let arrows;
            if (type === enumCaseType.Description) {
                [description, definitionsCounter] = getCaseDescriptions(data, gamedata, definitionsCounter);
                arrows = getArrows(data);
            }
            let props = {
                pos: currentCase++,
                type: type,
                data: data,
                description: description,
                arrows: arrows,
                key: `${i}-${j}`,
            }

            grid.cases[i].push(props);

        }
    }
    return grid
}


const getCaseDescriptions = (caseData, gamedata, definitionsCounter) => {
    let res = [];
    res.push(formatDescription(gamedata.definitions[definitionsCounter].join(' ')));
    definitionsCounter++;
    if (caseData > 'd') { // More than 1 description
        res.push(formatDescription(gamedata.definitions[definitionsCounter].join(' ')));

        definitionsCounter++;
    }
    return [res, definitionsCounter]
}

const formatDescription = (description) => {
    return description.replace("– ", "");
}

function getArrows(data) {
    let arrows = [];
    // According the type of description, set the right arrow to the
    switch (data) {
        case 'a':
            arrows.push(enumArrow.Right);
            break;
        case 'b':
            arrows.push(enumArrow.Bottom);
            break;
        case 'c':
            arrows.push(enumArrow.RightBottom);
            break;
        case 'd':
            arrows.push(enumArrow.BottomRight);
            break;
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
            arrows.push(enumArrow.Right);
            arrows.push(enumArrow.Bottom);
            break;
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
            arrows.push(enumArrow.RightBotto);
            arrows.push(enumArrow.Bottom);
            break;
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
            arrows.push(enumArrow.Right);
            arrows.push(enumArrow.BottomRight);
            break;
        case 'u':
        case 'v':
        case 'w':
        case 'x':
            arrows.push(enumArrow.RightBottom);
            arrows.push(enumArrow.BottomRight);
            break;

        default:
            console.error('[ERROR][gridManager::placeArrows] Unknow arrow type [' + data + ']');
    }
    return arrows;
};



function getCaseType(Char) {
    if (Char === 'z')
        return (enumCaseType.Empty);
    else if ((Char >= 'A') && (Char <= 'Z'))
        return (enumCaseType.Letter);
    else
        return (enumCaseType.Description);
}
export default getGrid;