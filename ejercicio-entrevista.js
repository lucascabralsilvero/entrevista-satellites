
// Crear una función que reciba un array de logs y un número máximo de minutos que un usuario puede estar conectado. La función debe devolver un array con los ids de los usuarios que cumplan con la condición de que su tiempo de conexión no supere el máximo de minutos.

function processLogs(logs, maxSpan) {
  maxSpan = 20;
  logs = [
    "30 99 sign-in",
    "30 105 sign-out",
    "12 100 sign-in",
    "20 80 sign-in",
    "12 120 sign-out",
    "20 101 sign-out",
    "21 110 sign-in",
  ];

  //Creo arrays vacíos para almacenar los datos de los usuarios
  let users = [],
    ids = [],
    times = [],
    actions = [],
    timeSpent = [],
    result = [];

    //Recorro el array de logs y lo separo en arrays de usuarios
  for (let i = 0; i < logs.length; i++) {
    users.push(logs[i].split(" "));
  }

  //Recorro el array de usuarios y los separo en arrays de ids, times y actions
  for (let i = 0; i < users.length; i++) {
    ids.push(users[i][0]);
    times.push(users[i][1]);
    actions.push(users[i][2]);
  }

  //Recorro los arrays de ids y actions y comparo los ids de los usuarios que hicieron sign-in con los ids de los usuarios que hicieron sign-out, si coinciden, calculo el tiempo que estuvieron conectados y lo almaceno en el array timeSpent
  for (let i = 0; i < ids.length; i++) {
    if (actions[i] == "sign-in") {
        //Recorro el array de ids y actions para comparar el id del usuario que hizo sign-in con los ids de los usuarios que hicieron sign-out
      for (let j = 0; j < ids.length; j++) {
        //Si el id del usuario que hizo sign-in coincide con el id de un usuario que hizo sign-out, calculo el tiempo que estuvo conectado y lo almaceno en el array timeSpent
        if (ids[i] == ids[j] && actions[j] == "sign-out") {
          timeSpent.push(times[j] - times[i]);
        }
      }
    }
  }


  //Recorro el array de tiempos y si el tiempo es menor que el máximo de minutos que un usuario puede estar conectado, almaceno el id del usuario en el array result
  for (let i = 0; i < timeSpent.length; i++) {
    if (timeSpent[i] < maxSpan) {
      result.push(ids[i]);
    }
  }

  return result;
}

console.log(processLogs());
