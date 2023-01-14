'use strict';

function getter(enumTypes) {
  return ({ value }) => {
    // eslint-disable-next-line guard-for-in
    for (const key in enumTypes) {
      const enumValue = enumTypes[key];
      if (key === value)
        return key;

      if (enumValue === value)
        return key;
    }
    throw new TypeError(`Bad "enum" value provided: "${value}"`);
  };
}

function setter(enumType) {
  return ({ value, set }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (Object.prototype.hasOwnProperty(enumType, value))
      return set(enumType[value]);

    if (Object.values(enumType).indexOf(value) >= 0)
      return set(value);

    throw new TypeError(`Bad "enum" value provided: "${value}"`);
  };
}

module.exports = {
  getter,
  setter,
};