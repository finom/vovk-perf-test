import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjhs")
export default class JjhController {
  @operation({
    summary: "Get Jjhs",
  })
  @get()
  static getJjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjh",
  })
  @post("{id}")
  static createJjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
