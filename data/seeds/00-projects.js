exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          project_name: "Journey to the center of the Earth",
          project_description: "Chilling with Brandon Fraiser",
        },
        {
          project_name: "Operation Crane",
          project_description: "Folding 1000 paper cranes",
        },
        {
          project_name: "Secret Project",
        },
      ]);
    });
};
