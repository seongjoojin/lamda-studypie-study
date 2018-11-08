# API GateWay

- AWS콘솔을 통해서 트래픽관리와 모니터링을 쉽게 할 수 있음
- 기존 서비스를 위한 RESTful 엔드포인트 생성할 수 있음
- AWS 서비스들과 쉽게 연동할 수 있음

# 마이크로 서비스

## 기존 monolith의 단점

- 애플리케이션 확장성 애로 -> 민첩성 저해
- 장기개발 사이클 -> 혁신 저해
- 운영의 어려움 -> 고객의 불만족

## 마이크로서비스

- 서비스들이 네트워크를 통해 서로 통신함
- 서비스는 독자적으로 업데이트하며, 서로 영향을 주지 않음.
- 다른 서비스의 내부를 알지 못해도, 내 서비스 코드를 업데이트 할 수 있음.

## 하나의 마이크로서비스 구성패턴

- Data Store (ex) RDS 등)
- Application/Logic (ex) code, libraries 등)
- Public API

## 다양한 마이크로서비스의 구조 진화

EC2, Elastic Load Balancing, ECS(docker), Lambda, Lambda Blueprints(slack, 알렉사 등)

## 서비리스 기반 단위별 신규 아키텍쳐

- 모든 infrastructure를 code로 관리
- 사실상 무한, 자동 스케일
- Code를 upload하면 무중단 배포

API Gateway -> Lambda (TypeScript) -> DB / Cache

https://serverless.com/framework/

