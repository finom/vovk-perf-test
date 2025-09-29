import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luys")
export default class LuyController {
  @operation({
    summary: "Get Luys",
  })
  @get()
  static getLuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luy",
  })
  @post("{id}")
  static createLuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
