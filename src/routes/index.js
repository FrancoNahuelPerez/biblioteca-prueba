const { Router  } = require('express')
const routerUser = require('./userRoute')
const routerCard = require('./cardRoute')
const router = Router()

router.use('/user', routerUser )
router.use('/card', routerCard)


module.exports = router