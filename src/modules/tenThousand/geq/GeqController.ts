import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geqs")
export default class GeqController {
  @operation({
    summary: "Get Geqs",
  })
  @get()
  static getGeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geq",
  })
  @post("{id}")
  static createGeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
