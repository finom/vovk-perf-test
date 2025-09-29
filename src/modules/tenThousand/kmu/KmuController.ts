import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmus")
export default class KmuController {
  @operation({
    summary: "Get Kmus",
  })
  @get()
  static getKmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmu",
  })
  @post("{id}")
  static createKmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
