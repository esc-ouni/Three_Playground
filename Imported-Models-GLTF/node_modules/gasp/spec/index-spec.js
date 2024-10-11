var gasp = require("../index.js");
var Q = require("q");
require("./lib/jasmine-promise");

describe("gasp", function (){

    describe("module", function () {
        it("should be the gasp factory function", function () {
            expect(typeof gasp).toBe("function");
        });
    });

    describe("gasp function", function () {
        it("should return a function", function () {
            expect(typeof gasp(function () {})).toBe("function");
        });
        it("should throw when no task is specified", function () {
            expect(function () {
                gasp();
            }).toThrow();
        });
    });

    describe("gasped function", function () {
        var gasped;
        beforeEach(function () {
            gasped = gasp(function () {});
        });
        it("should return a promise", function () {
            expect(Q.isPromise(gasped())).toBeTruthy();
        });
        describe("returned promise", function () {
            var gasped, task;
            beforeEach(function () {
                task = jasmine.createSpy("task").andCallFake(function () {
                    throw new Error("BAD");
                });
                gasped = gasp(task);
            });
            it("should forward a rejection if the task throws an error", function () {
                return gasped()
                .then(function () {
                    expect(false).toBeTruthy();
                })
                .fail(function () {
                    expect(true).toBeTruthy();
                });
            });
        });
    });

    describe("task function", function () {
        var gasped, task;
        beforeEach(function () {
            task = jasmine.createSpy("task").andCallFake(function () {
                return Q(true);
            });
            gasped = gasp(task, 50);
        });
        it("should be called eventually", function () {
            return gasped()
            .then(function () {
                expect(task).toHaveBeenCalled();
            });
        });
        it("should be called with the last arguments by default", function () {
            gasped(998);
            return gasped(999)
            .then(function () {
                expect(task).toHaveBeenCalledWith(999);
            });
        });
        it("should only be called once per interval", function () {
            gasped();
            return gasped()
            .then(function () {
                expect(task.callCount).toEqual(1);
            });
        });
    });
    describe("using gasped function while in progress", function () {
        var gasped, task;
        beforeEach(function () {
            task = jasmine.createSpy("task").andCallFake(function () {
                return Q(true);
            });
            gasped = gasp(task, 50);
        });
        it("should result in two invocations of the task", function () {
            gasped.delegate = {
                willGasp: function(gasped) {
                    gasped(456);
                }
            };
            return gasped(123)
            .then(function () {
                expect(task).toHaveBeenCalledWith(123);
            });
        });
    });

    describe("delegate", function () {
        var gasped, task, delegate;
        beforeEach(function () {
            delegate = jasmine.createSpyObj('delegate', ['willGasp','willCollideWithPreviousGasp']);
            task = jasmine.createSpy("task");
            gasped = gasp(task, 50);
            gasped.delegate = delegate;
        });
        it("should result in two invocations of the task", function () {
            return gasped(123)
            .then(function () {
                expect(delegate.willGasp).toHaveBeenCalledWith(gasped,[123]);
            });
        });
        describe("collisions", function () {
            var deferred, slowTask;
            beforeEach(function () {
                deferred = Q.defer();
                slowTask = jasmine.createSpy("task").andCallFake(function () {
                    return deferred.promise;
                });
                //only resolve after willGasp so that they are guaranteed to collide
                gasped = gasp(slowTask, 5);
                gasped.delegate = delegate;

            });
            it("should call willCollideWithPreviousGasp", function () {
                var doneOnce = false, secondGasp = Q.defer();

                gasped(123);

                delegate.willGasp.andCallFake(function () {
                    if(!doneOnce) {
                        setTimeout(function () {
                            gasped(456)
                            .then(function () {
                                return secondGasp.resolve();
                            });
                        },10);
                        setTimeout(function () {
                            deferred.resolve(true);
                        },30);
                        doneOnce = true;
                    }
                });

                return secondGasp.promise
                .then(function () {
                    expect(delegate.willCollideWithPreviousGasp).toHaveBeenCalled();
                });

            });
        });
    });

});

//TODO deal with timeouts
//TODO scope of the task
