/*describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});*/

const { Activity, Repository } = require("../scripts/tests");

describe("la clase Activity",() => {

  it("debe ser una clase",() => {
    expect( typeof Activity.prototype.constructor).toBe("function");
  });

});

describe("La Clase Repository",()=>{

  it("debe ser una clase",() => {
    expect( typeof Repository.prototype.constructor).toBe("function");
  });

  it("debe tener un método CreateActivity", () => {
    const repository = new Repository();
    expect(repository.CreateAtivity).toBeDefined();
  });

  it("debe tener un método getAllActivities", () => {
    const repository = new Repository();
    expect(repository.getAllActivities).toBeDefined();
  });

});