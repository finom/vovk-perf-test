import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuses")
export default class FusController {
  @operation({
    summary: "Get Fuses",
  })
  @get()
  static getFuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fus",
  })
  @post("{id}")
  static createFus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
