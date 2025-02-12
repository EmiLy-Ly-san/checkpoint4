import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Background } from "./background";

class CategoryRepository {
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

    // Return the array of videos
    return rows as Background[];
  }

  // Create operation
  //   async create(category: Category) {
  //     // Execute the SQL INSERT query to add a new category to the "category" table
  //     const [result] = await databaseClient.query<Result>(
  //       "insert into category (name) values (?)",
  //       [category.name],
  //     );
  //     // Return the ID of the newly inserted category
  //     return result.insertId;
  //   }
}

export default new CategoryRepository();
