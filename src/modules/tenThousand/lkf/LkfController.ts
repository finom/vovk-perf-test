import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkfs")
export default class LkfController {
  @operation({
    summary: "Get Lkfs",
  })
  @get()
  static getLkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkf",
  })
  @post("{id}")
  static createLkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
