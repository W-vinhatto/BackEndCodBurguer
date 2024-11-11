

module.exports = {
    dialect: 'postgres',
    url: 'postgresql://postgres:VVvqUdPosQsryZWSpGouRMooVnspMCha@junction.proxy.rlwy.net:19076/railway',
    /**
     * trocado config após deploy com railway
        host: 'localhost',
        username: 'postgres',
        password: 'postgres',
        database: 'BaseEcomerce',
         */
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}