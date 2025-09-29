import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgzs")
export default class HgzController {
  @operation({
    summary: "Get Hgzs",
  })
  @get()
  static getHgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgz",
  })
  @post("{id}")
  static createHgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
