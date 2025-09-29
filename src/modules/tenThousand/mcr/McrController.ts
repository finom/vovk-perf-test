import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcrs")
export default class McrController {
  @operation({
    summary: "Get Mcrs",
  })
  @get()
  static getMcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcr",
  })
  @post("{id}")
  static createMcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
