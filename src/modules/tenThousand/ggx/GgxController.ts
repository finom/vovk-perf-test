import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggxes")
export default class GgxController {
  @operation({
    summary: "Get Ggxes",
  })
  @get()
  static getGgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggx",
  })
  @post("{id}")
  static createGgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
