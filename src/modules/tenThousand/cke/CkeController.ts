import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckes")
export default class CkeController {
  @operation({
    summary: "Get Ckes",
  })
  @get()
  static getCkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cke",
  })
  @post("{id}")
  static createCke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
