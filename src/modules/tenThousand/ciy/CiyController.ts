import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ciys")
export default class CiyController {
  @operation({
    summary: "Get Ciys",
  })
  @get()
  static getCiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ciy",
  })
  @post("{id}")
  static createCiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
