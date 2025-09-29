import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lths")
export default class LthController {
  @operation({
    summary: "Get Lths",
  })
  @get()
  static getLths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lth",
  })
  @post("{id}")
  static createLth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
