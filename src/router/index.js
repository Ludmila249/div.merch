import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@/pages/main/page-main.vue';
import CatalogPage from '../pages/catalog/page-catalog.vue';
import ProductDetailsPage from '../pages/product-details/page-product-details.vue';
import BasketPage from '../pages/basket/page-basket.vue';

const pathToRegexpOptions = {
  strict: true,
};

Vue.use(Router);

export default new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'production' && process.env.IN_KP
      ? `/special/${process.env.PROJECT_NAME}/`
      : '/',
  routes: [
    // в конце path всех роутов должен быть конечный слеш /. Все роуты должны иметь конфиг pathToRegexpOptions
    {
      path: '/',
      name: 'main',
      component: MainPage,
      pathToRegexpOptions,
    },
    {
      path: '/catalog/',
      name: 'catalog',
      component: CatalogPage,
      pathToRegexpOptions,
    },
    {
      path: '/product-details/',
      name: 'product-details',
      component: ProductDetailsPage,
      pathToRegexpOptions,
    },
    {
      path: '/basket/',
      name: 'basket',
      component: BasketPage,
      pathToRegexpOptions,
    },
    // {
    //   path: '/sub/',
    //   name: 'main',
    //   component: SubPage,
    //   pathToRegexpOptions,
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});
