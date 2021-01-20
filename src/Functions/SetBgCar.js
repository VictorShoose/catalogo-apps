export default function SetBgCar(carCategory) {
    switch (carCategory) {
        case "Tata":
            return "yellow";
        case "Pegeout":
            return "navy";
        case "Volkswagen":
            return "goldenrod";
        case "Peel":
            return "green";
        case "Reliant":
            return "darkred";
        case "Ferrari":
            return "violet";
        case "Pontiac":
            return "crimson";
        case "Aston Martin":
            return "gray";
        case "Fiat":
            return "orange";
        case "Scion":
            return "coral";
        case "Ford":
            return "blue";
        case "Mitsubishi":
            return "indigo";
        default:
            return "white";
    }
}