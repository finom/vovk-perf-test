import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfbs")
export default class MfbController {
  @operation({
    summary: "Get Mfbs",
  })
  @get()
  static getMfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfb",
  })
  @post("{id}")
  static createMfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
