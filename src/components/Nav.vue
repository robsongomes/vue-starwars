<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: currentPage < 6}">
            <a class="page-link" @click="previous" tabindex="-1">Previous</a>
          </li>
          <li v-for="link in links" :key="link" class="page-item" :class="{active: link === currentPage}">
            <a class="page-link" @click="page(link)">{{link}}</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="next">Next</a>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      linksIni: 1,
      linksFin: 5
    }
  },
  methods: {
    next() {
      this.currentPage += 1
      if (this.currentPage % 5 == 0) {
        this.linksIni = this.currentPage
        this.linksFin += 5
      }
      this.$emit('page', this.currentPage);
    },
    previous() {
      this.currentPage -= 1
      this.$emit('page', this.currentPage);
      if (this.currentPage % 5 == 0) {
        this.linksIni -= 5
        this.linksFin = this.currentPage
      }
    },
    page(i) {
      this.currentPage = i;
      this.$emit('page', this.currentPage);
    }
  },
  computed: {
    links: function() {
      let l = [];
      for (let i = this.linksIni; i <= this.linksFin; i++) {
        l.push(i)        
      }
      return l;
    }
  },
  props: {
    size: Number
  }
}
</script>
