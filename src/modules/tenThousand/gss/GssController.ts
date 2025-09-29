import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsses")
export default class GssController {
  @operation({
    summary: "Get Gsses",
  })
  @get()
  static getGsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gss",
  })
  @post("{id}")
  static createGss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
