import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekus")
export default class EkuController {
  @operation({
    summary: "Get Ekus",
  })
  @get()
  static getEkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eku",
  })
  @post("{id}")
  static createEku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
