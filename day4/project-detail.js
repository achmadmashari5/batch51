let dataBlog = ""

function renderBlogDetail() {
    document.getElementById("contents").innerHTML = '<div style="justify-content: center;"><h1>My Project</h1></div>'
  
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog.image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a>${dataBlog.title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog.postAt} | ${dataBlog.author}
                </div>
                <p>
                   ${dataBlog.startDate} | ${dataBlog.endDate}
                </p>
                <p>
                <a>Duration : </a>
                ${dataBlog.durasi}
                </p>

                <p>
                    ${dataBlog.technologi}
                </p>
                <p>
                    ${dataBlog.content}
                </p>

            </div>
        </div>`
}

function getLocalDetail()
{
    dataBlog = JSON.parse(sessionStorage.getItem("dataSaya"))
    renderBlogDetail()

}