import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwxes")
export default class FwxController {
  @operation({
    summary: "Get Fwxes",
  })
  @get()
  static getFwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwx",
  })
  @post("{id}")
  static createFwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
