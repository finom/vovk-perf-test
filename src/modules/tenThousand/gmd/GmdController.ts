import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmds")
export default class GmdController {
  @operation({
    summary: "Get Gmds",
  })
  @get()
  static getGmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmd",
  })
  @post("{id}")
  static createGmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
