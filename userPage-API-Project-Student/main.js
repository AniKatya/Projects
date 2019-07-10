// Create instances of your classes
const apiManager = new APIManager()
const renderer = new Renderer()



// these functions use the relevant instance
const loadData = function(){
    return apiManager.loadData();
}

const renderData = function(){
    renderer.render(apimanager.data)
}

//saves a snapshot of current user to local storage
const saveToLocalStorage = function() {
    localStorage.clear()
    localStorage.setItem('apimanager.data', JSON.stringify(apimanager.data))
}

//loads the user we saved and renders the exact user page back on the page
const loadFromLocalStorage = function(){
    var retrievedObject = localStorage.getItem('apimanager.data');
    renderer.render(JSON.parse(retrievedObject));
}