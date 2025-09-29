import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcds")
export default class JcdController {
  @operation({
    summary: "Get Jcds",
  })
  @get()
  static getJcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcd",
  })
  @post("{id}")
  static createJcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
