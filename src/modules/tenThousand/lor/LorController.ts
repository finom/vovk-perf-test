import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lors")
export default class LorController {
  @operation({
    summary: "Get Lors",
  })
  @get()
  static getLors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lor",
  })
  @post("{id}")
  static createLor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
