import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmms")
export default class LmmController {
  @operation({
    summary: "Get Lmms",
  })
  @get()
  static getLmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmm",
  })
  @post("{id}")
  static createLmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
