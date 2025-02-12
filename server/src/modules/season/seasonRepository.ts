import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Season } from "./season";

class CategoryRepository {
  // Create operation
  async create(season: Season) {
    // Execute the SQL INSERT query to add a new season to the "background" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO season (name) VALUES (?)",
      [season.name],
    );
    // Return the ID of the newly inserted season
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific season by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from season where id = ?",
      [id],
    );
    // Return the first row of the result, which represents the season
    return rows[0] as Season;
  }

  //All seasons read
  async readAll() {
    // Execute the SQL SELECT query to retrieve all seasons from the "background" table
    const [rows] = await databaseClient.query<Rows>("select * from season");

    // Return the array of seasons
    return rows as Season[];
  }
}

export default new CategoryRepository();
