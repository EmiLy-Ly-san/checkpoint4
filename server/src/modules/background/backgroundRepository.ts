import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Background } from "./background";

class CategoryRepository {
  // Create operation
  async create(background: Background) {
    // Execute the SQL INSERT query to add a new background to the "background" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO background (name, file, season_id) VALUES (?, ?, ?)",
      [background.name, background.file, background.season_id],
    );
    // Return the ID of the newly inserted backgroud
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific background by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from background where id = ?",
      [id],
    );
    // Return the first row of the result, which represents the user
    return rows[0] as Background;
  }

  //All backgrounds read
  async readAll() {
    // Execute the SQL SELECT query to retrieve all backgrounds from the "background" table
    const [rows] = await databaseClient.query<Rows>("select * from background");

    // Return the array of seasons
    return rows as Background[];
  }

  // Update operation
  async update(id: string, name: string, file: string, season_id: number) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE background SET name = ?, file = ?, season_id = ? WHERE id = ?",
      [name, file, season_id, id],
    );
    return row.affectedRows;
  }

  // Delete operation
  async remove(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "DELETE FROM background where id = ?",
      [id],
    );
    return rows[0] as Background;
  }
}

export default new CategoryRepository();
