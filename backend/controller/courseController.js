const asyncHandler = require('express-async-handler')


// @desc Get goals
// @route GET /api/courses
// @access Public 
const getCourses = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get courses'})
})


// @desc Set goal
// @route POST /api/courses
// @access Private 
const setCourse = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message: 'Set course'})
})


// @desc Update course
// @route PUT /api/courses/:id
// @access Private 
const updateCourse = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update course ${req.params.id}`})
})

// @desc delete goal
// @route DELETE /api/courses/:id
// @access Private 
const deleteCourse = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete course ${req.params.id}`})
})



module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse
}