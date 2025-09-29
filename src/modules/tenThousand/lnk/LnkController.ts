import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnks")
export default class LnkController {
  @operation({
    summary: "Get Lnks",
  })
  @get()
  static getLnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnk",
  })
  @post("{id}")
  static createLnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
