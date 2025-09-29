import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nts")
export default class NtController {
  @operation({
    summary: "Get Nts",
  })
  @get()
  static getNts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nt",
  })
  @post("{id}")
  static createNt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
