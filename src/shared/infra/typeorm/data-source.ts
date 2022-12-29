import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "9121",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: ["src/modules/**/infra/typeorm/entities/*.ts"],
  migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(
  host = process.env.NODE_ENV === "test" ? "localhost" : "database"
): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
