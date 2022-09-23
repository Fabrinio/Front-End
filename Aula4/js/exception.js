try {
    let preco= -10;
    //execption que está prevista
    if (preco < 0) {
        throw new Error("Valor Inválido!");
    }
    console.log(preco);
} catch (error) {
    console.log("Erro! Progama abortado!");
    console.log("Erro: " + error.message); 
    preco = 0;
    
}finally{
    console.log("Progama finalizado com sucesso!");
}