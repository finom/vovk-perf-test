import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsxes")
export default class LsxController {
  @operation({
    summary: "Get Lsxes",
  })
  @get()
  static getLsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsx",
  })
  @post("{id}")
  static createLsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
