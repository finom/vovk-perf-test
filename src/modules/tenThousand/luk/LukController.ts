import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luks")
export default class LukController {
  @operation({
    summary: "Get Luks",
  })
  @get()
  static getLuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luk",
  })
  @post("{id}")
  static createLuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
