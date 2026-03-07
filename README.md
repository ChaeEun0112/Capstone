# 🚘스마트 주차 공간 모니터링 시스템
> 캡스톤 개발 기간 : 2024.11 ~ 2024.12

- Arduino 센서를 활용하여 주차 공간 감지
- MQTT 통신을 통해 서버로 데이터를 전송하여 웹에서 실시간으로 확인할 수 있는 IoT 기반 주차 관리 시스템

![Capstone](https://github.com/ChaeEun0112/Capstone/blob/main/Capstone.jpg)
## 👩‍💻팀원
![Team](https://github.com/ChaeEun0112/Capstone/blob/main/Team.jpg)
## 💡개요
![Concept](https://github.com/ChaeEun0112/Capstone/blob/main/Concept.jpg)
## 📑시스템 구성도
>
>**센서 → 서버 → 데이터베이스 → 웹 페이지**로 이어지는 IoT 기반 시스템 구조

![Diagram](https://github.com/ChaeEun0112/Capstone/blob/main/Diagram.jpg)
## 🚗주요 기능
![Function](https://github.com/ChaeEun0112/Capstone/blob/main/Function.jpg)
## 🛠️기술 스택
| <div align="center">구분 </div>         | <div align="center">기술/도구 </div>       | <div align="center">역할/설명 </div>                                  |
|---------------|-----------------|--------------------------------------------|
| <div align="center">Hardware</div>      | <div align="center">Arduino </div>         | <div align="center">주차 공간 센서 데이터 수집 및 제어 </div>         |
| <div align="center">Communication</div> | <div align="center">MQTT  </div>           |<div align="center"> 센서와 서버 간 실시간 데이터 통신</div>           |
| <div align="center">Backend </div>      | <div align="center">Node.js </div>         | <div align="center">서버 구축, 데이터 처리 및 API 제공 </div>         |
| <div align="center">Database</div>      | <div align="center">MongoDB </div>         | <div align="center">센서 및 시스템 데이터 저장 </div>                 |
| <div align="center">Frontend  </div>   |<div align="center"> HTML / CSS / JavaScript (Web UI)  </div>            | <div align="center">실시간 주차 공간 확인 및 UI 구현 </div>            |
## ⚙️시스템 동작 절차
### Arduino : 주차 공간에 차량이 있는지 센서를 통해 감지
![Arduino](https://github.com/ChaeEun0112/Capstone/blob/main/Arduino.jpg)
### MQTT : 센서 데이터를 MQTT 프로토콜을 통해 서버로 전송
![MQTT](https://github.com/ChaeEun0112/Capstone/blob/main/MQTT.jpg)
### Node.js : 서버에서 데이터를 처리하고 데이터베이스로 전달
![Nodejs](https://github.com/ChaeEun0112/Capstone/blob/main/Nodejs.jpg)
### MongoDB : 센서 데이터를 저장하고 관리
![MongoDB](https://github.com/ChaeEun0112/Capstone/blob/main/MongoDB.jpg)
### Web : 웹 페이지에서 실시간 주차 공간 상태 확인
![Web1](https://github.com/ChaeEun0112/Capstone/blob/main/Web1.jpg)
![Web2](https://github.com/ChaeEun0112/Capstone/blob/main/Web2.jpg)
![Web3](https://github.com/ChaeEun0112/Capstone/blob/main/Web3.jpg)
![Web4](https://github.com/ChaeEun0112/Capstone/blob/main/Web4.jpg)
## ✒️문서
### Notion
- 기획 및 개발 문서
  
https://www.notion.so/Capstone-1661453ed8f080b08cf6d7f45327a261?source=copy_link

