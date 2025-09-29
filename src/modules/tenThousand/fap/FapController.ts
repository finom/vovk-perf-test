import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faps")
export default class FapController {
  @operation({
    summary: "Get Faps",
  })
  @get()
  static getFaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fap",
  })
  @post("{id}")
  static createFap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
