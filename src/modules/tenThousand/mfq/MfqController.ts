import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfqs")
export default class MfqController {
  @operation({
    summary: "Get Mfqs",
  })
  @get()
  static getMfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfq",
  })
  @post("{id}")
  static createMfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
