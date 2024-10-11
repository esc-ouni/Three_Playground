var Q = require("q");

module.exports = gasp;

function gasp (task, interval) {
    if (!task) {
        throw new Error("No task specified.");
    }
    var deferred, timeout, args, savedArgs,
        inProgress = false;

    if (typeof interval === "undefined") {
        interval = 50;
    }

    // This function accepts the arguments that will be passed to the task function
    function gasped () {
        if(!inProgress) {
            args = Array.prototype.slice.call(arguments,0);
        } else {
            savedArgs = Array.prototype.slice.call(arguments,0);
        }

        if(!timeout) {
            // reset the deferred and the timeout
            deferred = Q.defer();
            timeout = setTimeout(function () {
                if(inProgress === true) {
                    // then we are colliding with a previous gasp.
                    args = savedArgs;
                    if (gasped.delegate && typeof gasped.delegate.willCollideWithPreviousGasp === "function") {
                        gasped.delegate.willCollideWithPreviousGasp.call(null, gasped, args);
                    }
                    clearTimeout(timeout);
                    timeout = null;
                    inProgress = false;
                    return;
                } else {
                    inProgress = true;
                }

                // notify delegate
                if (gasped.delegate && typeof gasped.delegate.willGasp === "function") {
                    gasped.delegate.willGasp.call(null, gasped, args);
                }
                clearTimeout(timeout);
                timeout = null;
                Q.fcall(function () {
                    return task.apply(this, args);
                })
                .then(function () {
                    deferred.resolve(true);
                }).fail(function (reason) {
                    deferred.reject(reason);
                })
                .finally(function () {
                    inProgress = false;
                    args = savedArgs;
                })
                .done();
            }, interval);
        }

        return deferred.promise;
    }
    return gasped;
}
