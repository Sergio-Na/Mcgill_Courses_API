const express = require('express')
const router = express.Router()
const {getCourses, setCourse, updateCourse, deleteCourse} = require('../controller/courseController')

router.get('/', getCourses)

router.post('/',setCourse) 

router.put('/:id', updateCourse)

router.delete('/:id', deleteCourse)



module.exports = router