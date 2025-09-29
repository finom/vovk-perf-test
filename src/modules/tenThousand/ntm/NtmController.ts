import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntms")
export default class NtmController {
  @operation({
    summary: "Get Ntms",
  })
  @get()
  static getNtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntm",
  })
  @post("{id}")
  static createNtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
