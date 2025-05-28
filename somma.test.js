//test 1
const getInitials = (name) => {
    return name.split(' ').map(part => part[0].toUpperCase()).join('');
}

test("La funzione getInitials restituisce le iniziali di un nome completo. 1", () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});


//test 2
const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
}

test("La funzione createSlug restituisce una stringa in lowercase. 2", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
});


//test 3
const average = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

test("La funzione average calcola la media aritmetica di un array di numeri. 3", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
});


//test 4
const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

test("La funzione isPalindrome verifica se una stringa è un palindromo. 4", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});


//test 5
const createSlugs = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
}

test("La funzione createSlugs lancia un errore se il titolo è vuoto o non valido. 5", () => {
    expect(() => createSlugs("")).toThrow("Invalid title");
    expect(() => createSlugs(null)).toThrow("Invalid title");
});


//test 6
const findPostById = (posts, id) => {
    return posts.find(post => post.id === id);
}

test("La funzione findPostById restituisce il post corretto dato array di post e id. 6", () => {
    expect(findPostById([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }], 1)).toEqual({ id: 1, title: "Post 1" });
});