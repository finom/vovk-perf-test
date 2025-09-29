import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntds")
export default class NtdController {
  @operation({
    summary: "Get Ntds",
  })
  @get()
  static getNtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntd",
  })
  @post("{id}")
  static createNtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
