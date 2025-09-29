import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwis")
export default class FwiController {
  @operation({
    summary: "Get Fwis",
  })
  @get()
  static getFwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwi",
  })
  @post("{id}")
  static createFwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
