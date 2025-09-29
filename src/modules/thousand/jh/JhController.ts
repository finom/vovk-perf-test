import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhs")
export default class JhController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jh",
  })
  @post("{id}")
  static createJh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
