import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxes")
export default class HxController {
  @operation({
    summary: "Get Hxes",
  })
  @get()
  static getHxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hx",
  })
  @post("{id}")
  static createHx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
