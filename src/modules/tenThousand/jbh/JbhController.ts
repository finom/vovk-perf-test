import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbhs")
export default class JbhController {
  @operation({
    summary: "Get Jbhs",
  })
  @get()
  static getJbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbh",
  })
  @post("{id}")
  static createJbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
