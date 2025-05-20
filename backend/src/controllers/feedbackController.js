const RouteFeedback = require("../models/Feedback");
const { successResponse, errorResponse } = require("../utils/responseUtil");

const feedbackController = {
    createFeedback: async (req, res) => {
        try {
            const { route, driver, rating, text } = req.body;
            const user = req.user._id; // Récupéré du middleware d'authentification

            const feedback = new RouteFeedback({
                user,
                route,
                driver,
                rating,
                text
            });

            await feedback.save();
            return successResponse(res, "Feedback created successfully", feedback);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    },

    getFeedbackByRoute: async (req, res) => {
        try {
            const { routeId } = req.params;
            const feedbacks = await RouteFeedback.find({ route: routeId })
                .populate('user', 'name email')
                .populate('driver', 'name')
                .populate('route', 'routeNo name');
            
            return successResponse(res, "Feedbacks retrieved successfully", feedbacks);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    },

    getFeedbackByDriver: async (req, res) => {
        try {
            const { driverId } = req.params;
            const feedbacks = await RouteFeedback.find({ driver: driverId })
                .populate('user', 'name email')
                .populate('route', 'routeNo name');
            
            return successResponse(res, "Feedbacks retrieved successfully", feedbacks);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    },

    getAllFeedbacks: async (req, res) => {
        try {
            const feedbacks = await RouteFeedback.find()
                .populate('user', 'name email')
                .populate('driver', 'name')
                .populate('route', 'routeNo name');
            
            return successResponse(res, "All feedbacks retrieved successfully", feedbacks);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    },

    deleteFeedback: async (req, res) => {
        try {
            const { feedbackId } = req.params;
            const feedback = await RouteFeedback.findById(feedbackId);

            if (!feedback) {
                return errorResponse(res, "Feedback not found");
            }

            // Vérifier si l'utilisateur est le propriétaire du feedback
            if (feedback.user.toString() !== req.user._id.toString()) {
                return errorResponse(res, "Not authorized to delete this feedback");
            }

            await feedback.deleteOne();
            return successResponse(res, "Feedback deleted successfully");
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
};

module.exports = feedbackController; 