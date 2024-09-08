// 9개의 유형별 점수를 저장할 객체
let scores = {
    type1: 0,  // 쇼잉 오퍼
    type2: 0,  // 브랜드 열정가
    type3: 0,  // 컬처 팔로워
    type4: 0,  // 미니멀리스트
    type5: 0,  // 밸류 쇼퍼
    type6: 0,  // 로열리스트
    type7: 0,  // 슬로우 라이프 시커
    type8: 0,  // 라이프스타일 얼리버드
    type9: 0   // 소셜 옵티미스트
};

// 12개의 질문과 3개의 선택지 배열
const questions = [
    {
        question: "Q. 주변에서 말하는 당신은?",
        options: [
            { text: "주관이 선명하고, 자기만의 원칙을 지키려고 노력하며 사는 사람", type: "type6" },
            { text: "사람들 간의 관계를 중시하고 주변 분위기를 읽는 데 능숙한 사람", type: "type9" },
            { text: "지적인 대화가 잘 통하는, 장르를 가리지 않고 관심사가 다양한 사람", type: "type3" }
        ]
    },
    {
        question: "Q. 일할 때, 당신의 모습은?",
        options: [
            { text: "일을 제대로 파악하기 위해 먼저 다각도에서 질문을 하고 정보를 모아 분석한다.", type: "type2" },
            { text: "협업하기 좋은 분위기가 훌륭한 성과를 만든다. 서로 소통할 수 있는 분위기부터 조성한다.", type: "type9" },
            { text: "머리로만 이해하는 것보다, 직접 시작해 보는 것이 더 낫다.", type: "type1" }
        ]
    },
    {
        question: "Q. 당신이 가장 피하고 싶은 상황은?",
        options: [
            { text: "내 방식대로 뭘 할 수가 없고 주변의 세세한 간섭을 받아야만 하는 것", type: "type7" },
            { text: "최신 뉴스 및 정보와 완전히 단절되는 것", type: "type8" },
            { text: "주변 사람들이 나에 대해 크게 오해하는 것", type: "type9" }
        ]
    },
    {
        question: "Q. 당신이 생각하는 자신의 장점은?",
        options: [
            { text: "일관성과 뚝심. 누군가는 고집 있는 사람이라고 말할지라도.", type: "type1" },
            { text: "핵심 파악 능력. 남들은 미처 찾아내지 못한 사물의 특성이나 현상의 핵심을 잘 캐치한다.", type: "type5" },
            { text: "상대방의 기분을 쉽게 알아차리는 센스", type: "type3" }
        ]
    },
    {
        question: "Q. 새 옷을 산다면, 어떤 스타일?",
        options: [
            { text: "신체에 닿는 촉감이 좋은 소재로 만들어져 부드러운 느낌이 피부에 편안한 옷", type: "type2" },
            { text: "평범해 보이는 스타일은 우선 지양. 비싸더라도 주변의 시선을 끄는 옷", type: "type1" },
            { text: "선이 간결하고 단정한 스타일. 되도록 단색이면 좋고 화려한 장식이 없는 옷", type: "type4" }
        ]
    },
    {
        question: "Q. 일과 후, 당신이 저녁 식사를 해결하는 방법은?",
        options: [
            { text: "요즘 뜨고 있는 레스토랑에 가서 눈과 입이 즐거운 식사를 즐긴다.", type: "type5" },
            { text: "내 몸을 고려하며 손수 만든 집밥을 먹으며 휴식. 유기농 식재료를 활용한다면 금상첨화.", type: "type7" },
            { text: "피곤하니 간단하게 차려 먹거나, 아예 거르기도 한다.", type: "type4" }
        ]
    },
    {
        question: "Q. 나만의 공간을 꾸민다면, 최우선으로 만들고 싶은 것은?",
        options: [
            { text: "여백의 아름다움을 느낄 수 있도록 필요한 것만 단정하게 배치한 거실", type: "type4"},
            { text: "고요하게 숙면을 취하며 편하게 쉴 수 있는 제대로 된 침실 공간의 유무", type: "type6"},
            { text: "가지고 있는 각양각색의 옷과 신발들을 편하게 꺼내 착용할 수 있는 널찍한 드레스룸", type: "type1"}
        ]
    },
    {
        question: "Q. 청소할 때 가장 우선시하는 것은?",
        options: [
            { text: "햇살 좋은 날엔 꼭 이불을 널어 말리고 창문을 활짝 열어 충분히 환기한다.", type: "type3"},
            { text: "가구, 그리고 작은 소품 하나하나 틀어짐 없는 모양새로 돌려놓는다.", type: "type4"},
            { text: "자주는 안 하고 가끔 대청소. 한 번 하면 옷장을 뒤집어엎어 계절별 의류를 정리하는 식", type: "type5"}
        ]
    },
    {
        question: "Q. 친구와의 약속을 준비할 때 당신은?",
        options: [
            { text: "약속 시간에 절대 늦지 않도록 미리 교통편을 체크해 둔다.", type: "type4"},
            { text: "친구 만나는 거니까 편하게 있다가, 지각하지 않을 만한 시간에 출발한다.", type: "type7"},
            { text: "멋진 모습으로 외출하기 위해 출발 시간이 임박할 때까지 여러 번 옷을 갈아입는다.", type: "type1"}
        ]
    },
    {
        question: "Q. 당신이 팀장이라면, 다음 중 어떤 사람에 더 가까운가?",
        options: [
            { text: "팀원들 간의 문제점이나 갈등은 되도록이면 큰 잡음으로 확대되지 않도록 먼저 조율한다.", type: "type9"},
            { text: "팀원들이 불가능하다고 말해도 도전하는 것을 멈추지 않는다.", type: "type2"},
            { text: "팀원들과 친근한 관계를 유지하면서도 목표 달성을 위해 노력한다.", type: "type8"}
        ]
    },
    // 나머지 2개의 질문도 동일한 형식으로 추가하세요.
];

// 한글로 출력할 수 있도록 유형 매핑
const typeMap = {
    type1: "쇼잉 오퍼",
    type2: "브랜드 열정가",
    type3: "컬처 팔로워",
    type4: "미니멀리스트",
    type5: "밸류 쇼퍼",
    type6: "로열리스트",
    type7: "슬로우 라이프 시커",
    type8: "라이프스타일 얼리버드",
    type9: "소셜 옵티미스트"
};

let currentQuestionIndex = 0;

// 페이지 로드 시 첫 질문 표시
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});

// 질문 표시 함수
function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    
    // 질문 내용 업데이트
    const questionData = questions[index];
    let questionHTML = `
        <div class="question-box">
            <p>${questionData.question}</p>
        </div>
        <div class="options-container">
    `;
    
    questionData.options.forEach(option => {
        questionHTML += `
            <label>
                <input type="radio" name="answer" value="${option.type}">
                <div class="option-box">${option.text}</div>
            </label>
        `;
    });
    
    questionHTML += `</div>`;
    questionContainer.innerHTML = questionHTML;

    // 라디오 버튼 클릭 시 다음 질문으로 이동
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.addEventListener('change', function() {
            const selectedValue = this.value;
            updateScore(selectedValue);
            
            // 마지막 질문인지 확인
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);  // 다음 질문 표시
            } else {
                showResult();  // 마지막 질문 이후 결과 표시
            }
        });
    });
}

// 선택한 유형에 점수를 더하는 함수
function updateScore(selectedType) {
    scores[selectedType]++;
}

// 결과 표시 함수
function showResult() {
    const questionContainer = document.getElementById('question-container');

    // 가장 높은 점수를 받은 유형 찾기
    let highestScore = 0;
    let bestType = '';

    for (let type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            bestType = type;
        }
    }

    // 최종 결과 표시 (한글로 출력)
    questionContainer.innerHTML = `<h2>Your highest type is: ${typeMap[bestType]}</h2>`;
}