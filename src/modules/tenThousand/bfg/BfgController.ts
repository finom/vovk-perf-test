import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfgs")
export default class BfgController {
  @operation({
    summary: "Get Bfgs",
  })
  @get()
  static getBfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfg",
  })
  @post("{id}")
  static createBfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
