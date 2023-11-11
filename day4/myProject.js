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
    let xx = new Date(endDate) - new Date(startDate)
    let technologi = document.querySelector("input[name=radio]:checked");
    let durasinya = new Date(xx)
    console.log("title", technologi.id)
    console.log("content", inputContent)
    console.log("date", startDate)

    inputImage = URL.createObjectURL(inputImage[0])
    console.log("image", durasinya.getDate())

    const blog = {
        title: inputTitle,
        startDate: startDate,
        endDate: endDate,
        durasi: durasinya.getDate() + " Days",
        technologi: technologi.id,
        content: inputContent,
        image: inputImage,
        postAt: new Date().toDateString(),
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
                    <a id=${index} href="project-detail.html"   onclick="savetolocal(dataBlog,id)" >${dataBlog[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>
                   ${dataBlog[index].startDate} | ${dataBlog[index].endDate}
                </p>
                <p>
                <a>Duration : </a>
                ${dataBlog[index].durasi}
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

function savetolocal(datanya,index)
{
 sessionStorage.setItem("dataSaya",JSON.stringify(datanya[index]))
   //alert(JSON.stringify(datanya[index])) 
   //let xx=  sessionStorage.getItem("dataSaya")
   //alert(JSON.parse(xx)) 
 //   console.log("datanya "+JSON.stringify(datanya[index]))
}