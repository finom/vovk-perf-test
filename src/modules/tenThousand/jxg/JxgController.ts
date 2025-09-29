import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxgs")
export default class JxgController {
  @operation({
    summary: "Get Jxgs",
  })
  @get()
  static getJxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxg",
  })
  @post("{id}")
  static createJxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
