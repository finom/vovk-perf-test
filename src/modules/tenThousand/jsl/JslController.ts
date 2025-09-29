import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsls")
export default class JslController {
  @operation({
    summary: "Get Jsls",
  })
  @get()
  static getJsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsl",
  })
  @post("{id}")
  static createJsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
