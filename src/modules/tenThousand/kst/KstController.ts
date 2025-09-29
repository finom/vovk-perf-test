import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksts")
export default class KstController {
  @operation({
    summary: "Get Ksts",
  })
  @get()
  static getKsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kst",
  })
  @post("{id}")
  static createKst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
