const cadenaInversa = require('./cadenaInversa');

test('Invierte una cadena "hola" a "aloh" ', () => {
    expect(cadenaInversa("hola")).toBe("aloh");
});

test('Invierte cadena vacía a cadena vacía', () => {
    expect(cadenaInversa('')).toBe('');
});

test('Invierte cadena con espacios "abc def" a "fed cba" ', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});