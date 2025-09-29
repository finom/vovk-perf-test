import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czxes")
export default class CzxController {
  @operation({
    summary: "Get Czxes",
  })
  @get()
  static getCzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czx",
  })
  @post("{id}")
  static createCzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
