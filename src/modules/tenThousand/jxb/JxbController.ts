import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxbs")
export default class JxbController {
  @operation({
    summary: "Get Jxbs",
  })
  @get()
  static getJxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxb",
  })
  @post("{id}")
  static createJxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
