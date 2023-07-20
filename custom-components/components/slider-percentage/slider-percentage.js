Component({
  mixins: [],
  data: {
    color: "",
    title: "",
    percentage: "",
    nominal: "",
    backgroundColor: "",
    textType: "orange"
  },
  props: {},
  didMount() {
    this.setColor();
    this.setTitle();
    this.setPercentage();
    this.setNominal();
    this.setBackgroundColor();
    this.setTextType();
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    setColor() {
      this.setData({
        color: this.props.color ? this.props.color : "salmon"
      });
    },

    setTitle() {
      this.setData({
        title: this.props.title ? this.props.title : "Title"
      });
    },

    setPercentage() {
      this.setData({
        percentage: this.props.percentage ? this.props.percentage : "% Value"
      });
    },

    setNominal() {
      this.setData({
        nominal: this.props.nominal ? this.props.nominal : "000.000.000"
      });
    },

    setBackgroundColor() {
      this.setData({
        backgroundColor: this.props.backgroundColor
          ? this.props.backgroundColor
          : "white"
      });
    },

    setTextType() {
      if (this.props.textType == "dark" || this.props.textType == null) {
        this.setData({
          textType: "black"
        });
      } else if (this.props.textType == "light") {
        this.setData({
          textType: "white"
        });
      } else {
        this.setData({
          textType: this.props.textType
        });
      }
    }
  }
});
