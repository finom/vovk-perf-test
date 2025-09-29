import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsqs")
export default class LsqController {
  @operation({
    summary: "Get Lsqs",
  })
  @get()
  static getLsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsq",
  })
  @post("{id}")
  static createLsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
