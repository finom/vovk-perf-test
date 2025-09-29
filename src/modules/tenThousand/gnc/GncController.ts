import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gncs")
export default class GncController {
  @operation({
    summary: "Get Gncs",
  })
  @get()
  static getGncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnc",
  })
  @post("{id}")
  static createGnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
