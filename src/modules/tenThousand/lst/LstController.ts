import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsts")
export default class LstController {
  @operation({
    summary: "Get Lsts",
  })
  @get()
  static getLsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lst",
  })
  @post("{id}")
  static createLst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
