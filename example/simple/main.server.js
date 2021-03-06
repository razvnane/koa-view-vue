
import App from './component/app'

import Vue from 'vue'

export default function(context) {
  return new Promise((resolve, reject) => {
    const { data } = context

    const app = new Vue({
      render: h => h(App),
      data() {
        return {
          ...data
        }
      }
    })

    resolve(app)
  })
}
