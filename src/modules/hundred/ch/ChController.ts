import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ches")
export default class ChController {
  @operation({
    summary: "Get Ches",
  })
  @get()
  static getChes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ch",
  })
  @post("{id}")
  static createCh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
