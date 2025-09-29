import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxies")
export default class MxyController {
  @operation({
    summary: "Get Mxies",
  })
  @get()
  static getMxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxy",
  })
  @post("{id}")
  static createMxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
