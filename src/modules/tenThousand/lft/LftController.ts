import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfts")
export default class LftController {
  @operation({
    summary: "Get Lfts",
  })
  @get()
  static getLfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lft",
  })
  @post("{id}")
  static createLft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
