import { Infer } from '@infer/Infer';

export class App {
  constructor() {}

  run = async (): Promise<boolean> => {
    const hi = 'hi!';
    const test = 2;
    const newObj = { hi: { nestedObject: 1, aBool: true }};

    const inferTypeofHi: Infer<typeof hi> = 'hi!';
    const inferTest: Infer<typeof test> = 2;
    const inferNewObj = {
      hi: {
        nestedObject: 1, aBool: true
      }
    }

    return true;
  }
}

new App().run().then(res => {
  console.log('res:', res);
  process.exit(0);
}).catch(err => {
  console.log('err:', err);
  process.exit(1);
});