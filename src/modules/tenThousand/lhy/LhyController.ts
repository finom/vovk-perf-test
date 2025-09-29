import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhies")
export default class LhyController {
  @operation({
    summary: "Get Lhies",
  })
  @get()
  static getLhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhy",
  })
  @post("{id}")
  static createLhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
