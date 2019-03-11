_pkgname=nest

pkgname=${_pkgname}
pkgver=1
pkgrel=1
pkgdesc='nestjs demo application'
arch=(any)
makedepends=('npm')
depends=('nodejs')
source=('nest.tar.gz::https://github.com/Sun1ive/nestjs-fullstack-demo/releases/download/1.1.0/nest.tar.gz')
md5sums=('SKIP')
sha256sums=('SKIP')
install="${_pkgname}.install"

package()
{
    echo "Starting installing package ${_pkgname}"
    tar -xf nest.tar.gz
    echo ${srcdir}
    sudo mkdir "/opt/${_pkgname}" || echo "Working folder ${_pkgname} already exists!"
    sudo cp -rf "${srcdir}/nestjs-fullstack-demo/client/" "/opt/${_pkgname}/"
    sudo cp -rf "${srcdir}/nestjs-fullstack-demo/server/" "/opt/${_pkgname}/"
    echo "DONE"

    # echo "Starting application"
    # cd "/opt/${_pkgname}/server"
    # npm run start
}