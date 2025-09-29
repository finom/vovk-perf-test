import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekqs")
export default class EkqController {
  @operation({
    summary: "Get Ekqs",
  })
  @get()
  static getEkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekq",
  })
  @post("{id}")
  static createEkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
