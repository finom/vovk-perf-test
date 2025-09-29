import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsqs")
export default class JsqController {
  @operation({
    summary: "Get Jsqs",
  })
  @get()
  static getJsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsq",
  })
  @post("{id}")
  static createJsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
