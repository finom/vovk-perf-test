import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntls")
export default class NtlController {
  @operation({
    summary: "Get Ntls",
  })
  @get()
  static getNtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntl",
  })
  @post("{id}")
  static createNtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
