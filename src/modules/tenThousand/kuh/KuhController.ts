import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuhs")
export default class KuhController {
  @operation({
    summary: "Get Kuhs",
  })
  @get()
  static getKuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuh",
  })
  @post("{id}")
  static createKuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
