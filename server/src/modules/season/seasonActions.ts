import type { RequestHandler } from "express";
import seasonRepository from "./seasonRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all backgrounds
    const seasons = await seasonRepository.readAll();

    // Respond with the backgrounds in JSON format
    res.json(seasons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Read operation by id
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific category based on the provided ID
    const seasonId = Number(req.params.id);

    const season = await seasonRepository.read(seasonId);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the background in JSON format
    if (season == null) {
      res.sendStatus(404);
    } else {
      res.json(season);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read };
