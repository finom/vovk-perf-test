import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exxes")
export default class ExxController {
  @operation({
    summary: "Get Exxes",
  })
  @get()
  static getExxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exx",
  })
  @post("{id}")
  static createExx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
