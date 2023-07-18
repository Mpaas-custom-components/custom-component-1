Component({
  mixins: [],
  data: {
    bgColor: "orange",
    fontColor: "",
    classData: "",
  },
  props: {},
  didMount() {
    this.colorChange(),
    this.determineContrastColor(this.data.bgColor)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e) {
      if (!this.props.onTap) {
        return ""
      } else {
        return this.props.onTap()
      }
    },

    colorChange() {
      if (!this.props.color) {
        this.setData({
          bgColor: "orange"
        })
      } else {
        this.setData({
          bgColor: this.props.color
        })
      }
    },

    determineContrastColor(background) {
      const red = parseInt(background.substr(1, 2), 16);
      const green = parseInt(background.substr(3, 2), 16);
      const blue = parseInt(background.substr(5, 2), 16);

      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

      if (brightness > 125 && background != "#FFA500") {
        this.setData({
          fontColor: '#000000'
        })
      } else {
        this.setData({
          fontColor: '#ffffff'
        })
      }
    },

    btnType(){
      if(!this.props.type || this.props.type == "primary"){
        this.setData({
          classData : "btn"
        })
      }else if(this.props.type === "filter"){
        this.setData({})
      }
    }
  },
});