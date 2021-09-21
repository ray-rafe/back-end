exports.seed = function (knex) {
    return knex("potlucks").insert([
      {
        potluck_name: "cookout",
        potluck_date: "August 12",
        potluck_time: "3pm",
        organizer_id: 1,
        potluck_location: "park",
      },
      {
        potluck_name: "hangout",
        potluck_date: "July 30",
        potluck_time: "8pm",
        organizer_id: 2,
        potluck_location: "backyard",
      },
    ]);
  };