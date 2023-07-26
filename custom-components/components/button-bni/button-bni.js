Component({
  mixins: [],
  data: {
    bgColor: "#ffa500",
    fontColor: "",
    classData: "",
    disabledClass: ""
  },
  props: {},
  didMount() {
    console.log(this.props);
    this.colorChange(),
    this.determineContrastColor(this.data.bgColor),
    this.btnType()
    this.handleDisabled()
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
          bgColor: "#ffa500"
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
      console.log(brightness, "<<<brightness");
      if (brightness > 125) {
        this.setData({
          fontColor: '#ffffff'
        })
      } else {
        this.setData({
          fontColor: '#000000'
        })
      }
    },

    btnType(){
      if(!this.props.type || this.props.type == "primary"){
        this.setData({
          classData : "btn",
        })
      } else if(this.props.type === "quick"){
        this.setData({
          classData : "quickBtn",
          bgColor: "#e3e3e3",
          fontColor: '#000000'
        })
      } else if (this.props.type === "default") {
        this.setData({
          classData : "btn",
          bgColor: "#e3e3e3",
          fontColor: '#000000'
        })
      }
    },

    handleDisabled(){
      if(this.props.disabled === "true") {
        this.setData({
          disabledClass: "disabled"
        })
      }
      console.log(this.data.disabledClass, ">>>>>>>>>>");
    }
  },
});