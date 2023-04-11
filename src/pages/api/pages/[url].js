import pages from '../../../../mocks/pages.json';

const handler = (req, res) => {
  try {

    const searchUrl = req.query.url;

    const page = pages.find(({ url }) => url === searchUrl);
    
    if (!page) res.status(404);
    
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
