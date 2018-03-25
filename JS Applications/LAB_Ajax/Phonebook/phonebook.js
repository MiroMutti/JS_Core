const URL = 'https://phonebook-8168f.firebaseio.com/phonebook'
$('#btnLoad').on('click', loadData)
$('#btnCreate').on('click', postData)
function loadData() {
    $('#phonebook').empty()
$.ajax({
    method: 'GET',
    url: URL + '.json'
}).then(handleSuccess).catch(handleError)
    function handleSuccess(res) {
        for (let key in res) {
           let li = $(`<li>${res[key].name}: ${res[key].phone} </li>`)
               .append($('<a href="#">[Delete]</a>')
                   .click(function () {
                       $.ajax({
                           method: 'DELETE',
                           url: URL + '/' + key + '.json'
                       }).then(() => {$(li).remove()}).catch(handleError)
                   }))
            $('#phonebook').append(li)
        }
    }
}
function postData() {
    let name = $('#person').val()
    let phone = $('#phone').val()
    let postData = JSON.stringify({name, phone})

    $.ajax({
        method: 'POST',
        url: URL +  '.json',
        data: postData,
        success: appendElement,
        error: handleError
    })
    function appendElement(res) {
        $('#phonebook').append($(`<li>${name}: ${phone} </li>`)
            .append($('<a href="#">[Delete]</a>')
                .click(function () {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + res.name + '.json'
                    }).then(() => {$(li).remove()}).catch(handleError)
                })))
    }
    $('#person').val('')
    $('#phone').val('')
}

function handleError(err) {

}