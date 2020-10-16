function compressImg(file, width) {
    let reader = new FileReader()
    let canvas = document.createElement('canvas')
    reader.readAsDataURL(file)
    return new Promise((resolve, reject) => {
        reader.onload = function() {
            let img = new Image()
            img.src = this.result
            img.onload = function() {
                let ratio = img.naturalWidth / img.naturalHeight
                canvas.width = width
                canvas.height = width / ratio
                let ctx = canvas.getContext('2d')
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                let base64 = canvas.toDataURL()
                canvas.remove()
                resolve(base64)
            }
        }
    })
}