import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fms")
export default class FmController {
  @operation({
    summary: "Get Fms",
  })
  @get()
  static getFms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fm",
  })
  @post("{id}")
  static createFm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
