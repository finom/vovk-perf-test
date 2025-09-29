import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcns")
export default class McnController {
  @operation({
    summary: "Get Mcns",
  })
  @get()
  static getMcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcn",
  })
  @post("{id}")
  static createMcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
