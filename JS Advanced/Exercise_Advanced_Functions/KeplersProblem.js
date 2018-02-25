function solve(start, end) {

    var result = null;

    while(result === null) {
        var resultStart = Math.abs(-start + Math.sin(-start));
        var resultEnd = Math.abs(-end + Math.sin(-end));
        if(resultStart === 0) {
            result = start;
        } else if (resultEnd === 0) {
            result = end;
        } else {
            if (resultStart > resultEnd) {
                var startOld = start;
                start = (start+end)/2;
                if(startOld === start) { // underflow
                    result = start;
                }
            } else {
                var endOld = end;
                end = (start+end)/2;
                if(endOld === end) { // underflow
                    result = end;
                }
            }
        }
    }

    console.log(result);
}
solve(0.2,4.8 )