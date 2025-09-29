import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crus")
export default class CruController {
  @operation({
    summary: "Get Crus",
  })
  @get()
  static getCrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cru",
  })
  @post("{id}")
  static createCru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
