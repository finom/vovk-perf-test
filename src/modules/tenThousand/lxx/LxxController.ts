import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxxes")
export default class LxxController {
  @operation({
    summary: "Get Lxxes",
  })
  @get()
  static getLxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxx",
  })
  @post("{id}")
  static createLxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
