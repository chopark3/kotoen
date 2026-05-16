# 영어 발음 연습 PWA

한글 단어를 입력하면 스마트폰 OS 내장 TTS로 미국식 영어 발음을 반복 재생하는 앱입니다.

## 파일 구성
```
pronunciation-pwa/
├── index.html       ← 메인 앱
├── manifest.json    ← PWA 설정
├── sw.js            ← 서비스 워커 (오프라인 지원)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## 스마트폰에 설치하는 방법

### 방법 1: GitHub Pages (무료, 가장 간단)
1. GitHub 계정 생성 후 새 repository 생성
2. 이 폴더의 파일 전체 업로드
3. Settings → Pages → main branch 선택 → Save
4. 제공된 URL(https://username.github.io/repo/)을 스마트폰에서 접속

### 방법 2: Netlify Drop (무료, 드래그앤드롭)
1. https://app.netlify.com/drop 접속
2. pronunciation-pwa 폴더 전체를 드래그앤드롭
3. 생성된 URL을 스마트폰에서 접속

### 방법 3: 로컬 서버 (PC와 같은 WiFi)
```bash
cd pronunciation-pwa
python3 -m http.server 8080
# 스마트폰에서 http://PC의IP:8080 접속
```

## 홈화면에 추가 (앱처럼 사용)

### Android (Chrome)
1. 앱 URL 접속
2. 우측 상단 메뉴 → "홈 화면에 추가"
3. "추가" 탭

### iOS (Safari)
1. 앱 URL을 Safari로 접속 (Chrome은 안됨)
2. 하단 공유 버튼 → "홈 화면에 추가"
3. "추가" 탭

## TTS 음성 설치 (더 자연스러운 발음)

### Android
설정 → 일반 관리 → 언어 → 텍스트 음성 변환
→ Google TTS → 음성 데이터 → English(United States) 다운로드

### iOS
설정 → 손쉬운 사용 → 말하기 → 음성
→ English → Samantha (또는 Aaron) 다운로드

## 주요 기능
- 한글 텍스트 입력 또는 음성 입력
- 250+ 단어 내장 사전 (목재/무역 업무 단어 포함)
- MyMemory API로 사전에 없는 단어 자동 번역
- Free Dictionary API로 IPA 발음기호 표시
- 반복/속도/간격/음량 조절
- OS 내장 TTS 음성 선택 (en-US 미국식 우선)
- 사전 원본 오디오 재생 (있는 경우)
- 최근 검색 히스토리 저장 (localStorage)
- 오프라인 동작 (서비스 워커)
- 다크모드 자동 지원
