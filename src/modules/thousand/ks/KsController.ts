import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ks")
export default class KsController {
  @operation({
    summary: "Get Ks",
  })
  @get()
  static getKs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ks",
  })
  @post("{id}")
  static createKs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
