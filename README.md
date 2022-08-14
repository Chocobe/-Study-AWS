# AWS 스터디

* 스터디 강좌: [[리뉴얼] 스스로 구축하는 AWS 클라우드 인프라 - 기본편](https://www.inflearn.com/course/aws-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%9D%B8%ED%94%84%EB%9D%BC-%EA%B8%B0%EB%B3%B8/dashboard)

* 스터디 할 서비스는 다음과 같습니다.
  * ``Amazon S3``
  * ``Amazon CloudFront``
  * ``Amazon EC2``
  * ``Elastic Load Balancer``
  * ``Amazon VPC``
  * ``Amazon RDS``
  * ``Auto Scaling``



<br /><hr /><br />



# 00. 각 서비스 개요

## ``Amazon S3``

> [공식문서](https://aws.amazon.com/ko/s3/faqs/?nc=sn&loc=7)
>
> Amazon S3는 어디서나 원하는 양의 데이터를 저장하고 검색할 수 있도록 구축된 객체 스토리지입니다. 업계 최고 수준의 내구성, 가용성, 성능, 보안 및 거의 무제한의 확장성을 아주 저렴한 요금으로 제공하는 단순한 스토리지 서비스입니다.

``Amazon S3`` 는 ``저장소`` 입니다.

``S3`` 는 클라우드 네이티브 스토리지 역할을 하며, ``데이터를 저장`` 할 수 있는 공간이 됩니다.



<br /><hr /><br />



## ``Amazon CloudFlont``

> [공식문서](https://aws.amazon.com/ko/cloudfront/faqs/?nc=sn&loc=5&dn=2)
> 
> Amazon CloudFront는 비즈니스 및 웹 애플리케이션 개발자에게 짧은 지연 시간과 빠른 데이터 전송 속도를 사용하여 콘텐츠를 간편하고 비용 효율적으로 배포할 방법을 제공합니다. 모든 AWS 인프라 서비스와 마찬가지로 Amazon CloudFront는 장기 약정 또는 최소 요금이 필요 없고 사용량에 따라 지불하는 셀프 서비스입니다. CloudFront를 사용하면 엣지 로케이션의 글로벌 네트워크를 사용해 최종 사용자에게 파일이 전송됩니다.

``Amazon CloudFront`` 는 개발자에게 짧은 지연 시간과 빠른 데이터 전속 속도를 제공하여, 간편하고 비용 효츌적으로 배포할 수 있도록 해 줍니다.



<br /><hr /><br />



## ``Amazon EC2``

> [공식문서](https://aws.amazon.com/ko/ec2/faqs/)
>
> Amazon Elastic Compute Cloud(Amazon EC2)는 클라우드에서 컴퓨팅 파워의 규모를 자유자재로 변경할 수 있는 웹 서비스입니다. 개발자가 보다 쉽게 웹 규모의 컴퓨팅 작업을 수행할 수 있도록 설계되었습니다.

웹 애플리케이션을 클라우드로 배포하기 위한 공간(용량)을 확보하는 서비스 입니다.



<br /><hr /><br />



## ``Elastic Load Balancer``

> [공식문서](https://aws.amazon.com/ko/elasticloadbalancing/faqs/?nc=sn&loc=6)

``Load Balancer`` 는 서버에 가해지는 ``부하`` 를 ``분산`` 시키는 기능을 합니다.



<br /><hr /><br />



## ``Amazon VPC``

> [공식문서](https://aws.amazon.com/ko/vpc/faqs/)
> 
> Amazon VPC를 사용하면 Amazon Web Services(AWS) 클라우드에서 논리적으로 격리된 공간을 프로비저닝하고, 정의한 가상 네트워크에서 AWS 리소스를 시작할 수 있습니다. 자체 IP 주소 범위 선택, 서브넷 생성, 라우팅 테이블 및 네트워크 게이트웨이 구성 등 가상 네트워킹 환경을 완벽하게 제어할 수 있습니다. 또한, 기업 데이터 센터와 VPC 사이에 하드웨어 가상 프라이빗 네트워크(VPN) 연결을 생성하여, 기업 데이터 센터의 확장으로서 AWS 클라우드를 사용할 수 있습니다.
>
> Amazon VPC용 네트워크 구성을 손쉽게 사용자 지정할 수 있습니다. 예를 들어, 인터넷에 액세스할 수 있는 웹 서버를 위해 퍼블릭 서브넷을 생성할 수 있으며, 인터넷 액세스가 없는 프라이빗 서브넷에 데이터베이스나 애플리케이션 서버와 같은 백엔드 시스템을 배치할 수 있습니다. 보안 그룹 및 네트워크 액세스 제어 목록을 포함한 다중 보안 계층을 활용하여 각 서브넷에서 Amazon EC2 인스턴스에 대한 액세스를 제어하도록 지원할 수 있습니다.

``Virtual Private Cloud (VPC)`` 는 ``AWS 클라우드`` 에서 논리적으로 격리된 공간을 만드는 서비스 입니다.

``데이터베이스`` 나 ``애플리케이션 서버`` 와 같은 ``Back-End`` 를 배치하기 위한 공간을 만드는데 사용합니다.

또한 ``EC2`` 인스턴스에 대한 접근을 제어할 수도 있습니다.



<br /><hr /><br />



## ``Amazon RDS``

> [공식문서](https://aws.amazon.com/ko/rds/faqs/)
> 
> Amazon Relational Database Service(Amazon RDS)는 클라우드에서 관계형 데이터베이스를 쉽게 설치, 운영 및 확장할 수 있는 관리형 서비스입니다. 이 서비스는 시간 소모적인 데이터베이스 관리 작업을 처리하는 한편 비용 효율적이고 크기를 조정할 수 있는 용량을 제공하므로, 고객은 애플리케이션과 비즈니스에 좀 더 집중할 수 있습니다.

``클라우드`` 에 설치하여 사용하는 ``관계형 데이터 베이스`` 입니다.



<br /><hr /><br />



## ``Auto Scaling``

> [공식문서](https://aws.amazon.com/ko/autoscaling/faqs/)
> 
> AWS Auto Scaling은 쉽고 안전하게 여러 AWS 리소스의 규모를 조정함으로써 인프라 비용을 낮추면서 애플리케이션 성능을 최적화하는 데 도움이 되는 새로운 AWS 서비스입니다. 클릭 몇 번으로 애플리케이션을 지원하는 관련 리소스 모음을 조정할 수 있으므로 규모 조정 경험이 간소화됩니다. AWS Auto Scaling은 애플리케이션을 지원하는 전체 인프라 스택에 걸쳐 적절하고 일관된 규모 조정 정책을 구성하는 데 도움이 됩니다. AWS Auto Scaling은 선택한 규모 조정 전략을 유지하는 데 필요한 경우 리소스 규모를 자동으로 조정하므로, 성능을 유지하고 실제로 필요한 리소스에 대해서만 비용을 지불할 수 있습니다.

``AWS`` 리소스를 최적화 시키는 서비스 입니다.

``AWS`` 리소스 규모를 조정하여 ``인프라 비용`` 을 줄이고, ``성능을 최적화`` 할 수 있습니다.



<br /><hr /><br />



# 01. ``EC2`` 인스턴스 생성하기

> Amazon EC2를 사용하면 AWS 클라우드에서 실행되는 ``가상 머신`` 또는 ``인스턴스`` 를 생성할 수 있습니다.

클라우드에서 실행될 웹 애플리케이션의 환경을 만듭니다.

<img src="./readmeAssets/01-EC2%20생성하기%2001.png" width="700px"><br />

<br />

``EC2 인스턴스`` 를 생성하기 위해, 좌측 메뉴에서 ``인스턴스`` 페이지를 클릭 합니다.

``인스턴스 페이지`` 에서 우측 상단의 ``인스턴스 시작`` 으로 ``인스턴스 생성`` 을 할 수 있습니다.

<img src="./readmeAssets/01-EC2%20생성하기%2002.png" width="700px"><br />

<br />


* 이름 및 태그

    <img src="./readmeAssets/01-EC2%20생성하기%2003.png" width="700px"><br />

* 애플리케이션 및 OS 이미지(Amazon Machine Image)

    <img src="./readmeAssets/01-EC2%20생성하기%2004.png" width="700px"><br />

* 인스턴스 유형

    <img src="./readmeAssets/01-EC2%20생성하기%2005.png" width="700pwd"><br />

* 키 페어(로그인)
    * 생성한 ``키 페어`` 가 있어야만 ``인스턴스`` 에 접근할 수 있습니다.

    * ``PuTTY`` 를 사용하여 ``인스턴스`` 에 접근할 것이므로, ``.ppk`` 확장자로 ``키 페어`` 를 생성합니다.

    <img src="./readmeAssets/01-EC2%20생성하기%2006.png" width="700px"><br />

* 네트워크 설정

    <img src="./readmeAssets/01-EC2%20생성하기%2007.png" width="700px"><br />

* 스토리지 구성

    <img src="./readmeAssets/01-EC2%20생성하기%2008.png" width="700px"><br />

<br />

위 설정을 한 후, ``인스턴스 생성`` 버튼으로 생성할 수 있습니다.

<img src="./readmeAssets/01-EC2%20생성하기%2009.png" width="700px"><br />



<br /><br />



``PuTTY`` 를 사용하여, 위에서 생성한 인스턴스에 접근해 보겠습니다.

테스트 플로우는 다음과 같습니다.

1. ``PuTTY`` 에서 ``키 페어`` 를 사용하여 ``인스턴스`` 에 접근하기
2. ``ping`` 명령을 사용하여 ``google.com`` 페이지의 ``ping`` 모니터링 하기

<br />

아래 이미지를 참고하여, ``PuTTY`` 로 ``인스턴스`` 에 접근합니다.

1. 인스턴스의 ``퍼블릭 IPv4 주소`` 를 복사 합니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2001.png" width="700px"><br />

2. ``PuTTY`` 를 실행하여 ``IP address`` 에 붙여넣기 합니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2002.png" width="700px"><br />

3. ``connection/SSH/Auth`` 탭에서 ``키 페어`` 파일을 등록 합니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2003.png" width="700px"><br />

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2004.png" width="700px"><br />

4. ``open`` 버튼으로 실행합니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2005.png" width="700px"><br />

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2006.png" width="700px"><br />

5. ``인스턴스`` 에 로그인할 사용자 명을 입력 합니다.

    * ``EC2 인스턴스`` 의 기본 유저명은 ``ec2-user`` 입니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2007.png" width="700px"><br />

6. ``EC2 인스턴스`` 에 정상 접속이 되었다면, 다음과 같은 결과를 볼 수 있습니다.

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2008.png" width="700px"><br />

7. ``ping`` 명령을 실행해 봅니다.

    * ``$ ping google.com``

    <img src="./readmeAssets/01-EC2%20인스턴스%20접근%2009.png" width="700px"><br />