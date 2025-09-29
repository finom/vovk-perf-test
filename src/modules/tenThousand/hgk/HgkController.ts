import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgks")
export default class HgkController {
  @operation({
    summary: "Get Hgks",
  })
  @get()
  static getHgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgk",
  })
  @post("{id}")
  static createHgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
