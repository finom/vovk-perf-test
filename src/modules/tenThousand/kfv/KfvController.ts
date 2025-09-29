import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfvs")
export default class KfvController {
  @operation({
    summary: "Get Kfvs",
  })
  @get()
  static getKfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfv",
  })
  @post("{id}")
  static createKfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
