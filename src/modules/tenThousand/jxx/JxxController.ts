import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxxes")
export default class JxxController {
  @operation({
    summary: "Get Jxxes",
  })
  @get()
  static getJxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxx",
  })
  @post("{id}")
  static createJxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
