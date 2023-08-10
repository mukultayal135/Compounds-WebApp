const { Compound } = require("../models");
const HTTPError = require("../errors/HTTPError");

const createCompound = async (data) => {
  const result = await Compound.create({
    compoundName: data.compoundName,
    compoundDescription: data.compoundDescription,
    imageUrl: data.imageUrl,
  });
  return result;
};

const getAllCompounds = async () => {
  const result = await Compound.findAll();
  return result;
};

const updateCompound = async (id, data) => {
  const found = await Compound.findOne({ where: { id } });
  if (!found) throw new HTTPError(404, "Compound not found");
  const result = await Compound.update(
    {
      compoundName: data.compoundName,
      compoundDescription: data.compoundDescription,
      imageUrl: data.compoundImageUrl,
    },
    { where: { id } }
  );
  return result;
};

const getCompoundById = async (id) => {
  const found = await Compound.findOne({ where: { id } });
  if (!found) throw new HTTPError(404, "Compound not found");
  return found;
};

const deleteCompound = async (id) => {
  const found = await await Compound.findOne({ where: { id } });
  if (!found) throw new HTTPError(404, "Compound not found");
  const result = await Compound.destroy({ where: { id } });
  return result;
};

module.exports = {
  createCompound,
  updateCompound,
  getAllCompounds,
  getCompoundById,
  deleteCompound,
};
