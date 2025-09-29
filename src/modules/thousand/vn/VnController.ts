import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vns")
export default class VnController {
  @operation({
    summary: "Get Vns",
  })
  @get()
  static getVns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vn",
  })
  @post("{id}")
  static createVn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
