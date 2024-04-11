const { Op } = require("sequelize");
const { Card } = require("../db");

const postCard = async ({ title, description, link, task }) => {
  const card = await Card.create({
    title,
    description,
    link,
    task,
  });

  return card;
};

const getCards = async () => {
  const card = await Card.findAll();

  return card;
};

const getCardsById = async ({ id }) => {
  const card = await Card.findByPk(id);
  if (!card) {
    throw new Error("No existe Card con esa ID");
  }

  return card;
};

const putCards = async ({ id, title, description, link, task }) => {
  const card = await Card.findOne({ where: { id } });

  if (!card) {
    throw new Error("Card not found");
  }

  card.title = title;
  card.task = task;
  card.description = description;
  card.link = link;

  await card.save();

  return card;
};

const getCardsByName = async ({ title }) => {
  const card = await Card.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });

  if (card.length === 0) {
    throw new Error(
      `No hay ninguna coincidencia con ${title}, corriga sus terminos e intente nuevamente`
    );
  }
  return card;
};

const destroyCard = async ({ id }) => {
  const card = await Card.destroy({ where: { id } });

  if (card === 0) {
    throw new Error(`No se encontró ninguna tarjeta con el ID ${id}`);
  }

  return `La tarjeta con el ID ${id} ha sido eliminada correctamente`;
};

module.exports = {
  postCard,
  getCards,
  getCardsById,
  putCards,
  getCardsByName,
  destroyCard,
};
