function getPropertyNames(object, criteria) {
  const properties = [];

  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      if (criteria && criteria(property, object[property])) {
        properties.push(property);
      }
    }
  }

  return properties;
}

function flattenArray(array, object, property) {
  const permutations = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const clone = { ...object };
    clone[property] = value;
    permutations.push(clone);
  }

  return permutations;
}

function generatePermutations(object) {
  let source = [object];
  let properties = getPropertyNames(object, (name, value) => Array.isArray(value));

  // You could also take a recursive approach here.
  while (properties.length > 0) {
    let destination = [];
    const property = properties.pop();

    for (let i = 0; i < source.length; i++) {
      const flattened = flattenArray(object[property], source[i], property);
      destination = destination.concat(flattened);
    }

    source = destination;
  }

  return source;
}

module.exports = { generatePermutations }
