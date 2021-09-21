exports.seed = function (knex) {
    return knex("foods").insert([
      {
        food_name: "burgers",
      },
      {
        food_name: "salad",
      },
      {
        food_name: "hotdogs",
      },
    ]);
  };
  