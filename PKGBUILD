_pkgname=demo

pkgname=${_pkgname}
pkgver=1
pkgrel=1
pkgdesc='hello'
arch=(any)
makedepends=('npm')
depends=('nodejs')
source=('filename.tar.gz::https://source.tar.gz')
md5sums=('SKIP')
sha256sums=('SKIP')
install="${_pkgname}.intall"

package()
{
    echo 'Hello world'
    tar -xvf filename.tar.gz
    echo ${srcdir}
    echo ${pkgdir}
    ...etc scripts or logic
}