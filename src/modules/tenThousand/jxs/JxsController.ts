import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxs")
export default class JxsController {
  @operation({
    summary: "Get Jxs",
  })
  @get()
  static getJxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxs",
  })
  @post("{id}")
  static createJxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
