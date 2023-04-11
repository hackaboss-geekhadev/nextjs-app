import products from '../../../../mocks/products.json';

const handler = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
