'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    comment: {
      type: DataTypes.STRING,
    },
    post_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    },
  }, {
    timestamps: true
  });
  return Comment;
};