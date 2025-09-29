import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keas")
export default class KeaController {
  @operation({
    summary: "Get Keas",
  })
  @get()
  static getKeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kea",
  })
  @post("{id}")
  static createKea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
