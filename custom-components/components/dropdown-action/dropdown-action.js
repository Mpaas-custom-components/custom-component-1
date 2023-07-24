Component({
  mixins: [],
  data: {
    isDropdownOpen: false,
    valueData: ""
  },
  props: {
  },
  didMount() {
    console.log(this.props.items)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleDropDown() {
      this.setData({
        isDropdownOpen: !this.data.isDropdownOpen
      })
    },

    onChange(e) {
      console.log(e, "child")
      this.setData({
        valueData: e.target.dataset.value,
        isDropdownOpen: !this.data.isDropdownOpen
      })

      this.$page.handleValue(this.data.valueData)
    },

    onclick(){
      this.setData({
        isDropdownOpen: !this.data.isDropdownOpen
      })
    }
  },
});