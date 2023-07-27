Page({
  data: {
    formData: "",
    items: [
      { name: 'angular', value: 'AngularJS' },
      { name: 'react', value: 'React' },
      { name: 'polymer', value: 'Polymer' },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js' },
    ],
  },

  handlesubmit(e){
    console.log(e.detail.value.dropdown)
  }
})