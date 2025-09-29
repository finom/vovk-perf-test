import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfgs")
export default class JfgController {
  @operation({
    summary: "Get Jfgs",
  })
  @get()
  static getJfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfg",
  })
  @post("{id}")
  static createJfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
