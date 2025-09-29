import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfps")
export default class LfpController {
  @operation({
    summary: "Get Lfps",
  })
  @get()
  static getLfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfp",
  })
  @post("{id}")
  static createLfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
