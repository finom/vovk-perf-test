import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgas")
export default class DgaController {
  @operation({
    summary: "Get Dgas",
  })
  @get()
  static getDgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dga",
  })
  @post("{id}")
  static createDga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
