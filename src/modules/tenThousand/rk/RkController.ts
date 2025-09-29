import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rks")
export default class RkController {
  @operation({
    summary: "Get Rks",
  })
  @get()
  static getRks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rk",
  })
  @post("{id}")
  static createRk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
