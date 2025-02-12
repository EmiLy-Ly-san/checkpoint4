import type { RequestHandler } from "express";
import backgroundRepository from "./backgroundRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all backgrounds
    const backgrounds = await backgroundRepository.readAll();

    // Respond with the backgrounds in JSON format
    res.json(backgrounds);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch backgrounds based on the provided ID
    const backgroundId = Number(req.params.id);
    const background = await backgroundRepository.read(backgroundId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (background == null) {
      res.sendStatus(404);
    } else {
      res.json(background);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// REMOVE operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const backgroundId = Number(req.params.id);

    const backgroundToRemove = await backgroundRepository.remove(backgroundId);
    res.status(201).json({ backgroundToRemove });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

//UPDATE
const edit: RequestHandler = async (req, res, next) => {
  // const filePath = `/assets/images/${req.file?.filename}`;
  let filePath = undefined;

  if (req.file) {
    filePath = `/assets/images/${req.file?.filename}`;
  }

  try {
    const { id } = req.params;

    const { name, season_id } = req.body;

    const updateUser = await backgroundRepository.update({
      id,
      name,
      file: filePath,
      season_id,
    });
    if (updateUser) {
      res.status(200).end("Félicitation");
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  const filePath = `/assets/images/${req.file?.filename}`;
  try {
    // Extract the item data from the request body
    const newBackground = {
      name: req.body.name,
      file: filePath,
      season_id: req.body.season_id,
    };

    // Create the item
    const insertId = await backgroundRepository.create(newBackground);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, remove };
