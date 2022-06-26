const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// 投稿を作成する
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)

  try {
    const savedPost = await newPost.save()
    return res.status(200).json(savedPost)
  } catch (err) {
    return res.status(500).json(err)
  }
})

// 投稿を更新する
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      })
      return res.status(200).json('投稿内容を更新しました')
    } else {
      return res.status(403).json('あなたは他の人の投稿を編集できません')
    }
  } catch (err) {
    return res.status(403).json(err)
  }
})

// 投稿を削除する
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      return res.status(200).json('投稿を削除しました')
    } else {
      return res.status(403).json('あなたは他の人の投稿を削除できません')
    }
  } catch (err) {
    return res.status(403).json(err)
  }
})

// 投稿を取得する
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    return res.status(200).json(post)
  } catch (err) {
    return res.status(403).json(err)
  }
})

// 特定の投稿に「いいね」をおす
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    // まだ投稿にいいねがおされていなかったら
    if (!post.likes.includes(req.body.userId)) {
      // likes Arrayにreqから渡されたユーザーIDが格納されていなかったら
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      })

      return res.status(200).json('いいねしました')
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      })

      return res.status(200).json('いいねを取り消しました')
    }
  } catch (err) {
    return res.status(500).json(err)
  }
})

// タイムラインの投稿を取得
router.get('/timeline/all', async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId)
    const userPosts = await Post.find({ userId: currentUser._id })

    // 自分がフォローしている友達の投稿内容を全て取得する
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId })
      }),
    )

    return res.status(200).json(userPosts.concat(...friendPosts)) // concat() ---> 2つ以上の配列を結合する
    // ...friendPosts　とスプレッド構文にしているのは、friendPostsが配列でデータを格納しておりその格納されているデータを一つずつ取り出すため
  } catch (err) {
    return res.json(500).json(err)
  }
})

module.exports = router
