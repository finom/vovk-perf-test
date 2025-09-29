import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exps")
export default class ExpController {
  @operation({
    summary: "Get Exps",
  })
  @get()
  static getExps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exp",
  })
  @post("{id}")
  static createExp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
