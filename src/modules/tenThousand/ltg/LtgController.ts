import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltgs")
export default class LtgController {
  @operation({
    summary: "Get Ltgs",
  })
  @get()
  static getLtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltg",
  })
  @post("{id}")
  static createLtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
