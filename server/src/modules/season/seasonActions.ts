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

export default { browse };
