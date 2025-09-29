import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsns")
export default class LsnController {
  @operation({
    summary: "Get Lsns",
  })
  @get()
  static getLsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsn",
  })
  @post("{id}")
  static createLsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
