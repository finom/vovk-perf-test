import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfqs")
export default class KfqController {
  @operation({
    summary: "Get Kfqs",
  })
  @get()
  static getKfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfq",
  })
  @post("{id}")
  static createKfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
