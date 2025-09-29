import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekxes")
export default class EkxController {
  @operation({
    summary: "Get Ekxes",
  })
  @get()
  static getEkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekx",
  })
  @post("{id}")
  static createEkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
