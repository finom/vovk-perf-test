import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxies")
export default class JxyController {
  @operation({
    summary: "Get Jxies",
  })
  @get()
  static getJxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxy",
  })
  @post("{id}")
  static createJxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
