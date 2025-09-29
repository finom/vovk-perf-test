import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnms")
export default class DnmController {
  @operation({
    summary: "Get Dnms",
  })
  @get()
  static getDnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnm",
  })
  @post("{id}")
  static createDnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
