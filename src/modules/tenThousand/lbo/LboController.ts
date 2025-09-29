import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbos")
export default class LboController {
  @operation({
    summary: "Get Lbos",
  })
  @get()
  static getLbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbo",
  })
  @post("{id}")
  static createLbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
