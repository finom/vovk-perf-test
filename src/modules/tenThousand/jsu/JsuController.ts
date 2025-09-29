import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsus")
export default class JsuController {
  @operation({
    summary: "Get Jsus",
  })
  @get()
  static getJsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsu",
  })
  @post("{id}")
  static createJsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
