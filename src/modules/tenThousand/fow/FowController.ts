import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fows")
export default class FowController {
  @operation({
    summary: "Get Fows",
  })
  @get()
  static getFows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fow",
  })
  @post("{id}")
  static createFow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
