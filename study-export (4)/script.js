// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "この度は本研究にご協力いただきありがとうございます。\u003Cbr\u003E\n\n以下のアンケートは、謝礼をお支払いする際に必要な情報及び分析のための基本属性を把握するために実施します。\u003Cbr\u003E\n\n回答内容は厳重に管理され、本研究の目的以外には使用いたしません。\u003Cbr\u003E\u003Cbr\u003E"
            },
            {
              "required": true,
              "type": "input",
              "label": "氏名",
              "name": "name"
            },
            {
              "required": true,
              "type": "input",
              "label": "メールアドレス",
              "name": "email",
              "attributes": {
                "type": "email"
              }
            },
            {
              "required": true,
              "type": "input",
              "label": "電話番号",
              "name": "phone"
            },
            {
              "required": true,
              "type": "radio",
              "label": "性別",
              "name": "gender",
              "options": [
                {
                  "label": "男性",
                  "coding": "0"
                },
                {
                  "label": "女性",
                  "coding": "1"
                },
                {
                  "label": "回答しない",
                  "coding": "2"
                }
              ]
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
const finish_button = {
          "type": "html",
          "content": "<div style = \"margin: 20px 0 100px 0;\"><button>次へ進む</button></div>"
}

this.options.items.push(finish_button)
}
          },
          "title": "Face sheet"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 800,
              "height": 120.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "記憶課題\nこれから単語の記憶課題を行います。\n準備ができたら、画面をクリックして始めてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Welcome"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "practice_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 800,
                  "height": 371.72,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "これから練習課題を行います。\n\n最初に3つの単語が表示されます。\nその単語を覚えてください。\n\nそのあと、2つの単語が表示されます。\n先ほど見た単語だと思う方を選んでください。\n\n準備ができたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "practice_instruction"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 704,
                  "height": 203.94,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "次の単語を覚えてください。\n\n時計　空　花\n\n覚えたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "practice_study"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "trial": "1",
                  "left_word": "時計",
                  "right_word": "机",
                  "correct_side": "left",
                  "old_word": "時計"
                },
                {
                  "trial": "2",
                  "left_word": "海",
                  "right_word": "空",
                  "correct_side": "right",
                  "old_word": "空"
                },
                {
                  "trial": "3",
                  "left_word": "花",
                  "right_word": "草",
                  "correct_side": "left",
                  "old_word": "花"
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "practice_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "trial_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 1082.4,
                        "height": 245.89,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "先ほど表示された単語はどちらですか？\n\n${ this.parameters.left_word }　　　　${ this.parameters.right_word }\n\n左の単語だと思う場合は「F」キーを押してください。\n右の単語だと思う場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "left",
                      "keypress(j)": "right"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "recognition",
                    "correctResponse": "${ this.parameters.correct_side }"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.items = [];

this.options.items.push({
  type: "html",
  content: `
    <div style="max-width: 800px; margin: 80px auto; font-size: 24px; line-height: 1.8;">
      <p>いまの回答にどのくらい自信がありますか？</p>

      <div style="margin-top: 40px;">
        <input
          type="range"
          name="confidence"
          min="0"
          max="100"
          value="50"
          step="1"
          style="width: 100%;"
          oninput="document.getElementById('confidence_value').textContent = this.value"
        >
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <span>0<br>まったく自信がない</span>
        <span>100<br>とても自信がある</span>
      </div>

      <p style="text-align: center; font-size: 32px; margin-top: 30px;">
        <span id="confidence_value">50</span>
      </p>

      <div style="text-align: center; margin-top: 40px;">
        <button type="submit" style="font-size: 22px; padding: 10px 30px;">
          次へ
        </button>
      </div>
    </div>
  `
});      
}
                    },
                    "title": "confidence_slider"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 639.04,
                        "height": 371.72,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答にどのくらい自信がありますか？\n\n1 = まったく自信がない\n2 = あまり自信がない\n3 = どちらともいえない\n4 = まあまあ自信がある\n5 = とても自信がある\n\n数字キーの 1〜5 を押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(1)": "confidence_1",
                      "keypress(2)": "confidence_2",
                      "keypress(3)": "confidence_3",
                      "keypress(4)": "confidence_4",
                      "keypress(5)": "confidence_5"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "confidence",
                    "skip": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 656.26,
                        "height": 455.62,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答について、賭けますか？\n\n賭けた場合：\n正解なら得点が増えます。\n不正解なら得点が減ります。\n\n賭けない場合：\n得点は変わりません。\n\n賭ける場合は「F」キーを押してください。\n賭けない場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "bet",
                      "keypress(j)": "no_bet"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "bet"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 512,
                  "height": 203.94,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "練習課題は終了です。\n\nここまで問題なく進められました。\n\n画面をクリックすると終了します。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "finish"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "practice_end"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "block1_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 800,
                  "height": 371.72,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "これから本課題のブロック1を行います。\n\n最初に単語が表示されます。\nその単語をできるだけ覚えてください。\n\nそのあと、2つの単語が表示されます。\n先ほど見た単語だと思う方を選んでください。\n\n準備ができたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block1_instruction"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 448,
                  "height": 539.51,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "次の単語を覚えてください。\n\n日本　問題　東京　米国　政府\n首相　企業　関係　中国　経済\n事件　会社　午前　発表　自分\n調査　代表　会長　年度　女性\n参加　改革　国民　会議　計画\n予定　全国　政治　今年　社長\n時代　政権　政策　協力　中心\n地域　選挙　世界　方針　検討\n制度　社会　情報　国会　必要\n対策　韓国　議員　開発　生活\n",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters.study_duration = this.random.choice([30000, 60000])
}
              },
              "title": "block1_study",
              "timeout": "${ this.parameters.study_duration }"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "block": "1",
                  "trial": "1",
                  "left_word": "世界",
                  "right_word": "幹部",
                  "correct_side": "left",
                  "old_word": "世界"
                },
                {
                  "block": "1",
                  "trial": "2",
                  "left_word": "社長",
                  "right_word": "交渉",
                  "correct_side": "left",
                  "old_word": "社長"
                },
                {
                  "block": "1",
                  "trial": "3",
                  "left_word": "研究",
                  "right_word": "参加",
                  "correct_side": "right",
                  "old_word": "参加"
                },
                {
                  "block": "1",
                  "trial": "4",
                  "left_word": "必要",
                  "right_word": "国際",
                  "correct_side": "left",
                  "old_word": "必要"
                },
                {
                  "block": "1",
                  "trial": "5",
                  "left_word": "制度",
                  "right_word": "実施",
                  "correct_side": "left",
                  "old_word": "制度"
                },
                {
                  "block": "1",
                  "trial": "6",
                  "left_word": "国会",
                  "right_word": "場合",
                  "correct_side": "left",
                  "old_word": "国会"
                },
                {
                  "block": "1",
                  "trial": "7",
                  "left_word": "大会",
                  "right_word": "発表",
                  "correct_side": "right",
                  "old_word": "発表"
                },
                {
                  "block": "1",
                  "trial": "8",
                  "left_word": "会談",
                  "right_word": "政治",
                  "correct_side": "right",
                  "old_word": "政治"
                },
                {
                  "block": "1",
                  "trial": "9",
                  "left_word": "地域",
                  "right_word": "意見",
                  "correct_side": "left",
                  "old_word": "地域"
                },
                {
                  "block": "1",
                  "trial": "10",
                  "left_word": "中国",
                  "right_word": "活動",
                  "correct_side": "left",
                  "old_word": "中国"
                },
                {
                  "block": "1",
                  "trial": "11",
                  "left_word": "今年",
                  "right_word": "協議",
                  "correct_side": "left",
                  "old_word": "今年"
                },
                {
                  "block": "1",
                  "trial": "12",
                  "left_word": "以上",
                  "right_word": "生活",
                  "correct_side": "right",
                  "old_word": "生活"
                },
                {
                  "block": "1",
                  "trial": "13",
                  "left_word": "対象",
                  "right_word": "企業",
                  "correct_side": "right",
                  "old_word": "企業"
                },
                {
                  "block": "1",
                  "trial": "14",
                  "left_word": "韓国",
                  "right_word": "説明",
                  "correct_side": "left",
                  "old_word": "韓国"
                },
                {
                  "block": "1",
                  "trial": "15",
                  "left_word": "影響",
                  "right_word": "検討",
                  "correct_side": "right",
                  "old_word": "検討"
                },
                {
                  "block": "1",
                  "trial": "16",
                  "left_word": "対応",
                  "right_word": "日本",
                  "correct_side": "right",
                  "old_word": "日本"
                },
                {
                  "block": "1",
                  "trial": "17",
                  "left_word": "事件",
                  "right_word": "利用",
                  "correct_side": "left",
                  "old_word": "事件"
                },
                {
                  "block": "1",
                  "trial": "18",
                  "left_word": "経済",
                  "right_word": "批判",
                  "correct_side": "left",
                  "old_word": "経済"
                },
                {
                  "block": "1",
                  "trial": "19",
                  "left_word": "内容",
                  "right_word": "女性",
                  "correct_side": "right",
                  "old_word": "女性"
                },
                {
                  "block": "1",
                  "trial": "20",
                  "left_word": "全国",
                  "right_word": "合意",
                  "correct_side": "left",
                  "old_word": "全国"
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block1_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "block1_trial_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 25,
                        "top": -10,
                        "angle": 0,
                        "width": 1082.4,
                        "height": 245.89,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "先ほど表示された単語はどちらですか？\n\n${ this.parameters.left_word }　　　　${ this.parameters.right_word }\n\n左の単語だと思う場合は「F」キーを押してください。\n右の単語だと思う場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "left",
                      "keypress(j)": "right"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block1_recognition",
                    "correctResponse": "${ this.parameters.correct_side }"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 639.04,
                        "height": 371.72,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答にどのくらい自信がありますか？\n\n1 = まったく自信がない\n2 = あまり自信がない\n3 = どちらともいえない\n4 = まあまあ自信がある\n5 = とても自信がある\n\n数字キーの 1〜5 を押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(1)": "confidence_1",
                      "keypress(2)": "confidence_2",
                      "keypress(3)": "confidence_3",
                      "keypress(4)": "confidence_4",
                      "keypress(5)": "confidence_5"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block1_confidence",
                    "skip": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.items = [];

this.options.items.push({
  type: "html",
  content: `
    <div style="max-width: 800px; margin: 80px auto; font-size: 24px; line-height: 1.8;">
      <p>いまの回答にどのくらい自信がありますか？</p>

      <div style="margin-top: 40px;">
        <input
          type="range"
          name="confidence"
          min="0"
          max="100"
          value="50"
          step="1"
          style="width: 100%;"
          oninput="document.getElementById('confidence_value').textContent = this.value"
        >
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <span>0<br>まったく自信がない</span>
        <span>100<br>とても自信がある</span>
      </div>

      <p style="text-align: center; font-size: 32px; margin-top: 30px;">
        <span id="confidence_value">50</span>
      </p>

      <div style="text-align: center; margin-top: 40px;">
        <button type="submit" style="font-size: 22px; padding: 10px 30px;">
          次へ
        </button>
      </div>
    </div>
  `
});

}
                    },
                    "title": "block1_confidence_slider"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 656.26,
                        "height": 497.56,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答について、賭けますか？\n\n賭けた場合：\n正解なら得点が増えます。\n不正解なら得点が減ります。\n\n賭けない場合：\n得点は変わりません。\n\n賭ける場合は「F」キーを押してください。\n賭けない場合は「J」キーを押してください。\n",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "bet",
                      "keypress(j)": "no_bet"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block1_bet"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 608,
                  "height": 120.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "ブロック1は終了です。\n\n画面をクリックして次へ進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block1_end"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 862.4,
                  "height": 203.94,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "休憩\n\nここから30秒間休憩してください。\n\n画面が自動的に切り替わるまで、そのままお待ちください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "rest_1",
              "timeout": "30000"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "block2_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 800,
                  "height": 371.72,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "これから本課題のブロック2を行います。\n\n最初に単語が表示されます。\nその単語をできるだけ覚えてください。\n\nそのあと、2つの単語が表示されます。\n先ほど見た単語だと思う方を選んでください。\n\n準備ができたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block2_instruction"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 448,
                  "height": 539.51,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "次の単語を覚えてください。\n\n市場　病院　価格　反対　建設\n環境　期待　指摘　結果　姿勢\n国内　銀行　電話　事業　判断\n今回　午後　資金　主張　支持\n理由　仕事　選手　支援　状況\n経営　一部　決定　責任　現在\n団体　販売　言葉　全体　組織\n自宅　今後　教授　拡大　大学\n子供　日米　学校　実現　野党\n強調　時間　技術　長官　報告\n",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters.study_duration = this.random.choice([30000, 60000])
}
              },
              "title": "block2_study",
              "timeout": "${ this.parameters.study_duration }"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "block": "2",
                  "trial": "1",
                  "left_word": "表明",
                  "right_word": "姿勢",
                  "correct_side": "right",
                  "old_word": "姿勢"
                },
                {
                  "block": "2",
                  "trial": "2",
                  "left_word": "国内",
                  "right_word": "海外",
                  "correct_side": "left",
                  "old_word": "国内"
                },
                {
                  "block": "2",
                  "trial": "3",
                  "left_word": "導入",
                  "right_word": "時間",
                  "correct_side": "right",
                  "old_word": "時間"
                },
                {
                  "block": "2",
                  "trial": "4",
                  "left_word": "現在",
                  "right_word": "評価",
                  "correct_side": "left",
                  "old_word": "現在"
                },
                {
                  "block": "2",
                  "trial": "5",
                  "left_word": "技術",
                  "right_word": "外相",
                  "correct_side": "left",
                  "old_word": "技術"
                },
                {
                  "block": "2",
                  "trial": "6",
                  "left_word": "支持",
                  "right_word": "立場",
                  "correct_side": "left",
                  "old_word": "支持"
                },
                {
                  "block": "2",
                  "trial": "7",
                  "left_word": "輸入",
                  "right_word": "結果",
                  "correct_side": "right",
                  "old_word": "結果"
                },
                {
                  "block": "2",
                  "trial": "8",
                  "left_word": "監督",
                  "right_word": "学校",
                  "correct_side": "right",
                  "old_word": "学校"
                },
                {
                  "block": "2",
                  "trial": "9",
                  "left_word": "銀行",
                  "right_word": "施設",
                  "correct_side": "left",
                  "old_word": "銀行"
                },
                {
                  "block": "2",
                  "trial": "10",
                  "left_word": "病院",
                  "right_word": "家族",
                  "correct_side": "left",
                  "old_word": "病院"
                },
                {
                  "block": "2",
                  "trial": "11",
                  "left_word": "今後",
                  "right_word": "写真",
                  "correct_side": "left",
                  "old_word": "今後"
                },
                {
                  "block": "2",
                  "trial": "12",
                  "left_word": "事故",
                  "right_word": "建設",
                  "correct_side": "right",
                  "old_word": "建設"
                },
                {
                  "block": "2",
                  "trial": "13",
                  "left_word": "欧州",
                  "right_word": "決定",
                  "correct_side": "right",
                  "old_word": "決定"
                },
                {
                  "block": "2",
                  "trial": "14",
                  "left_word": "組織",
                  "right_word": "要求",
                  "correct_side": "left",
                  "old_word": "組織"
                },
                {
                  "block": "2",
                  "trial": "15",
                  "left_word": "電話",
                  "right_word": "業界",
                  "correct_side": "left",
                  "old_word": "電話"
                },
                {
                  "block": "2",
                  "trial": "16",
                  "left_word": "予算",
                  "right_word": "子供",
                  "correct_side": "right",
                  "old_word": "子供"
                },
                {
                  "block": "2",
                  "trial": "17",
                  "left_word": "状態",
                  "right_word": "理由",
                  "correct_side": "right",
                  "old_word": "理由"
                },
                {
                  "block": "2",
                  "trial": "18",
                  "left_word": "市場",
                  "right_word": "発言",
                  "correct_side": "left",
                  "old_word": "市場"
                },
                {
                  "block": "2",
                  "trial": "19",
                  "left_word": "教授",
                  "right_word": "市民",
                  "correct_side": "left",
                  "old_word": "教授"
                },
                {
                  "block": "2",
                  "trial": "20",
                  "left_word": "法案",
                  "right_word": "判断",
                  "correct_side": "right",
                  "old_word": "判断"
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block2_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "block2_trial_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 25,
                        "top": -10,
                        "angle": 0,
                        "width": 1082.4,
                        "height": 245.89,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "先ほど表示された単語はどちらですか？\n\n${ this.parameters.left_word }　　　　${ this.parameters.right_word }\n\n左の単語だと思う場合は「F」キーを押してください。\n右の単語だと思う場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "left",
                      "keypress(j)": "right"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block2_recognition",
                    "correctResponse": "${ this.parameters.correct_side }"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.items = [];

this.options.items.push({
  type: "html",
  content: `
    <div style="max-width: 800px; margin: 80px auto; font-size: 24px; line-height: 1.8;">
      <p>いまの回答にどのくらい自信がありますか？</p>

      <div style="margin-top: 40px;">
        <input
          type="range"
          name="confidence"
          min="0"
          max="100"
          value="50"
          step="1"
          style="width: 100%;"
          oninput="document.getElementById('confidence_value').textContent = this.value"
        >
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <span>0<br>まったく自信がない</span>
        <span>100<br>とても自信がある</span>
      </div>

      <p style="text-align: center; font-size: 32px; margin-top: 30px;">
        <span id="confidence_value">50</span>
      </p>

      <div style="text-align: center; margin-top: 40px;">
        <button type="submit" style="font-size: 22px; padding: 10px 30px;">
          次へ
        </button>
      </div>
    </div>
  `
});
}
                    },
                    "title": "block2_confidence_slider"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 639.04,
                        "height": 371.72,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答にどのくらい自信がありますか？\n\n1 = まったく自信がない\n2 = あまり自信がない\n3 = どちらともいえない\n4 = まあまあ自信がある\n5 = とても自信がある\n\n数字キーの 1〜5 を押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(1)": "confidence_1",
                      "keypress(2)": "confidence_2",
                      "keypress(3)": "confidence_3",
                      "keypress(4)": "confidence_4",
                      "keypress(5)": "confidence_5"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block2_confidence",
                    "skip": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 656.26,
                        "height": 497.56,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答について、賭けますか？\n\n賭けた場合：\n正解なら得点が増えます。\n不正解なら得点が減ります。\n\n賭けない場合：\n得点は変わりません。\n\n賭ける場合は「F」キーを押してください。\n賭けない場合は「J」キーを押してください。\n",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "bet",
                      "keypress(j)": "no_bet"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block2_bet"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 608,
                  "height": 120.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "ブロック2は終了です。\n\n画面をクリックして次へ進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block2_end"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 862.4,
                  "height": 203.94,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "休憩\n\nここから30秒間休憩してください。\n\n画面が自動的に切り替わるまで、そのままお待ちください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "rest_2",
              "timeout": "30000"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "block3_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 800,
                  "height": 371.72,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "これから本課題のブロック3を行います。\n\n最初に単語が表示されます。\nその単語をできるだけ覚えてください。\n\nそのあと、2つの単語が表示されます。\n先ほど見た単語だと思う方を選んでください。\n\n準備ができたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block3_instruction"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -10,
                  "angle": 0,
                  "width": 512,
                  "height": 539.51,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "次の単語を覚えてください。\n\n　大阪　教育　処理　貿易　被告　\n輸出　事実　解決　関連　作品\n人間　確認　生産　程度　提案\n意味　年間　景気　土地　調整\n提出　措置　逮捕　学生　努力\n個人　最大　負担　戦争　議長\n取引　過去　来年　患者　見方\n業者　金融　方法　強化　地元\n担当　竹下　同社　報道　投資\n運動　高校　指導　捜査　規制\n",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters.study_duration = this.random.choice([30000, 60000])
}
              },
              "title": "block3_study",
              "timeout": "${ this.parameters.study_duration }"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "block": "3",
                  "trial": "1",
                  "left_word": "患者",
                  "right_word": "相手",
                  "correct_side": "left",
                  "old_word": "患者"
                },
                {
                  "block": "3",
                  "trial": "2",
                  "left_word": "景気",
                  "right_word": "理解",
                  "correct_side": "left",
                  "old_word": "景気"
                },
                {
                  "block": "3",
                  "trial": "3",
                  "left_word": "平和",
                  "right_word": "確認",
                  "correct_side": "right",
                  "old_word": "確認"
                },
                {
                  "block": "3",
                  "trial": "4",
                  "left_word": "教育",
                  "right_word": "民間",
                  "correct_side": "left",
                  "old_word": "教育"
                },
                {
                  "block": "3",
                  "trial": "5",
                  "left_word": "規則",
                  "right_word": "一般",
                  "correct_side": "left",
                  "old_word": "規則"
                },
                {
                  "block": "3",
                  "trial": "6",
                  "left_word": "試合",
                  "right_word": "土地",
                  "correct_side": "right",
                  "old_word": "土地"
                },
                {
                  "block": "3",
                  "trial": "7",
                  "left_word": "戦争",
                  "right_word": "分野",
                  "correct_side": "left",
                  "old_word": "戦争"
                },
                {
                  "block": "3",
                  "trial": "8",
                  "left_word": "大阪",
                  "right_word": "作業",
                  "correct_side": "left",
                  "old_word": "大阪"
                },
                {
                  "block": "3",
                  "trial": "9",
                  "left_word": "男性",
                  "right_word": "作品",
                  "correct_side": "right",
                  "old_word": "作品"
                },
                {
                  "block": "3",
                  "trial": "10",
                  "left_word": "金融",
                  "right_word": "段階",
                  "correct_side": "left",
                  "old_word": "金融"
                },
                {
                  "block": "3",
                  "trial": "11",
                  "left_word": "映画",
                  "right_word": "運動",
                  "correct_side": "right",
                  "old_word": "運動"
                },
                {
                  "block": "3",
                  "trial": "12",
                  "left_word": "参院",
                  "right_word": "個人",
                  "correct_side": "right",
                  "old_word": "個人"
                },
                {
                  "block": "3",
                  "trial": "13",
                  "left_word": "提出",
                  "right_word": "当局",
                  "correct_side": "left",
                  "old_word": "提出"
                },
                {
                  "block": "3",
                  "trial": "14",
                  "left_word": "解決",
                  "right_word": "機関",
                  "correct_side": "left",
                  "old_word": "解決"
                },
                {
                  "block": "3",
                  "trial": "15",
                  "left_word": "与党",
                  "right_word": "強化",
                  "correct_side": "right",
                  "old_word": "強化"
                },
                {
                  "block": "3",
                  "trial": "16",
                  "left_word": "担当",
                  "right_word": "当時",
                  "correct_side": "left",
                  "old_word": "担当"
                },
                {
                  "block": "3",
                  "trial": "17",
                  "left_word": "努力",
                  "right_word": "記録",
                  "correct_side": "left",
                  "old_word": "努力"
                },
                {
                  "block": "3",
                  "trial": "18",
                  "left_word": "住宅",
                  "right_word": "地元",
                  "correct_side": "right",
                  "old_word": "地元"
                },
                {
                  "block": "3",
                  "trial": "19",
                  "left_word": "報道",
                  "right_word": "時期",
                  "correct_side": "left",
                  "old_word": "報道"
                },
                {
                  "block": "3",
                  "trial": "20",
                  "left_word": "削減",
                  "right_word": "取引",
                  "correct_side": "right",
                  "old_word": "取引"
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block3_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "block3_trial_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 25,
                        "top": -10,
                        "angle": 0,
                        "width": 1082.4,
                        "height": 245.89,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "先ほど表示された単語はどちらですか？\n\n${ this.parameters.left_word }　　　　${ this.parameters.right_word }\n\n左の単語だと思う場合は「F」キーを押してください。\n右の単語だと思う場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "left",
                      "keypress(j)": "right"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block3_recognition",
                    "correctResponse": "${ this.parameters.correct_side }"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.items = [];

this.options.items.push({
  type: "html",
  content: `
    <div style="max-width: 800px; margin: 80px auto; font-size: 24px; line-height: 1.8;">
      <p>いまの回答にどのくらい自信がありますか？</p>

      <div style="margin-top: 40px;">
        <input
          type="range"
          name="confidence"
          min="0"
          max="100"
          value="50"
          step="1"
          style="width: 100%;"
          oninput="document.getElementById('confidence_value').textContent = this.value"
        >
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <span>0<br>まったく自信がない</span>
        <span>100<br>とても自信がある</span>
      </div>

      <p style="text-align: center; font-size: 32px; margin-top: 30px;">
        <span id="confidence_value">50</span>
      </p>

      <div style="text-align: center; margin-top: 40px;">
        <button type="submit" style="font-size: 22px; padding: 10px 30px;">
          次へ
        </button>
      </div>
    </div>
  `
});
}
                    },
                    "title": "block3_confidence_slider"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 639.04,
                        "height": 371.72,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答にどのくらい自信がありますか？\n\n1 = まったく自信がない\n2 = あまり自信がない\n3 = どちらともいえない\n4 = まあまあ自信がある\n5 = とても自信がある\n\n数字キーの 1〜5 を押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(1)": "confidence_1",
                      "keypress(2)": "confidence_2",
                      "keypress(3)": "confidence_3",
                      "keypress(4)": "confidence_4",
                      "keypress(5)": "confidence_5"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block3_confidence",
                    "skip": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 656.26,
                        "height": 497.56,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答について、賭けますか？\n\n賭けた場合：\n正解なら得点が増えます。\n不正解なら得点が減ります。\n\n賭けない場合：\n得点は変わりません。\n\n賭ける場合は「F」キーを押してください。\n賭けない場合は「J」キーを押してください。\n",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "bet",
                      "keypress(j)": "no_bet"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block3_bet"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 608,
                  "height": 120.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "ブロック3は終了です。\n\n画面をクリックして次へ進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block3_end"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 862.4,
                  "height": 203.94,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "休憩\n\nここから30秒間休憩してください。\n\n画面が自動的に切り替わるまで、そのままお待ちください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "rest_3",
              "timeout": "30000"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "block4_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 800,
                  "height": 371.72,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "これから本課題のブロック4を行います。\n\n最初に単語が表示されます。\nその単語をできるだけ覚えてください。\n\nそのあと、2つの単語が表示されます。\n先ほど見た単語だと思う方を選んでください。\n\n準備ができたら、画面をクリックして進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block4_instruction"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 448,
                  "height": 539.51,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "次の単語を覚えてください。\n\n産業　融資　首脳　派遣　記者\n内閣　目標　候補　訪問　審議\n財政　本部　住民　前年　課題\n判決　条件　政党　連合　医療\n出席　予想　管理　援助　改善\n利益　共同　優勝　工場　三十\n職員　体制　行動　二人　要請\n周辺　議会　衆院　部分　目的\n原因　基準　整備　歴史　外国\n回復　各国　総裁　連続　違反\n",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters.study_duration = this.random.choice([30000, 60000])

}
              },
              "title": "block4_study",
              "timeout": "${ this.parameters.study_duration }"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "block": "4",
                  "trial": "1",
                  "left_word": "整備",
                  "right_word": "論議",
                  "correct_side": "left",
                  "old_word": "整備"
                },
                {
                  "block": "4",
                  "trial": "2",
                  "left_word": "知事",
                  "right_word": "判決",
                  "correct_side": "right",
                  "old_word": "判決"
                },
                {
                  "block": "4",
                  "trial": "3",
                  "left_word": "変化",
                  "right_word": "回復",
                  "correct_side": "right",
                  "old_word": "回復"
                },
                {
                  "block": "4",
                  "trial": "4",
                  "left_word": "周辺",
                  "right_word": "議論",
                  "correct_side": "left",
                  "old_word": "周辺"
                },
                {
                  "block": "4",
                  "trial": "5",
                  "left_word": "職員",
                  "right_word": "最高",
                  "correct_side": "left",
                  "old_word": "職員"
                },
                {
                  "block": "4",
                  "trial": "6",
                  "left_word": "管理",
                  "right_word": "平均",
                  "correct_side": "left",
                  "old_word": "管理"
                },
                {
                  "block": "4",
                  "trial": "7",
                  "left_word": "本社",
                  "right_word": "条件",
                  "correct_side": "right",
                  "old_word": "条件"
                },
                {
                  "block": "4",
                  "trial": "8",
                  "left_word": "放送",
                  "right_word": "目的",
                  "correct_side": "right",
                  "old_word": "目的"
                },
                {
                  "block": "4",
                  "trial": "9",
                  "left_word": "住民",
                  "right_word": "文化",
                  "correct_side": "left",
                  "old_word": "住民"
                },
                {
                  "block": "4",
                  "trial": "10",
                  "left_word": "派遣",
                  "right_word": "設置",
                  "correct_side": "left",
                  "old_word": "派遣"
                },
                {
                  "block": "4",
                  "trial": "11",
                  "left_word": "記者",
                  "right_word": "理事",
                  "correct_side": "left",
                  "old_word": "記者"
                },
                {
                  "block": "4",
                  "trial": "12",
                  "left_word": "一人",
                  "right_word": "各国",
                  "correct_side": "right",
                  "old_word": "各国"
                },
                {
                  "block": "4",
                  "trial": "13",
                  "left_word": "統一",
                  "right_word": "外国",
                  "correct_side": "right",
                  "old_word": "外国"
                },
                {
                  "block": "4",
                  "trial": "14",
                  "left_word": "課題",
                  "right_word": "商品",
                  "correct_side": "left",
                  "old_word": "課題"
                },
                {
                  "block": "4",
                  "trial": "15",
                  "left_word": "背景",
                  "right_word": "共同",
                  "correct_side": "right",
                  "old_word": "共同"
                },
                {
                  "block": "4",
                  "trial": "16",
                  "left_word": "国連",
                  "right_word": "行動",
                  "correct_side": "right",
                  "old_word": "行動"
                },
                {
                  "block": "4",
                  "trial": "17",
                  "left_word": "工場",
                  "right_word": "行政",
                  "correct_side": "left",
                  "old_word": "工場"
                },
                {
                  "block": "4",
                  "trial": "18",
                  "left_word": "地方",
                  "right_word": "利益",
                  "correct_side": "right",
                  "old_word": "利益"
                },
                {
                  "block": "4",
                  "trial": "19",
                  "left_word": "国家",
                  "right_word": "援助",
                  "correct_side": "right",
                  "old_word": "援助"
                },
                {
                  "block": "4",
                  "trial": "20",
                  "left_word": "予想",
                  "right_word": "存在",
                  "correct_side": "left",
                  "old_word": "予想"
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block4_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "block4_trial_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 25,
                        "top": -10,
                        "angle": 0,
                        "width": 1082.4,
                        "height": 245.89,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "先ほど表示された単語はどちらですか？\n\n${ this.parameters.left_word }　　　　${ this.parameters.right_word }\n\n左の単語だと思う場合は「F」キーを押してください。\n右の単語だと思う場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "left",
                      "keypress(j)": "right"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block4_recognition",
                    "correctResponse": "${ this.parameters.correct_side }"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.items = [];

this.options.items.push({
  type: "html",
  content: `
    <div style="max-width: 800px; margin: 80px auto; font-size: 24px; line-height: 1.8;">
      <p>いまの回答にどのくらい自信がありますか？</p>

      <div style="margin-top: 40px;">
        <input
          type="range"
          name="confidence"
          min="0"
          max="100"
          value="50"
          step="1"
          style="width: 100%;"
          oninput="document.getElementById('confidence_value').textContent = this.value"
        >
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 18px;">
        <span>0<br>まったく自信がない</span>
        <span>100<br>とても自信がある</span>
      </div>

      <p style="text-align: center; font-size: 32px; margin-top: 30px;">
        <span id="confidence_value">50</span>
      </p>

      <div style="text-align: center; margin-top: 40px;">
        <button type="submit" style="font-size: 22px; padding: 10px 30px;">
          次へ
        </button>
      </div>
    </div>
  `
});
}
                    },
                    "title": "block4_confidence_slider"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 639.04,
                        "height": 371.72,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答にどのくらい自信がありますか？\n\n1 = まったく自信がない\n2 = あまり自信がない\n3 = どちらともいえない\n4 = まあまあ自信がある\n5 = とても自信がある\n\n数字キーの 1〜5 を押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(1)": "confidence_1",
                      "keypress(2)": "confidence_2",
                      "keypress(3)": "confidence_3",
                      "keypress(4)": "confidence_4",
                      "keypress(5)": "confidence_5"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block4_confidence",
                    "skip": true
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 656.26,
                        "height": 497.56,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "いまの回答について、賭けますか？\n\n賭けた場合：\n正解なら得点が増えます。\n不正解なら得点が減ります。\n\n賭けない場合：\n得点は変わりません。\n\n賭ける場合は「F」キーを押してください。\n賭けない場合は「J」キーを押してください。\n",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "bet",
                      "keypress(j)": "no_bet"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "block4_bet"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 608,
                  "height": 120.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "ブロック4は終了です。\n\n画面をクリックして次へ進んでください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "block4_end"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 862.4,
                  "height": 287.83,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "休憩\n\nこれで単語課題は終了です。\n\nここから30秒間休憩してください。\n\n画面が自動的に切り替わるまで、そのままお待ちください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "rest_4",
              "timeout": "30000"
            }
          ]
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 800,
              "height": 162,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "\n続いて、質問紙への回答をお願いします。\n\n準備ができたら、画面をクリックして進んでください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instruction"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnaire",
          "shuffle": true,
          "content": [
            {
              "type": "lab.html.Page",
              "items": [],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//教示文
const instructionText = 'みなさんの頭に浮かぶ考えの例を以下に挙げてあります。それぞれの考えを読んで，先週1週間の間に，その考えや似たような考えが，どのくらいの頻度であなたの頭に浮かんできたかを答えてください。';

//尺度名（データ記録用; 半角英数推奨)
const scaleName = 'MPCI';

//質問項目（['']で囲み，[,]で区切る）
//項目番号をつける場合にはここに書かずに，↓の設定で行う
const items = [
  '目標は高いほどやりがいがある',　//データの出力ではcat1と出力される。
  '高い基準を自分に課すことが大切だ',　//データの出力ではcat2と出力される。
  '基準が高いほど，自分のためになるだろう',
  '目標は高ければ高いほどいい',
  '最高の水準を目指そう',
  '完ぺきにやらなければ安心できない',
  '完ぺきにやらなければ，どうしても気がすまない',
  'わたしは“完ぺき”でなければならない',
  '“完ぺきにやること”に意味がある',
  '不完全ではいけない',
  'ミスがあると，自分が惨めに思えてくる',
  'ミスがあると，自分を責めたくなる',
  '失敗したら，私の価値は下がるだろう',
  'ここでまちがえるなんて情けない',
  'うまくできなければ，人並み以下ということだ',
  '高い目標のほうがやりがいがある'
];

//選択肢
//必要な選択肢の数だけ増減してください
//空欄にした場合は""をいれてください
//縦書きに対応するために文字列を「<span class = 'tategaki'>」と「</span>」で囲んでください
const anchors = [
  "<span class = 'tategaki'>全くなかった</span>",
  "<span class = 'tategaki'></span>",
  "<span class = 'tategaki'></span>",
  "<span class = 'tategaki'>いつもあった</span>"  
]

//回答を必須にするか（回答を必須にする場合はtrue,しない場合はfalse)
const requiredOption = true;

//各質問項目に項目番号（1. 〜）をいれるか（いれる場合はtrue，いれない場合はfalse）
const addItemNumber = false;

//項目順をランダムにするか（ランダムにする場合はtrue,しない場合はfalse)
const randomaizedOrder = true;


//【注意】ここから下はむやみに変更しないでください【注意】
//調査を作成

//各項目と尺度名を配列に格納
let itemsArray = [];
let itemNo;

for(i in items){
  itemNo = parseInt(i) + 1;
  itemsArray.push(
    {
      label: items[i],
      coding: itemNo
    }
  )
}

//ランダム順にする場合に並び替え
if(randomaizedOrder)
{
  itemsArray = this.random.shuffle(itemsArray)
}

if(addItemNumber)
{
  for(i in itemsArray)
  {
    itemNo = parseInt(i) + 1;
    itemsArray[i].label = itemNo + ". " + itemsArray[i].label;
  }
}
//Pageに追加
this.options.items.push({
  required: requiredOption,
  type: 'likert',
  items: itemsArray,
  width: anchors.length,
  anchors: anchors,
  label: instructionText,
  name: scaleName
})

const finish_button = {
          "type": "html",
          "content": "<div style = \"margin: 20px 0 100px 0;\"><button>次へ進む</button></div>"
}

this.options.items.push(finish_button)
}
              },
              "title": "MPCI"
            },
            {
              "type": "lab.html.Page",
              "items": [],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//教示文
const instructionText = '以下の症状を読んで，過去1週間にどのくらいの頻度で経験したかを答えてください。';

//尺度名（データ記録用; 半角英数推奨)
const scaleName = 'CES-D';

//質問項目（['']で囲み，[,]で区切る）
//項目番号をつける場合にはここに書かずに，↓の設定で行う
const items = [
  '普段はなんでもないことがわずらわしいと思う',　//データの出力ではcat1と出力される。
  '食べたくない。食欲が落ちたと思う',　//データの出力ではcat2と出力される。
  '家族や友達から励ましてもらっても気分が晴れない',
  '他の人と同じ程度には能力があると思う',
  'ものごとに集中できない',
  '憂うつだと感じる',
  '何をするのも面倒だ',
  'これからのことについて積極的に考えられる',
  '過去のことについてくよくよ考える',
  '何か恐ろしい気持ちがする',
  'なかなか眠れない',
  '生活について不満なく過ごせる',
  '普段より口数が少ない',
  '一人ぼっちで寂しい',
  '皆がよそよそしいと思う',
  '毎日が楽しい',
  '急に泣き出したくなる',
  '悲しいと感じる',
  '皆が自分を嫌っていると感じる',
  '仕事（勉強）が手につかない'
];

//選択肢
//必要な選択肢の数だけ増減してください
//空欄にした場合は""をいれてください
//縦書きに対応するために文字列を「<span class = 'tategaki'>」と「</span>」で囲んでください
const anchors = [
  "<span class='tategaki'>めったにまたは全くない（1日未満）</span>",
  "<span class='tategaki'>いくらかまたは少しある（1〜2日）</span>",
  "<span class='tategaki'>ときどきまたはかなりある（3〜4日）</span>",
  "<span class='tategaki'>たいていまたはいつもある（5〜7日）</span>"
]


//回答を必須にするか（回答を必須にする場合はtrue,しない場合はfalse)
const requiredOption = true;

//各質問項目に項目番号（1. 〜）をいれるか（いれる場合はtrue，いれない場合はfalse）
const addItemNumber = false;

//項目順をランダムにするか（ランダムにする場合はtrue,しない場合はfalse)
const randomaizedOrder = true;


//【注意】ここから下はむやみに変更しないでください【注意】
//調査を作成

//各項目と尺度名を配列に格納
let itemsArray = [];
let itemNo;

for(i in items){
  itemNo = parseInt(i) + 1;
  itemsArray.push(
    {
      label: items[i],
      coding: itemNo
    }
  )
}

//ランダム順にする場合に並び替え
if(randomaizedOrder)
{
  itemsArray = this.random.shuffle(itemsArray)
}

if(addItemNumber)
{
  for(i in itemsArray)
  {
    itemNo = parseInt(i) + 1;
    itemsArray[i].label = itemNo + ". " + itemsArray[i].label;
  }
}
//Pageに追加
this.options.items.push({
  required: requiredOption,
  type: 'likert',
  items: itemsArray,
  width: anchors.length,
  anchors: anchors,
  label: instructionText,
  name: scaleName
})

const finish_button = {
          "type": "html",
          "content": "<div style = \"margin: 20px 0 100px 0;\"><button>次へ進む</button></div>"
}

this.options.items.push(finish_button)
}
              },
              "title": "CES-D"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "アンケートはこれで以上です。ご協力いただきありがとうございました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をユーザーIDにする
const participantID = this.parameters.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "mDDRRkvHD4rt",
    filename: filename,
    data: data,
  }),
});
}
          },
          "title": "End",
          "tardy": true
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {}
        }
      ]
    }
  ]
})

// Let's go!
study.run()