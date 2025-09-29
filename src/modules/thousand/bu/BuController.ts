import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bus")
export default class BuController {
  @operation({
    summary: "Get Bus",
  })
  @get()
  static getBus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bu",
  })
  @post("{id}")
  static createBu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
