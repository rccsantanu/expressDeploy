module.exports = {
  apps: [
    {
      name: "expressDeploy",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
