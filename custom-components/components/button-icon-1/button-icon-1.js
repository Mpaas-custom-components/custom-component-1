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
    console.log(this.props, ">>>>>ALL PROPS<<<<<");
    this.handleIcon()
    this.classContainer()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleIcon() {
      this.setData({
        handleIcon: "/images/" + this.props.iconImage + ".svg"
      })
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
