class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :avg_score, :slug

  has_many :reviews
end
