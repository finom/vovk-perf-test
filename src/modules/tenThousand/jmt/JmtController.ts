import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmts")
export default class JmtController {
  @operation({
    summary: "Get Jmts",
  })
  @get()
  static getJmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmt",
  })
  @post("{id}")
  static createJmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
