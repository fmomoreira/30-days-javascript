const word =  "saveChangesInTheEditor"

const camelcase =  (s) => {
    const word = s.match(/[A-Z]?[a-z]+/g)
    return word ? word.length : 0
}

camelcase(word)