import express from 'express'
import { getSamplePacks } from '../controller/samplePacks.js'
import { downloadSample, getSamples } from '../controller/samples.js'
import Samples from '../models/Samples.js'

const router = express.Router()

router.get('/getSamples', getSamples)
router.get('/dowloadSample', downloadSample)
router.get('/getSamplePacks', getSamplePacks)

export default router;