import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lches")
export default class LchController {
  @operation({
    summary: "Get Lches",
  })
  @get()
  static getLches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lch",
  })
  @post("{id}")
  static createLch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
