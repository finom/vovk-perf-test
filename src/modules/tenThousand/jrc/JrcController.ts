import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrcs")
export default class JrcController {
  @operation({
    summary: "Get Jrcs",
  })
  @get()
  static getJrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrc",
  })
  @post("{id}")
  static createJrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
