exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          task_description: "Bring a lunch",
          task_notes: "Bring a thermose full of chicken noodle soup",
        },
        {
          task_description: "Forget to write notes",
        },
        {
          task_description: "Remember to write notes",
          task_notes: "Try to remember all the stuff I forgot to write down",
        },
      ]);
    });
};
