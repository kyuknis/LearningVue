import axios from 'axios'

export default {

    save(callback, list) {

        axios.request({
            method: 'POST',
            url: "http://localhost:8080/api/v1/todos",
            onUploadProgress: (progressEvent) => {

            },
            onDownloadProgress: (progressEvent) => {

            },
            data: list
        }).then((response) => {
            callback(response)
        })

    },

    index(callback) {

        axios.request({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/todos',
            onUploadProgress: (progressEvent) => {

            },
            onDownloadProgress: (progressEvent) => {

            }
        }).then((response) => {
            callback(response)
        })

    },

    show(callback, id) {

        let url = `http://localhost:8080/api/v1/todos/${id}`
        
        axios.request({
            method: 'GET',
            url: url,
            onUploadProgress: (progressEvent) => {

            },
            onDownloadProgress: (progressEvent) => {

            }
        }).then((response) => {
            callback(response)
        })

    },

    destroy(callback, list) {
        
        let url = `http://localhost:8080/api/v1/todos/${id}`

        axios.request({
            method: 'DELETE',
            url: url,
            onUploadProgress: (progressEvent) => {

            },
            onDownloadProgress: (progressEvent) => {

            }
        }).then((response) => {
            callback(response)
        })

    }

}