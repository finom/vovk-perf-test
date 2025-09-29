import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mixes")
export default class MixController {
  @operation({
    summary: "Get Mixes",
  })
  @get()
  static getMixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mix",
  })
  @post("{id}")
  static createMix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
