---
title: AdGuard외 다른 VPN 서비스를 함께 사용하기
sidebar_position: 5
---


## AdGuard for Android
### 표준 WireGuard 프로트콜를 로컬 프록시로 변환하는 방법으로 시작하기 [출처]
1. 자유 소프트웨어인 [NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid)를 설치해주세요.
2. 아래 VPN 서비스 중에 사용하실 VPN 서비스를 선택하시고 해당 섹션에 있는 방법을 참고하여 WireGuard 구성 파일을 다운로드해주세요.
3. AdGuard for Android -> 앱 관리에서 NekoBox 앱을 검색하시고 그 앱의 세부 설정으로 진입해주세요.
4. `AdGuard를 통해 트래픽을 라우팅 옵션`을 비롯한 모든 세부 옵션을 꺼주세요.
5. NekoBox 앱에서 파일 추가 버튼 -> `파일에서 불러오기` 항목을 누르시고, 해당 파일을 로드해주세요.
6. NekoBox 앱 메뉴 -> 설정에서 다음 항목을 모두 변경해주시고 맞는지 확인해주세요:
    - 서비스 모드: 프록시
    - Bypass LAN: 켬
    - Enable Traffic Sniffing: 켬
    - HTTP 인바운드 활성화: 켬
    - Append HTTP Proxy to VPN: 끔
7. NekoBox 홈에서 연결하실 연결 프로필을 선택하시고 종이비행기가 있는 연결 버튼을 눌러주세요.
8. AdGuard for Android -> 설정 -> 필터링 -> 네트워크 -> 프록시의 메인 스위치를 켜주세요.
9. AdGuard for Android -> 설정 -> 필터링 -> 네트워크 -> 프록시 -> 프록시 서버에서 `프록시 서버 추가` 버튼을 눌러주세요.
10. 프록시 유형을 `HTTP`로 변경해주세요.
11. 프록시 호스트를 `127.0.0.1`로 설정해주세요.
12. 프록시 포트를 `9080`로 설정해주세요.
13. 연결 상태 확인을 눌러서, 올바르게 하셨는지 확인해주시고, 확인이 완료되면 저장을 눌러주세요.

:::tip

만약 VPN에 연결시키고 싶지 않은 앱이나 브라우저가 있으시다면, AdGuard for Android -> 앱 관리 -> [해당 앱] -> 프록시를 통해 앱 라우팅을 꺼주세요.

:::
#### Mullvad
1. [Mullvad Account](https://mullvad.net/ko/account/login) 페이지에 방문해주세요.
2. [다운로드 -> WireGuard 구성 탭](https://mullvad.net/ko/account/wireguard-config)을 눌러주세요.
3. 플렛폼을 Android로 선택해주세요.
4. `키 생성` 버튼을 눌러서 WireGuared 키를 생성해주세요.
5. 연결 정보를 입력해주세요. (예: 출구 위치, 멀티홉 등)
6. AdGuard의 필터링에 의존해야 하므로 콘텐츠 차단 구성 없이 설정하시고, 다운로드해주세요.

#### ProtonVPN
1. [Proton 서비스](https://account.proton.me)에 로그인을 진행해주세요.
2. [Proton VPN의 WireGuard 페이지](https://account.proton.me/u/1/vpn/WireGuard)를 방문해주세요.
3. Proton의 NetShield 기능을 비활성화된 설정 파일을 다운로드해주세요.

:::caution

정기적인 만료 기간 연장이 필요합니다.

:::
### Mullvad VPN
[AdGuard for Android와 함께 사용할 수 있도록 하는 계획](https://github.com/mullvad/mullvadvpn-app/issues/3569)은 있으나 아직 Mullvad VPN 앱에서 지원하지 않습니다.

### ProtonVPN
[역시 비슷한 issue](https://github.com/ProtonVPN/android-app/issues/94)는 있으나 아직 Mullvad VPN 앱에서 지원하지 않습니다.

[출처]: https://www.reddit.com/r/Adguard/comments/xu0ug3/successfully_connected_wireguard_as_proxy_to/