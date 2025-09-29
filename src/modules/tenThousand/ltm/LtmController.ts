import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltms")
export default class LtmController {
  @operation({
    summary: "Get Ltms",
  })
  @get()
  static getLtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltm",
  })
  @post("{id}")
  static createLtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
