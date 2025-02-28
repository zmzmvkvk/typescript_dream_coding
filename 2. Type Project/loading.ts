{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (login: ResourceLoadState): void => {
    switch (login.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 loaded ${login.response.body}`);
        break;
      case "fail":
        console.log(`😱 no network ${login.reason}`);
        break;

      default:
        throw new Error(`unknown state: ${login}`);
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
