# AdGuard for Windows
## 금융 보안 소프트웨어와의 충돌로 인해 발생하는 경우
### 서론
대한민국에서 인터넷에서 금융 거래/작업을 하려고 하면, 대부분 공동인증서 소프트웨어나 보안 소프트웨어를 설치하라고 강요하죠.

그러나, 이러한 소프트웨어들은 사실은 보안을 향상 시키는 소프트웨어가 아닌 오히려 사용자의 프라이버시와 컴퓨터의 보안을 위협하는 소프트웨어에 불구해요.

이러한 프로그램은 소프트웨어 개발자가 소프트웨어에 대한 문제 보고를 받아도 패치 및 배포를 전혀 하지 않는 경우가 다수이예요.

사용자의 프라이버시와 컴퓨터의 보안을 위협에 대한 자세한 정보은 [Wladimir Palant가 작성한 글을 한국어로 번역한 글들](https://github.com/alanleedev/KoreaSecurityApps)을 참고해주세요.

### 충돌하는 경우 다양한 형태의 문제가 발생함
AdGuard for Windows와 금융 보안 소프트웨어가 충돌을 일으켜서 특정 웹 페이지나 프로그램이 작동하지 않는 경우가 있어요.

### 문제 해결하기
[구라제거기](https://teus.me/category/IT/%EA%B5%AC%EB%9D%BC%EC%A0%9C%EA%B1%B0%EA%B8%B0)라는 소프트웨어로 일괄 제거하실 수 있어요.

가장 최신 버전의 소프트웨어로 금융 보안 소프트웨어의 제거를 진행 후 Windows를 재부팅해주세요.

### 환경을 격리해서 호스트를 보호하기
호스트 Windows 환경과 금융 보안 소프트웨어가 설치된 환경을 쉽게 격리하시라면, [식탁보 프로젝트](https://yourtablecloth.app/)의 사용을 권장해요.

아니면, 아래 중 하나를 선택해 Windows가 설치된 가상 머신을 생성하고 금융 보안 소프트웨어를 그 곳에서 설치하는 방법도 있어요:
 - [Oracle VM VirtualBox](https://www.virtualbox.org/)
 - [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html)