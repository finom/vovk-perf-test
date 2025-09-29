import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxus")
export default class JxuController {
  @operation({
    summary: "Get Jxus",
  })
  @get()
  static getJxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxu",
  })
  @post("{id}")
  static createJxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
