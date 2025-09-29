import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxns")
export default class CxnController {
  @operation({
    summary: "Get Cxns",
  })
  @get()
  static getCxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxn",
  })
  @post("{id}")
  static createCxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
