import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgws")
export default class HgwController {
  @operation({
    summary: "Get Hgws",
  })
  @get()
  static getHgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgw",
  })
  @post("{id}")
  static createHgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
