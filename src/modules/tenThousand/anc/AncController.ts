import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ancs")
export default class AncController {
  @operation({
    summary: "Get Ancs",
  })
  @get()
  static getAncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anc",
  })
  @post("{id}")
  static createAnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
