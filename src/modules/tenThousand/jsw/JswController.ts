import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsws")
export default class JswController {
  @operation({
    summary: "Get Jsws",
  })
  @get()
  static getJsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsw",
  })
  @post("{id}")
  static createJsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
