import handler from '@api/products/[id]';
import products from '../../../../mocks/products.json';

describe('GET /api/products/:id', () => {
  it('should return 200 when product is found', async () => {

    // products/1
    const req = {
      query: {
        id: products[0].id
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await handler(req, res)
  
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(products[0])
  });
  
  it('should return 404 when product is not found', async () => {

    const req = {
      query: {
        id: 0
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
  
    await handler(req, res)
  
    expect(res.status).toHaveBeenCalledWith(404)
  });
});
