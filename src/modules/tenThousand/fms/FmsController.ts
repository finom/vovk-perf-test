import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fms")
export default class FmsController {
  @operation({
    summary: "Get Fms",
  })
  @get()
  static getFms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fms",
  })
  @post("{id}")
  static createFms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
