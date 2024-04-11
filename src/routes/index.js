const { Router  } = require('express')
const routerUser = require('./userRoute')
const routerCard = require('./cardRoute')
const routerTag = require('./tagRoute')
const router = Router()

router.use('/user', routerUser )
router.use('/card', routerCard)
router.use('/tag', routerTag)


module.exports = router