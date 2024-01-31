test("test toBe", () => {
    const name = "Rusti";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Rusti");  
})

test("test toEquals", () => {
    let person = {id: "rusti"};
    Object.assign(person, {name: "Rusti"})

    expect(person).toEqual({id: "rusti", name: "Rusti" });
})