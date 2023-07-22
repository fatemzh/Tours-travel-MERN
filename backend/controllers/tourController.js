
import Tour from '../models/Tour.js'

// create new tour
export const createTour = async (req, res) => {
    try{
        const savedTour = await newTour.save()

        res 
        .status(200)
        .json({
            success: true,
            message: 'Tour created successfully',
            data: savedTour,
        })
    }catch (err) {
        res
      .status(500)
      .json({
        success: false,
        message: "Failed to create. Try again",
      })
    }
}