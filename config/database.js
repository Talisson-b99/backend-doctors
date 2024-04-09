const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: "postgress",
    connection: {
      host: env("DATABASE_HOST", "aws-0-sa-east-1.pooler.supabase.com"),
      port: env('DATABASE_NAME', 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.pskfhuepmehyjrqhpbbf"),
      password: env("DATABASE_PASSWORD", "Tali5470@2024"),
      ssl: env.bool("DATABASE_SSL", false)
    },
    useNullAsDefault: true
  }
})