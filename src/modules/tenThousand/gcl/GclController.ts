import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcls")
export default class GclController {
  @operation({
    summary: "Get Gcls",
  })
  @get()
  static getGcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcl",
  })
  @post("{id}")
  static createGcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
