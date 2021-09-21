exports.seed = function (knex) {
    return knex("users").insert([
      {
        username: "billybob",
        password: "1234",
        first_name: "billy",
        last_name: "bob",
      },
      {
        username: "sallyhey",
        password: "1234",
        first_name: "sally",
        last_name: "hey",
      },
      {
        username: "johndoe",
        password: "1234",
        first_name: "john",
        last_name: "doe",
      },
    ]);
  };
  