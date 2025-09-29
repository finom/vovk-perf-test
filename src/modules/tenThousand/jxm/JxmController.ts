import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxms")
export default class JxmController {
  @operation({
    summary: "Get Jxms",
  })
  @get()
  static getJxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxm",
  })
  @post("{id}")
  static createJxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
