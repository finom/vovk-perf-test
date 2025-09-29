import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayns")
export default class AynController {
  @operation({
    summary: "Get Ayns",
  })
  @get()
  static getAyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayn",
  })
  @post("{id}")
  static createAyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
