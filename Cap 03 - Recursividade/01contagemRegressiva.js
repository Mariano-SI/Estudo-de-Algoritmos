function regressiva(num){
    console.log(num);
    if(num<=1){ //caso base
      return;
    }else{
      regressiva(num-1); //caso recursivo
    }
  }
  
  regressiva(100);