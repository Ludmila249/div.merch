import Vue from 'vue';

/*
Названя блоков, состоящих из одного слова должны иметь постфикс Block при регистрации.
Css блоков в итоговой сборке будет иметь такой порядок, в котором блоки импортируются,
соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки
имели возможность переопределить стили корневого элемента ребёнка без использования !important
*/

import BreadCrumbs from './bread-crumbs/bread-crumbs.vue';
import SelectBlock from './select/select.vue';

import FilterBlock from './filter/filter.vue';
import CatalogBlock from './catalog/catalog.vue';
import CardBlock from './card/card.vue';
import PaginationBlock from './pagination/pagination.vue';
import CheckboxBlock from './checkbox/checkbox.vue';

import ExampleBlock from './example/example.vue';

Vue.component('bread-crumbs', BreadCrumbs);
Vue.component('select-block', SelectBlock);

Vue.component('filter-block', FilterBlock);
Vue.component('catalog-block', CatalogBlock);
Vue.component('card-block', CardBlock);
Vue.component('pagination-block', PaginationBlock);
Vue.component('checkbox-block', CheckboxBlock);

Vue.component('example-block', ExampleBlock);
