import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("args")
export default class ArgController {
  @operation({
    summary: "Get Args",
  })
  @get()
  static getArgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arg",
  })
  @post("{id}")
  static createArg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
