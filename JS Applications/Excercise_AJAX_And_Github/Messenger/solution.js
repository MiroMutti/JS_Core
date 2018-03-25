function attachEvents() {
    $('#refresh').click(refresh)
    $('#submit').click(submit)
    const firebaseURL = `https://messenger-82483.firebaseio.com/messenger/.json`
    function submit() {
        let author = $('#author').val()
        let content = $('#content').val()
        let message = JSON.stringify({
            author,
            content,
            timestamp:Date.now()
        })
        $.post(firebaseURL, message).then(refresh)
    }

    function refresh() {
        $('#messages').empty()
        $.get(firebaseURL)
            .then(loadPosts)
    }
    function loadPosts(data) {
        let textArea = $('#messages')
        for (let key in data) {
            const message = data[key]
            let messageString = `${message.author}: ${message.content}\n`
            textArea.append(messageString)
        }
    }
}