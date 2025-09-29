import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqts")
export default class LqtController {
  @operation({
    summary: "Get Lqts",
  })
  @get()
  static getLqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqt",
  })
  @post("{id}")
  static createLqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
