import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkqs")
export default class BkqController {
  @operation({
    summary: "Get Bkqs",
  })
  @get()
  static getBkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkq",
  })
  @post("{id}")
  static createBkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
