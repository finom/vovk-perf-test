import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lics")
export default class LicController {
  @operation({
    summary: "Get Lics",
  })
  @get()
  static getLics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lic",
  })
  @post("{id}")
  static createLic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
