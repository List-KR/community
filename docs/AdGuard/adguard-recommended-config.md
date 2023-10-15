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

일본어 웹 사이트를 자주 방문하신다면 추가로 AdGuard 일본어 필터(특정 언어)도 활성화하십시오.

### 모바일 환경

추가로 AdGuard 모바일 광고 필터 (광고 차단)를 활성화하면 모바일 웹 사이트의 광고 차단 또한 효과적으로 가능합니다.

## DPI로부터 보호

AdGuard 프리미엄을 사용하시는 경우 스텔스 모드의 DPI로부터 보호를 활성화하여 HTTPS 검열이라고 불리는 SNI 필드 취약점을 사용한 DPI 우회가 가능합니다.

일부 웹 사이트에서는 접속 문제가 발생할 수 있습니다.

문제가 발생하는 경우 사이드바의 연락처에서 @piquark6046 이메일로 알려주시거나 새 이슈를 만들어주십시오.

Windows, Mac용 AdGuard에서는 설정 -> 스텔스 모드 -> 기타에서 활성화할 수 있습니다.

Android용 AdGuard에서는 보호 탭 -> 추적 보호 -> 사용자 정의로 변경하신 후에 기타에서 활성화할 수 있습니다.

iOS용 AdGuard는 아직 지원하지 않으나, 관련하여 요청하는 [AdguardTeam/AdguardForiOS#2076](https://github.com/AdguardTeam/AdguardForiOS/issues/2076)가 열려있습니다.

SKT와 LG U+ 환경에서는 AdGuard의 DPI로부터 보호 기능이 정상적으로 동작하지만, KT에서는 제대로 동작하지 않고 있습니다.
이를 해결하기 위해, [AdguardTeam/CoreLibs#1787](https://github.com/AdguardTeam/CoreLibs/issues/1789)가 열렸습니다.

만약, DPI로부터 보호 기능이 다른 웹 사이트에서 오작동하여 해당 웹 사이트에 방문할 수 없거나 콘텐츠를 제대로 로드할 수 없는 경우, [List-KR/anti-DPI-excepti0n](https://anti-dpi-excepti0n.list-kr.com/) 도구를 사용해서 예외 규칙을 생성하실 수 있습니다.
이러한 예외 규칙은 아래 위치에서 적용하실 수 있습니다:
- AdGuard for Windows: Windows 시스템 트레이에 있는 AdGuard 로고 -> 도구 -> 필터 편집기 -> 사용자 규칙
- AdGuard for Android: 보호 탭 -> 광고 차단 -> 사용자 규칙
- AdGuard for Mac: macOS 메뉴 바에 있는 AdGuard 로고 -> 설정 -> 필터 -> 사용자 규칙

## DNS

대한민국에서 가장 가까운 AdGuard DNS 서버는 일본에 위치해 있습니다.

DNS 필터링은 웹 사이트에서 의도하지 않은 오작동을 유발할 수 있으니 일반적인 사용 환경에서는 사용을 권장하지 않습니다.

iOS용 AdGuard Pro에서는 DNS 필터링에 아래 URL을 사용하여 List-KR DNS를 추가할 수 있습니다.

```
https://cdn.jsdelivr.net/gh/adguardteam/HostlistsRegistry@main/assets/filter_25.txt
```
