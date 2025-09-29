import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jscs")
export default class JscController {
  @operation({
    summary: "Get Jscs",
  })
  @get()
  static getJscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsc",
  })
  @post("{id}")
  static createJsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
