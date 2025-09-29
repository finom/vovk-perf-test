import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajs")
export default class AjController {
  @operation({
    summary: "Get Ajs",
  })
  @get()
  static getAjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aj",
  })
  @post("{id}")
  static createAj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
