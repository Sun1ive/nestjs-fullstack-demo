_pkgname=nest

pkgname=${_pkgname}
pkgver=1
pkgrel=1
pkgdesc='nestjs demo application'
arch=(any)
makedepends=('npm')
depends=('nodejs')
source=('https://github.com/Sun1ive/nestjs-fullstack-demo/releases/download/1.1.0/nest.tar.gz')
md5sums=('SKIP')
provides=('APPLICATION_NAME')
conflicts=('APPLICATION_NAME')
sha256sums=('SKIP')
install="${_pkgname}.install"

package()
{
    echo "Starting installing package ${_pkgname}"
    echo "Creating directories"
    mkdir -p "${pkgdir}/home/sunlive/TEST"
    cp -rf "${srcdir}/nestjs-fullstack-demo/client" "${pkgdir}/home/sunlive/TEST/"
    cp -rf "${srcdir}/nestjs-fullstack-demo/server" "${pkgdir}/home/sunlive/TEST/"
    echo "DONE"
}