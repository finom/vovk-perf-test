import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkqs")
export default class KkqController {
  @operation({
    summary: "Get Kkqs",
  })
  @get()
  static getKkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkq",
  })
  @post("{id}")
  static createKkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
