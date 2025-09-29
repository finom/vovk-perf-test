import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uys")
export default class UyController {
  @operation({
    summary: "Get Uys",
  })
  @get()
  static getUys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uy",
  })
  @post("{id}")
  static createUy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
