import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qis")
export default class QiController {
  @operation({
    summary: "Get Qis",
  })
  @get()
  static getQis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qi",
  })
  @post("{id}")
  static createQi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
