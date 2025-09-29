import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goms")
export default class GomController {
  @operation({
    summary: "Get Goms",
  })
  @get()
  static getGoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gom",
  })
  @post("{id}")
  static createGom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
