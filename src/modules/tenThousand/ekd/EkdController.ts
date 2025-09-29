import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekds")
export default class EkdController {
  @operation({
    summary: "Get Ekds",
  })
  @get()
  static getEkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekd",
  })
  @post("{id}")
  static createEkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
