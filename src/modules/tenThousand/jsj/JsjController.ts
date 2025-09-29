import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsjs")
export default class JsjController {
  @operation({
    summary: "Get Jsjs",
  })
  @get()
  static getJsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsj",
  })
  @post("{id}")
  static createJsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
