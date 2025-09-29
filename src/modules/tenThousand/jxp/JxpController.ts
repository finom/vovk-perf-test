import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxps")
export default class JxpController {
  @operation({
    summary: "Get Jxps",
  })
  @get()
  static getJxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxp",
  })
  @post("{id}")
  static createJxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
