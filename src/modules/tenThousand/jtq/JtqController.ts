import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtqs")
export default class JtqController {
  @operation({
    summary: "Get Jtqs",
  })
  @get()
  static getJtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtq",
  })
  @post("{id}")
  static createJtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
