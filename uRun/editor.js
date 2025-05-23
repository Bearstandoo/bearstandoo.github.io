var _amdLoaderGlobal = this,
    AMDLoader;
! function(e) {
    e.global = _amdLoaderGlobal, e.isNode = "undefined" != typeof module && !!module.exports, e.isWindows = function() {
        return !!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0) || "undefined" != typeof process && "win32" === process.platform
    }(), e.isWebWorker = "function" == typeof e.global.importScripts, e.isElectronRenderer = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "renderer" === process.type, e.isElectronMain = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "browser" === process.type, e.hasPerformanceNow = e.global.performance && "function" == typeof e.global.performance.now
}(AMDLoader || (AMDLoader = {}));
var AMDLoader;
! function(e) {
    function t() {
        return e.hasPerformanceNow ? e.global.performance.now() : Date.now()
    }
    var r;
    ! function(e) {
        e[e.LoaderAvailable = 1] = "LoaderAvailable", e[e.BeginLoadingScript = 10] = "BeginLoadingScript", e[e.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", e[e.EndLoadingScriptError = 12] = "EndLoadingScriptError", e[e.BeginInvokeFactory = 21] = "BeginInvokeFactory", e[e.EndInvokeFactory = 22] = "EndInvokeFactory", e[e.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", e[e.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", e[e.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", e[e.NodeEndNativeRequire = 34] = "NodeEndNativeRequire"
    }(r = e.LoaderEventType || (e.LoaderEventType = {})), e.getHighPerformanceTimestamp = t;
    var n = function() {
        function e(e, t, r) {
            this.type = e, this.detail = t, this.timestamp = r
        }
        return e
    }();
    e.LoaderEvent = n;
    var o = function() {
        function e(e) {
            this._events = [new n(r.LoaderAvailable, "", e)]
        }
        return e.prototype.record = function(e, r) {
            this._events.push(new n(e, r, t()))
        }, e.prototype.getEvents = function() {
            return this._events
        }, e
    }();
    e.LoaderEventRecorder = o;
    var i = function() {
        function e() {}
        return e.prototype.record = function(e, t) {}, e.prototype.getEvents = function() {
            return []
        }, e
    }();
    i.INSTANCE = new i, e.NullLoaderEventRecorder = i
}(AMDLoader || (AMDLoader = {}));
var AMDLoader;
! function(e) {
    var t = function() {
        function t() {}
        return t.fileUriToFilePath = function(t) {
            if (t = decodeURI(t), e.isWindows) {
                if (/^file:\/\/\//.test(t)) return t.substr(8);
                if (/^file:\/\//.test(t)) return t.substr(5)
            } else if (/^file:\/\//.test(t)) return t.substr(7);
            return t
        }, t.startsWith = function(e, t) {
            return e.length >= t.length && e.substr(0, t.length) === t
        }, t.endsWith = function(e, t) {
            return e.length >= t.length && e.substr(e.length - t.length) === t
        }, t.containsQueryString = function(e) {
            return /^[^\#]*\?/gi.test(e)
        }, t.isAbsolutePath = function(e) {
            return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)
        }, t.forEachProperty = function(e, t) {
            if (e) {
                var r = void 0;
                for (r in e) e.hasOwnProperty(r) && t(r, e[r])
            }
        }, t.isEmpty = function(e) {
            var r = !0;
            return t.forEachProperty(e, function() {
                r = !1
            }), r
        }, t.recursiveClone = function(e) {
            if (!e || "object" != typeof e) return e;
            var r = Array.isArray(e) ? [] : {};
            return t.forEachProperty(e, function(e, n) {
                n && "object" == typeof n ? r[e] = t.recursiveClone(n) : r[e] = n
            }), r
        }, t.generateAnonymousModule = function() {
            return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "==="
        }, t.isAnonymousModule = function(e) {
            return /^===anonymous/.test(e)
        }, t
    }();
    t.NEXT_ANONYMOUS_ID = 1, e.Utilities = t
}(AMDLoader || (AMDLoader = {}));
var AMDLoader;
! function(e) {
    var t = function() {
        function t() {}
        return t.validateConfigurationOptions = function(t) {
            function r(e) {
                return "load" === e.errorCode ? (console.error('Loading "' + e.moduleId + '" failed'), console.error("Detail: ", e.detail), e.detail && e.detail.stack && console.error(e.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(e.neededBy)) : "factory" === e.errorCode ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'), console.error(e.detail), void(e.detail && e.detail.stack && console.error(e.detail.stack))) : void 0
            }
            return t = t || {}, "string" != typeof t.baseUrl && (t.baseUrl = ""), "boolean" != typeof t.isBuild && (t.isBuild = !1), "object" != typeof t.paths && (t.paths = {}), "object" != typeof t.config && (t.config = {}), "undefined" == typeof t.catchError && (t.catchError = e.isWebWorker), "string" != typeof t.urlArgs && (t.urlArgs = ""), "function" != typeof t.onError && (t.onError = r), "object" == typeof t.ignoreDuplicateModules && Array.isArray(t.ignoreDuplicateModules) || (t.ignoreDuplicateModules = []), t.baseUrl.length > 0 && (e.Utilities.endsWith(t.baseUrl, "/") || (t.baseUrl += "/")), Array.isArray(t.nodeModules) || (t.nodeModules = []), ("number" != typeof t.nodeCachedDataWriteDelay || t.nodeCachedDataWriteDelay < 0) && (t.nodeCachedDataWriteDelay = 7e3), "function" != typeof t.onNodeCachedDataError && (t.onNodeCachedDataError = function(e) {
                "cachedDataRejected" === e.errorCode ? console.warn("Rejected cached data from file: " + e.path) : "unlink" !== e.errorCode && "writeFile" !== e.errorCode || (console.error("Problems writing cached data file: " + e.path), console.error(e.detail))
            }), t
        }, t.mergeConfigurationOptions = function(r, n) {
            void 0 === r && (r = null), void 0 === n && (n = null);
            var o = e.Utilities.recursiveClone(n || {});
            return e.Utilities.forEachProperty(r, function(t, r) {
                "ignoreDuplicateModules" === t && "undefined" != typeof o.ignoreDuplicateModules ? o.ignoreDuplicateModules = o.ignoreDuplicateModules.concat(r) : "paths" === t && "undefined" != typeof o.paths ? e.Utilities.forEachProperty(r, function(e, t) {
                    return o.paths[e] = t
                }) : "config" === t && "undefined" != typeof o.config ? e.Utilities.forEachProperty(r, function(e, t) {
                    return o.config[e] = t
                }) : o[t] = e.Utilities.recursiveClone(r)
            }), t.validateConfigurationOptions(o)
        }, t
    }();
    e.ConfigurationOptionsUtil = t;
    var r = function() {
        function r(r) {
            if (this.options = t.mergeConfigurationOptions(r), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
                if (e.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
                    var n = this.options.nodeRequire.main.filename,
                        o = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
                    this.options.baseUrl = n.substring(0, o + 1)
                }
                if (e.isNode && this.options.nodeMain) {
                    var n = this.options.nodeMain,
                        o = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
                    this.options.baseUrl = n.substring(0, o + 1)
                }
            }
        }
        return r.prototype._createIgnoreDuplicateModulesMap = function() {
            this.ignoreDuplicateModulesMap = {};
            for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0
        }, r.prototype._createNodeModulesMap = function() {
            this.nodeModulesMap = Object.create(null);
            for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
                var r = t[e];
                this.nodeModulesMap[r] = !0
            }
        }, r.prototype._createSortedPathsRules = function() {
            var t = this;
            this.sortedPathsRules = [], e.Utilities.forEachProperty(this.options.paths, function(e, r) {
                Array.isArray(r) ? t.sortedPathsRules.push({
                    from: e,
                    to: r
                }) : t.sortedPathsRules.push({
                    from: e,
                    to: [r]
                })
            }), this.sortedPathsRules.sort(function(e, t) {
                return t.from.length - e.from.length
            })
        }, r.prototype.cloneAndMerge = function(e) {
            return new r(t.mergeConfigurationOptions(e, this.options))
        }, r.prototype.getOptionsLiteral = function() {
            return this.options
        }, r.prototype._applyPaths = function(t) {
            for (var r, n = 0, o = this.sortedPathsRules.length; n < o; n++)
                if (r = this.sortedPathsRules[n], e.Utilities.startsWith(t, r.from)) {
                    for (var i = [], s = 0, d = r.to.length; s < d; s++) i.push(r.to[s] + t.substr(r.from.length));
                    return i
                } return [t]
        }, r.prototype._addUrlArgsToUrl = function(t) {
            return e.Utilities.containsQueryString(t) ? t + "&" + this.options.urlArgs : t + "?" + this.options.urlArgs
        }, r.prototype._addUrlArgsIfNecessaryToUrl = function(e) {
            return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e
        }, r.prototype._addUrlArgsIfNecessaryToUrls = function(e) {
            if (this.options.urlArgs)
                for (var t = 0, r = e.length; t < r; t++) e[t] = this._addUrlArgsToUrl(e[t]);
            return e
        }, r.prototype.moduleIdToPaths = function(t) {
            if (this.nodeModulesMap[t] === !0) return this.isBuild() ? ["empty:"] : ["node|" + t];
            var r, n = t;
            if (e.Utilities.endsWith(n, ".js") || e.Utilities.isAbsolutePath(n)) e.Utilities.endsWith(n, ".js") || e.Utilities.containsQueryString(n) || (n += ".js"), r = [n];
            else {
                r = this._applyPaths(n);
                for (var o = 0, i = r.length; o < i; o++) this.isBuild() && "empty:" === r[o] || (e.Utilities.isAbsolutePath(r[o]) || (r[o] = this.options.baseUrl + r[o]), e.Utilities.endsWith(r[o], ".js") || e.Utilities.containsQueryString(r[o]) || (r[o] = r[o] + ".js"))
            }
            return this._addUrlArgsIfNecessaryToUrls(r)
        }, r.prototype.requireToUrl = function(t) {
            var r = t;
            return e.Utilities.isAbsolutePath(r) || (r = this._applyPaths(r)[0], e.Utilities.isAbsolutePath(r) || (r = this.options.baseUrl + r)), this._addUrlArgsIfNecessaryToUrl(r)
        }, r.prototype.isBuild = function() {
            return this.options.isBuild
        }, r.prototype.isDuplicateMessageIgnoredFor = function(e) {
            return this.ignoreDuplicateModulesMap.hasOwnProperty(e)
        }, r.prototype.getConfigForModule = function(e) {
            if (this.options.config) return this.options.config[e]
        }, r.prototype.shouldCatchError = function() {
            return this.options.catchError
        }, r.prototype.shouldRecordStats = function() {
            return this.options.recordStats
        }, r.prototype.onError = function(e) {
            this.options.onError(e)
        }, r
    }();
    e.Configuration = r
}(AMDLoader || (AMDLoader = {}));
var AMDLoader;
! function(e) {
    var t = function() {
            function e(e) {
                this.actualScriptLoader = e, this.callbackMap = {}
            }
            return e.prototype.load = function(e, t, r, n) {
                var o = this,
                    i = {
                        callback: r,
                        errorback: n
                    };
                return this.callbackMap.hasOwnProperty(t) ? void this.callbackMap[t].push(i) : (this.callbackMap[t] = [i], void this.actualScriptLoader.load(e, t, function() {
                    return o.triggerCallback(t)
                }, function(e) {
                    return o.triggerErrorback(t, e)
                }))
            }, e.prototype.triggerCallback = function(e) {
                var t = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var r = 0; r < t.length; r++) t[r].callback()
            }, e.prototype.triggerErrorback = function(e, t) {
                var r = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var n = 0; n < r.length; n++) r[n].errorback(t)
            }, e
        }(),
        r = function() {
            function e() {}
            return e.prototype.attachListeners = function(e, t, r) {
                var n = function() {
                        e.removeEventListener("load", o), e.removeEventListener("error", i)
                    },
                    o = function(e) {
                        n(), t()
                    },
                    i = function(e) {
                        n(), r(e)
                    };
                e.addEventListener("load", o), e.addEventListener("error", i)
            }, e.prototype.load = function(e, t, r, n) {
                var o = document.createElement("script");
                o.setAttribute("async", "async"), o.setAttribute("type", "text/javascript"), this.attachListeners(o, r, n), o.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(o)
            }, e
        }(),
        n = function() {
            function e() {}
            return e.prototype.load = function(e, t, r, n) {
                try {
                    importScripts(t), r()
                } catch (e) {
                    n(e)
                }
            }, e
        }(),
        o = function() {
            function t() {
                this._initialized = !1
            }
            return t.prototype._init = function(e) {
                this._initialized || (this._initialized = !0, this._fs = e("fs"), this._vm = e("vm"), this._path = e("path"), this._crypto = e("crypto"))
            }, t.prototype.load = function(r, n, o, i) {
                var s = this,
                    d = r.getConfig().getOptionsLiteral(),
                    a = d.nodeRequire || e.global.nodeRequire,
                    u = d.nodeInstrumenter || function(e) {
                        return e
                    };
                this._init(a);
                var l = r.getRecorder();
                if (/^node\|/.test(n)) {
                    var c = n.split("|"),
                        f = null;
                    try {
                        f = a(c[1])
                    } catch (e) {
                        return void i(e)
                    }
                    r.enqueueDefineAnonymousModule([], function() {
                        return f
                    }), o()
                } else n = e.Utilities.fileUriToFilePath(n), this._fs.readFile(n, {
                    encoding: "utf8"
                }, function(a, c) {
                    if (a) return void i(a);
                    var f = s._path.normalize(n);
                    if (e.isElectronRenderer) {
                        var p = f.match(/^([a-z])\:(.*)/i);
                        p && (f = p[1].toUpperCase() + ":" + p[2]), f = "file:///" + f.replace(/\\/g, "/")
                    }
                    var h, g = "(function (require, define, __filename, __dirname) { ",
                        v = "\n});";
                    if (h = c.charCodeAt(0) === t._BOM ? g + c.substring(1) + v : g + c + v, h = u(h, f), d.nodeCachedDataDir) {
                        var _ = s._getCachedDataPath(d.nodeCachedDataDir, n);
                        s._fs.readFile(_, function(e, i) {
                            var a = {
                                    filename: f,
                                    produceCachedData: "undefined" == typeof i,
                                    cachedData: i
                                },
                                u = s._loadAndEvalScript(n, f, h, a, l);
                            o(), u.cachedDataRejected ? (d.onNodeCachedDataError({
                                errorCode: "cachedDataRejected",
                                path: _
                            }), t._runSoon(function() {
                                return s._fs.unlink(_, function(e) {
                                    e && r.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                        errorCode: "unlink",
                                        path: _,
                                        detail: e
                                    })
                                })
                            }, d.nodeCachedDataWriteDelay)) : u.cachedDataProduced && t._runSoon(function() {
                                return s._fs.writeFile(_, u.cachedData, function(e) {
                                    e && r.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                        errorCode: "writeFile",
                                        path: _,
                                        detail: e
                                    })
                                })
                            }, d.nodeCachedDataWriteDelay)
                        })
                    } else s._loadAndEvalScript(n, f, h, {
                        filename: f
                    }, l), o()
                })
            }, t.prototype._loadAndEvalScript = function(t, r, n, o, i) {
                i.record(e.LoaderEventType.NodeBeginEvaluatingScript, t);
                var s = new this._vm.Script(n, o),
                    d = s.runInThisContext(o);
                return d.call(e.global, e.RequireFunc, e.DefineFunc, r, this._path.dirname(t)), i.record(e.LoaderEventType.NodeEndEvaluatingScript, t), s
            }, t.prototype._getCachedDataPath = function(e, t) {
                var r = this._crypto.createHash("md5").update(t, "utf8").digest("hex"),
                    n = this._path.basename(t).replace(/\.js$/, "");
                return this._path.join(e, r + "-" + n + ".code")
            }, t._runSoon = function(e, t) {
                var r = t + Math.ceil(Math.random() * t);
                setTimeout(e, r)
            }, t
        }();
    o._BOM = 65279, e.scriptLoader = new t(e.isWebWorker ? new n : e.isNode ? new o : new r)
}(AMDLoader || (AMDLoader = {}));
var AMDLoader;
! function(e) {
    var t = function() {
        function t(e) {
            var t = e.lastIndexOf("/");
            t !== -1 ? this.fromModulePath = e.substr(0, t + 1) : this.fromModulePath = ""
        }
        return t._normalizeModuleId = function(e) {
            var t, r = e;
            for (t = /\/\.\//; t.test(r);) r = r.replace(t, "/");
            for (r = r.replace(/^\.\//g, ""), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; t.test(r);) r = r.replace(t, "/");
            return r = r.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "")
        }, t.prototype.resolveModule = function(r) {
            var n = r;
            return e.Utilities.isAbsolutePath(n) || (e.Utilities.startsWith(n, "./") || e.Utilities.startsWith(n, "../")) && (n = t._normalizeModuleId(this.fromModulePath + n)), n
        }, t
    }();
    t.ROOT = new t(""), e.ModuleIdResolver = t;
    var r = function() {
        function t(e, t, r, n, o, i) {
            this.id = e, this.strId = t, this.dependencies = r, this._callback = n, this._errorback = o, this.moduleIdResolver = i, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1
        }
        return t._safeInvokeFunction = function(t, r) {
            try {
                return {
                    returnedValue: t.apply(e.global, r),
                    producedError: null
                }
            } catch (e) {
                return {
                    returnedValue: null,
                    producedError: e
                }
            }
        }, t._invokeFactory = function(t, r, n, o) {
            return t.isBuild() && !e.Utilities.isAnonymousModule(r) ? {
                returnedValue: null,
                producedError: null
            } : t.shouldCatchError() ? this._safeInvokeFunction(n, o) : {
                returnedValue: n.apply(e.global, o),
                producedError: null
            }
        }, t.prototype.complete = function(r, n, o) {
            this._isComplete = !0;
            var i = null;
            if (this._callback)
                if ("function" == typeof this._callback) {
                    r.record(e.LoaderEventType.BeginInvokeFactory, this.strId);
                    var s = t._invokeFactory(n, this.strId, this._callback, o);
                    i = s.producedError, r.record(e.LoaderEventType.EndInvokeFactory, this.strId), i || "undefined" == typeof s.returnedValue || this.exportsPassedIn && !e.Utilities.isEmpty(this.exports) || (this.exports = s.returnedValue)
                } else this.exports = this._callback;
            i && n.onError({
                errorCode: "factory",
                moduleId: this.strId,
                detail: i
            }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null
        }, t.prototype.onDependencyError = function(e) {
            return !!this._errorback && (this._errorback(e), !0)
        }, t.prototype.isComplete = function() {
            return this._isComplete
        }, t
    }();
    e.Module = r;
    var n = function() {
            function e() {
                this._nextId = 0, this._strModuleIdToIntModuleId = new Map, this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require")
            }
            return e.prototype.getMaxModuleId = function() {
                return this._nextId
            }, e.prototype.getModuleId = function(e) {
                var t = this._strModuleIdToIntModuleId.get(e);
                return "undefined" == typeof t && (t = this._nextId++, this._strModuleIdToIntModuleId.set(e, t), this._intModuleIdToStrModuleId[t] = e), t
            }, e.prototype.getStrModuleId = function(e) {
                return this._intModuleIdToStrModuleId[e]
            }, e
        }(),
        o = function() {
            function e(e) {
                this.id = e
            }
            return e
        }();
    o.EXPORTS = new o(0), o.MODULE = new o(1), o.REQUIRE = new o(2), e.RegularDependency = o;
    var i = function() {
        function e(e, t, r) {
            this.id = e, this.pluginId = t, this.pluginParam = r
        }
        return e
    }();
    e.PluginDependency = i;
    var s = function() {
        function s(t, r) {
            void 0 === r && (r = 0), this._recorder = null, this._loaderAvailableTimestamp = r, this._moduleIdProvider = new n, this._config = new e.Configuration, this._scriptLoader = t, this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map, this._currentAnnonymousDefineCall = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = []
        }
        return s._findRelevantLocationInStack = function(e, t) {
            for (var r = function(e) {
                    return e.replace(/\\/g, "/")
                }, n = r(e), o = t.split(/\n/), i = 0; i < o.length; i++) {
                var s = o[i].match(/(.*):(\d+):(\d+)\)?$/);
                if (s) {
                    var d = s[1],
                        a = s[2],
                        u = s[3],
                        l = Math.max(d.lastIndexOf(" ") + 1, d.lastIndexOf("(") + 1);
                    if (d = d.substr(l), d = r(d), d === n) {
                        var c = {
                            line: parseInt(a, 10),
                            col: parseInt(u, 10)
                        };
                        return 1 === c.line && (c.col -= "(function (require, define, __filename, __dirname) { ".length), c
                    }
                }
            }
            throw new Error("Could not correlate define call site for needle " + e)
        }, s.prototype.getBuildInfo = function() {
            if (!this._config.isBuild()) return null;
            for (var e = [], t = 0, r = 0, n = this._modules2.length; r < n; r++) {
                var o = this._modules2[r];
                if (o) {
                    var i = this._buildInfoPath[o.id] || null,
                        d = this._buildInfoDefineStack[o.id] || null,
                        a = this._buildInfoDependencies[o.id];
                    e[t++] = {
                        id: o.strId,
                        path: i,
                        defineLocation: i && d ? s._findRelevantLocationInStack(i, d) : null,
                        dependencies: a,
                        shim: null,
                        exports: o.exports
                    }
                }
            }
            return e
        }, s.prototype.getRecorder = function() {
            return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new e.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = e.NullLoaderEventRecorder.INSTANCE), this._recorder
        }, s.prototype.getLoaderEvents = function() {
            return this.getRecorder().getEvents()
        }, s.prototype.enqueueDefineAnonymousModule = function(e, t) {
            if (null !== this._currentAnnonymousDefineCall) throw new Error("Can only have one anonymous define call per script file");
            var r = null;
            this._config.isBuild() && (r = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = {
                stack: r,
                dependencies: e,
                callback: t
            }
        }, s.prototype.defineModule = function(e, n, o, i, s, d) {
            var a = this;
            void 0 === d && (d = new t(e));
            var u = this._moduleIdProvider.getModuleId(e);
            if (this._modules2[u]) return void(this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'"));
            var l = new r(u, e, this._normalizeDependencies(n, d), o, i, d);
            this._modules2[u] = l, this._config.isBuild() && (this._buildInfoDefineStack[u] = s, this._buildInfoDependencies[u] = l.dependencies.map(function(e) {
                return a._moduleIdProvider.getStrModuleId(e.id)
            })), this._resolve(l)
        }, s.prototype._normalizeDependency = function(e, t) {
            if ("exports" === e) return o.EXPORTS;
            if ("module" === e) return o.MODULE;
            if ("require" === e) return o.REQUIRE;
            var r = e.indexOf("!");
            if (r >= 0) {
                var n = t.resolveModule(e.substr(0, r)),
                    s = t.resolveModule(e.substr(r + 1)),
                    d = this._moduleIdProvider.getModuleId(n + "!" + s),
                    a = this._moduleIdProvider.getModuleId(n);
                return new i(d, a, s)
            }
            return new o(this._moduleIdProvider.getModuleId(t.resolveModule(e)))
        }, s.prototype._normalizeDependencies = function(e, t) {
            for (var r = [], n = 0, o = 0, i = e.length; o < i; o++) r[n++] = this._normalizeDependency(e[o], t);
            return r
        }, s.prototype._relativeRequire = function(t, r, n, o) {
            return "string" == typeof r ? this.synchronousRequire(r, t) : void this.defineModule(e.Utilities.generateAnonymousModule(), r, n, o, null, t)
        }, s.prototype.synchronousRequire = function(e, r) {
            void 0 === r && (r = new t(e));
            var n = this._normalizeDependency(e, r),
                o = this._modules2[n.id];
            if (!o) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This is the first mention of this module!");
            if (!o.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This module has not been resolved completely yet.");
            return o.exports
        }, s.prototype.configure = function(t, r) {
            var n = this._config.shouldRecordStats();
            r ? this._config = new e.Configuration(t) : this._config = this._config.cloneAndMerge(t), this._config.shouldRecordStats() && !n && (this._recorder = null)
        }, s.prototype.getConfig = function() {
            return this._config
        }, s.prototype._onLoad = function(e) {
            if (null !== this._currentAnnonymousDefineCall) {
                var t = this._currentAnnonymousDefineCall;
                this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(e), t.dependencies, t.callback, null, t.stack)
            }
        }, s.prototype._createLoadError = function(e, t) {
            var r = this,
                n = this._moduleIdProvider.getStrModuleId(e),
                o = (this._inverseDependencies2[e] || []).map(function(e) {
                    return r._moduleIdProvider.getStrModuleId(e)
                });
            return {
                errorCode: "load",
                moduleId: n,
                neededBy: o,
                detail: t
            }
        }, s.prototype._onLoadError = function(e, t) {
            for (var r = this._createLoadError(e, t), n = [], o = 0, i = this._moduleIdProvider.getMaxModuleId(); o < i; o++) n[o] = !1;
            var s = !1,
                d = [];
            for (d.push(e), n[e] = !0; d.length > 0;) {
                var a = d.shift(),
                    u = this._modules2[a];
                u && (s = u.onDependencyError(r) || s);
                var l = this._inverseDependencies2[a];
                if (l)
                    for (var o = 0, i = l.length; o < i; o++) {
                        var c = l[o];
                        n[c] || (d.push(c), n[c] = !0)
                    }
            }
            s || this._config.onError(r)
        }, s.prototype._hasDependencyPath = function(e, t) {
            var r = this._modules2[e];
            if (!r) return !1;
            for (var n = [], o = 0, i = this._moduleIdProvider.getMaxModuleId(); o < i; o++) n[o] = !1;
            var s = [];
            for (s.push(r), n[e] = !0; s.length > 0;) {
                var d = s.shift(),
                    a = d.dependencies;
                if (a)
                    for (var o = 0, i = a.length; o < i; o++) {
                        var u = a[o];
                        if (u.id === t) return !0;
                        var l = this._modules2[u.id];
                        l && !n[u.id] && (n[u.id] = !0, s.push(l))
                    }
            }
            return !1
        }, s.prototype._findCyclePath = function(e, t, r) {
            if (e === t || 50 === r) return [e];
            var n = this._modules2[e];
            if (!n) return null;
            for (var o = n.dependencies, i = 0, s = o.length; i < s; i++) {
                var d = this._findCyclePath(o[i].id, t, r + 1);
                if (null !== d) return d.push(e), d
            }
            return null
        }, s.prototype._createRequire = function(t) {
            var r = this,
                n = function(e, n, o) {
                    return r._relativeRequire(t, e, n, o)
                };
            return n.toUrl = function(e) {
                return r._config.requireToUrl(t.resolveModule(e))
            }, n.getStats = function() {
                return r.getLoaderEvents()
            }, n.__$__nodeRequire = e.global.nodeRequire, n
        }, s.prototype._loadModule = function(t) {
            var r = this;
            if (!this._modules2[t] && !this._knownModules2[t]) {
                this._knownModules2[t] = !0;
                var n = this._moduleIdProvider.getStrModuleId(t),
                    o = this._config.moduleIdToPaths(n);
                e.isNode && n.indexOf("/") === -1 && o.push("node|" + n);
                var i = -1,
                    s = function(n) {
                        if (i++, i >= o.length) r._onLoadError(t, n);
                        else {
                            var d = o[i],
                                a = r.getRecorder();
                            if (r._config.isBuild() && "empty:" === d) return r._buildInfoPath[t] = d, r.defineModule(r._moduleIdProvider.getStrModuleId(t), [], null, null, null), void r._onLoad(t);
                            a.record(e.LoaderEventType.BeginLoadingScript, d), r._scriptLoader.load(r, d, function() {
                                r._config.isBuild() && (r._buildInfoPath[t] = d), a.record(e.LoaderEventType.EndLoadingScriptOK, d), r._onLoad(t)
                            }, function(t) {
                                a.record(e.LoaderEventType.EndLoadingScriptError, d), s(t)
                            })
                        }
                    };
                s(null)
            }
        }, s.prototype._loadPluginDependency = function(e, r) {
            var n = this;
            if (!this._modules2[r.id] && !this._knownModules2[r.id]) {
                this._knownModules2[r.id] = !0;
                var o = function(e) {
                    n.defineModule(n._moduleIdProvider.getStrModuleId(r.id), [], e, null, null)
                };
                o.error = function(e) {
                    n._config.onError(n._createLoadError(r.id, e))
                }, e.load(r.pluginParam, this._createRequire(t.ROOT), o, this._config.getOptionsLiteral())
            }
        }, s.prototype._resolve = function(e) {
            for (var t = this, r = e.dependencies, n = 0, s = r.length; n < s; n++) {
                var d = r[n];
                if (d !== o.EXPORTS)
                    if (d !== o.MODULE)
                        if (d !== o.REQUIRE) {
                            var a = this._modules2[d.id];
                            if (a && a.isComplete()) e.unresolvedDependenciesCount--;
                            else if (this._hasDependencyPath(d.id, e.id)) {
                                console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(d.id) + "' and '" + this._moduleIdProvider.getStrModuleId(e.id) + "'. The cyclic path follows:");
                                var u = this._findCyclePath(d.id, e.id, 0);
                                u.reverse(), u.push(d.id), console.warn(u.map(function(e) {
                                    return t._moduleIdProvider.getStrModuleId(e)
                                }).join(" => \n")), e.unresolvedDependenciesCount--
                            } else if (this._inverseDependencies2[d.id] = this._inverseDependencies2[d.id] || [], this._inverseDependencies2[d.id].push(e.id), d instanceof i) {
                                var l = this._modules2[d.pluginId];
                                if (l && l.isComplete()) {
                                    this._loadPluginDependency(l.exports, d);
                                    continue
                                }
                                var c = this._inversePluginDependencies2.get(d.pluginId);
                                c || (c = [], this._inversePluginDependencies2.set(d.pluginId, c)), c.push(d), this._loadModule(d.pluginId)
                            } else this._loadModule(d.id)
                        } else e.unresolvedDependenciesCount--;
                else e.unresolvedDependenciesCount--;
                else e.exportsPassedIn = !0, e.unresolvedDependenciesCount--
            }
            0 === e.unresolvedDependenciesCount && this._onModuleComplete(e)
        }, s.prototype._onModuleComplete = function(e) {
            var t = this,
                r = this.getRecorder();
            if (!e.isComplete()) {
                for (var n = e.dependencies, i = [], s = 0, d = n.length; s < d; s++) {
                    var a = n[s];
                    if (a !== o.EXPORTS)
                        if (a !== o.MODULE)
                            if (a !== o.REQUIRE) {
                                var u = this._modules2[a.id];
                                u ? i[s] = u.exports : i[s] = null
                            } else i[s] = this._createRequire(e.moduleIdResolver);
                    else i[s] = {
                        id: e.strId,
                        config: function() {
                            return t._config.getConfigForModule(e.strId)
                        }
                    };
                    else i[s] = e.exports
                }
                e.complete(r, this._config, i);
                var l = this._inverseDependencies2[e.id];
                if (this._inverseDependencies2[e.id] = null, l)
                    for (var s = 0, d = l.length; s < d; s++) {
                        var c = l[s],
                            f = this._modules2[c];
                        f.unresolvedDependenciesCount--, 0 === f.unresolvedDependenciesCount && this._onModuleComplete(f)
                    }
                var p = this._inversePluginDependencies2.get(e.id);
                if (p) {
                    this._inversePluginDependencies2.delete(e.id);
                    for (var s = 0, d = p.length; s < d; s++) this._loadPluginDependency(e.exports, p[s])
                }
            }
        }, s
    }();
    e.ModuleManager = s
}(AMDLoader || (AMDLoader = {}));
var define, AMDLoader;
! function(e) {
    function t() {
        if (r = new e.ModuleManager(e.scriptLoader, n), e.isNode) {
            var t = e.global.require || require,
                s = function(n) {
                    r.getRecorder().record(e.LoaderEventType.NodeBeginNativeRequire, n);
                    try {
                        return t(n)
                    } finally {
                        r.getRecorder().record(e.LoaderEventType.NodeEndNativeRequire, n)
                    }
                };
            e.global.nodeRequire = s, i.nodeRequire = s
        }
        e.isNode && !e.isElectronRenderer ? (module.exports = i, define = function() {
            o.apply(null, arguments)
        }, require = i) : ("undefined" != typeof e.global.require && "function" != typeof e.global.require && i.config(e.global.require), e.isElectronRenderer ? define = function() {
            o.apply(null, arguments)
        } : e.global.define = define = o, e.global.require = i, e.global.require.__$__nodeRequire = s)
    }
    var r, n, o = function() {
        function e(e, t, n) {
            "string" != typeof e && (n = t, t = e, e = null), "object" == typeof t && Array.isArray(t) || (n = t, t = null), t || (t = ["require", "exports", "module"]), e ? r.defineModule(e, t, n, null, null) : r.enqueueDefineAnonymousModule(t, n)
        }
        return e
    }();
    o.amd = {
        jQuery: !0
    }, e.DefineFunc = o;
    var i = function() {
        function t() {
            if (1 === arguments.length) {
                if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void t.config(arguments[0]);
                if ("string" == typeof arguments[0]) return r.synchronousRequire(arguments[0])
            }
            if ((2 === arguments.length || 3 === arguments.length) && Array.isArray(arguments[0])) return void r.defineModule(e.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
            throw new Error("Unrecognized require call")
        }
        return t.config = function(e, t) {
            void 0 === t && (t = !1), r.configure(e, t)
        }, t.getConfig = function() {
            return r.getConfig().getOptionsLiteral()
        }, t.reset = function() {
            r = new e.ModuleManager(e.scriptLoader, n)
        }, t.getBuildInfo = function() {
            return r.getBuildInfo()
        }, t.getStats = function() {
            return r.getLoaderEvents()
        }, t
    }();
    e.RequireFunc = i, "function" == typeof e.global.define && e.global.define.amd || (t(), n = e.getHighPerformanceTimestamp())
}(AMDLoader || (AMDLoader = {}));