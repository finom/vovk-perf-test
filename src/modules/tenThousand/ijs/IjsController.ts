import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijs")
export default class IjsController {
  @operation({
    summary: "Get Ijs",
  })
  @get()
  static getIjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijs",
  })
  @post("{id}")
  static createIjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
