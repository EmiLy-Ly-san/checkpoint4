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
    // Fetch a specific background based on the provided ID
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

export default { browse, read };
