import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnds")
export default class LndController {
  @operation({
    summary: "Get Lnds",
  })
  @get()
  static getLnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnd",
  })
  @post("{id}")
  static createLnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
