import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhs")
export default class JhsController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhs",
  })
  @post("{id}")
  static createJhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
