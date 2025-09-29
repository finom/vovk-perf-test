import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijxes")
export default class IjxController {
  @operation({
    summary: "Get Ijxes",
  })
  @get()
  static getIjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijx",
  })
  @post("{id}")
  static createIjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
