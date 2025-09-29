import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgxes")
export default class HgxController {
  @operation({
    summary: "Get Hgxes",
  })
  @get()
  static getHgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgx",
  })
  @post("{id}")
  static createHgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
