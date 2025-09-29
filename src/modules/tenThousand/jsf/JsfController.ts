import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsfs")
export default class JsfController {
  @operation({
    summary: "Get Jsfs",
  })
  @get()
  static getJsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsf",
  })
  @post("{id}")
  static createJsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
