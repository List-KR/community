# CoreLibs을 기반으로 하는 시스템-단위 AdGuard
## 웹 사이트의 로딩 시간이 길어지는 문제
CoreLib 1.12에서 수정된 사항이 포함될 예정입니다.
https://github.com/AdguardTeam/CoreLibs/issues/1522

## DPI로부터 보호가 발생시키는 웹 사이트 방문 및 콘텐츠 로드 오류
[List-KR/anti-DPI-excepti0n](https://list-kr.github.io/anti-DPI-excepti0n/) 도구를 사용해서 예외 규칙을 생성하실 수 있습니다.


이러한 예외 규칙은 아래 위치에서 AdGuard에 추가하실 수 있습니다:

 - AdGuard for Windows: Windows 시스템 트레이에 있는 AdGuard 로고 -> 도구 -> 필터 편집기 -> 사용자 규칙
 - AdGuard for Android: 보호 탭 -> 광고 차단 -> 사용자 규칙
 - AdGuard for Mac: macOS 메뉴 바에 있는 AdGuard 로고 -> 설정 -> 필터 -> 사용자 규칙

# Android용 AdGuard
## 3.x 버전 대비 4.0에서 자주 꺼지거나 필터링이 자주 재시작하는 경우
최근에 발생한 버그이며 4.1에서 수정될 예정입니다.
https://github.com/AdguardTeam/AdguardForAndroid/issues/4707

# Windows용 AdGuard
## 보안 프로그램 충돌

인터넷 금융 거래 등의 작업을 할 때는 대한민국에서는 보안 프로그램을 필요로 합니다.

AdGuard와 동시에 사용할 때 웹 사이트 접속 불가 등의 문제가 발생할 수 있으므로 평상 시에는 보안 프로그램 제거를 권장합니다.

- [구라제거기](https://teus.me/category/IT/%EA%B5%AC%EB%9D%BC%EC%A0%9C%EA%B1%B0%EA%B8%B0)는 보안 프로그램을 일괄 제거할 수 있도록 도와줍니다.

제거가 완료되면 컴퓨터를 재부팅한 뒤 문제가 해결되었는지 확인하십시오.

호스트 Windows 환경과 금융 보안 소프트웨어가 설치된 환경을 쉽게 격리하시라면, [식탁보 프로젝트](https://yourtablecloth.app/)의 사용을 권장드립니다.

아니면, 아래 중 하나를 선택해 Windows가 설치된 가상 머신을 생성하고 금융 보안 소프트웨어를 그 곳에서 설치하는 방법도 있습니다:
 - [Oracle VM VirtualBox](https://www.virtualbox.org/)
 - [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html)

# 비인가 AdGuard 클라이언트

소스코드를 임의적으로 변경하는 등 비인가 AdGuard 클라이언트를 사용하는 경우에는 도움을 드릴 수 없으며 관련된 작업은 위법입니다.