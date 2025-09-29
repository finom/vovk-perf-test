import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkqs")
export default class NkqController {
  @operation({
    summary: "Get Nkqs",
  })
  @get()
  static getNkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkq",
  })
  @post("{id}")
  static createNkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
