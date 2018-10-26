1일차

백엔드: 데이터중심
프론트엔드 : UI중심(UX포함)

2일차

클라우딩 컴퓨팅이란? 

사용한만큼만 비용을 지불하는 서비스 (서버들)

초기 투자나 장기계약을 없이 인터넷을 통해 IT 리소스를 애플리케이션을 원할 때 언제든지 (on-demand) 사용한 만큼만 요금을 내는 서비스

IAAS : aws 해당 인프라만 제공

특징

1.온디맨드

서버 스토리지 네트워크 빌림

2.종량제

사용량만큼 과금

3.확장성

서버 사이즈마다 유동적으로 가능

4.편리성

Api형태로 되어있음

이점(비지니스 측면)

초기 인프리 자원 투자 부담 감소
종량제구조
즉각적인 자원제공
효율적인 자원 할당 및 관리
시간 절감

이점(기술적인 측면)

자동화
탄력적인 확장, 오토스케일링
개발 사이클 단축
검증 절차 향상


3-4일차

aws 컴퓨팅 서비스 소개

1. EC2 - 가상 서버 서비스
2. Auto Scaling - 서버 자동 확장/축소
3. Lambda - 서버리스 컴퓨팅

EC2 가상 서버 서비스

* 재구성이 가능한 컴퓨팅 리소스
* 쉽게 확장/축소되는 컴퓨터 용량
* 고객 업무 영역에 따른 다양한 인스턴트 타입 제공
* 사용한 만큼만 과금


서버리스 컴퓨팅 - aws lamda

서버 없이 코드만으로 특정업무를 처리 -이벤트 기반

업로드( node, Java, python, c#,go) -> 트리거->실행->사용요금

클라우드 컴퓨팅 기술의 변화

EC2(min) -> EC2 Containers Services(sec) -> lambda(ms)

S3 - 단순함, 확장성, 낮은 비용, 신뢰성, 빠른 속도

정적 웹호스팅, 이미지/동영상 저장, 로그 저장, VM 이미지 백업 등

Aws lambda란?

서버 없는 이벤트 처리 방식의 컴퓨팅 서비스

*  서버 필요 없이 코드만 배포
* 빠른 확장성 및 빠른 서비스 연동
* 함수 실행시 100ms 단위 과금

aws lambda 동작 원리

* Bring your own code(node js, python)
* 단순한 자원 모델 - 메모리 설정
* 유연한 호출 경로 - rest api 호출가능
* 효과적인 권한 통제 - IAM

Amazon  API Gateway 소개

* 버전 관리 및 출시 단계별 관리 가능
* 개발자를 위한 API 키 발급 및 관리 용이
* API 접근 인증을 위한 Signature Ver.4 지원
* 백엔드 보호를 위한 요청 모니터링 및 제한
* AWS Lambda 활용

서버리스 아키텍쳐

BaaS (Backend as a Service) - Firebase
Faas (Function as a Service) - AWS Lambda, Azure Functions, Google Cloud Functions

기존의 기술들

자체적 시스템 설계 - 시스템에서 필요한 모든 인프라를 직접 관리하는 것 (전산실)

IaaS (Infrastructure as a Service) - 인프라를 가상화하여 관리하기 쉽게 해주는 서비스

Pass (Platform as a Service) - 네트워크, 그리고 런타임까지 제공 됨. 사용자가 애플리케이션은 배포하면 바로 구동시킬 수 있음. 
AWS Elastic Beanstalk, Azure App Services 등
Auto Scaling 및 Load Balancing도 손쉽게 적용 할 수 있음.

BaaS (Backend as a Service) - 개발에 있어서 필요한 다양한 기능들을 API로 제공해줌. 토이 프로젝트, 소규모 프로젝트의 경우 유용함
단점 - 클라이언트 위주의 코드,가격, 복잡한 쿼리가 불가능함

FaaS (Function as a Service) - 프로젝트를 여러개의 함수로 쪼개서 (혹은 한개의 함수로 만들어서) 매우 거대하고 분산된 컴퓨팅 자원에 여러분이 준비해둔 함수를 등록하고, 이 함수들이 실행되는 횟수 (그리고 실행된 시간)만큼 비용을 내는 방식

장점 - 비용, 인프라 관리, 인프라 보안, 확장성
단점 - 제한, FaaS 제공사에 강한 의존, 로컬 데이터 사용 불가능, 비교적 신기술

용도
1. Backend
2. Crawler
3. 파일처리
4. 로그 분석 / 실시간 모니터링
5. 자동화 작업들

5일차

아마존 웹서비스와 클라우드

클라우드 컴퓨팅 - 인터넷에 연결되어 있는 거대한 컴퓨터
