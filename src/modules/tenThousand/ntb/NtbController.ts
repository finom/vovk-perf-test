import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntbs")
export default class NtbController {
  @operation({
    summary: "Get Ntbs",
  })
  @get()
  static getNtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntb",
  })
  @post("{id}")
  static createNtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
