import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfns")
export default class LfnController {
  @operation({
    summary: "Get Lfns",
  })
  @get()
  static getLfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfn",
  })
  @post("{id}")
  static createLfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
