import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgis")
export default class LgiController {
  @operation({
    summary: "Get Lgis",
  })
  @get()
  static getLgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgi",
  })
  @post("{id}")
  static createLgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
