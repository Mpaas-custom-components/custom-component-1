// <button-icon-1 color="#ff5900" width="200" height="200" onTap="onTap" iconImage="cash"></button-icon-1>
Component({
  mixins: [],
  data: {
    handleIcon : "",
    classContainer: "",
    width: "",
    height: "",
    color: ""
  },
  props: {},
  didMount() {
    // console.log(this.props, ">>>>>ALL PROPS<<<<<");
    this.handleIcon()
    this.classContainer()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {

    handleTap() {
      console.log(this.props.url, ">>> url button-icon-1 <<<");
    },

    handleIcon() {

      let iconImage = ""
      let isImageUrl = ""

      if(this.props.iconImage){
        iconImage = this.props.iconImage;
        isImageUrl = iconImage.indexOf("http://") == 0 || iconImage.indexOf("https://") == 0
      }

      if (isImageUrl) {
        this.setData({
          handleIcon: iconImage
        });
      } else {
        this.setData({
          handleIcon: iconImage
        });
      }
    },

     classContainer(){
      const { width, height, color } = this.props;
      this.setData({
        width: width || 200, 
        height: height || 200, 
        color: color
      });
     }
  },

});
