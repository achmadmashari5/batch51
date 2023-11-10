// LOOPING : FOR, WHILE, DO-WHILE

// FOR -> perulangan yang kamu sudah tau kapan harus berhenti
// for(let index = 0; index < 10; index++) { 
//     console.log("ini adalah index", index)
// }

// WHILE -> perulangan yang belum tentu kamu tau kapan harus berhenti (berdasarkan data dinamis)

// DO WHILE -> perulangan yang jalan dulu sekali, baru dicek

let dataBlog = []

function submitBlog(event) {
    event.preventDefault()

    let inputTitle = document.getElementById("inputTitle").value
    let inputContent = document.getElementById("inputContent").value
    let inputImage = document.getElementById("inputImage").files
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value

    let technologi = document.querySelector("input[name=radio]:checked");

    console.log("title", technologi.id)
    console.log("content", inputContent)
    console.log("date", startDate)

    inputImage = URL.createObjectURL(inputImage[0])
    console.log("image", inputImage)

    const blog = {
        title: inputTitle,
        startDate: startDate,
        endDate: endDate,
        technologi: technologi.id,
        content: inputContent,
        image: inputImage,
        postAt: "09 juni 2023",
        author: "Avicienna"
    }

    dataBlog.push(blog)
    console.log("dataBlog", dataBlog)
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = '<div style="justify-content: center;"><h1>My Project</h1></div>'

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="project-detail.html" target="_blank">${dataBlog[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>
                   ${dataBlog[index].startDate} | ${dataBlog[index].endDate}
                </p>
                <p>
                    ${dataBlog[index].technologi}
                </p>
                <p>
                    ${dataBlog[index].content}
                </p>

            </div>
        </div>`
    }
}