import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnns")
export default class LnnController {
  @operation({
    summary: "Get Lnns",
  })
  @get()
  static getLnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnn",
  })
  @post("{id}")
  static createLnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
