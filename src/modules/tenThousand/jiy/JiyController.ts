import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jiys")
export default class JiyController {
  @operation({
    summary: "Get Jiys",
  })
  @get()
  static getJiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiy",
  })
  @post("{id}")
  static createJiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
