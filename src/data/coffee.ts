import type { Coffee, Infos } from "../types/coffee";

import coffeeImage from "../assets/img/coffee.jpeg";

export const coffee: Coffee = {
    id: 1,
    name: "Coffee",
    price: 2.5,
    description: "A cup of coffee",
    image: coffeeImage
}

export const infos: Infos = {
    title: "Coffee",
    description: "A cup of coffee",
    button: "Buy"
}
