import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnps")
export default class LnpController {
  @operation({
    summary: "Get Lnps",
  })
  @get()
  static getLnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnp",
  })
  @post("{id}")
  static createLnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
