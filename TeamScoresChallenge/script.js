var johnTeamAverageScore, markTeamAverageScore, maryTeamAverageScore;

johnTeamAverageScore = averageScore(116,94,123);
markTeamAverageScore = averageScore(116,94,123);
maryTeamAverageScore = averageScore(116,94,123);

switch(true){ 
        
    case (johnTeamAverageScore===markTeamAverageScore) && (markTeamAverageScore===maryTeamAverageScore):
        console.log('Draw');
        break;
    case (johnTeamAverageScore===markTeamAverageScore) && (johnTeamAverageScore>maryTeamAverageScore):
        console.log('There is a draw between John\'s and Mark\'s team: ' + johnTeamAverageScore + ' John points '  + markTeamAverageScore + ' Mark points');
        break;
     case (maryTeamAverageScore===markTeamAverageScore) && (maryTeamAverageScore>johnTeamAverageScore):
        console.log('There is a draw between Mary\'s and Mark\'s team: ' + maryTeamAverageScore + ' Mary points '  + markTeamAverageScore + ' Mark points');
        break;
     case (maryTeamAverageScore===johnTeamAverageScore) && (johnTeamAverageScore>markTeamAverageScore):
        console.log('There is a draw between Mary\'s and John\'s team: ' + maryTeamAverageScore + ' Mary points '  + johnTeamAverageScore + ' John points');
        break;
    case (johnTeamAverageScore>markTeamAverageScore) && (johnTeamAverageScore>maryTeamAverageScore):
        console.log('Joh\'s team is the winner: ' + johnTeamAverageScore + ' points');
        break;
    case (markTeamAverageScore>maryTeamAverageScore) && (markTeamAverageScore>johnTeamAverageScore):
        console.log('Mark\'s team is the winner: ' + markTeamAverageScore + ' points');
        break;
     case (maryTeamAverageScore>johnTeamAverageScore) && (maryTeamAverageScore>markTeamAverageScore):
        console.log('Mary\'s team is the winner: ' + maryTeamAverageScore + ' points');
        break;
    default:
        console.log('ha ha ha');
        break;
}

function averageScore(firstGame, secondGame, thirdGame){
    return (firstGame+secondGame+thirdGame)/3;
}