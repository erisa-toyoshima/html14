<style lang="scss">
/* reset */
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    font-family: 'Noto Sans Japanese', sans-serif;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}


/* reset */

.header {
    font-size: 40px;
    text-align: center;
    font-weight:500;
    color: #707070;
    padding: 60px 0;
}

.sort {
    width: 260px;
    height: 60px;
    border: solid 2px #A9ABB4;
    position: relative;
}

.sort image {

}


.root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card_container {
  width: 1500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.card_wrapper {
  padding: 15px;
}

.card {
    width: 340px;
    height: 440px;
    border: solid 2px #A9ABB4;
    border-radius: 10px;
    background-color: #fff;
}


.delete_button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px #A9ABB4;
    margin: 10px 0 0 10px;
    position: relative;

}

.delete_icon img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin: 10px 0 0 10px;
}


.image {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #F8F5FC;
    margin: 0 100px 10px;
}

.name {
    font-size: 24px;
    font-weight:500;
    color: #707070;
    text-align: center;
    margin-bottom: 10px;
}

.name::before {
    content:"";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(#AFE5B7, #9DD9CE);
}

.name_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.name_container img {
    width: 20px;
    height: 20px;
}

.tag {
    width: 300px;
    height: 45px;
    background-color: #E5F3FF;
    margin: 0 auto 10px;
}

.comment {
    width: 270px;
    height: 40px;
    border-radius: 10px;
    background-color: #F8F5FC;
    margin: 0 20px 10px;
    border-color: transparent;
    resize: none;
    overflow: hidden;
    font-size: 14px;
    color: #707070;
    padding: 15px;
    line-height: 20px;
}

.button_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 25px 30px;
}


.button{
    width: 90px;
    height: 40px;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    color: #707070;
    font-size: 18px;
    line-height: 40px;
}

.green {
    background: linear-gradient(to right, #AFE5B7, #9DD9CE);

}

.red {
    background: linear-gradient(to right, #E5AFC0, #D99D9D);

}

.gray {
    background: linear-gradient(to right, #D9D9D9, #C9C9C9);

}

</style>

<template>
  <div class="root">
    <header class="header">
        勤怠管理ページ
    </header>

    <div class="sort">
        <img src="../images/image_sort.png">
    </div>
    <!-- <div v-for="(member, index) in members" :key="index">
        {{ index }}:{{ member.name }}{{ member.comment }}
    </div> -->
    <div class="card_container">
      <div v-for="(member, index) in members" :key="index" class="card_wrapper">
        <div class="card">
          <div class="delete_button">
            <div class="delete_icon"><img src="../images/image_delete.png"></div>
          </div>
          <div class="image"></div>
          <div class="name_container">
            <h1 class="name">{{ member.name }}</h1>
            <img src="../images/image_edit.png">
          </div>
          <div class="tag"></div>
            <textarea maxlength="38" class="comment"></textarea>

          <div class="button_container">
            <div class="button green">
                在席
            </div>
            <div class="button red">
                離席
            </div>
            <div class="button gray">
                終業
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  setup (props, context) {
    return {
        members:[
          {
            name:'豊島 愛里砂',
            comment:'おはよう',
          },
          {
            name:'太田 敦士',
            comment:'おはよう',
          },
          {
            name:'織田 彩音',
            comment:'お休み',
          },
          {
            name:'田村 香織',
            comment:'おはよう',
          },
          {
            name:'楊 丹妮',
            comment:'お休み',
          },
          {
            name:'大谷 景子',
            comment:'おはよう',
          },
          {
            name:'石崎 進',
            comment:'お休み',
          },
          {
            name:'岡田 茂',
            comment:'おはよう',
          },
          {
            name:'若尾 英文',
            comment:'おはよう',
          },
          {
            name:'水野 由貴',
            comment:'おはよう',
          },
          {
            name:'石井 恵美',
            comment:'おはよう',
          },
          {
            name:'清和田 駿',
            comment:'おはよう',
          },
          {
            name:'天野 翔',
            comment:'おはよう',
          },
          {
            name:'平井 真大',
            comment:'おはよう',
          },
          {
            name:'池田 浩秋',
            comment:'おはよう',
          },
          {
            name:'本荘 香澄',
            comment:'おはよう',
          },
          {
            name:'戸田 遥',
            comment:'おはよう',
          },     
        ]

    }
  }
}
</script>
