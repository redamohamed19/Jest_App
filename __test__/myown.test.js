expect.extend({
  TobeLarger(received, target) {
    var test = received > target;
    if (test) {
      return {
        message: () => {
          console.log('yes it is');
        },
        test: true
      };
    } else {
      return {
        message: () => {
          console.log('no it is not');
        },
        test: false
      };
    }
  }
});
