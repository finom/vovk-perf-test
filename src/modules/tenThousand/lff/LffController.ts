import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lffs")
export default class LffController {
  @operation({
    summary: "Get Lffs",
  })
  @get()
  static getLffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lff",
  })
  @post("{id}")
  static createLff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
