<template>
  <div>
    <div
      class="p-8 m-8 border-dashed border-4 border-grey-900 rounded"
      v-for="list in dataLists"
      :key="list.id"
    >
      <div class="left-half">
        <img
          class=""
          :src="list.card_images[0].image_url_small"
          :alt="list.title"
        />
      </div>
      <div class="right-half text-left">
        <div class="name">
          <router-link :to="'/detail/' + list.name">
            <span class="text-green-900 font-black">Name :</span>{{ list.name }}
          </router-link>
        </div>
        <div class="name">
          <span class="text-green-900 font-black">Description : </span
          >{{ list.desc }}
        </div>
        <div class="name">
          <span class="text-green-900 font-black">Race : </span>{{ list.race }}
        </div>
        <div class="name">
          <span class="text-green-900 font-black">Price : </span>${{
            list.card_prices[0].ebay_price
          }}
        </div>
        <div class="name">
          <span class="text-green-900 font-black">No : </span>{{ list.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Content",
  data() {
    return {
      dataLists: []
    }
  },
  methods: {
    ...mapActions("lists", ["getLists"])
  },
  async mounted() {
    try {
      const payload = {
        urlList: "/"
      }
      await this.getLists(payload.urlList).then(({ data }) => {
        for (let i = 0; i < 10; i++) {
          this.dataLists.push(data.data[i])
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style></style>
