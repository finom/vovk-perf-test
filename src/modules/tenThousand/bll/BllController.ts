import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blls")
export default class BllController {
  @operation({
    summary: "Get Blls",
  })
  @get()
  static getBlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bll",
  })
  @post("{id}")
  static createBll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
