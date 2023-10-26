import CTabbar from './CTabbar.vue'
import ScrollPlay from './ScrollPlay.vue'
import PlayList from './PlayList.vue'
import type { App } from 'vue'

const useComponents = {
    install(app:App) {
        app.component('CTabbar', CTabbar)
        app.component('ScrollPlay', ScrollPlay)
        app.component('PlayList', PlayList)
    }
}

export default useComponents