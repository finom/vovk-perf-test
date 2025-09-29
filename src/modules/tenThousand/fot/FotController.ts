import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fots")
export default class FotController {
  @operation({
    summary: "Get Fots",
  })
  @get()
  static getFots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fot",
  })
  @post("{id}")
  static createFot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
