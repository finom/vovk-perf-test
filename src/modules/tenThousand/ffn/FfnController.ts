import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffns")
export default class FfnController {
  @operation({
    summary: "Get Ffns",
  })
  @get()
  static getFfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffn",
  })
  @post("{id}")
  static createFfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
