import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-snipcart',
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
      type: 'json',
      productId: {
        url: 'https://raw.githubusercontent.com/spreadzp/tasks-for-arrays/master/products.json',
        property: 'id',
      },
    },
  },
};
