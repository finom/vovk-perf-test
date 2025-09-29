import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbws")
export default class MbwController {
  @operation({
    summary: "Get Mbws",
  })
  @get()
  static getMbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbw",
  })
  @post("{id}")
  static createMbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
