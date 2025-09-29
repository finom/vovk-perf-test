import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnxes")
export default class LnxController {
  @operation({
    summary: "Get Lnxes",
  })
  @get()
  static getLnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnx",
  })
  @post("{id}")
  static createLnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
