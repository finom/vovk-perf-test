import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfvs")
export default class MfvController {
  @operation({
    summary: "Get Mfvs",
  })
  @get()
  static getMfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfv",
  })
  @post("{id}")
  static createMfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
