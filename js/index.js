// 최초 선택 -> 기초 선택 이후인지 확인
// true = 최초, false = 최초x
let initFlag = true;

// 누구와 함께 가는지
let together = "";
let together_change_txt = "";
let selected_together_value = "";
// 어느 날짜에 출발하는지
let date = "";

let marker_lst;

// JavaScript to handle sending messages
document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // 색상별 마커 내역 생성
    let redMarker = L.icon({
        iconUrl: '../../image/marker/icon_redMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let darkblueMarker = L.icon({
        iconUrl: '../image/marker/icon_darkblueMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let darkgreenMarker = L.icon({
        iconUrl: '../image/marker/icon_darkgreenMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let lightgreenMarker = L.icon({
        iconUrl: '../image/marker/icon_lightgreenMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let lightpurpleMarker = L.icon({
        iconUrl: '../image/marker/icon_lightpurpleMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let pinkMarker = L.icon({
        iconUrl: '../image/marker/icon_pinkMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });
    let purpleMarker = L.icon({
        iconUrl: '../image/marker/icon_purpleMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });

    let yellowMarker = L.icon({
        iconUrl: '../image/marker/icon_yellowMarker.png', // 마커 이미지 URL
        iconSize: [25, 30], // 아이콘 크기
        iconAnchor: [12, 41], // 아이콘의 앵커 포인트
        popupAnchor: [1, -34], // 팝업의 앵커 포인트
    });

    marker_lst = [redMarker, darkblueMarker, darkgreenMarker, lightgreenMarker, lightpurpleMarker, pinkMarker, purpleMarker, yellowMarker,
        redMarker, darkblueMarker, darkgreenMarker, lightgreenMarker, lightpurpleMarker, pinkMarker, purpleMarker, yellowMarker,
        redMarker, darkblueMarker, darkgreenMarker, lightgreenMarker, lightpurpleMarker, pinkMarker, purpleMarker, yellowMarker,
        redMarker, darkblueMarker, darkgreenMarker, lightgreenMarker, lightpurpleMarker, pinkMarker, purpleMarker, yellowMarker];


    let messageInput = document.getElementById('message-input');
    let messageText = messageInput.value.trim();
    let chatMessages = document.getElementById('chat-messages');


    if ((together == "") || (date == "")) {
        addMessageToChat('response', "기초 선택을 하지 않았습니다");
        addMessageToChat('response', "누구와 어느 날짜에 가는지 선택해주세요!");
        return;
    }


    if (initFlag) {
        if (messageText.trim() != "완료")
            return;
        else {
            getChatGPT();
            initFlag = false;
        }
    }


    setTimeout(function () {
        if (together == '커플' || together == '가족')
            together_change_txt = together + '과'
        else if (together == '친구')
            together_change_txt = together + '와'
        addMessageToChat('response', together_change_txt + " " + date + "월에 가기 좋은 여행 계획을 작성하겠습니다.\n");

        // document.getElementById('chatbtn').click();
    }, 1000);

    if (messageText) {
        // User message
        addMessageToChat('user', messageText);

        // Clear input after sending
        messageInput.value = '';
    }
});


function addMessageToChat(sender, text) {
    var chatMessages = document.getElementById('chat-messages');

    // 새로운 메시지 그룹을 만듭니다.
    var messageGroup = document.createElement('div');
    messageGroup.className = `message-group ${sender}`;

    // 메시지 엘리먼트를 생성합니다.
    var message = document.createElement('div');
    message.className = 'message';

    // 프로필 이미지를 만듭니다.
    var profilePic = document.createElement('div');
    profilePic.className = 'profile-pic';
    if (sender === 'user') {
        profilePic.style.backgroundImage = `url('../image/icon/icon_user.png')`;
    } else {
        profilePic.style.backgroundImage = `url('../image/icon/icon_bot.png')`;
    }

    // 메시지 텍스트를 만듭니다.
    var textElement = document.createElement('div');
    textElement.className = 'text';
    textElement.textContent = text;

    // 사용자 메시지인 경우 프로필 이미지를 오른쪽에 배치합니다.
    if (sender === 'user') {
        message.appendChild(textElement);
        message.appendChild(profilePic);
    } else {
        message.appendChild(profilePic);
        message.appendChild(textElement);
    }

    // 메시지 그룹에 메시지 엘리먼트를 추가합니다.
    messageGroup.appendChild(message);

    // 채팅창에 메시지 그룹을 추가합니다.
    chatMessages.appendChild(messageGroup);

    // 채팅창을 최신 메시지 위치로 스크롤합니다.
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// chatGPT 최초 호출 
function getChatGPT() {
    const $button = document.querySelector('#chatbtn');
    const $input = document.querySelector('#message-input');
    let data = []
    data.push({
        "role": "system",
        "content": `너는 전세계 모든 곳을 여행했고 ${together_change_txt}  ${date} 월에 대한 여행 계획을 작성해주는 전문가야. 
                    내가 하는 질문에 아주 간단하고 명확하게 대답해주고 도시와 여행을 가는 일자가 입력이 안되면 나에게 어디로 갈 것인지, 기간을 얼마나 갈 것인지 물어봐줘. 
                    누락된 정보가 있다면 반드시 ${date}"월 몇일부터 몇일까지 어느 도시로 여행 갈 건가요?" 해당 질문으로만 물어봐줘
                    리뷰가 좋은 맛집이나 카페, 공원이나 방문할만 한 곳의 이름을 정확하게 입력해주고 각각 일자의 계획을 공백을 제외하고 500자 이상으로 작성해줘
                    내가 입력한 값에 대해서 해당 기간동안 구체적으로 계획을 작성해주고 하루 하루 날씨는 어떤지 확인해줘`
    })

    const url = `https://open-api.jejucodingcamp.workers.dev/`

    const contents = getRecommendContent(selected_together_value)
    data.push({
        "role": "user",
        "content": contents
    })

    chatGPTAPI(url, data, "init")

    $button.addEventListener('click', e => {
        e.preventDefault()

        const contents = $input.value;

        const story = `반드시 해당 양식으로 출력해줘. 딱 저렇게만 출력되어야해 앞에 설명이나 인사말이나 필요없어. 또한 이건 조건이지 이 내용 그대로를 출력하라는건 아니야.
                {
                "여행 계획": [
                    {
                    "일자": "1월 1일",
                    "오전 계획": ["관광 장소", "장소의 좌표", "식당명", "식당의 좌표", "계획 일정 내용"],
                    "오후 계획": ["관광 장소", "장소의 좌표", "식당명", "식당의 좌표", "계획 일정 내용"]
                    }
                ]
                }
                    계획의 첫번째 위치에 관광장소, 두번째 위치는 해당 장소의 좌표, 3번째 위치는 식당이름, 4번째 위치는 식당의 좌표, 5번째 위치는 계획 일정 내용을 반드시 넣어주고 해당 양식을 반드시 지켜서 출력해줘.
                    식당과 카페는 너 기준으로 작성하면 돼. 계획일정을 작성할 때는 여행 가이드처럼 설명해주고 날씨 정보도 반드시 포함해줘
                `;

        // 계획에는 너가 추천해준 구체적인 내용으로 해당 일자의 전체 계획 일정을 포함해줘, 절대 해당 양식의 값이 누락되면 안되고 명확하게 포함하고 좌표는 모든 자리수를 표현해줘.

        data.push({
            "role": "user",
            "content": contents + story
        })
        addMessageToChat('user', contents);
        setTimeout(function () {
            addMessageToChat('response', "계획을 작성 중 입니다..");
        }, 2000);

        $input.value = ''

        chatGPTAPI(url, data, "click")
    })

}
function chatGPTAPI(url, data, condition) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let contentMsg = res.choices[0].message.content;

            if (condition == "init")
                addMessageToChat('response', contentMsg);

            const travelPlans = JSON.parse(contentMsg);

            // 일자별 계획을 분류하여 저장할 배열
            let dailyPlans = [];

            // 여행 계획 데이터를 순회하며 일자별로 분류
            travelPlans["여행 계획"].forEach(plan => {
                let dayPlan = {
                    date: plan["일자"],
                    morning: plan["오전 계획"],
                    afternoon: plan["오후 계획"]
                };
                dailyPlans.push(dayPlan);
            });

            console.log(dailyPlans);
            console.log(dailyPlans[0]);
            console.log(dailyPlans[0].afternoon[1]);
            document.getElementById('output-container-hidden').style.display = 'block'
            document.getElementById('left-container-hidden').style.display = 'none'

            makeMap(dailyPlans);

        })
}

// 추천한 여행 내역에 대한 위치를 map을 만든다.
function makeMap(dailyPlans) {
    // map 연결
    // 지도 초기화 코드
    let lst;
    var map;
    let markerCnt = 0; // 마커 이미지 순서
    guide_dic = {};
    // 지도 초기화
    lst = String(dailyPlans[0].morning[1]).replace(' ', '').split(',');
    map = L.map('map').setView([parseFloat(lst[0]), parseFloat(lst[1])], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 마커 위치 배열
    let markerLocations;
    let dic;
    let result_marker = [];

    for (var i = 0; i < dailyPlans.length; i++) {
        for (var j = 0; j < dailyPlans[i].morning.length - 1; j++) {
            if (j % 2 != 0) // 좌표 위치
            {
                // 위도, 경도 저장
                dic = {};
                markerLocations = [];
                lst = String(dailyPlans[i].morning[j]).replace(' ', '').split(',');
                markerLocations.push(parseFloat(lst[0]));
                markerLocations.push(parseFloat(lst[1]));

                dic["latlng"] = markerLocations;
                dic["popupContent"] = dailyPlans[i].morning[j - 1];
                dic["date"] = dailyPlans[i].date;
                result_marker.push(dic);
            }
        }
        for (var j = 0; j < dailyPlans[i].afternoon.length - 1; j++) {
            if (j % 2 != 0) // 좌표 위치
            {
                // 위도, 경도 저장
                dic = {};
                markerLocations = [];
                lst = String(dailyPlans[i].afternoon[j]).replace(' ', '').split(',');
                markerLocations.push(parseFloat(lst[0]));
                markerLocations.push(parseFloat(lst[1]));

                dic["latlng"] = markerLocations;
                dic["popupContent"] = dailyPlans[i].afternoon[j - 1];
                dic["date"] = dailyPlans[i].date;
                result_marker.push(dic);
            }
        }
    }

    makeGuide(dailyPlans);

    let cnt = 0;
    result_marker.forEach(function (markerInfo, index) {
        console.log(markerInfo);
        var marker = L.marker(markerInfo.latlng, { icon: marker_lst[markerCnt] }).addTo(map).bindPopup(markerInfo.popupContent)
            .on('click', function () {
                var details = document.getElementById('details' + String(markerInfo.date));
                if (details.style.display == 'none') {
                    toggleDetails('details' + String(markerInfo.date));
                }
                document.getElementById('details' + String(markerInfo.date)).scrollIntoView({ behavior: 'smooth' });
            });

        cnt++;
        if (cnt == 4) {
            markerCnt++;
            cnt = 0;
        }

    });
};

function makeGuide(dailyPlans) {
    dailyPlans.forEach(function (plan, index) {
        let guideDiv = document.getElementById('guide');
        let dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = ` <div style= margin: 0px 10px;>
                            <h3 onclick="toggleDetails('details${plan.date}')" style=cursor:pointer;>  ${index + 1}번째 ${plan.date}</h3>
                            </div>
                            <div id="details${plan.date}" class="details">
                                <p>방문 장소: ${plan.morning[0]}, ${plan.morning[2]}, ${plan.afternoon[0]}, ${plan.afternoon[2]}</p>
                                <p>오전 계획: ${plan.morning[plan.morning.length - 1]}</p>
                                <p>오후 계획: ${plan.afternoon[plan.afternoon.length - 1]}</p>                            
                            </div>`;
        guideDiv.appendChild(dayDiv);
        toggleDetails("details" + String(plan.date))
    });

};

// 세부 정보 토글 함수
function toggleDetails(detailsId) {
    var details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// 최초 GPT의 추천 답변을 호출
function getRecommendContent(word) {
    let s = "";

    switch (word) {
        case 'solo':
            s = date + '월에 혼자가기 좋은 여행지 도시 혹은 나라 4군데만 리스트형식으로 말해줘.';
            break;
        case 'couple':
            s = date + '월에 커플끼리 가기 좋은 여행지 도시 혹은 나라 4군데만 리스트형식으로 말해줘.';
            break;
        case 'friends':
            s = date + '월에 친구와 함께 가기 좋은 여행지 도시 혹은 나라 4군데만 리스트형식으로 말해줘.';
            break;
        default:
            s = date + '월에 가족과 가기 좋은 여행지 도시 혹은 나라 4군데만 리스트형식으로 말해줘.';
            break;
    }

    s += ` 답변은 무조건 동일한 형식으로 해주고 '제가 추천하는 곳은 다음과 같습니다'로만 시작해서 '나라(도시명)' 형식의 리스트로만 작성해주고 설명은 필요없고 마지막 맨트는 '가고 싶은 여행지는 어디인가요?' 줄바꾸고 '입력예시: ${date}}월 1일~5일 제주도' 라고만 해줘. `

    return s;
}
function getPrintContent(word) {
    let s = "";

    switch (word) {
        case 'solo':
            s = date + '월에 혼자가는 여행 계획을 계획해줘.';
            break;
        case 'couple':
            s = date + '월에 커플끼리 가는 여행을 계획해줘.';
            break;
        case 'friends':
            s = date + '월에 친구와 함께 가는 여행을 계획해줘.';
            break;
        default:
            s = date + '월에 가족과 가는 여행을 계획해줘.';
            break;
    }
    return s;
}



// 가로 슬라이드
let currentIndex = 0; // Current slide index
let itemWidth = 0; // Width of a single item; set dynamically

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider-content");
    const items = slider.getElementsByClassName("btn-going-group");
    if (items.length > 0) {
        itemWidth = items[0].offsetWidth + 10; // Assuming 10px margin; adjust as necessary
    }
});

function scrollHorizontal(direction) {
    const slider = document.getElementById("slider-content");
    const maxScroll = slider.scrollWidth - slider.offsetWidth;

    if (direction === 'left') {
        currentIndex -= itemWidth;
        if (currentIndex < 0) currentIndex = 0;
    } else if (direction === 'right') {
        currentIndex += itemWidth;
        if (currentIndex > maxScroll) currentIndex = maxScroll;
    }

    slider.style.transform = `translateX(${-currentIndex}px)`;
}


// 버튼 클릭 시 해당 버튼 체크 사항 반영
function selectButton(clickedButton, groupId) {
    // 해당 그룹 내의 모든 버튼의 'selected' 클래스 제거
    const buttons = document.querySelectorAll('#' + groupId + ' .btn-people-group, #' + groupId + ' .btn-going-group');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // 클릭된 버튼에 'selected' 클래스 추가
    clickedButton.classList.add('selected');

    if (groupId === "group1") {
        selected_together_value = clickedButton.value;
        together = changeTogetherData(selected_together_value);
    }
    else
        date = clickedButton.value;
}

function changeTogetherData(word) {
    switch (word) {
        case 'solo':
            return '혼자';
        case 'couple':
            return '커플';
        case 'friends':
            return '친구';
        default:
            return '가족'
    }
}
