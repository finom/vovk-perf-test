import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keys")
export default class KeyController {
  @operation({
    summary: "Get Keys",
  })
  @get()
  static getKeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Key",
  })
  @post("{id}")
  static createKey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
