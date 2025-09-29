import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mks")
export default class MksController {
  @operation({
    summary: "Get Mks",
  })
  @get()
  static getMks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mks",
  })
  @post("{id}")
  static createMks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
