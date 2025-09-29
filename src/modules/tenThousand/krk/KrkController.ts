import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krks")
export default class KrkController {
  @operation({
    summary: "Get Krks",
  })
  @get()
  static getKrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krk",
  })
  @post("{id}")
  static createKrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
