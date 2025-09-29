import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkqs")
export default class LkqController {
  @operation({
    summary: "Get Lkqs",
  })
  @get()
  static getLkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkq",
  })
  @post("{id}")
  static createLkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
