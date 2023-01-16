# 2023.01.10 오늘 할 일

- 개인 블로그 스택 정리
- 개인 블로그 디자인
- 인프런 강의 시청

# 목표 정적 블로그 ( 명함 )

- Language : Javascript
- FrontEnd : React, Styled-Components, Recoil

# If smooth Expect

- BackEnd : express
- Database : mysql

- React Structure 및 기본 디자인 완료
- 자세한 사항은 https://github.com/NSRBSG/blog commit 참조

# 2023.01.11

- Github Pages 배포시 SPA를 적용할 수 있는 방법 미제공 따라서 오류 발생
- 해결 방법
- react-router의 HashRouter를 사용

- Github Pages 배포시 path에 레포지토리 네임이 붙어 라우팅이 해결되지 않음
- 해결 방법
- router에 base-name 설정

# 2023.01.16 오늘 할 일

- 블로그 메인 페이지 꾸미기
- 고화질 동영상 인터랙티브 웹 구현

- 동영상 첨부시 고화질의 영상일 경우 끊기는 현상 발견,
- 이에 동영상을 프레임 단위로 잘라 여러장의 이미지로 변환
- 이것으로 부드러운 동영상 처리 가능.

- 동영상을 프레임 단위로 이미지화 시킬때, ffmpeg tool 사용.