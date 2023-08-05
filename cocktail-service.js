export default class cocktailService {
    static async callRandom() {
        try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);

        if (!response.ok) {
            
            throw new Error("Smth went wrong o_O");
        }
        return jsonifiedResponse;
    }
catch(error) {
    return error;
}
}

static async seacrhCocktail(name){
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    }
    catch(error) {
        return error;
    }
}

static async seacrhCocktails(ingr) {
    try {

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingr}`);
    const jsonifiedResponse = await response.json();

    if (!response.ok) {
        throw new Error("Smth went wrong o_O");
    }
    return jsonifiedResponse;

    }
    catch(error) {
        return error;
    }
}
}