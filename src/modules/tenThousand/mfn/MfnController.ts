import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfns")
export default class MfnController {
  @operation({
    summary: "Get Mfns",
  })
  @get()
  static getMfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfn",
  })
  @post("{id}")
  static createMfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
