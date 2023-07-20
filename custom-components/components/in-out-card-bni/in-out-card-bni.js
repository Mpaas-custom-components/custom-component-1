Component({
  mixins: [],
  data: {
    typeData: {
      type: "Income",
      color: "green",
      svg: "income-currency-dollar.svg",
      arrow: "up-arrow.svg"
    }
  },
  props: {},
  didMount() {
    this.handleType()

    console.log(this.data.typeData, " <<<<,")
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleType() {
      if (this.props.type === "outcome") {
        this.setData({
          typeData: {
            type: "Outcome",
            color: "red",
            svg: "outcome-currency-dollar.svg",
            arrow: "down-arrow.svg"
          }

        })
      } else if (this.props.type === "income") {
        this.setData({
          typeData: {
            type: "Income",
            color: "green",
            svg: "income-currency-dollar.svg",
            arrow: "up-arrow.svg"
          }
        })
      }
    }
  },
});