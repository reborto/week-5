
  
 function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal;
    }

    function sub() {
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;
        return subTotal;
    }

    function molt() {
        let moltTotal = [0];
        for (num of numbers) moltTotal *= num;
        return moltTotal / numbers[0];
    }

    function divis() {
        let divisTotal = numbers[0];
        for (num of numbers) divisTotal /= num;
        return divisTotal * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        molt: molt(),
        divis: divis(),
    };


}