//  <main-menu-card color="" backgroundColor="" width="" height="" value1= "Cash" value2="1.78%" value3="$ 6.899.00" value4="23/10/2023 12:45" link=">>>Link<<<"></main-menu-card>
Component({
  mixins: [],
  data: {
    width: "", 
    height: "", 
    backgroundColor: ""
  },
  props: {},
  didMount() {
    console.log(this.props, "<<<<<<<<<<<<<<<");
    this.classContainer()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap() {
      console.log(this.props, "ZZZZZZZZzz");
      
    },

    classContainer(){
      const { width, height, backgroundColor, color } = this.props;
      this.setData({
        width: width, 
        height: height, 
        backgroundColor: backgroundColor,
        color: color
      });
     }
  },
});
