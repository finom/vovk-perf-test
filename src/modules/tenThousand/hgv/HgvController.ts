import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgvs")
export default class HgvController {
  @operation({
    summary: "Get Hgvs",
  })
  @get()
  static getHgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgv",
  })
  @post("{id}")
  static createHgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
