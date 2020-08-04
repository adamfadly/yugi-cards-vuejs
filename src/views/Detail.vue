<template>
  <div class="text-center">
    <div class="text-red-800 text-2xl my-5">{{ detailChar.name }}</div>
    <div class="px-10">
      <p v-if="loading">loading</p>
      <img
        class="mx-auto"
        v-if="!loading"
        :src="detailChar.card_images[0].image_url"
        alt=""
      />
      <div class="mt-8">{{ detailChar.desc }}</div>
      <div>Type: {{ detailChar.type }}</div>
      <div class="prices">
        <div class="">
          <div v-if="loading">$$$</div>
          <div v-if="!loading" class="flex-col">
            <div>
              Ebay price: <span class="text-green-900">$</span
              >{{ detailChar.card_prices[0].ebay_price }}
            </div>
            <div>
              Amazon price: <span class="text-green-900">$</span
              >{{ detailChar.card_prices[0].amazon_price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Detail",
  data() {
    return {
      detailChar: {},
      loading: true
    }
  },
  methods: {
    ...mapActions("character", ["getSingleCard"])
  },
  async mounted() {
    try {
      const name = this.$route.params.name
      const payload = {
        // name: name
        name,
        urlDetail: `?name=`
      }
      await this.getSingleCard(payload).then(({ data }) => {
        this.detailChar = data.data[0]
        this.loading = false
        // setTimeout(() => {
        //   this.loading = false
        // }, 3000)
      })
      console.log(this.detailChar)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style></style>
