import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lals")
export default class LalController {
  @operation({
    summary: "Get Lals",
  })
  @get()
  static getLals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lal",
  })
  @post("{id}")
  static createLal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
