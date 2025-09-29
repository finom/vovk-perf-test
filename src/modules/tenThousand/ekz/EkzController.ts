import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekzs")
export default class EkzController {
  @operation({
    summary: "Get Ekzs",
  })
  @get()
  static getEkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekz",
  })
  @post("{id}")
  static createEkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
