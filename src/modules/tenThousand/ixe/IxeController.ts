import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixes")
export default class IxeController {
  @operation({
    summary: "Get Ixes",
  })
  @get()
  static getIxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixe",
  })
  @post("{id}")
  static createIxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
