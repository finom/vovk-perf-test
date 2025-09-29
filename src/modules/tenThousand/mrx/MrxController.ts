import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrxes")
export default class MrxController {
  @operation({
    summary: "Get Mrxes",
  })
  @get()
  static getMrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrx",
  })
  @post("{id}")
  static createMrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
