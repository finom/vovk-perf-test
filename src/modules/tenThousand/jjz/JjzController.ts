import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjzs")
export default class JjzController {
  @operation({
    summary: "Get Jjzs",
  })
  @get()
  static getJjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjz",
  })
  @post("{id}")
  static createJjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
