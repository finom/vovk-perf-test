import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxrs")
export default class JxrController {
  @operation({
    summary: "Get Jxrs",
  })
  @get()
  static getJxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxr",
  })
  @post("{id}")
  static createJxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
