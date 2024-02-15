# 🚀 넌 어디든 갈 수 있어
<p align="center">
<img src="README_img/title image.jpg" width="100%" height="450px"/>
</p>

## 📝 GPT를 활용한 프로젝트 

<strong>"여행 일정을 작성해 봅시다"</strong>

길었던 코로나19 시기가 끝나고 자유롭게 여행을 떠나고 싶지만 여행 계획을 작성하기 힘든 여행자들을 위한 여행 일정 추천 서비스.


## 1. 목표와 기능
### 1.1 목표
- 여행 일정 작성의 고민 시간 감소.
- 유명 관광 명소 추천으로 방문 만족도 증가.
- 새로운 여행지 추천으로 다양한 경험 제공.

### 1.2 기능
- 방문 장소 시각화 자료 제공.
- 챗봇을 통한 대화 기능 제공.
- 혼자, 친구, 커플, 가족 카테고리를 통한 그룹별 차별화된 여행 일정 제공




## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- Visual Studio Code

### 2.2 배포 URL
- https://um-king.github.io/chatGPT-Web-Project/

## 3. 요구사항 명세와 기능 명세  
```mermaid
    sequenceDiagram
    actor A as client
    participant B as Web
    participant C as Server
    participant D as GPT API

    A->>B: 로그인 요청
    B->>A: 로그인 정보 요구
    A->>C: id, pw 전달
    alt 로그인 성공
        C->>B: Main Page 이동
        B->>A: 로그인 성공
    else 로그인 실패
        C->>B: 재입력 요청
        B->>A: 로그인 실패
    end
    A->>B: 필수 항목 선택
    opt 미선택 시
        B->>A: 항목 선택 재요청
    end
    A->>B: 대화 시작 요청
    B->>D: API 호출
    activate D
    D-->>B: API 호출 확인
    deactivate D
    B->>A: 대화 가능 상태 출력
    A->>B: 질문 작성
    B->>D: 질문 전달
    activate D
    D->>D: 메시지 처리
    D-->>B: 답변 반환
    deactivate D
    B->>B: 데이터 가공
    B->>A: 계획 출력
```

## 4. 프로젝트 구조와 개발 일정
### 4.1 프로젝트 구조
```
📦chatGPT_Web_Project  
 ┣ 📂css  
 ┃ ┗ 📜style.css  
 ┣ 📂js  
 ┃ ┗ 📜index.js  
 ┣ 📂main  
 ┃ ┣ 📜login.html  
 ┃ ┗ 📜index.html 
 ┣ 📂image  
 ┃  ┣ 📂marker  
 ┃  ┗ 📂icon
 ┗ 📜splashscreen.html 
```


### 4.1 개발 일정(WBS)
```mermaid
gantt
    title 프로젝트 일정
    dateFormat  YYYY-MM-DD

    section 기획 단계
    프로젝트 계획: 2024-02-12, 2024-02-13
    주요기능 구성: 2024-02-12, 2024-02-13
    UI 디자인 구성: 2024-02-12, 2024-02-13
    WBS: 2024-02-13, 2024-02-14
    와이어 프레임: 2024-02-13, 2024-02-14

    section 개발 단계
    OpenAI API 연동: 2024-02-13, 2024-02-14
    프롬프트 작성: 2024-02-13, 2024-02-14
    로그인 페이지 구현: 2024-02-13, 2024-02-14
    메인 페이지 구현: 2024-02-13, 2024-02-14
    대화 기능 구현: 2024-02-13, 2024-02-15
    계획 출력 페이지 구현: 2024-02-14, 2024-02-15
    코드 개선: 2024-02-14, 2024-02-15
     

    section 배포 단계
    시스템 테스팅: 2024-02-15, 2024-02-16
    문서작업: 2024-02-15, 2024-02-16

```

## 5. 와이어프레임 / UI / BM

### 5.1 와이어프레임

<table>
    <tbody>
        <tr>
            <td>메인</td>
            <td>로그인</td>
        </tr>
        <tr>
            <td>
		<img src="README_img/01_project.png" width="100%"/>
            </td>
            <td>
                <img src="README_img/02_Login Page.png" width="100%"/>
            </td>
        </tr>
        <tr>
           <td>
                <img src="README_img/03_Main Page.png" width="100%"/>
            </td>
	     <td>
                <img src="README_img/04_Chatting Page.png" width="100%"/>
            </td>
        </tr>
        <tr>
            <td>
                <img src="README_img/05_Result Page.png" width="100%"/>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

### 5.2 화면 설계
- 화면은 gif파일로 업로드해주세요.
 
<table>
    <tbody>
        <tr>
            <td>로그인</td>
            <td>메인</td>
        </tr>
        <tr>
            <td>
		<img src="README_img/ui_login.png" width="100%"/>
            </td>
            <td>
                <img src="README_img/ui_main.png" width="100%"/>
            </td>
        </tr>
        <tr>
            <td>채팅</td>
            <td>출력</td>
        </tr>
        <tr>
            <td>
                <img src="README_img/ui_chatting.png" width="100%">
            </td>
            <td>
                <img src="README_img/ui_result.png" width="100%">
            </td>
        </tr>
    </tbody>
</table>
<p align="center">
    <img src="README_img/plan_site_v1.gif" width = "70%">
</p>



## 6. Architecture

* 아래 Architecture 설계도는 ChatGPT에게 아키텍처를 설명하고 mermaid로 그려달라 요청한 것입니다.
```mermaid
graph TD;
    CI[GitHub CI/CD] -->|Deploys| LS[AWS Lightsail];
    A[Django Application] -->|Uses| DRF[Django REST Framework];
    A -->|Real-time communication| C[Django Channels];
    C -->|Messaging backend| R[Redis];
    A -->|Connects to| DB[postgresql];
    A -->|Static & Media Files| S3[AWS S3];
    FE[Frontend] -->|Deployed on| LS;
    LS -->|Hosts| A;
    LS -->|Hosts| FE;

    classDef framework fill:#f9f,stroke:#333,stroke-width:2px;
    classDef aws fill:#ff9,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5;
    classDef ci fill:#9cf,stroke:#33f,stroke-width:2px;
    
    class A,DRF,C,DB framework;
    class LS,S3 aws;
    class CI ci;

```

* 아래 Architecture 설계도는 PPT를 사용했습니다.
  
![image](./architecture.png)

- PPT로 간단하게 작성하였으나, 아키텍쳐가 커지거나, 상세한 내용이 필요할 경우 [AWS architecture Tool](https://online.visual-paradigm.com/ko/diagrams/features/aws-architecture-diagram-tool/)을 사용하기도 합니다.

## 7. 메인 기능


```mermaid
		graph TD
	    A[하루 시작] -->|일어난다| B(세수한다)
	    B --> C{오늘은 무엇을 할까}
	    C -->|밥을 먹는다| D[냉장고 확인]
	    C -->|다시 잔다| E[침대로 돌아가기]
	    C -->|티비를 본다| F[거실로 가기]
```

```mermaid
		sequenceDiagram
	    A->>+B: B야 소금좀 건내줘
	    B->>+A: 여기
	    A-->>-B: 고마워
```

```mermaid
		stateDiagram-v2
	    [*] --> 로그인
	    로그인 --> 성공
	    로그인 --> 실패
	    실패 --> 아이디/비밀번호찾기
	    아이디/비밀번호찾기 --> 로그인재시도
	    로그인재시도 --> 성공
	    성공 --> [*]
```

## 8. 에러와 에러 해결


## 9. 개발하며 느낀점
