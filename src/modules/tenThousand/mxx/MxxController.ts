import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxxes")
export default class MxxController {
  @operation({
    summary: "Get Mxxes",
  })
  @get()
  static getMxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxx",
  })
  @post("{id}")
  static createMxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
