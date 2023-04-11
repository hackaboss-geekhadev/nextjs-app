import products from '../../../../mocks/products.json';

const handler = (req, res) => {
  try {

    const searchId = Number(req.query.id);

    const product = products.find(({ id }) => id === searchId);
    
    if (!product) res.status(404);
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
