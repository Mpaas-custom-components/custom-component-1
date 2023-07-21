Page({
  data: {
    items: [{
      name: 'angular',
      value: 'AngularJS',
    },
    {
      name: 'react',
      value: 'React'
    },
    {
      name: 'polymer',
      value: 'Polymer'
    },
    {
      name: 'vue',
      value: 'Vue.js'
    },
    {
      name: 'ember',
      value: 'Ember.js'
    },
  ],
  dropDownValue : ""
  },

  handleSubmit(e){
    my.alert({
      content: this.data.dropDownValue
    })
  },

  handleValue(data){
    this.setData({
      dropDownValue : data
    })
  }
});
