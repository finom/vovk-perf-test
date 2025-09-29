import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmms")
export default class MmmController {
  @operation({
    summary: "Get Mmms",
  })
  @get()
  static getMmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmm",
  })
  @post("{id}")
  static createMmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
