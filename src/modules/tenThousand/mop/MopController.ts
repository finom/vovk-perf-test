import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mops")
export default class MopController {
  @operation({
    summary: "Get Mops",
  })
  @get()
  static getMops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mop",
  })
  @post("{id}")
  static createMop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
