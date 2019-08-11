const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Mutation = {
  updatePost(_, args, ctx, info) {
    const {title, content, id} = args;
    return ctx.db.mutation.updatePost({
      data: {
        title,
        content
      },
      where: { id }
    }, info)
  },
  async createUser(_, args, ctx, info) {

    let { name, email, password } = args;

    password = await bcrypt.hash(password, 10)
    email = email.toLowerCase().trim();

    const user = await ctx.db.mutation.createUser({
      data: {
        name,
        email,
        password,
        permissions: { set: ['USER'] },
      }
    })

    const token = sign({ user_id: user.id }, process.env.JWT_SECRET)

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    })

    return user
  },

  async login(_, {email, password }, ctx, info) {
    
    const user = await ctx.db.query.user({
      where: { email }
    })

    if (!user) throw new Error('No Such User exists.');

    const valid = await bcrypt.compare(password, user.password);

    if(!valid) {
      throw new Error('Incorrect password.');
    }

    const token = await sign({ user_id: user.id }, process.env.JWT_SECRET)
    console.log(token)
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    console.log(ctx.response)

    return user;
  },
  logout(_, args, ctx, info) {

    ctx.response.clearCookie('token', { path: '/' })
    return { message: 'Goodbye!' };

  },

}

module.exports = Mutation