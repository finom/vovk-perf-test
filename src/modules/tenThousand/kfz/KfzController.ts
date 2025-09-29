import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfzs")
export default class KfzController {
  @operation({
    summary: "Get Kfzs",
  })
  @get()
  static getKfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfz",
  })
  @post("{id}")
  static createKfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
