import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llts")
export default class LltController {
  @operation({
    summary: "Get Llts",
  })
  @get()
  static getLlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llt",
  })
  @post("{id}")
  static createLlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
