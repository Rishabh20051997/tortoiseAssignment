import { observable, makeObservable, action } from 'mobx'
import { ACCESS_KEY } from '../common/ApiConfiguration'

const DEFAULT_SETTING = {
    list: [],
    pageNumber: 1
}

export class HomeDataStore {
    @observable list
    pageNumber

    constructor() {
        Object.keys(DEFAULT_SETTING).forEach((key) => {
            this[key] = DEFAULT_SETTING[key]
        })

        makeObservable(this)
    }

    @action
    updateList = (newList) => {
        this.list = [...this.list, ...newList]
        this.pageNumber++
    }

    fetchData = () => {
        const urlParams = 'https://api.unsplash.com/photos/?client_id=' + ACCESS_KEY + '&page=' + this.pageNumber
        fetch(urlParams, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => this.updateList(data));
    }

}
