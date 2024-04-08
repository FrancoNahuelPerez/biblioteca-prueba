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


const getCardsById = async ({id}) => {
    const card = await Card.findByPk(id)
    if(!card){
        throw new Error('No existe Card con esa ID')
    }

    return card
}


const putCards = async ({ id ,title, description, link, task }) =>{

    const card = await Card.findOne({ where: { id } });
  
    if (!card) {
      throw new Error("Card not found");
    }
  
    card.title = title;
    card.task = task;
    card.description = description;
    card.link = link
  
    await card.save();
  
    return card;

}

module.exports = {
  postCard,
  getCards,
  getCardsById,
  putCards
};
