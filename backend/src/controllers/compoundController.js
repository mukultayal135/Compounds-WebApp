const compoundService = require("../services/compoundService.js");
const HTTPError = require("../errors/HTTPError.js");
const paginate = require("jw-paginate");

const createCompound = async (req, res) => {
  try {
    const data = req.body;
    const content = await compoundService.createCompound(data);
    res.status(201).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
const getAllCompounds = async (req, res) => {
  try {
    const responseData = await compoundService.getAllCompounds();
    const page = parseInt(req.query.page) || 1;
    const pageSize = 6;
    const pager = paginate(responseData.length, page, pageSize);
    const pageOfItems = responseData.slice(
      pager.startIndex,
      pager.endIndex + 1
    );
    res.status(200).json({ pager, pageOfItems });
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

const updateCompound = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const content = await compoundService.updateCompound(id, data);
    res.status(200).json(content);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

const deleteCompound = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await compoundService.deleteCompound(id);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
const getCompoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const responseData = await compoundService.getCompoundById(id);
    res.status(200).json(responseData);
  } catch (error) {
    if (error instanceof HTTPError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

module.exports = {
  createCompound,
  deleteCompound,
  updateCompound,
  getAllCompounds,
  getCompoundById,
};
