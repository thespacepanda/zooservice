const queries = require("./db/queries.js");

class CritterController {
    // ensures our critter has everything it needs,
    // otherwise we'll return a snarky error message.
    _validate(critter) {
        // I had this at 4, but then you'd only see the specific messages if you
        // had some unrelated key in the post data (like type, legs, color, and foo);
        // so now you'll only see this error if you're missing more than one field
        if (Object.keys(critter).length < 3)
            return "Critter's missin' a few parts there, bud.";
        else if (!critter.hasOwnProperty("type"))
            return "Not sure what kinda critter you got there, but I'm sure we don't take it.";
        else if (!critter.hasOwnProperty("legs"))
            return "Hold on there, partner - we only deal in critters with legs.";
        else if (!critter.hasOwnProperty("color"))
            return "We don't take kindly to no colorless critters 'round these parts.";
        else if (!critter.hasOwnProperty("name"))
            return "You can say what you like about us, at least we give our critters a name.";
        // the spec explicitly states that critters must have 2, 4, or 6 legs
        else if (![2, 4, 6].includes(parseInt(critter.legs)))
            return "That critter's got an unnatural amount of legs... no thank you.";
        else return false;
    }

    get(id) {
        if (id) return queries.getSingle(id);
        else return queries.getAll();
    }

    search(query) {
        // probably being paranoid but let's restrict this to keys we care about
        const allowed = ["type", "legs", "color", "name"];
        const sanitizedQuery = Object.keys(query)
              .filter(key => allowed.includes(key))
              .reduce((obj, key) => ({
                  ...obj,
                  [key]: query[key]
              }), {});
        return queries.search(sanitizedQuery);
    }

    async post(critter) {
        const snark = this._validate(critter);
        if (snark) return snark;
        else {
            const id = await queries.add(critter);
            return queries.getSingle(id);
        }
    }

    async update(id, diff) {
        if (diff.hasOwnProperty("legs") &&
            ![2, 4, 6].includes(parseInt(diff.legs)))
            return "We don't appreciate what you're doin' with that critter's legs, cowpoke.";
        else {
            await queries.update(id, diff);
            return queries.getSingle(id);
        }
    }

    remove(id) {
        return queries.remove(id);
    }
}

module.exports = CritterController;
