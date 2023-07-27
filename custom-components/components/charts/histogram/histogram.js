import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

function render (chart, props, width, height){
  console.log(props, ">>>>props<<<<");
  console.log(chart, ">>>>chart<<<<");
  if(!chart) {
    return;
  }
  chart.clear();

  let data = props.dataChart
  let {style, adjust,color,size, legend} = props
  size= parseInt(size)
  chart.source(data)
  chart.interval().position('month*value').adjust(adjust).color('name',color).style(style).size(size||20)
  legend?chart.legend(legend):chart.legend(false)

chart.scrollBar({
  mode: 'x',
  xStyle: {
    offsetX: 3,
    offsetY: 1.5,
    range: [0.1, 0.3]
  },
  });

  chart.changeSize(width, height);
}

Component({
  mixins: [methods],
  data: {},
  props: {},
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('histogram', result.appId, result.url);
    });


    const id = `comp-histogram-chart-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = this.pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        console.log("result >>>>>", res,id)
        if(!res || !res.length || !res[0]) {
          return;
        }
        const { width, height } = res[0];
        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        }, () => {

          
          const { padding, appendPadding } = this.props;

          this.chart = new F2.Chart({
            el: canvas,
            width,
            height,
            padding,
            appendPadding,
          });

          render(this.chart, this.props, width, height);
        });
      });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
