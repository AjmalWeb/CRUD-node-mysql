module.exports = (sequelize, DataType) => {
    const Review = sequelize.define("review", {
      
      rating: {
        type: DataType.INTEGER,
      },
      description: {
        type: DataType.TEXT,
      },
    
    });
    return Review;
  };
  