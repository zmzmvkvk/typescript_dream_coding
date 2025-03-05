{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public, private, protected

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // class CaffeLatteMachine {
  //   private static BEANS_GRAM_PER_SHOT: number = 7; // CLASS Level
  //   private coffeeBeans: number = 0; // Instance Level

  //   private constructor(coffeeBeans: number) {
  //     this.coffeeBeans = coffeeBeans;
  //   }

  //   static makeMachine(coffeeBeans: number): CoffeeMaker {
  //     return new CaffeLatteMachine(coffeeBeans);
  //   }

  //   fillCoffeeBeans(beans: number) {
  //     if (beans < 0) {
  //       throw new Error("Value for beans should be greater than 0");
  //     }
  //     this.coffeeBeans += beans;
  //   }

  //   private grindBeans(shots: number) {
  //     console.log(`grinding beans for ${shots}`);
  //     if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT) {
  //       throw new Error("Not Enough Coffee Beans!");
  //     }
  //     this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT;
  //   }

  //   private preheat(): void {
  //     console.log("heating up...💥");
  //   }

  //   private extract(shots: number): CoffeeCup {
  //     console.log(`Pulling ${shots} shots... `);
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //     this.grindBeans(shots);
  //     this.preheat();
  //     return this.extract(shots);
  //   }
  // }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // CLASS Level
    private coffeeBeans: number = 0; // Instance Level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...💥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... `);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return { ...coffee, hasMilk: true };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log(`Steaming some milk...`);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23);

  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
