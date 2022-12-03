// alert("hello");
const toggleSidebar = () => {
    if ($('.sidebar').is(":visible")) {
        $(".sidebar").css("display", "none");
        $(".content").css("margin-left", "0%");
    } else {
        $(".sidebar").css("display", "block");
        $(".content").css("margin-left", "20%");
    };
}

const search = () => {
    // console.log("searching");
    let query = $("#search-input").val();

    if (query == '') {
        $(".search-result").hide();
    } else {
        // search
        // console.log(query);

        // sending request to server
        let url = `http://localhost:8380/search/${query}`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // data
                let text=`<div class='list-group'>`
                data.forEach((element) => {
                    text+=`<a href="/user/${element.cid}/contact" class='list-group-item list-group-item-action' style='border-radius: 0%;'>${element.name}</a>`
                });
                text+=`</div>`;
                $(".search-result").html(text);
                $(".search-result").show();
            });
    }
}