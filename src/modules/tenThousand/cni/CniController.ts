import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnis")
export default class CniController {
  @operation({
    summary: "Get Cnis",
  })
  @get()
  static getCnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cni",
  })
  @post("{id}")
  static createCni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
