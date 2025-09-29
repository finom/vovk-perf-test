import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlbs")
export default class NlbController {
  @operation({
    summary: "Get Nlbs",
  })
  @get()
  static getNlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlb",
  })
  @post("{id}")
  static createNlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
