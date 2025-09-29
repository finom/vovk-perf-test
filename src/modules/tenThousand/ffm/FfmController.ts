import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffms")
export default class FfmController {
  @operation({
    summary: "Get Ffms",
  })
  @get()
  static getFfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffm",
  })
  @post("{id}")
  static createFfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
