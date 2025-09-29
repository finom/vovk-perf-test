import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzies")
export default class LzyController {
  @operation({
    summary: "Get Lzies",
  })
  @get()
  static getLzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzy",
  })
  @post("{id}")
  static createLzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
