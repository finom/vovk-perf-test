import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzxes")
export default class GzxController {
  @operation({
    summary: "Get Gzxes",
  })
  @get()
  static getGzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzx",
  })
  @post("{id}")
  static createGzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
