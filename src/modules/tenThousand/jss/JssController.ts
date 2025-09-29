import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsses")
export default class JssController {
  @operation({
    summary: "Get Jsses",
  })
  @get()
  static getJsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jss",
  })
  @post("{id}")
  static createJss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
