import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntgs")
export default class NtgController {
  @operation({
    summary: "Get Ntgs",
  })
  @get()
  static getNtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntg",
  })
  @post("{id}")
  static createNtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
