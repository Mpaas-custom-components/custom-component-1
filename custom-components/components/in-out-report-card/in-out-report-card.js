//  <in-out-report-card backgroundColor="" color="" themeIcon="green" width="" height="" iconImage="https://cdn-icons-png.flaticon.com/512/2474/2474450.png" title="Income" subTitle="16.100.000"></in-out-report-card>
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
      console.log(this.props.url, ">>>", this.props.themeIcon,"url in-out-report-card <<<");
    },

    handleIcon() {
      const iconImage = this.props.iconImage;
      const isImageUrl = iconImage.indexOf("http://") == 0 || iconImage.indexOf("https://") == 0
    
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
        width: width, 
        height: height, 
        color: color
      });
     },

     changeTheme() {
      
     }
  },
});
