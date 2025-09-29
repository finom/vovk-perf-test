import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxws")
export default class JxwController {
  @operation({
    summary: "Get Jxws",
  })
  @get()
  static getJxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxw",
  })
  @post("{id}")
  static createJxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
