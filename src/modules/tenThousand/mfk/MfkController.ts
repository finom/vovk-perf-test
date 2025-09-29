import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfks")
export default class MfkController {
  @operation({
    summary: "Get Mfks",
  })
  @get()
  static getMfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfk",
  })
  @post("{id}")
  static createMfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
