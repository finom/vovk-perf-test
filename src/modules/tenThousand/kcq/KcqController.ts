import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcqs")
export default class KcqController {
  @operation({
    summary: "Get Kcqs",
  })
  @get()
  static getKcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcq",
  })
  @post("{id}")
  static createKcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
