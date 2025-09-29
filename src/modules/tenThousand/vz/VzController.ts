import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vzs")
export default class VzController {
  @operation({
    summary: "Get Vzs",
  })
  @get()
  static getVzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vz",
  })
  @post("{id}")
  static createVz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
