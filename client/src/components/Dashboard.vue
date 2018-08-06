<template>    
    <Panel />
</template>

<script>
import Panel from "./templates/Panel";

export default {
  components: {
    Panel
  },
  data() {
    return {
      months: [
        {
          num: 0,
          name: "All",
          active: null
        },
        {
          num: 1,
          name: "January",
          active: null
        },
        {
          num: 2,
          name: "February",
          active: null
        },
        {
          num: 3,
          name: "March",
          active: null
        },
        {
          num: 4,
          name: "April",
          active: null
        },
        {
          num: 5,
          name: "May",
          active: null
        },
        {
          num: 6,
          name: "June",
          active: null
        },
        {
          num: 7,
          name: "July",
          active: null
        },
        {
          num: 8,
          name: "August",
          active: null
        },
        {
          num: 9,
          name: "September",
          active: null
        },
        {
          num: 10,
          name: "October",
          active: null
        },
        {
          num: 11,
          name: "November",
          active: null
        },
        {
          num: 12,
          name: "December",
          active: null
        }
      ]
    };
  },
  name: "Dashboard",
  props: {
    msg: String
  },

  computed: {
    monthNow: function() {
      const date = new Date();

      this.months.forEach(month => {
        if (month.num == date.getMonth() + 1) {
          month.active = true;
        } else {
          month.active = false;
        }
      });

      return date.getMonth() + 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
