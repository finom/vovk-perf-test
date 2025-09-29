import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxhs")
export default class JxhController {
  @operation({
    summary: "Get Jxhs",
  })
  @get()
  static getJxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxh",
  })
  @post("{id}")
  static createJxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
