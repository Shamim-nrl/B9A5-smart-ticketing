
let seatsLeft = 40
let totalSeats = 0;
const bookingBtn = document.querySelectorAll(".booking-btn")
for (const iterator of bookingBtn) {
    iterator.addEventListener('click', function (e) {
        totalSeats = totalSeats + 1;

        if (totalSeats > 4) {
            alert("Do Not More Purchase")
            return;
        }
        e.target.style.backgroundColor = '#1DD100'
        e.target.setAttribute("disabled", 'true')
        document.getElementById("seat-count").innerText = totalSeats;

        const left = seatsLeft - totalSeats
        document.getElementById("seats-left").innerText = left;

        const booking2 = e.target.innerText
        const selectedSet = document.getElementById("selected-set")
        const p = document.createElement("p")
        p.innerText = booking2
        selectedSet.appendChild(p)
        const p2 = document.createElement("p2")
        p2.innerText = "Economy"
        selectedSet.appendChild(p2)
        const p3 = document.createElement("p3")
        p3.innerText = 550
        selectedSet.appendChild(p3)

        const price = parseInt(totalSeats * 550)

        document.getElementById("price").innerText = price

        // discount section ---------
        const apply = document.getElementById("apply")
        apply.addEventListener("click", function (e) {

            const applyDiv = document.getElementById("apply-div")
            applyDiv.classList.add("hidden")


            const input = document.getElementById("input").value
            const coupon = input.split(" ").join("").toUpperCase()

            if (coupon === "NEWS15") {
                discount = price * 15 / 100
                document.getElementById("total-price").innerText = price - discount

            } else if (coupon === "COUPLE20") {
                discount = price * 20 / 100
                document.getElementById("total-price").innerText = price - discount
            }
            else {
                alert("Invalid")
            }
        })
    })
}










