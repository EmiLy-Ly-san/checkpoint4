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

export default { browse };
