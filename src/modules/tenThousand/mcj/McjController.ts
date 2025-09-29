import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcjs")
export default class McjController {
  @operation({
    summary: "Get Mcjs",
  })
  @get()
  static getMcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcj",
  })
  @post("{id}")
  static createMcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
