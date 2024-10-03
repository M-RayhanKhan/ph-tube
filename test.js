function getTimeString(time){
    const hours = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;

    console.log(`${hours} hours ${minute} minute ${remainingSecond} second`);
}
getTimeString(7865)