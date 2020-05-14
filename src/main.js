window.onload = function(){
    this.initPage()

    var docker = require("./dockerAPI")

    var callbackImages = function (x_images){
        var retArray = [];
        x_images.forEach(function(x_image){
            /*
            alert("---- images ----\n"
                + x_image.id + "\n"
                + x_image.size + "\n"
                + x_image.tag);
                */
               var image = {
                "id": x_image.id,
                "size": parseInt(x_image.size/1024/1024)+ "MB",
                "tag": x_image.tag,
            }
            retArray.push(image)
        })
        vueImageTab.setImages(retArray);
    }
    docker.getImages(callbackImages);

    function callbackContainers(x_containers){
        var retArray = [];
        x_containers.forEach(function(x_container){
            var portStr = "";
            x_container.ports.forEach(function(x_port){
                portStr += (x_port + "<br>")
            })

            var container = {
                "id": x_container.id,
                "image": x_container.image,
                "state": x_container.state,
                "port" : portStr
            }
            retArray.push(container)
            /*
            alert("===container ===\n"
            + container.id + "\n"
            + container.image + "\n" 
            + container.state + "\n"
            + portStr);
            */
        })
        vueContainerTab.setContainers(retArray);
    }
    docker.getContainers(callbackContainers);
}
function initPage() {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var activated_tab = e.target // activated tab
        var previous_tab = e.relatedTarget // previous tab
        // 処理
        //alert(activated_tab + " activated")

        if( activated_tab == ""){

        }
    })
}