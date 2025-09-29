import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyls")
export default class JylController {
  @operation({
    summary: "Get Jyls",
  })
  @get()
  static getJyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyl",
  })
  @post("{id}")
  static createJyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
