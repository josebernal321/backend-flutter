module.exports = {
  username: "akselvdufgdplc",
  password: "c99f56b148604498f47782018ab29c361ebe2a5e73f051d530e3a7e6eccc8aee",
  database: "d9i05h53v0n67q",
  host: "ec2-3-222-127-167.compute-1.amazonaws.com",
  port:5432,
  dialect: "postgres",
  seederStorage: "json",
  seederStoragePath: "sequelizeSeeds.json",
  migrationStorage: "json",
  migrationStoragePath: "sequelizeMigrate.json",
  define: {
    timestamps: false,
  },
  dialectOptions: 
    {
      ssl:{ 
        require:true,
        rejectUnauthorized: false
      }
    }
  
}