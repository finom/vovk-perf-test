import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfps")
export default class MfpController {
  @operation({
    summary: "Get Mfps",
  })
  @get()
  static getMfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfp",
  })
  @post("{id}")
  static createMfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
