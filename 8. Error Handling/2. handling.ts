class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OfflineError("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    //login.....
  }
}

// const client = new NetworkClient();
// const service = new UserService(client);
// service.login();

class App {
  constructor(private userService: UserService) {}

  run() {
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
      // if (error instanceof OfflineError) {
      //   throw new Error("Offline Error");
      // }
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
