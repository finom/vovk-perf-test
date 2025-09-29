import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsbs")
export default class JsbController {
  @operation({
    summary: "Get Jsbs",
  })
  @get()
  static getJsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsb",
  })
  @post("{id}")
  static createJsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
