const Post = require("../models/Post");
const User = require("../models/User");

const FindPost =async ()=>{
    try {
        const post = await Post.find();
        return post;
    } catch (err) {
        console.log(err);
    }
}