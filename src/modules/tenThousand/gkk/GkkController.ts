import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkks")
export default class GkkController {
  @operation({
    summary: "Get Gkks",
  })
  @get()
  static getGkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkk",
  })
  @post("{id}")
  static createGkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
