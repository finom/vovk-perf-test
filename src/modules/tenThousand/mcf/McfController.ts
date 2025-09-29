import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcfs")
export default class McfController {
  @operation({
    summary: "Get Mcfs",
  })
  @get()
  static getMcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcf",
  })
  @post("{id}")
  static createMcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
