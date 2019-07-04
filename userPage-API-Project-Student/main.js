// Create instances of your classes
const apiManager = new APIManager()
const renderer = new Renderer()



// Create the loadData and renderData functions - these should use the relevant instance
const loadData = function(){
    return apiManager.loadData();
}

const renderData = function(){
    renderer.render(apiManager.data)
}