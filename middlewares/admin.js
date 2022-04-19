function authAdmin(res, req, next) {
  if (req.query.admin == 1) {
    console.log('Admin logged');
    next();
  } else {
    res.send({ error: 'Usted no tiene acceso' });
  }
}

module.exports = authAdmin;
