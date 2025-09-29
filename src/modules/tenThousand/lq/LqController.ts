import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqs")
export default class LqController {
  @operation({
    summary: "Get Lqs",
  })
  @get()
  static getLqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lq",
  })
  @post("{id}")
  static createLq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
