import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qs")
export default class QController {
  @operation({
    summary: "Get QS",
  })
  @get()
  static getQS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Q",
  })
  @post("{id}")
  static createQ = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
