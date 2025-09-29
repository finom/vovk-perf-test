import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsis")
export default class LsiController {
  @operation({
    summary: "Get Lsis",
  })
  @get()
  static getLsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsi",
  })
  @post("{id}")
  static createLsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
