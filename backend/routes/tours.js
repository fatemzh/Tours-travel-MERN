
import express from 'express'
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour} from './../controllers/tourController.js'

const router = express.Router()

//create new tour
router.post('/', createTour)

//update tour
router.put('/:id', updateTour)

//delete tour
router.delete('/:id', deleteTour)

//get single tour
router.get('/:id', getSingleTour)

//get all tours
router.get('/', getAllTour)

export default router

