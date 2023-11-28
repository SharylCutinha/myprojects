<template>
    <div>
        <Head>
           <Title>SC Ecommerce | Product Detail</Title>
           <Meta name="description" :content="product?.description"></Meta>
        </Head>
        <ProductDetailCard :product="product"/>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const uri = "https://fakestoreapi.com/products/" +id;

    const {data: product}= useFetch(uri, {key: id})

    // if( !product.value) {
    //    throw createError({statusCode: 404, message: 'Product not found for the specified Id' })
    // }
    definePageMeta({
    layout: "products",
  })
</script>

<style scoped>

</style>