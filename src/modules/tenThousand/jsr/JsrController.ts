import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsrs")
export default class JsrController {
  @operation({
    summary: "Get Jsrs",
  })
  @get()
  static getJsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsr",
  })
  @post("{id}")
  static createJsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
