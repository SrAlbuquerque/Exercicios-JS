function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'admin') {
      admins.push(key);
    }
  }
  return admins;
}

const pessoas = new Map();

pessoas.set('Guilherme', 'admin');
pessoas.set('lav', 'admin');
pessoas.set('caio', 'funcio');
pessoas.set('ellem', 'funcio');
pessoas.set('gabriel', 'admin');

console.log(getAdmins(pessoas));