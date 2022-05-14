//(function(){

const imagesEl = document.querySelector('.files')
const imagesList = document.querySelector('.images-list')

function loadImages(e) {

    for (let i = 0; i < e.target.files.length; i++) {

        const file = e.target.files[i]

        if (file && file.type.includes('image')) {

            const reader = new FileReader()

            reader.onload = function(readerEvent) {

                liItem = imagesList.lastElementChild

                liItemClone = liItem.cloneNode(true)

                liItemClone.classList.remove('images-list__item--prototype')

                imageProperties = liItemClone.children
                const sizeInMB = (file.size / (1024*1024)).toFixed(2)

                imageProperties[0].innerText = file.name
                imageProperties[1].src = readerEvent.target.result
                imageProperties[2].innerText = (sizeInMB + ' MB')

                imagesList.appendChild(liItemClone)

            }

            reader.readAsDataURL(file)

        }

    }
    

}

imagesEl.lastElementChild.addEventListener('change', loadImages)

//})()