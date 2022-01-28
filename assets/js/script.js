
// TODO: Declare any global variables we need
let numberOfNoah = 0
let numberOfRyleigh = 0
let percentageNoah = 0
let percentageRyleigh = 0
let total = numberOfNoah + numberOfRyleigh
let images = [
    {
        imagePath: "assets/images/Noah.jpg",
        message: "Cute Noah!",
        side: "noah"
    },
    {
        imagePath: "assets/images/Ryleigh.jpg",
        message: "Cute Ryleigh!",
        side: "ryleigh"
    }
]

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("flip").addEventListener('click', function() {
        let randomImage = images[Math.floor(Math.random() * images.length)]

        document.getElementById("photo").setAttribute("src", randomImage.imagePath)

        document.querySelector(".message-container").textContent = randomImage.message

        if (randomImage.side === "noah") {
            // update heads total
            numberOfNoah++
            document.getElementById("heads").textContent = numberOfNoah
        } else {
            // update tails total
            numberOfRyleigh++
            document.getElementById("tails").textContent = numberOfRyleigh

        }

        total++

        percentageNoah = Math.round((numberOfNoah / total) * 100) + "%"
        percentageRyleigh = Math.round((numberOfRyleigh / total) * 100) + "%"

        document.getElementById("heads-percent").textContent = percentageNoah
        document.getElementById("tails-percent").textContent = percentageRyleigh

        document.getElementById("clear").addEventListener("click", function() {
            // console.log("Clear clicked")
            let numberOfNoah = 0
            let numberOfRyleigh = 0
            let percentageNoah = Math.round((numberOfNoah / total) * 100) + "%"
            let  percentageRyleigh = Math.round((numberOfRyleigh / total) * 100) + "%"
            document.getElementById("tails").textContent = numberOfRyleigh
            document.getElementById("heads").textContent = numberOfNoah
            document.getElementById("heads-percent").textContent = percentageNoah
            document.getElementById("tails-percent").textContent = percentageRyleigh

        })


    })
})