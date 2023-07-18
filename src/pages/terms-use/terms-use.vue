<template>
  <div class="container">
    <header-block />
    <div class="terms-use">
      <h1 class="terms-use__title">Правила пользования торговой площадкой DIV.MERCH</h1>
      <div>
        <div v-for="elem in rules" :key="elem.title">
          <accordion-item :elem="elem" />
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'terms-use',
  components: {
    HeaderBlock,
    FooterBlock,
  },
  data() {
    return {
      rules: [
        {
          title: 'Термины и определения',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos error quas praesentium nobis dolorum ad quod, vitae dignissimos cumque dicta odio tempore? Quo assumenda atque fugiat officiis excepturi necessitatibus quasi reiciendis perspiciatis aspernatur quae quis culpa, consequatur architecto est saepe quisquam cupiditate reprehenderit iste deleniti eos facere aliquid, aliquam ex. A soluta officia amet quae fugiat! Nesciunt inventore nobis accusamus tempora repudiandae! Odit officia ipsum corporis fuga est! Eaque laboriosam sequi asperiores corrupti repellat minus vel. Deleniti nemo nostrum suscipit voluptates unde voluptas tempore animi quas, molestiae quae modi minus, esse dolorem debitis, itaque dolores sequi et laudantium labore sint a architecto cupiditate porro incidunt. Facilis inventore illo alias, deleniti porro molestias sit mollitia. Facere laudantium officia voluptates obcaecati. Adipisci debitis tempora ad repellendus quidem expedita, quibusdam maxime? Atque perferendis in earum dolore, totam odit qui eius aliquid repudiandae blanditiis nostrum. Id maxime consequatur neque itaque recusandae quas ut saepe.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, assumenda deleniti totam facere veritatis cumque obcaecati laudantium. Quos, soluta quod. Ut&nbsp;dolorem&nbsp;ad, dolore cupiditate ex&nbsp;obcaecati laboriosam veritatis natus, maxime non magni minus eaque inventore quam aliquam labore error optio sunt! Consectetur iure, dolores distinctio facilis voluptates aliquam accusantium nobis? Voluptate tempora quo soluta nihil, quisquam laudantium ducimus ipsa, temporibus reiciendis perspiciatis, praesentium nesciunt? Rem distinctio dolor laboriosam! Iure ut&nbsp;facere expedita eum nostrum nam harum impedit ipsam quaerat aperiam iste quam commodi eveniet consequatur, eos quis et&nbsp;obcaecati fugit veniam alias? Nihil omnis aperiam autem non eveniet sequi!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, illo voluptas!',
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis dolorem facere commodi maxime ullam, obcaecati sed pariatur necessitatibus excepturi! Velit nisi aut voluptatem dignissimos, aspernatur totam qui culpa reiciendis?',
          ],
        },
        {
          title: 'Общие положения',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dignissimos dicta consequuntur ad, laboriosam perspiciatis eos hic voluptas odio reprehenderit corporis molestias.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere quis alias praesentium accusantium! Qui, ducimus autem!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos commodi, illum iure totam amet? Eligendi, aliquid ab! Amet aperiam labore voluptatum aliquid impedit mollitia nulla sequi laborum accusamus? Esse aut ipsa quos nobis hic in earum voluptates sed. Voluptatem repudiandae odit laudantium distinctio possimus.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad et nemo blanditiis quos dolores quis quisquam optio ducimus. Delectus, molestias vel!',
          ],
        },
        {
          title: 'Регистрация на сайте',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dignissimos dicta consequuntur ad, laboriosam perspiciatis eos hic voluptas odio reprehenderit corporis molestias.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere quis alias praesentium accusantium! Qui, ducimus autem!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore culpa dolorem suscipit eum reiciendis, nobis ipsa aspernatur assumenda consequatur repellendus omnis cupiditate perspiciatis amet eveniet recusandae inventore fugiat asperiores corporis fugit numquam.',
          ],
        },
        {
          title: 'Оформление заказа на Торговой площадке',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum accusantium officiis, illum inventore in corrupti sequi ut aliquam excepturi asperiores, ex magnam nam reprehenderit aliquid, numquam quae id praesentium! Mollitia, possimus modi adipisci architecto, commodi atque autem distinctio nam labore itaque ex ipsum sunt accusamus in voluptatem nisi animi voluptatum debitis! Minus, qui, praesentium eveniet unde itaque dicta maiores vel cumque totam est corrupti. Fugiat nulla dolores voluptates voluptatibus?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere quis alias praesentium accusantium! Qui, ducimus autem!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore culpa dolorem suscipit eum reiciendis, nobis ipsa aspernatur assumenda consequatur repellendus omnis cupiditate perspiciatis amet eveniet recusandae inventore fugiat asperiores corporis fugit numquam.',
          ],
        },
        {
          title: 'Цена и оплата',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum accusantium officiis, illum inventore in&nbsp;corrupti sequi ut&nbsp;aliquam excepturi asperiores, ex&nbsp;magnam nam reprehenderit aliquid, numquam quae id&nbsp;praesentium! Mollitia, possimus modi adipisci architecto, commodi atque autem distinctio nam labore itaque ex&nbsp;ipsum sunt accusamus in&nbsp;voluptatem nisi animi voluptatum debitis! Minus, qui, praesentium eveniet unde itaque dicta maiores vel cumque totam est corrupti. Fugiat nulla dolores voluptates voluptatibus?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere quis alias praesentium accusantium! Qui, ducimus autem!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore culpa dolorem suscipit eum reiciendis, nobis ipsa aspernatur assumenda consequatur repellendus omnis cupiditate perspiciatis amet eveniet recusandae inventore fugiat asperiores corporis fugit numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad et nemo blanditiis quos dolores quis quisquam optio ducimus. Delectus, molestias vel!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad et nemo blanditiis quos dolores quis quisquam optio ducimus. Delectus, molestias vel!',
          ],
        },
        {
          title: 'Права и обязанности сторон',
          subtitle: '',
          list: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dignissimos dicta consequuntur ad, laboriosam perspiciatis eos hic voluptas odio reprehenderit corporis molestias.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos commodi, illum iure totam amet? Eligendi, aliquid ab! Amet aperiam labore voluptatum aliquid impedit mollitia nulla sequi laborum accusamus? Esse aut ipsa quos nobis hic in earum voluptates sed. Voluptatem repudiandae odit laudantium distinctio possimus.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore culpa dolorem suscipit eum reiciendis, nobis ipsa aspernatur assumenda consequatur repellendus omnis cupiditate perspiciatis amet eveniet recusandae inventore fugiat asperiores corporis fugit numquam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad et nemo blanditiis quos dolores quis quisquam optio ducimus. Delectus, molestias vel!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, illo voluptas!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, illo voluptas!',
          ],
        },
      ],
    };
  },
};
</script>

<style src="./terms-use.less" lang="less" />
