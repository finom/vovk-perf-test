import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsies")
export default class JsyController {
  @operation({
    summary: "Get Jsies",
  })
  @get()
  static getJsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsy",
  })
  @post("{id}")
  static createJsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
