import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfks")
export default class KfkController {
  @operation({
    summary: "Get Kfks",
  })
  @get()
  static getKfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfk",
  })
  @post("{id}")
  static createKfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
