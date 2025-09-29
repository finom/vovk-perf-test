import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lczs")
export default class LczController {
  @operation({
    summary: "Get Lczs",
  })
  @get()
  static getLczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcz",
  })
  @post("{id}")
  static createLcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
