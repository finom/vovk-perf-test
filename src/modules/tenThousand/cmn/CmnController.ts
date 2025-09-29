import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmns")
export default class CmnController {
  @operation({
    summary: "Get Cmns",
  })
  @get()
  static getCmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmn",
  })
  @post("{id}")
  static createCmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
