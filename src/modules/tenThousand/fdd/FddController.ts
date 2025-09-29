import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdds")
export default class FddController {
  @operation({
    summary: "Get Fdds",
  })
  @get()
  static getFdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdd",
  })
  @post("{id}")
  static createFdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
