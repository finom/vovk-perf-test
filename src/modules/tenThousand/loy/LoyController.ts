import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loys")
export default class LoyController {
  @operation({
    summary: "Get Loys",
  })
  @get()
  static getLoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loy",
  })
  @post("{id}")
  static createLoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
