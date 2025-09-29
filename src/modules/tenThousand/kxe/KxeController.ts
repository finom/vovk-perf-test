import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxes")
export default class KxeController {
  @operation({
    summary: "Get Kxes",
  })
  @get()
  static getKxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxe",
  })
  @post("{id}")
  static createKxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
