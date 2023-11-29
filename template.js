module.exports = {
    HTML: function (name, list, body, control) {
        return `
            <!DOCTYPE html>
        <html lang="ko">
        <head>
            <style>
                body{background-color: #7CFC00;}
                h1, fom, ol{
                    text-align: center;
                    background-color: white;
                }
                a, a:link, a:visited{
                    <!-- a태그는 인라인 요소라서 padding이나 margin이 적용안됨 그래서 inline-block -->
                    display: inline-block;
                    text-decoration: none;
                    color: inherit;
                    text-align: center;
                    text-decoration: none;
                }
            </style>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}</title>
        </head>
        <body>
            <h1><a href="/">나물위키</a></h1>
            <hr>
            <!-- 메뉴 -->
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        `
    }, list: function (files) {
        let list = '<ol>'
        for (i = 0; i < files.length; i++) {
            list = list + `<li><a href="/?name=${files[i].id}">${files[i].name}</a></li>` + '<hr>'
        }
        list = list + '</ol>'
        return list
    }, create: function() {
        return `
        <form id=fom action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="문서 주제"></p>
            <p><textarea name="description" placeholder="내용 입력"></textarea></p>
            <p><button type="submit">Send</button></p>
        </form>
        `
    }, update: function(id, name, content) {
        return `
        <form id=fom action="/update_process" method="post">
            <p><input type="hidden" name="id" value="${id}"></p>
            <!-- 문서 제목을 수정할 수는 없음(created와 같은 IP면 수정 가능하게 개선해야함) -->
            <!-- <p><input type="text" name="title" placeholder="title" value="${name}"></p> -->
            <p><textarea name="description" placeholder="내용 입력">${content}</textarea></p>
            <p><button type="submit">Send</button></p>
        </form>
        `
    }
}