import axios from 'axios'

export default {

    save(callback, list) {

        axios.request({
            method: 'POST',
            url: "http://localhost:8080/api/v1/lists",
            onUploadProgress: (progressEvent) => {
                console.log(progressEvent)
                
            },
            onDownloadProgress: (progressEvent) => {
                console.log(progressEvent)
            },
            data: list
        }).then((response) => {
            callback(response.data)
        }).catch((error) => {
            console.log(error)
        })

    },

    index(callback) {

        axios.request({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/lists',
            timeout: 1000,
            onUploadProgress: (progressEvent) => {
                console.log(progressEvent)
            },
            onDownloadProgress: (progressEvent) => {
                console.log(progressEvent)
            }
        }).then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error)
        })

    },

    // show(callback, id) {

    //     let url = `http://localhost:8080/api/v1/lists/${id}`
        
    //     axios.request({
    //         method: 'GET',
    //         url: url,
    //         onUploadProgress: (progressEvent) => {

    //         },
    //         onDownloadProgress: (progressEvent) => {

    //         }
    //     }).then((response) => {
    //         callback(response)
    //     })

    // },

    // destroy(callback, list) {
        
    //     let url = `http://localhost:8080/api/v1/lists/${id}`

    //     axios.request({
    //         method: 'DELETE',
    //         url: url,
    //         onUploadProgress: (progressEvent) => {

    //         },
    //         onDownloadProgress: (progressEvent) => {

    //         }
    //     }).then((response) => {
    //         callback(response)
    //     })

    // }

}