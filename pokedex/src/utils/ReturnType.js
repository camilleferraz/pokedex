import bug from "../img/bug.svg"
import fire from "../img/fire.svg"
import water from "../img/water.svg"
import dark from "../img/dark.svg"
import normal from "../img/normal.svg"
import eletric from "../img/eletric.svg"
import ground from "../img/ground.svg"
import ghost from "../img/ghost.svg"
import poison from "../img/poison.svg"
import grass from "../img/grass.svg"
import flying from "../img/flying.svg"

export const getTypes = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "electric":
            return eletric;
        case "ground":
            return ground;
        case "grass":
            return grass;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "water":
            return water;
        case "dark":
            return dark;
        case "gost":
            return ghost;
        default:
            return grass;

    }
}