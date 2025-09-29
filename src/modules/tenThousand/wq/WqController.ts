import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wqs")
export default class WqController {
  @operation({
    summary: "Get Wqs",
  })
  @get()
  static getWqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wq",
  })
  @post("{id}")
  static createWq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
