import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Background } from "../background/background";
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

  // By id
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve backgrounds by season_id
    const [rows] = await databaseClient.query<Rows>(
      "select * from background where season_id = ?",
      [id],
    );

    // Return the first row of the result, which represents the video
    return rows as Background[];
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
