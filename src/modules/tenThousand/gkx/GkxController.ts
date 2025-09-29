import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkxes")
export default class GkxController {
  @operation({
    summary: "Get Gkxes",
  })
  @get()
  static getGkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkx",
  })
  @post("{id}")
  static createGkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
