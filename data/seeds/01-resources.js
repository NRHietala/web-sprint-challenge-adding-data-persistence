exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          resource_name: "Vespene Gas",
          resource_description: "Green Gas",
        },
        {
          resource_name: "Pickaxe",
          resource_description: "2d Pickaxe",
        },
        {
          resource_name: "Ziplock bag full of air",
        },
      ]);
    });
};
