import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjls")
export default class JjlController {
  @operation({
    summary: "Get Jjls",
  })
  @get()
  static getJjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjl",
  })
  @post("{id}")
  static createJjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
