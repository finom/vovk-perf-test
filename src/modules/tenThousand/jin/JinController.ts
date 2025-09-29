import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jins")
export default class JinController {
  @operation({
    summary: "Get Jins",
  })
  @get()
  static getJins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jin",
  })
  @post("{id}")
  static createJin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
