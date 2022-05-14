//(function(){

const imagesEl = document.querySelector('.files')
const imagesList = document.querySelector('.images-list')

function loadImages(e) {

    const file = e.target.files[0]

    if (file && file.type.includes('image')) {

        const reader = new FileReader()

        reader.onload = function(readerEvent) {

            liItem = imagesList.lastElementChild
            liItem.classList.remove('images-list__item--prototype')

            imageProperties = liItem.children
            const sizeInMB = (file.size / (1024*1024)).toFixed(2)

            imageProperties[0].innerText = file.name
            imageProperties[1].src = readerEvent.target.result
            imageProperties[2].innerText = (sizeInMB + ' MB')

        }

        reader.readAsDataURL(file)

    }

}

imagesEl.lastElementChild.addEventListener('change', loadImages)

//})()