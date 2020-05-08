module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'my-skills',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
