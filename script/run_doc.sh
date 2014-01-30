#!/bin/sh

# /*!
#     Lance la génération de la documentation pour le module DzTask
#     @author Adrien Desfourneaux (aka Dieze) <dieze51@gmail.com>
#  */

# SCRIPTPATH = zf2_app/module/DzTask/script
SCRIPTPATH=$( cd "$(dirname "$0")" ; pwd -P )
cd $SCRIPTPATH/..
mkdir -p doc
../../vendor/bin/phpdoc.php run -d . -t doc
