import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbs")
export default class JbsController {
  @operation({
    summary: "Get Jbs",
  })
  @get()
  static getJbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbs",
  })
  @post("{id}")
  static createJbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
