import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lghs")
export default class LghController {
  @operation({
    summary: "Get Lghs",
  })
  @get()
  static getLghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgh",
  })
  @post("{id}")
  static createLgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
