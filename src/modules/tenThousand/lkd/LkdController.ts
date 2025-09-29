import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkds")
export default class LkdController {
  @operation({
    summary: "Get Lkds",
  })
  @get()
  static getLkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkd",
  })
  @post("{id}")
  static createLkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
