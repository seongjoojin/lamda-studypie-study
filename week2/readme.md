# week2

## RESTful api란 무엇인가? 정리

REST - 네트워크 아키텍쳐 원리모음(사이트 구성 원리)

### REST 아키텍쳐의 6가지 제한 조건

* 클라이언트/서버 구조
* 무상태
* 캐시 처리 가능
* 계층화
* Code on demand
* 인터페이스 일관성

HTTP에는 이미 REST 원칙이 녹아 들어 있음
Route에만 신경 쓰면 REST하게 사이트를 만들 수 있음

### RESTful?

URL주소만 보고도 수행하려는 동작을 눈치챌 수 있게 만드는 것

Url의 의미 중 명사가 리소스, 동사를 메소드로 만든다

- GET/posts - 글 목록(posts)을 봅니다(GET)
- POST/posts - 글(posts)을 생성합니다(POST)
- PUT/posts/:id -글(posts)을 수정합니다(PUT)
- DELETE/posts/:id - 글(posts)을 삭제합니다(DELETE)

언제 어떤 메소드를 써야하는가

   .  | 수행하기 전, 후 | 반복 수행한 결과 | 리소스의 수 
------| ------------ |--------------|----------
GET   |      같다     |     같다      |    같다    
POST  |    다르다.     |   다르다.      |  많아진다  
PUT   |    다르다.     |    같다.      |    같다   
DELETE|    다르다.     |    다르다.    |   적어진다 


어떤게 RESTful?

1. id와 리소스 이외의 정보를 UR에 담으면 안된다
2. “무엇”(명사)을 생성하는지 생각해보아야 한다



Node.js 프로그래밍 12강 RESTful 서버 | T아카데미 정리

REST 아키텍쳐의 제한 조건

* 클라이언트/서버 - 클라이언트의 요청과 서버 응답 기반
* 상태 없음 - 클라이언트의 상태와 관계없이 요청으로만 응답
* 캐시 - 클라이언트는 서버의 응답을 캐쉬. 네트워크 비용 절감
* 계층화 시스템 - 서버는 다양한 형태의 중간 계층을 이용해서 확장할 수 있다.클라이언트는 서버의 계층에 무관하게 통신할 수 있다
* Code on Demand - 리소스를 다룰 수 있는 코드 전송
* 인터페이스 일관성 : 시스템 구조를 단순화시키고 작은 단위로 분리해서 독립적으로 개선하고 확장할 수 있다

서비스 설계 가이드

인터페이스 설계
* 간단하고 직관적인 API
* 리소스를 다루는 행위는 HTTP 메소드 사용
* API버전
* 명사형 단어 사용 권장
* 목록형태의 리소스를 다루는 API는 복수형명사
* 목록에서 특정 조건으로 다루는 필터링: 쿼리 문자열

응답 메세지(JSON)

프로퍼티 이름 - 의미를 충분히 반영, 카멜 케이스, 예약어 사용하지 말 것

응답 메세지 구조 - 데이터와 보조 데이터 활용, 에러 발생시 에러 정보 제공

# 카카오 플러스 친구 만들기

https://center-pf.kakao.com/signup

내년 이후로 변경된다고 합니다.

# 카카오 플러스 친구 자동응답 api 명세

https://github.com/plusfriend/auto_reply

11월 30일 이후로는 발급 불가 하다고합니다.

# 랜덤 아재개그 카카오 플러스 친구 만들기

- https://devbro.tistory.com/10
- https://devbro.tistory.com/11

# advanced rest client

https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo/related

# Advanced REST Client | 크롬 확장 프로그램으로 REST API 테스트 하기

https://devbro.tistory.com/13
