import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkps")
export default class LkpController {
  @operation({
    summary: "Get Lkps",
  })
  @get()
  static getLkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkp",
  })
  @post("{id}")
  static createLkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
