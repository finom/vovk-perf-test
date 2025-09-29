import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwxes")
export default class GwxController {
  @operation({
    summary: "Get Gwxes",
  })
  @get()
  static getGwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwx",
  })
  @post("{id}")
  static createGwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
