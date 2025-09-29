import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldis")
export default class LdiController {
  @operation({
    summary: "Get Ldis",
  })
  @get()
  static getLdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldi",
  })
  @post("{id}")
  static createLdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
