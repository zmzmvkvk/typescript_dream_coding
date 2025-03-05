{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public, private, protected

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // CLASS Level
    private coffeeBeans: number = 0; // Instance Level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("steve", "jobs");
  user.age = 6;

  console.log(user);
}
