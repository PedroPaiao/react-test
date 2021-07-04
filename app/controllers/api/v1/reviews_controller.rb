module Api
  module V1
    class ReviewsController < ApplicationController
      def create
        review = airline.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serializered_json
        else
          render json: review.error.messages, status: 422
        end
      end

      def destroy
        review = Review.find_by(params[:id])

        if review.destroy
          head :no_content
        else
          render json: review.error.messages, status: 422
        end
      end

      private

      def airline
        @airline ||= Airline.find(params[:airline_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end
    end
  end
end