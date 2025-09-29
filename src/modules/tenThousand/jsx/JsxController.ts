import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsxes")
export default class JsxController {
  @operation({
    summary: "Get Jsxes",
  })
  @get()
  static getJsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsx",
  })
  @post("{id}")
  static createJsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
