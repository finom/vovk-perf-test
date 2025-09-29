import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heas")
export default class HeaController {
  @operation({
    summary: "Get Heas",
  })
  @get()
  static getHeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hea",
  })
  @post("{id}")
  static createHea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
