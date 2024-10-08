---
title: AdGuard 권장 설정
sidebar_position: 3
---


## 필터

### AdGuard (애드가드) 공통

Windows, Android, iOS, Mac용 AdGuard와 브라우저 확장프로그램에서 한국어 웹 사이트의 광고 차단을 위해 아래 필터를 활성화하십시오.

- AdGuard 베이스 필터 (광고 차단)
- AdGuard 추격 보호 필터 (개인정보 보호)
- AdGuard URL 추격 필터 (개인정보 보호)
- List-KR (특정 언어)

일본어 웹 사이트를 자주 방문하신다면 추가로 AdGuard 일본어 필터(특정 언어)도 활성화해주세요.

### 모바일 환경

추가로 AdGuard 모바일 광고 필터 (광고 차단)를 활성화하면 모바일 웹 사이트의 광고 차단 또한 효과적으로 가능합니다.

## DPI로부터 보호

AdGuard 프리미엄을 사용하시는 경우 스텔스 모드의 DPI로부터 보호를 활성화하여 HTTPS 검열이라고 불리는 SNI 필드 취약점을 사용한 DPI 우회가 가능합니다.

일부 웹 사이트에서는 접속 문제가 발생할 수 있습니다.

문제가 발생하는 경우 사이드바의 연락처에서 @piquark6046 이메일로 알려주시거나 새 이슈를 만들어주십시오.

Windows, Mac용 AdGuard에서는 설정 -> 스텔스 모드 -> 기타에서 활성화할 수 있습니다.

Android용 AdGuard에서는 보호 탭 -> 추적 보호 -> 사용자 정의로 변경하신 후에 기타에서 활성화할 수 있습니다.

iOS용 AdGuard는 아직 지원하지 않으나, 관련하여 요청하는 [AdguardTeam/AdguardForiOS#2076](https://github.com/AdguardTeam/AdguardForiOS/issues/2076)가 열려있습니다.

SKT와 LG U+ 네트워크 환경에서는 AdGuard의 DPI로부터 보호 기능이 정상적으로 동작하지만, KT 네트워크에서는 다음 조건 및 추가 설정을 통해 우회가 가능합니다.
- AdGuard for Windows 7.17 이상 (안정 채널 포함): AdGuard 고급 설정 -> Anti-DPI: Increase first packet size 활성화

AdGuard for Android와 AdGuard for Mac에도 추후에 가능합니다.

## 유저스크립트

특수한 광고를 차단하기 위해서는 microShield와 NamuLink 유저스크립트 설치가 필요합니다.

각 페이지를 참고하셔서 설치를 진행해주세요:
 - microShield: https://list-kr-community.pages.dev/docs/AdGuard/Userscripts/microShield
 - NamuLink: https://list-kr-community.pages.dev/docs/AdGuard/Userscripts/NamuLink

## DNS

대한민국에서 가장 가까운 AdGuard DNS 서버는 일본에 위치해 있습니다.

Android에서 DNS 필터링은 웹 사이트에서 의도하지 않은 오작동을 유발할 수 있으니 일반적인 사용 환경에서는 사용을 권장하지 않습니다.

iOS용 AdGuard에서는 앱 광고 필터링을 위해 DNS 필터링에 아래 URL을 사용하여 List-KR DNS를 추가할 수 있습니다.

만약 DNS 서버를 설정하시기 원하시면, DPI 보호가 켜진 상태에서는 Cloudflare를, 보호가 꺼진 상태에서는 시스템 기본값을 선택해주세요. (만약 모바일 네트워크와 Wi-Fi간의 변경으로 인해 모바일에서 통신이 원할하지 않는다면, DNS 서버를 Cloudflare로 변경해보세요.)

```
https://cdn.jsdelivr.net/gh/adguardteam/HostlistsRegistry@main/assets/filter_25.txt
```

## 앱 관리 (Android)

금융 앱이나 페이 앱 처럼 Android의 VPN API 사용을 감지하는 앱의 경우에는 AdGuard for Android -> 앱 관리 탭 -> (앱 이름) 에서 필터링 유무를 설정하실 수 있습니다.