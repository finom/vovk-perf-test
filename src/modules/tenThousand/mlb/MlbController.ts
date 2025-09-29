import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlbs")
export default class MlbController {
  @operation({
    summary: "Get Mlbs",
  })
  @get()
  static getMlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlb",
  })
  @post("{id}")
  static createMlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
