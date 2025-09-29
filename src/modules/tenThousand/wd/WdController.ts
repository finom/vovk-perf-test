import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wds")
export default class WdController {
  @operation({
    summary: "Get Wds",
  })
  @get()
  static getWds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wd",
  })
  @post("{id}")
  static createWd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
