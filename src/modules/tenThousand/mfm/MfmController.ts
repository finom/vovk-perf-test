import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfms")
export default class MfmController {
  @operation({
    summary: "Get Mfms",
  })
  @get()
  static getMfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfm",
  })
  @post("{id}")
  static createMfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
