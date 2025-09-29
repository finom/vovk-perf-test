import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsms")
export default class JsmController {
  @operation({
    summary: "Get Jsms",
  })
  @get()
  static getJsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsm",
  })
  @post("{id}")
  static createJsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
