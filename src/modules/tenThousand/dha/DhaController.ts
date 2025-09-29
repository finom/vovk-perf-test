import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhas")
export default class DhaController {
  @operation({
    summary: "Get Dhas",
  })
  @get()
  static getDhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dha",
  })
  @post("{id}")
  static createDha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
