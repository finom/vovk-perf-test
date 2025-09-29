import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csts")
export default class CstController {
  @operation({
    summary: "Get Csts",
  })
  @get()
  static getCsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cst",
  })
  @post("{id}")
  static createCst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
