import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcbs")
export default class LcbController {
  @operation({
    summary: "Get Lcbs",
  })
  @get()
  static getLcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcb",
  })
  @post("{id}")
  static createLcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
