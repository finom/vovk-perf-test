import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lams")
export default class LamController {
  @operation({
    summary: "Get Lams",
  })
  @get()
  static getLams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lam",
  })
  @post("{id}")
  static createLam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
