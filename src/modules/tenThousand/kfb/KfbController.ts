import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfbs")
export default class KfbController {
  @operation({
    summary: "Get Kfbs",
  })
  @get()
  static getKfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfb",
  })
  @post("{id}")
  static createKfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
