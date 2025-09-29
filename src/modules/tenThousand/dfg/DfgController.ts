import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfgs")
export default class DfgController {
  @operation({
    summary: "Get Dfgs",
  })
  @get()
  static getDfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfg",
  })
  @post("{id}")
  static createDfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
