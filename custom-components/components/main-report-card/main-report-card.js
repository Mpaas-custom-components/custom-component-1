// <main-menu-card type="primary" color="" backgroundColor="" width="" height="" value1= "Cash" value2="1.78%" value3="$ 6.899.00" value4="23/10/2023 12:45" url=">>>url<<<"></main-menu-card>
// <main-menu-card type="secondary" themeIcon="green" color="" backgroundColor="" width="" height="" value1="Income" value2="16.100.000" url=">>>url<<<" iconImage="https://cdn-icons-png.flaticon.com/512/2474/2474450.png"></main-menu-card>
// <main-menu-card type="tertiary" themeIcon="green" color="" backgroundColor="" width="" height="" value1="Income" value2="16.100.000" url=">>>url<<<" iconImage="https://cdn-icons-png.flaticon.com/512/2474/2474450.png"></main-menu-card>

Component({
  mixins: [],
  data: {
    handleIcon : "",
    classContainer: "",
    width: "", 
    height: "", 
    backgroundColor: "",
    fontSizeValue1: 24, 
    fontSizeValue2: 28, 
    imageSize: 65
  },
  props: {},
  didMount() {
    this.handleIcon()
    this.classContainer()
    this.setDynamicFontSize();
  },
  didUpdate() {
    // this.setDynamicFontSize();
  },
  didUnmount() {},
  methods: {
    handleTap() {
      console.log(this.props.url, ">>> url main-report-card <<<");
    },

    classContainer(){
      const { width, height, backgroundColor, color } = this.props;
      this.setData({
        width: width, 
        height: height, 
        backgroundColor: backgroundColor,
        color: color
      });
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

    setDynamicFontSize() {
      const query = my.createSelectorQuery();
      query.select('.card-secondary').boundingClientRect();
      query.exec(res => {
        console.log(res[0] ? res[0].width : 0, "<<<< WIDTH");
        let cardWidth = res[0] ? res[0].width : 0;

        // const newFontSizeValue1 = Math.max(Math.min(cardWidth / 20, 28), 18); 
        // const newFontSizeValue2 = newFontSizeValue1 + 4; 
        let newFontSizeValue1;
        let newImageSize;
        let newFontSizeValue2
        if(cardWidth > 250 ) {
          newFontSizeValue1 = 34; 
          newFontSizeValue2 = newFontSizeValue1 + 4; 
          newImageSize = 100
        } else {
          newFontSizeValue1 = 24; 
          newFontSizeValue2 = 28; 
          newImageSize = 65;
        }

        console.log(newFontSizeValue1, newFontSizeValue2);

        this.setData({
          fontSizeValue1: newFontSizeValue1,
          fontSizeValue2: newFontSizeValue2,
          imageSize: newImageSize
        });
      });
    },
  },
});
