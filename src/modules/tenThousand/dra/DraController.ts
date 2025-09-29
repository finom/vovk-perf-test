import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dras")
export default class DraController {
  @operation({
    summary: "Get Dras",
  })
  @get()
  static getDras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dra",
  })
  @post("{id}")
  static createDra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
