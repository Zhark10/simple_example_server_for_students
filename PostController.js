import PostService from "./PostService.js"

class PostController {

  async createPost(req, res) {
    try {
      const newPost = await PostService.createPost(req.body, req.files.picture)
      return res.json(newPost)
    } catch (error) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (error) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      return res.json(updatedPost)
    } catch (error) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id)
      return res.json(deletedPost)
    } catch (error) {
      res.status(500).json(e)
    }
  }

}

export default new PostController();