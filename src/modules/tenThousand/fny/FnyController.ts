import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnies")
export default class FnyController {
  @operation({
    summary: "Get Fnies",
  })
  @get()
  static getFnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fny",
  })
  @post("{id}")
  static createFny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
