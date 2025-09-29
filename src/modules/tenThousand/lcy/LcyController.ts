import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcies")
export default class LcyController {
  @operation({
    summary: "Get Lcies",
  })
  @get()
  static getLcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcy",
  })
  @post("{id}")
  static createLcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
