// file: __tests__/pages/api/products/index.test.js

import handler from '@api/products/index';
import products from '../../../../mocks/products.json';

describe('GET /api/products', () => {
  it('should return 200', async () => {

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(products)
  });
});
