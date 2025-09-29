import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvws")
export default class GvwController {
  @operation({
    summary: "Get Gvws",
  })
  @get()
  static getGvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvw",
  })
  @post("{id}")
  static createGvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
